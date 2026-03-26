"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIcon,
  ArrowRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  CpuIcon,
  DatabaseIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  GithubIcon,
  GitBranchIcon,
  LaptopIcon,
  MailIcon,
  MapPinIcon,
  RadioIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalIcon,
  WorkflowIcon,
  WrenchIcon,
} from "@/components/icons";
import type { GitHubRepo } from "@/lib/github";
import { selectTopRepos } from "@/lib/github";

const GITHUB_USERNAME = "NickolasBernardoAlvarezGomesDev";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;
const EMAIL = "nickolas_gomes1996@outlook.com";
const LOCATION = "Remoto | Brasil";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

const highlights = [
  {
    title: "Sistemas embarcados",
    description:
      "Desenvolvimento de firmware, integração hardware-software e atuação com microcontroladores ESP32, STM32 e Atmega.",
    icon: CpuIcon,
  },
  {
    title: "IoT e telemetria",
    description:
      "Soluções orientadas a dados com sensores, dataloggers, comunicação LoRa, HTTP e aquisição em tempo real.",
    icon: RadioIcon,
  },
  {
    title: "Dados e confiabilidade",
    description:
      "Pipelines, validação, filtragem e melhoria da qualidade de dados para sistemas reais de monitoramento.",
    icon: DatabaseIcon,
  },
];

const experience = [
  {
    role: "Engenheiro de Automação (Pleno)",
    company: "SiMCosta",
    period: "2025",
    items: [
      "Desenvolvimento de sistemas de aquisição, processamento e transmissão de dados em tempo real.",
      "Integração de sensores ambientais, eletroquímicos e inerciais.",
      "Desenvolvimento de firmware embarcado com MicroPython, C e CRBasic.",
      "Configuração de dataloggers, telemetria, pipelines de dados e troubleshooting de sistemas complexos.",
    ],
  },
  {
    role: "Estagiário em Engenharia",
    company: "Green Next",
    period: "2024 – 2025",
    items: [
      "Testes e análise de desempenho de baterias.",
      "Padronização de documentação técnica.",
      "Apoio em análise de dados experimentais e melhoria de processos operacionais.",
    ],
  },
  {
    role: "Pesquisa e Desenvolvimento (P&D)",
    company: "CI3D / FURG",
    period: "2019 – 2025",
    items: [
      "Desenvolvimento de sistemas embarcados e dispositivos automatizados.",
      "Integração de hardware e software em projetos experimentais.",
      "Prototipagem eletromecânica e soluções com sensores e controle.",
    ],
  },
];

const featuredProjects = [
  {
    title: "Máquina Insersora SMD",
    subtitle: "TCC | Automação aplicada à montagem eletrônica",
    description:
      "Projeto de sistema automatizado para montagem eletrônica, combinando controle, firmware e integração entre hardware e software.",
    stack: ["Firmware", "Controle", "Eletrônica", "Automação"],
    icon: WorkflowIcon,
  },
  {
    title: "Sistemas de Monitoramento IoT",
    subtitle: "SiMCosta | Coleta e processamento em tempo real",
    description:
      "Arquiteturas para aquisição de dados, integração de sensores, validação de dados e confiabilidade em ambientes reais de campo.",
    stack: ["IoT", "Telemetria", "Sensores", "Data Pipeline"],
    icon: ActivityIcon,
  },
  {
    title: "Sistema de Comunicação LoRa",
    subtitle: "Comunicação entre dispositivos conectados",
    description:
      "Projeto voltado para comunicação de longo alcance entre dispositivos, com foco em arquitetura, conectividade e integração de sistemas.",
    stack: ["LoRa", "IoT", "Comunicação", "Embedded"],
    icon: RadioIcon,
  },
  {
    title: "Automações e Processamento de Dados",
    subtitle: "Python | Scripts e integração",
    description:
      "Rotinas para tratamento, filtragem, organização e análise de dados, com foco em produtividade e confiabilidade operacional.",
    stack: ["Python", "Dados", "Automação", "Integração"],
    icon: FileCodeIcon,
  },
];

const skillGroups = [
  {
    title: "Programação & Software",
    icon: TerminalIcon,
    skills: ["Python", "C", "C++", "MicroPython", "Automação", "Scripts", "APIs", "Integração de sistemas"],
  },
  {
    title: "Sistemas Embarcados & Firmware",
    icon: CpuIcon,
    skills: [
      "Firmware",
      "ESP32",
      "STM32",
      "Atmega",
      "Sistemas em tempo real",
      "Integração hardware-software",
      "Debugging",
      "Testes e validação",
    ],
  },
  {
    title: "IoT, Telemetria & Dados",
    icon: DatabaseIcon,
    skills: [
      "IoT",
      "Telemetria",
      "Dataloggers",
      "LoRa",
      "HTTP",
      "Pipelines de dados",
      "Validação de dados",
      "Aquisição em tempo real",
    ],
  },
  {
    title: "Ferramentas & Ambiente",
    icon: WrenchIcon,
    skills: ["Git", "Linux", "CI/CD (conceitual)", "Prototipagem", "Troubleshooting"],
  },
];

function cardClass() {
  return "rounded-3xl border border-white/10 bg-white/5 backdrop-blur";
}

function badgeClass() {
  return "rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200";
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

function AvatarBlock() {
  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/25 via-slate-900 to-blue-900 shadow-2xl shadow-cyan-500/10 sm:h-64 sm:w-64">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_35%)]" />
      <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur">
        <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-5xl font-black tracking-tight text-transparent">NG</span>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 backdrop-blur">
        <ShieldCheckIcon className="h-3.5 w-3.5 text-cyan-300" />
        End-to-end engineer
      </div>
    </div>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const updated = new Date(repo.updated_at).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <article className={`${cardClass()} flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/40`}>
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold leading-6 text-white">{repo.name}</h4>
        <GitBranchIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
      </div>

      <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-300">
        {repo.description || "Repositório público de Nickolas para experimentos, estudos ou demonstrações técnicas."}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {repo.language && <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-200">{repo.language}</span>}
        <span className={badgeClass()}>★ {repo.stargazers_count}</span>
        <span className={badgeClass()}>Forks {repo.forks_count}</span>
      </div>

      {repo.topics && repo.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {repo.topics.slice(0, 4).map((topic) => (
            <span key={topic} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-slate-400">
        <span>Atualizado em {updated}</span>
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cyan-300 transition hover:text-cyan-200">
          Ver repositório <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        setLoadingRepos(true);
        setRepoError(null);

        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
          headers: { Accept: "application/vnd.github+json" },
        });

        if (!response.ok) {
          throw new Error("Não foi possível carregar os repositórios públicos do GitHub.");
        }

        const data: GitHubRepo[] = await response.json();
        if (!cancelled) {
          setRepos(selectTopRepos(data, 6));
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

  const totalSkills = useMemo(() => skillGroups.reduce((acc, group) => acc + group.skills.length, 0), []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.14),transparent_20%),radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.14),transparent_22%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="text-lg font-black tracking-tight text-white">
            <span className="text-cyan-300">&lt;</span> Nickolas <span className="text-cyan-300">/&gt;</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
            Falar comigo
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200">
              <SparklesIcon className="h-4 w-4" />
              Engenheiro de Automação · Sistemas Embarcados · IoT · Firmware
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Olá, eu sou o <span className="text-cyan-300">Nickolas</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Engenheiro de Automação com experiência prática em <strong className="text-white">firmware</strong>, <strong className="text-white"> sistemas embarcados</strong>, <strong className="text-white">IoT</strong>, telemetria e aquisição de dados em tempo real. Atuo na ponte entre hardware, software e confiabilidade operacional em ambientes reais.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projetos" className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
                Ver projetos <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
                GitHub <GithubIcon className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className={`${cardClass()} p-5`}>
                <p className="text-2xl font-bold text-white">{experience.length}+</p>
                <p className="mt-1 text-sm text-slate-300">Experiências relevantes</p>
              </div>
              <div className={`${cardClass()} p-5`}>
                <p className="text-2xl font-bold text-white">{featuredProjects.length}</p>
                <p className="mt-1 text-sm text-slate-300">Projetos em destaque</p>
              </div>
              <div className={`${cardClass()} p-5`}>
                <p className="text-2xl font-bold text-white">{totalSkills}+</p>
                <p className="mt-1 text-sm text-slate-300">Competências mapeadas</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex flex-col items-center justify-center gap-8">
            <AvatarBlock />

            <div className="w-full max-w-xl rounded-3xl border border-cyan-400/20 bg-slate-900/90 p-6 text-left shadow-2xl shadow-cyan-500/5">
              <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                <LaptopIcon className="h-4 w-4" />
                Perfil técnico
              </div>
              <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-200">{`const engineer = {
  name: 'Nickolas Bernardo Alvarez Gomes',
  role: 'Automation Engineer',
  focus: ['Embedded Systems', 'Firmware', 'IoT', 'Telemetry'],
  stack: ['Python', 'C', 'C++', 'MicroPython', 'Linux'],
  mindset: 'End-to-end problem solving',
  location: 'Remote | Brazil'
};`}</pre>
            </div>

            <a href="#sobre" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
              Explorar portfólio <ChevronDownIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

        <section id="sobre" className="border-y border-white/10 bg-slate-900/40 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Sobre" title="Da aquisição de dados ao firmware" description="Perfil analítico, orientado à resolução de problemas complexos, com atuação end-to-end: da integração entre hardware e software até pipelines, confiabilidade e troubleshooting em sistemas reais." />

            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
                    <article className={`${cardClass()} h-full p-6`}>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                    </article>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experiencia" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Experiência" title="Atuação prática em ambientes reais" description="Experiências construídas em monitoramento, automação, P&D e integração de sistemas, com foco em confiabilidade operacional e desenvolvimento técnico aplicado." />

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/70 via-white/10 to-transparent md:block" />
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div key={`${job.company}-${job.role}`} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="relative md:pl-14">
                  <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-300 md:flex">
                    <CalendarIcon className="h-4 w-4" />
                  </div>
                  <article className={`${cardClass()} p-6`}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                        <p className="mt-1 text-cyan-300">{job.company}</p>
                      </div>
                      <span className={`${badgeClass()} w-fit`}>{job.period}</span>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {job.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="border-y border-white/10 bg-slate-900/40 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Projetos" title="Projetos que conectam hardware, software e dados" description="Uma combinação entre projetos técnicos destacados no currículo e repositórios públicos carregados diretamente do GitHub para manter a vitrine sempre atualizada." />

            <div className="grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                    <article className={`${cardClass()} h-full p-6 transition-transform duration-300 hover:-translate-y-1`}>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-cyan-300">{project.subtitle}</p>
                      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{item}</span>
                        ))}
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-16">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Repositórios públicos</h3>
                  <p className="mt-2 max-w-2xl text-slate-300">Esta seção consulta automaticamente o GitHub público de Nickolas para exibir os repositórios mais relevantes.</p>
                </div>
                <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center rounded-full border border-white/10 px-5 py-2.5 text-white transition hover:bg-white/5">
                  Ver perfil completo <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </a>
              </div>

              {loadingRepos ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
                  ))}
                </div>
              ) : repoError ? (
                <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6 text-sm leading-7 text-amber-50">
                  {repoError} Ainda assim, o site continua funcional. Para exibir os repositórios, tente novamente ou verifique o limite de requisições da API do GitHub.
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="habilidades" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Habilidades" title="Base técnica construída para sistemas reais" description="Stack organizada por domínio para destacar tanto o lado de firmware e embarcados quanto a camada de integração, comunicação e dados." />

          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
                  <article className={`${cardClass()} h-full p-6`}>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className={badgeClass()}>{skill}</span>
                      ))}
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="contato" className="border-t border-white/10 bg-slate-900/60 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contato</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Vamos construir soluções confiáveis juntos</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Aberto a oportunidades remotas e projetos que envolvam sistemas embarcados, firmware, IoT, integração de sensores, telemetria e automação baseada em dados.</p>
            </div>

            <div className={`${cardClass()} space-y-5 p-6`}>
              <a href={`mailto:${EMAIL}`} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/30">
                <div className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm text-slate-400">E-mail</p>
                    <p className="text-sm text-white sm:text-base">{EMAIL}</p>
                  </div>
                </div>
                <ArrowRightIcon className="h-4 w-4 text-slate-400" />
              </a>

              <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/30">
                <div className="flex items-center gap-3">
                  <GithubIcon className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="text-sm text-white sm:text-base">{GITHUB_USERNAME}</p>
                  </div>
                </div>
                <ArrowRightIcon className="h-4 w-4 text-slate-400" />
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <MapPinIcon className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-slate-400">Localização</p>
                  <p className="text-sm text-white sm:text-base">{LOCATION}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center text-sm text-slate-400 sm:flex-row sm:text-left lg:px-8">
          <p>© 2026 Nickolas Bernardo Alvarez Gomes. Portfólio focado em Embedded Systems, IoT e Firmware.</p>
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
