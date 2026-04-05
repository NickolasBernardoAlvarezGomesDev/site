"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ActivityIcon,
  ArrowRightIcon,
  CalendarIcon,
  CloseIcon,
  CpuIcon,
  DatabaseIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  GithubIcon,
  GitBranchIcon,
  LaptopIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  RadioIcon,
  ShieldCheckIcon,
  TerminalIcon,
  WhatsAppIcon,
  WorkflowIcon,
  WrenchIcon
} from "@/components/icons";
import type { GitHubRepo } from "@/lib/github";
import { selectTopRepos } from "@/lib/github";

type LocalAsset = {
  src: string;
  alt: string;
};

type SectionTone = "dark" | "light";

type FeatureItem = {
  title: string;
  problem: string;
  gain: string;
  icon: ReactNode;
  image?: LocalAsset;
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  items: string[];
};

type ProjectCase = {
  title: string;
  area: string;
  context: string;
  role: string;
  impact: string;
  stack: string[];
  tags: string[];
  icon: ReactNode;
};

type SkillGroup = {
  title: string;
  icon: ReactNode;
  skills: string[];
};

type FAQItemType = {
  question: string;
  answer: string;
};

type ContactLink = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: ReactNode;
  valueClassName?: string;
};

const PROFILE = {
  name: "Nickolas Bernardo Alvarez Gomes",
  role: "Automation Engineer | Embedded Systems | Firmware | IoT",
  location: "Rio Grande - RS, Brasil",
  email: "nickolas_gomes1996@outlook.com",
  githubUsername: "NickolasBernardoAlvarezGomesDev",
  githubUrl: "https://github.com/NickolasBernardoAlvarezGomesDev",
  linkedinUrl: "https://www.linkedin.com/in/nickolas-bernardo-alvarez-gomes-2bb114141",
  whatsappUrl: "https://wa.me/5551999213128?text=Ola!%20Gostaria%20de%20falar%20sobre%20o%20portfolio.",
  summary:
    "Portfolio tecnico orientado a firmware, telemetria, aquisicao de dados, IoT e integracao entre hardware e software."
} as const;

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "GitHub", href: "#github" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" }
] as const;

const IMAGES = {
  hero: {
    primary: {
      src: "/images/engineering/hardware-software-bridge.svg",
      alt: "Ilustracao de integracao entre hardware, firmware, dashboards e software."
    },
    secondary: {
      src: "/images/engineering/telemetry-monitoring.svg",
      alt: "Ilustracao de telemetria, sensores, alertas e monitoramento."
    }
  },
  strengths: {
    firmware: {
      src: "/images/engineering/embedded-firmware.svg",
      alt: "Ilustracao de firmware, microcontroladores e integracao com perifericos."
    },
    telemetry: {
      src: "/images/engineering/telemetry-monitoring.svg",
      alt: "Ilustracao de um painel tecnico de telemetria."
    },
    data: {
      src: "/images/proof/operations-dashboard.svg",
      alt: "Ilustracao de um dashboard com metricas operacionais e fluxo de dados."
    }
  },
  projects: {
    telemetry: {
      src: "/images/engineering/telemetry-monitoring.svg",
      alt: "Ilustracao de observabilidade e telemetria aplicada."
    },
    integration: {
      src: "/images/proof/lead-routing.svg",
      alt: "Ilustracao de fluxo tecnico e roteamento de dados entre etapas."
    }
  },
  contact: {
    primary: {
      src: "/images/engineering/hardware-software-bridge.svg",
      alt: "Ilustracao de integracao de sistemas e engenharia aplicada."
    }
  }
} as const;

const HERO_SIGNALS = [
  "Firmware e integracao com microcontroladores",
  "Telemetria, sensores, LoRa e HTTP",
  "Troubleshooting e validacao de dados em operacao"
] as const;

const STRENGTHS: FeatureItem[] = [
  {
    title: "Firmware + integracao hardware-software",
    problem:
      "Desenvolvimento e ajuste de firmware para sensores, microcontroladores e sistemas que exigem comunicacao confiavel entre eletronica e software.",
    gain:
      "Capacidade de conectar placa, protocolo, logica embarcada e camada de software em um fluxo tecnico unico.",
    icon: <CpuIcon className="h-6 w-6" />,
    image: IMAGES.strengths.firmware
  },
  {
    title: "Telemetria, aquisicao e comunicacao",
    problem:
      "Construcao de fluxos para coletar, processar e transmitir dados em tempo real com foco em monitoramento, dataloggers e operacao em campo.",
    gain:
      "Mais observabilidade sobre sinais, equipamentos e ambientes que dependem de dados validos para decisao.",
    icon: <RadioIcon className="h-6 w-6" />,
    image: IMAGES.strengths.telemetry
  },
  {
    title: "Dados, confiabilidade e troubleshooting",
    problem:
      "Tratamento, filtragem e depuracao de medicoes e pipelines que chegam com ruido, inconsistencias ou baixa rastreabilidade.",
    gain:
      "Mais robustez operacional e informacao utilizavel para monitoramento, automacao e analise tecnica.",
    icon: <DatabaseIcon className="h-6 w-6" />,
    image: IMAGES.strengths.data
  }
];

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Engenheiro de Automacao (Pleno)",
    company: "SiMCosta",
    period: "2025 - atual",
    items: [
      "Desenvolvimento de sistemas de aquisicao, processamento e transmissao de dados em tempo real.",
      "Integracao de sensores ambientais, eletroquimicos e inerciais em cenarios de monitoramento.",
      "Desenvolvimento de firmware embarcado com MicroPython, C e CRBasic.",
      "Configuracao de dataloggers, telemetria, pipelines de dados e troubleshooting de sistemas complexos."
    ]
  },
  {
    role: "Estagiario em Engenharia",
    company: "Green Next",
    period: "2024 - 2025",
    items: [
      "Testes e analise de desempenho de baterias com foco em consistencia experimental.",
      "Padronizacao de documentacao tecnica para aumentar rastreabilidade de processo.",
      "Apoio em analise de dados experimentais e melhoria de rotinas operacionais."
    ]
  },
  {
    role: "Pesquisa e Desenvolvimento (P&D)",
    company: "CI3D / FURG",
    period: "2019 - 2025",
    items: [
      "Desenvolvimento de sistemas embarcados e dispositivos automatizados para projetos experimentais.",
      "Integracao entre hardware, software, controle e prototipagem eletromecanica.",
      "Construcao de solucoes com sensores, automacao e validacao tecnica aplicada."
    ]
  }
];

const PROJECT_CASES: ProjectCase[] = [
  {
    title: "Maquina Insersora SMD",
    area: "Automacao aplicada a montagem eletronica",
    context:
      "Projeto academico voltado a automatizar etapas da montagem SMD, reduzindo dependencia de operacao manual e organizando melhor o processo de prototipagem.",
    role:
      "Responsavel por estruturar a logica de automacao, integrar controle, eletronica e firmware e validar o comportamento do sistema como um conjunto unico.",
    impact:
      "Consolidou um case de integracao end-to-end entre mecanica, eletronica e software, reforcando a capacidade de transformar conceito tecnico em sistema funcional.",
    stack: ["Firmware", "Controle", "Eletronica", "Automacao"],
    tags: ["Embedded", "Motion Logic", "Prototype"],
    icon: <WorkflowIcon className="h-6 w-6" />
  },
  {
    title: "Sistemas de Monitoramento IoT",
    area: "Telemetria e aquisicao em tempo real",
    context:
      "Arquiteturas para monitoramento em campo com multiplos sensores, exigindo aquisicao continua, validacao dos sinais e transmissao confiavel.",
    role:
      "Atuacao no desenvolvimento e ajuste dos fluxos de coleta, integracao de sensores, processamento inicial dos dados e troubleshooting operacional.",
    impact:
      "Melhorou a robustez da telemetria e a confianca nas medicoes utilizadas em ambientes reais de operacao e monitoramento.",
    stack: ["IoT", "Telemetria", "Sensores", "Data Pipeline"],
    tags: ["Field Systems", "Reliability", "Real Time"],
    icon: <ActivityIcon className="h-6 w-6" />
  },
  {
    title: "Sistema de Comunicacao LoRa",
    area: "Conectividade entre dispositivos",
    context:
      "Necessidade de comunicacao de longo alcance para dispositivos conectados, com atencao a estabilidade do enlace e a integracao da arquitetura.",
    role:
      "Desenho da comunicacao entre nos, testes de conectividade e definicao de uma base tecnica para integracao com sistemas maiores de IoT.",
    impact:
      "Fortaleceu repertorio em comunicacao embarcada, integracao de dispositivos e decisoes praticas para cenarios com restricao de alcance e infraestrutura.",
    stack: ["LoRa", "IoT", "Comunicacao", "Embedded"],
    tags: ["Wireless", "Device Integration", "Architecture"],
    icon: <RadioIcon className="h-6 w-6" />
  },
  {
    title: "Automacoes e Processamento de Dados",
    area: "Tooling operacional e confiabilidade",
    context:
      "Rotinas operacionais gerando dados brutos com inconsistencias, retrabalho manual e baixa rastreabilidade para analise tecnica.",
    role:
      "Desenvolvimento de scripts para tratamento, filtragem, organizacao e integracao dos dados com foco em produtividade e qualidade operacional.",
    impact:
      "Reduziu esforco manual, melhorou a consistencia da informacao e acelerou o uso pratico dos dados em analise e tomada de decisao.",
    stack: ["Python", "Dados", "Automacao", "Integracao"],
    tags: ["Tooling", "Validation", "Operational Data"],
    icon: <FileCodeIcon className="h-6 w-6" />
  }
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Programacao e Software",
    icon: <TerminalIcon className="h-6 w-6" />,
    skills: ["Python", "C", "C++", "MicroPython", "Automacao", "Scripts", "APIs", "Integracao de sistemas"]
  },
  {
    title: "Sistemas Embarcados e Firmware",
    icon: <CpuIcon className="h-6 w-6" />,
    skills: ["Firmware", "ESP32", "STM32", "Atmega", "Sistemas em tempo real", "Integracao hardware-software", "Debugging", "Testes e validacao"]
  },
  {
    title: "IoT, Telemetria e Dados",
    icon: <DatabaseIcon className="h-6 w-6" />,
    skills: ["IoT", "Telemetria", "Dataloggers", "LoRa", "HTTP", "Pipelines de dados", "Validacao de dados", "Aquisicao em tempo real"]
  },
  {
    title: "Ferramentas e Ambiente",
    icon: <WrenchIcon className="h-6 w-6" />,
    skills: ["Git", "Linux", "CI/CD conceitual", "Prototipagem", "Troubleshooting"]
  }
];

const FAQ_ITEMS: FAQItemType[] = [
  {
    question: "Que tipo de oportunidade combina melhor com o perfil?",
    answer:
      "Vagas e projetos de embedded systems, firmware, IoT, telemetria, aquisicao de dados, automacao e integracao hardware-software."
  },
  {
    question: "O trabalho fica mais perto de hardware ou software?",
    answer:
      "O ponto forte esta na ponte entre os dois lados: firmware, sensores, microcontroladores, protocolos, dados e troubleshooting em ambiente real."
  },
  {
    question: "Ha experiencia pratica fora de laboratorio?",
    answer:
      "Sim. O portfolio destaca atuacao em monitoramento, telemetria, aquisicao em tempo real e sistemas que precisam operar com confiabilidade em campo."
  },
  {
    question: "Quais stacks aparecem com mais frequencia?",
    answer:
      "Python, C, C++, MicroPython, CRBasic, ESP32, STM32, LoRa, HTTP, dataloggers, integracao de sensores e pipelines de dados."
  },
  {
    question: "O Nickolas esta aberto a contato para vagas e projetos?",
    answer:
      "Sim. O site foi reorganizado para facilitar contato rapido por WhatsApp, email, LinkedIn e GitHub."
  }
];

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "WhatsApp",
    value: "55 51 99921-3128",
    href: PROFILE.whatsappUrl,
    external: true,
    icon: <WhatsAppIcon className="h-5 w-5" />
  },
  {
    label: "E-mail",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: <MailIcon className="h-5 w-5" />,
    valueClassName: "break-all"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nickolas-bernardo-alvarez-gomes-2bb114141",
    href: PROFILE.linkedinUrl,
    external: true,
    icon: <LinkedInIcon className="h-5 w-5" />,
    valueClassName: "break-all"
  },
  {
    label: "GitHub",
    value: PROFILE.githubUsername,
    href: PROFILE.githubUrl,
    external: true,
    icon: <GithubIcon className="h-5 w-5" />,
    valueClassName: "break-all"
  },
  {
    label: "Localizacao",
    value: PROFILE.location,
    icon: <MapPinIcon className="h-5 w-5" />
  }
];

const FOOTER_GROUPS = [
  {
    title: "Navegacao",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Projetos", href: "#projetos" },
      { label: "GitHub", href: "#github" }
    ]
  },
  {
    title: "Especialidades",
    links: [
      { label: "Firmware", href: "#habilidades" },
      { label: "Telemetria", href: "#habilidades" },
      { label: "Aquisicao de dados", href: "#habilidades" },
      { label: "Integracao hardware-software", href: "#sobre" }
    ]
  },
  {
    title: "Canais",
    links: [
      { label: "WhatsApp", href: PROFILE.whatsappUrl },
      { label: "LinkedIn", href: PROFILE.linkedinUrl },
      { label: "GitHub", href: PROFILE.githubUrl },
      { label: "E-mail", href: `mailto:${PROFILE.email}` }
    ]
  }
] as const;

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

function badgeClass(variant: "brand" | "inverse" | "outline" = "brand") {
  const variants = {
    brand: "bg-brand/14 text-brand-dark",
    inverse: "border border-white/12 bg-white/8 text-white",
    outline: "border border-ink/12 bg-transparent text-slate"
  } as const;

  return `inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${variants[variant]}`;
}

function buttonClass(variant: "primary" | "secondary" | "light" | "lightOutline" = "primary", fullWidth = false) {
  const variants = {
    primary: "bg-brand text-night shadow-soft hover:bg-brand-dark",
    secondary: "border border-ink/10 bg-sand text-ink hover:border-accent/30 hover:bg-mist",
    light: "bg-ink text-night shadow-soft hover:bg-white",
    lightOutline: "border border-ink/12 bg-white/5 text-ink hover:bg-white/10"
  } as const;

  return [
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
    variants[variant],
    fullWidth ? "w-full" : ""
  ]
    .filter(Boolean)
    .join(" ");
}

function cardClass(theme: SectionTone = "light") {
  return theme === "light"
    ? "rounded-[2rem] border border-ink/10 bg-sand shadow-soft"
    : "rounded-[2rem] border border-ink/10 bg-mist shadow-panel";
}

function Badge({
  children,
  variant = "brand"
}: {
  children: ReactNode;
  variant?: "brand" | "inverse" | "outline";
}) {
  return <span className={badgeClass(variant)}>{children}</span>;
}

function CTAButton({
  href,
  children,
  variant = "primary",
  iconLeft,
  iconRight,
  fullWidth = false
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "lightOutline";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}) {
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={buttonClass(variant, fullWidth)}
    >
      {iconLeft ? <span className="inline-flex shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="inline-flex shrink-0">{iconRight}</span> : null}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  tone = "dark",
  className = ""
}: {
  eyebrow: string;
  title: string;
  description: string;
  tone?: SectionTone;
  className?: string;
}) {
  const light = tone === "light";

  return (
    <div className={`max-w-3xl ${className}`}>
      <Badge variant={light ? "inverse" : "brand"}>{eyebrow}</Badge>
      <h2 className={`mt-6 font-display text-3xl leading-tight text-balance sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 ${light ? "text-white/74" : "text-slate"}`}>{description}</p>
    </div>
  );
}

function FeatureCard({ title, problem, gain, icon, image }: FeatureItem) {
  return (
    <article className={cardClass()}>
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2rem]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover" />
        </div>
      ) : null}

      <div className="p-6">
        <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-ink/10 bg-mist text-ink">
          {icon}
        </div>
        <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate">{problem}</p>
        <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-night/55 p-4 text-sm leading-7 text-slate">
          <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">Ganho tecnico</span>
          <p className="mt-2 text-ink">{gain}</p>
        </div>
      </div>
    </article>
  );
}

function ProjectCaseCard({ project }: { project: ProjectCase }) {
  return (
    <article className={cardClass("dark")}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{project.area}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{project.title}</h3>
          </div>
          <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-night/55 text-ink">
            {project.icon}
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-[1.5rem] border border-ink/10 bg-night/45 p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">Contexto</span>
            <p className="mt-2 text-sm leading-7 text-slate">{project.context}</p>
          </div>
          <div className="rounded-[1.5rem] border border-ink/10 bg-night/45 p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">Papel do Nickolas</span>
            <p className="mt-2 text-sm leading-7 text-slate">{project.role}</p>
          </div>
          <div className="rounded-[1.5rem] border border-brand/20 bg-brand/10 p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">Impacto</span>
            <p className="mt-2 text-sm leading-7 text-ink">{project.impact}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-sm text-ink">
              {item}
            </span>
          ))}
          {project.tags.map((item) => (
            <span key={item} className="rounded-full border border-white/12 px-3 py-1 text-sm text-white/74">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const updated = new Date(repo.updated_at).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  const repoTags = Array.from(new Set([repo.language, ...(repo.topics ?? [])].filter(Boolean) as string[])).slice(0, 4);

  return (
    <article className={`${cardClass()} flex h-full flex-col`}>
      <div className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Curadoria GitHub</p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{repo.name}</h3>
          </div>
          <GitBranchIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
        </div>

        <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate">
          {repo.description || "Repositorio tecnico selecionado por reforcar aderencia a automacao, embedded, integracao, firmware ou dados."}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {repoTags.map((tag) => (
            <span key={tag} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-slate">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate">
          <span className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-ink">Star {repo.stargazers_count}</span>
          <span className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-ink">Forks {repo.forks_count}</span>
          <span>Atualizado em {updated}</span>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent hover:text-sky"
        >
          Abrir repositorio <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function ContactCard({ item }: { item: ContactLink }) {
  const content = (
    <>
      <div className="flex min-w-0 items-start gap-3">
        <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-white">
          {item.icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-5 text-white/58">{item.label}</p>
          <p className={`mt-1 text-sm font-medium leading-6 text-white sm:text-base ${item.valueClassName ?? "break-words"}`}>{item.value}</p>
        </div>
      </div>
      {item.href ? <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-white/40" /> : null}
    </>
  );

  if (!item.href) {
    return <div className="flex items-start justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-night/25 p-4">{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className="flex items-start justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-night/25 p-4 hover:border-white/20 hover:bg-night/40"
    >
      {content}
    </a>
  );
}

function FAQCard({ item, defaultOpen = false }: { item: FAQItemType; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className={cardClass()}>
      <summary className="group flex cursor-pointer list-none items-start justify-between gap-4 p-6">
        <h3 className="font-display text-2xl leading-tight text-ink">{item.question}</h3>
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-mist">
          <ArrowRightIcon className="h-4 w-4 transition-transform group-open:rotate-90" />
        </span>
      </summary>
      <p className="px-6 pb-6 text-sm leading-7 text-slate">{item.answer}</p>
    </details>
  );
}

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        setLoadingRepos(true);
        setRepoError(null);

        const response = await fetch(`https://api.github.com/users/${PROFILE.githubUsername}/repos?per_page=100&sort=updated`, {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28"
          }
        });

        if (!response.ok) {
          throw new Error("Nao foi possivel carregar os repositorios publicos do GitHub.");
        }

        const data: GitHubRepo[] = await response.json();

        if (!cancelled) {
          setRepos(selectTopRepos(data, 4));
        }
      } catch (error) {
        if (!cancelled) {
          setRepoError(error instanceof Error ? error.message : "Erro ao carregar GitHub.");
        }
      } finally {
        if (!cancelled) {
          setLoadingRepos(false);
        }
      }
    }

    loadRepos();

    return () => {
      cancelled = true;
    };
  }, []);

  const totalSkills = useMemo(() => SKILL_GROUPS.reduce((acc, group) => acc + group.skills.length, 0), []);
  const proofPoints = [
    { value: "3+", label: "frentes de experiencia entre automacao, P&D e monitoramento" },
    { value: `${PROJECT_CASES.length}`, label: "cases organizados por contexto, papel e impacto" },
    { value: `${totalSkills}+`, label: "habilidades cobrindo firmware, dados, integracao e tooling" }
  ];

  return (
    <div className="min-h-screen bg-night text-ink">
      <header className="sticky top-0 z-[90] border-b border-ink/10 bg-night/88 text-white backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a href="#topo" className="min-w-0 shrink-0">
            <span className="block font-display text-lg font-semibold tracking-tight sm:text-xl">{PROFILE.name}</span>
            <span className="block text-xs text-white/62">{PROFILE.role}</span>
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/72 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <CTAButton href={PROFILE.githubUrl} variant="lightOutline" iconLeft={<GithubIcon className="h-4 w-4" />}>
              Ver GitHub
            </CTAButton>
            <CTAButton href={PROFILE.whatsappUrl} iconLeft={<WhatsAppIcon className="h-4 w-4" />}>
              Falar no WhatsApp
            </CTAButton>
          </div>

          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar navegacao" : "Abrir navegacao"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-white/5 lg:hidden"
          >
            {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div id="mobile-navigation" className="border-t border-ink/10 bg-night/95 lg:hidden">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 lg:px-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-white/78 hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 grid gap-3">
                <CTAButton href={PROFILE.whatsappUrl} fullWidth iconLeft={<WhatsAppIcon className="h-4 w-4" />}>
                  Falar no WhatsApp
                </CTAButton>
                <CTAButton href={PROFILE.githubUrl} variant="lightOutline" fullWidth iconLeft={<GithubIcon className="h-4 w-4" />}>
                  Ver GitHub
                </CTAButton>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main id="main-content">
        <section id="topo" className="anchor-offset bg-hero-shell pb-16 pt-14 text-white lg:pb-24 lg:pt-20">
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="inverse">Portfolio tecnico para vagas e projetos</Badge>
              <h1 className="mt-6 font-display text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
                Engenharia aplicada para firmware, sistemas embarcados, telemetria e aquisicao de dados.
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/78 text-pretty">
                Nickolas atua na ponte entre hardware, software e operacao em campo, construindo sistemas que capturam,
                validam e entregam dados confiaveis para monitoramento, automacao e tomada de decisao tecnica.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                O foco do portfolio e mostrar aderencia a oportunidades em embedded systems, firmware, IoT, telemetria,
                integracao de sistemas e troubleshooting tecnico orientado a dados.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTAButton href={PROFILE.whatsappUrl} iconLeft={<WhatsAppIcon className="h-4 w-4" />}>
                  Falar no WhatsApp
                </CTAButton>
                <CTAButton href={PROFILE.githubUrl} variant="lightOutline" iconLeft={<GithubIcon className="h-4 w-4" />}>
                  Ver GitHub
                </CTAButton>
                <CTAButton href={PROFILE.linkedinUrl} variant="light" iconRight={<ArrowRightIcon className="h-4 w-4" />}>
                  Ver LinkedIn
                </CTAButton>
              </div>

              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                {HERO_SIGNALS.map((item) => (
                  <li key={item} className="rounded-[1.75rem] border border-white/10 bg-white/7 p-4 text-sm leading-6 text-white/80">
                    <span className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-white/10">
                      <ShieldCheckIcon className="h-5 w-5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {proofPoints.map((item) => (
                  <article key={item.value} className="rounded-[1.75rem] border border-white/10 bg-night/25 p-5">
                    <p className="font-display text-3xl text-brand">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-panel">
                <div className="relative aspect-[16/13]">
                  <Image
                    src={IMAGES.hero.primary.src}
                    alt={IMAGES.hero.primary.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-ink/10 bg-night/85 p-5 text-ink shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate">Resumo de perfil</p>
                  <h2 className="mt-3 font-display text-2xl leading-tight">Perfil tecnico forte para firmware, sensores, telemetria e dados.</h2>
                  <p className="mt-3 text-sm leading-7 text-slate">
                    Do sensor ao dashboard, com experiencia em firmware, dataloggers, LoRa, HTTP, validacao de dados e operacao em campo.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-[0.88fr_1.12fr]">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={IMAGES.hero.secondary.src}
                      alt={IMAGES.hero.secondary.alt}
                      fill
                      sizes="(min-width: 640px) 24vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mesh-surface rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">Aderencia tecnica</p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-white/76">
                    <li className="border-b border-white/8 pb-4">Integracao de sensores, firmware e software em sistemas reais.</li>
                    <li className="border-b border-white/8 pb-4">Telemetria, coleta, processamento e transmissao de dados em tempo real.</li>
                    <li>Troubleshooting operacional para aumentar confiabilidade e visibilidade tecnica.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="anchor-offset section-shell py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Sobre"
              title="Posicionamento tecnico orientado a sistemas reais, nao apenas stack."
              description="A base visual vem do projeto service, mas aqui o conteudo foi reorganizado como portfolio: pontos fortes, experiencia, cases, GitHub e canais de contato do Nickolas."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {STRENGTHS.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="anchor-offset bg-sand/65 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Experiencia"
              title="Atuacao pratica em monitoramento, automacao, P&D e operacao tecnica."
              description="As experiencias abaixo reforcam capacidade de trabalhar com sensores, firmware, dados experimentais, telemetria e troubleshooting em ambientes tecnicos."
            />

            <div className="relative mt-12 mx-auto max-w-5xl">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand/80 via-ink/10 to-transparent md:block" />
              <div className="space-y-8">
                {EXPERIENCES.map((job) => (
                  <div key={`${job.company}-${job.role}`} className="relative md:pl-14">
                    <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-brand/30 bg-night text-brand md:flex">
                      <CalendarIcon className="h-4 w-4" />
                    </div>
                    <article className={cardClass()}>
                      <div className="p-6">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="font-display text-2xl text-ink">{job.role}</h3>
                            <p className="mt-1 text-accent">{job.company}</p>
                          </div>
                          <span className="w-fit rounded-full border border-ink/10 bg-mist px-3 py-1 text-sm text-ink">{job.period}</span>
                        </div>

                        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate sm:text-base">
                          {job.items.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="anchor-offset section-shell bg-night py-20 text-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionTitle
                  eyebrow="Projetos"
                  title="Cases tecnicos escritos para facilitar leitura de recrutadores e lideres tecnicos."
                  description="Cada projeto foi estruturado em contexto, papel do Nickolas, impacto e stack. Isso aproxima a navegacao do portfolio da clareza que o projeto service ja tinha em sua arquitetura visual."
                  tone="light"
                />

                <div className="mt-8 flex flex-wrap gap-3">
                  <Badge variant="inverse">Embedded</Badge>
                  <Badge variant="inverse">Firmware</Badge>
                  <Badge variant="inverse">IoT</Badge>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <article className="overflow-hidden rounded-[2rem] border border-ink/10 bg-mist shadow-panel">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={IMAGES.projects.telemetry.src}
                      alt={IMAGES.projects.telemetry.alt}
                      fill
                      sizes="(min-width: 640px) 24vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-ink">Telemetria e observabilidade</h3>
                    <p className="mt-2 text-sm leading-7 text-slate">
                      Monitoramento, aquisicao e confiabilidade aparecem aqui como capacidade tecnica aplicada a sistemas de campo.
                    </p>
                  </div>
                </article>

                <article className="overflow-hidden rounded-[2rem] border border-ink/10 bg-mist shadow-panel">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={IMAGES.projects.integration.src}
                      alt={IMAGES.projects.integration.alt}
                      fill
                      sizes="(min-width: 640px) 24vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-ink">Integracao entre camadas</h3>
                    <p className="mt-2 text-sm leading-7 text-slate">
                      Hardware, firmware, dados e software aparecem como um desenho unico quando a demanda pede profundidade tecnica.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              {PROJECT_CASES.map((project) => (
                <ProjectCaseCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="github" className="anchor-offset bg-mist/45 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle
                eyebrow="GitHub"
                title="Repositorios publicos curados por aderencia tecnica, nao apenas atividade recente."
                description="A selecao prioriza sinais fortes de embedded, automacao, IoT, tooling, firmware e integracao."
              />
              <CTAButton href={PROFILE.githubUrl} variant="secondary" iconRight={<ExternalLinkIcon className="h-4 w-4" />}>
                Ver perfil completo
              </CTAButton>
            </div>

            {loadingRepos ? (
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-80 animate-pulse rounded-[2rem] border border-ink/10 bg-sand" />
                ))}
              </div>
            ) : repoError ? (
              <div className="mt-12 rounded-[2rem] border border-amber-500/20 bg-amber-500/10 p-6 text-sm leading-7 text-amber-50">
                {repoError} O restante do portfolio continua funcional. Se necessario, tente novamente para recarregar a curadoria do GitHub.
              </div>
            ) : (
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="habilidades" className="anchor-offset py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Habilidades"
              title="Base tecnica construida para firmware, integracao, dados e operacao."
              description="A organizacao por dominio mantem a amplitude do perfil sem perder foco em embedded systems, telemetria e software aplicado."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <article key={group.title} className={cardClass()}>
                  <div className="p-6">
                    <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-ink/10 bg-mist text-ink">
                      {group.icon}
                    </div>
                    <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-sm text-ink">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="anchor-offset bg-sand/65 py-20">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="FAQ"
              title="Perguntas que ajudam a entender rapidamente o posicionamento do portfolio."
              description="Esta secao funciona como resposta curta para recrutadores, lideres tecnicos e pessoas avaliando aderencia de perfil."
            />

            <div className="mt-12 space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <FAQCard key={item.question} item={item} defaultOpen={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-night py-20 text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <SectionTitle
                eyebrow="Contato"
                title="Canal rapido para vagas, projetos e conversas tecnicas."
                description="WhatsApp, email, LinkedIn e GitHub ficam centralizados aqui para reduzir friccao de contato e manter o portfolio com uma saida objetiva."
                tone="light"
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTAButton href={PROFILE.whatsappUrl} iconLeft={<WhatsAppIcon className="h-4 w-4" />}>
                  Falar no WhatsApp
                </CTAButton>
                <CTAButton href={`mailto:${PROFILE.email}`} variant="lightOutline" iconLeft={<MailIcon className="h-4 w-4" />}>
                  Enviar e-mail
                </CTAButton>
                <CTAButton href={PROFILE.linkedinUrl} variant="light" iconRight={<ArrowRightIcon className="h-4 w-4" />}>
                  Abrir LinkedIn
                </CTAButton>
              </div>

              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/6 p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <LaptopIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/58">Disponibilidade</p>
                    <p className="mt-3 text-base leading-7 text-white/78">
                      Aberto a oportunidades e projetos em embedded systems, firmware, IoT, telemetria, aquisicao de dados e integracao de sistemas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-mist shadow-panel">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={IMAGES.contact.primary.src}
                    alt={IMAGES.contact.primary.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={`${cardClass("dark")} p-6`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {CONTACT_LINKS.slice(0, 4).map((item) => (
                    <ContactCard key={item.label} item={item} />
                  ))}
                  <div className="sm:col-span-2">
                    <ContactCard item={CONTACT_LINKS[4]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-night text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1.9fr] lg:px-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/52">{PROFILE.name}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-balance">Portfolio tecnico para firmware, telemetria, IoT e integracao entre hardware e software.</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">{PROFILE.summary}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-lg text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/68">
                  {group.links.map((link) => {
                    const external = isExternalHref(link.href);

                    return (
                      <li key={link.label}>
                        <a href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
