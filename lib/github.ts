export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  archived?: boolean;
  fork?: boolean;
  homepage?: string | null;
};

export type RepoNarrative = {
  whatItIs: string;
  demonstrates: string;
  matters: string;
  tags: string[];
};

const PRIORITY_KEYWORDS = [
  "embedded",
  "firmware",
  "iot",
  "telemetry",
  "telemetria",
  "automation",
  "automacao",
  "sensor",
  "sensors",
  "monitoring",
  "monitoramento",
  "data acquisition",
  "datalogger",
  "lora",
  "esp32",
  "stm32",
  "atmega",
  "micropython",
  "python",
  "c++",
  "integration",
  "integracao",
  "hardware",
  "tooling",
  "pipeline",
  "linux",
];

const DEPRIORITIZED_PATTERNS = [
  /\.github/,
  /hello-world/,
  /template/,
  /boilerplate/,
  /(^|[\s_-])(test|teste|exercise|exercicio|curso|aula|example|sample)([\s_-]|$)/,
];

const LANGUAGE_SCORES: Record<string, number> = {
  c: 4,
  "c++": 4,
  python: 4,
  micropython: 4,
  typescript: 2,
  javascript: 2,
  shell: 2,
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function combinedRepoText(repo: GitHubRepo) {
  return normalizeText([repo.name, repo.description ?? "", ...(repo.topics ?? [])].join(" "));
}

function formatList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  if (items.length === 2) {
    return `${items[0]} e ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}

function humanizeToken(value: string) {
  return value.replace(/[-_]/g, " ");
}

function inferRepoFocus(repo: GitHubRepo) {
  const haystack = combinedRepoText(repo);

  if (/(firmware|embedded|esp32|stm32|atmega|micropython)/.test(haystack)) {
    return {
      label: "firmware e sistemas embarcados",
      matters: "Importa por reforcar proximidade com hardware, perifericos e comportamento embarcado em codigo publico."
    };
  }

  if (/(telemetry|telemetria|monitoring|monitoramento|datalogger|sensor|lora)/.test(haystack)) {
    return {
      label: "telemetria e aquisicao de dados",
      matters: "Importa por evidenciar coleta, observabilidade e organizacao do fluxo de dados em contexto tecnico."
    };
  }

  if (/(automation|automacao|workflow|webhook|integration|integracao|api)/.test(haystack)) {
    return {
      label: "automacao e integracao de sistemas",
      matters: "Importa por mostrar orquestracao tecnica, integracao entre camadas e preocupacao com fluxo operacional."
    };
  }

  if (/(data|pipeline|analysis|analytics)/.test(haystack)) {
    return {
      label: "dados aplicados e tooling tecnico",
      matters: "Importa por reforcar tratamento, validacao e uso tecnico de dados em rotinas reais."
    };
  }

  return {
    label: "desenvolvimento tecnico aplicado",
    matters: "Importa por oferecer codigo publico que ajuda a ler estrutura, criterio tecnico e consistencia de implementacao."
  };
}

function keywordScore(repo: GitHubRepo) {
  const haystack = combinedRepoText(repo);

  return PRIORITY_KEYWORDS.reduce((score, keyword) => {
    return haystack.includes(keyword) ? score + (keyword.length > 8 ? 3 : 2) : score;
  }, 0);
}

function metadataScore(repo: GitHubRepo) {
  const descriptionScore = repo.description ? 5 : 0;
  const topicsScore = Math.min(repo.topics?.length ?? 0, 4);
  const homepageScore = repo.homepage ? 1 : 0;
  const languageScore = repo.language ? LANGUAGE_SCORES[normalizeText(repo.language)] ?? 0 : 0;

  return descriptionScore + topicsScore + homepageScore + languageScore;
}

function freshnessScore(updatedAt: string) {
  const updatedTime = new Date(updatedAt).getTime();
  if (Number.isNaN(updatedTime)) {
    return 0;
  }

  const daysSinceUpdate = Math.floor((Date.now() - updatedTime) / (1000 * 60 * 60 * 24));

  if (daysSinceUpdate <= 120) {
    return 3;
  }

  if (daysSinceUpdate <= 365) {
    return 2;
  }

  if (daysSinceUpdate <= 730) {
    return 1;
  }

  return 0;
}

function isDeprioritizedRepo(repo: GitHubRepo) {
  const haystack = combinedRepoText(repo);
  return DEPRIORITIZED_PATTERNS.some((pattern) => pattern.test(haystack));
}

function hasStrongTechnicalSignal(repo: GitHubRepo) {
  return keywordScore(repo) >= 4 || Boolean(repo.description && (repo.topics?.length ?? 0) > 0);
}

export function scoreRepo(repo: GitHubRepo) {
  const keywordSignal = keywordScore(repo);
  const metadataSignal = metadataScore(repo);
  const collaborationSignal = Math.min(repo.stargazers_count, 8) + Math.min(repo.forks_count, 5);
  const freshnessSignal = freshnessScore(repo.updated_at);
  const weakPenalty = isDeprioritizedRepo(repo) ? 5 : 0;

  return keywordSignal + metadataSignal + collaborationSignal + freshnessSignal - weakPenalty;
}

export function selectTopRepos(repos: GitHubRepo[], limit = 4) {
  const eligibleRepos = repos.filter((repo) => !repo.fork && !repo.archived && !repo.name.toLowerCase().includes(".github"));

  const rankedRelevantRepos = eligibleRepos
    .filter(hasStrongTechnicalSignal)
    .map((repo) => ({ repo, score: scoreRepo(repo) }))
    .filter(({ score }) => score >= 8)
    .sort((a, b) => b.score - a.score || Date.parse(b.repo.updated_at) - Date.parse(a.repo.updated_at))
    .map(({ repo }) => repo);

  if (rankedRelevantRepos.length >= limit) {
    return rankedRelevantRepos.slice(0, limit);
  }

  const fallbackRepos = eligibleRepos
    .map((repo) => ({ repo, score: scoreRepo(repo) }))
    .sort((a, b) => b.score - a.score || Date.parse(b.repo.updated_at) - Date.parse(a.repo.updated_at))
    .map(({ repo }) => repo);

  return fallbackRepos.slice(0, limit);
}

export function describeRepo(repo: GitHubRepo): RepoNarrative {
  const focus = inferRepoFocus(repo);
  const tags = Array.from(new Set([repo.language, ...(repo.topics ?? [])].filter(Boolean) as string[]))
    .map(humanizeToken)
    .slice(0, 4);
  const topicSignals = tags.filter((tag) => tag.toLowerCase() !== (repo.language ?? "").toLowerCase()).slice(0, 3);
  const implementationSignal = repo.language ? `implementacao em ${repo.language}` : "implementacao publica";
  const topicSignal = topicSignals.length > 0 ? `sinais de ${formatList(topicSignals)}` : `foco em ${focus.label}`;

  return {
    whatItIs:
      repo.description?.trim() || `Projeto orientado a ${focus.label}, publicado como parte do acervo tecnico do portfólio.`,
    demonstrates: `Demonstra ${implementationSignal} e ${topicSignal}.`,
    matters: focus.matters,
    tags
  };
}
