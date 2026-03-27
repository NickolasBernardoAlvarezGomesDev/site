"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIcon,
  ArrowRightIcon,
  CalendarIcon,
  CpuIcon,
  DatabaseIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  GithubIcon,
  GitBranchIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  RadioIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TerminalIcon,
  WhatsAppIcon,
  WorkflowIcon,
  WrenchIcon,
} from "@/components/icons";
import type { GitHubRepo } from "@/lib/github";
import { selectTopRepos } from "@/lib/github";

const GITHUB_USERNAME = "";
const GITHUB_PROFILE = "https://github.com/NickolasBernardoAlvarezGomesDev";
const LINKEDIN_URL = "https://www.linkedin.com/in/nickolas-bernardo-alvarez-gomes-2bb114141";
const WHATSAPP_URL = "https://w.app/vgkf9b";
const EMAIL = "nickolas_gomes1996@outlook.com";
const LOCATION = "Rio Grande - RS, Brasil";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

const heroSignals = ["Embedded Systems", "Firmware", "IoT", "Telemetry", "Data Acquisition", "Sensor Integration"];

const highlights = [
  {
    title: "Firmware + integração hardware-software",
    description:
      "Atuação prática no desenvolvimento e ajuste de firmware para sensores, microcontroladores e sistemas que exigem integração confiável entre eletrônica e software.",
    icon: CpuIcon,
  },
  {
    title: "Telemetria, aquisição e comunicação",
    description:
      "Construção de fluxos para coleta, processamento e transmissão de dados em tempo real com foco em dataloggers, LoRa, HTTP e operação em campo.",
    icon: RadioIcon,
  },
  {
    title: "Confiabilidade operacional orientada a dados",
    description:
      "Validação, filtragem e troubleshooting para que sinais, medições e pipelines entreguem informação utilizável em sistemas reais de monitoramento.",
    icon: DatabaseIcon,
  },
];

const recruiterSummary = [
  {
    title: "Visão end-to-end",
    description: "Da integração do sensor e firmware até a camada de aquisição, diagnóstico e entrega dos dados.",
    icon: WorkflowIcon,
  },
  {
    title: "Ambiente real de operação",
    description: "Experiência aplicada em monitoramento, telemetria e troubleshooting de sistemas que precisam funcionar fora do laboratório.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Perfil para times técnicos",
    description: "Boa aderência a vagas de Embedded Systems, Firmware, IoT, Automation e Data Acquisition com interface próxima ao hardware.",
    icon: ActivityIcon,
  },
];

const experience = [
  {
    role: "Engenheiro de Automação (Pleno)",
    company: "SiMCosta",
    period: "2025",
    items: [
      "Desenvolvimento de sistemas de aquisição, processamento e transmissão de dados em tempo real.",
      "Integração de sensores ambientais, eletroquímicos e inerciais em cenários de monitoramento.",
      "Desenvolvimento de firmware embarcado com MicroPython, C e CRBasic.",
      "Configuração de dataloggers, telemetria, pipelines de dados e troubleshooting de sistemas complexos.",
    ],
  },
  {
    role: "Estagiário em Engenharia",
    company: "Green Next",
    period: "2024 – 2025",
    items: [
      "Testes e análise de desempenho de baterias com foco em consistência experimental.",
      "Padronização de documentação técnica para dar rastreabilidade ao processo.",
      "Apoio em análise de dados experimentais e melhoria de processos operacionais.",
    ],
  },
  {
    role: "Pesquisa e Desenvolvimento (P&D)",
    company: "CI3D / FURG",
    period: "2019 – 2025",
    items: [
      "Desenvolvimento de sistemas embarcados e dispositivos automatizados para projetos experimentais.",
      "Integração entre hardware, software, controle e prototipagem eletromecânica.",
      "Construção de soluções com sensores, automação e validação técnica aplicada.",
    ],
  },
];

const featuredProjects = [
  {
    title: "Máquina Insersora SMD",
    area: "Automação aplicada à montagem eletrônica",
    context:
      "Projeto acadêmico voltado a automatizar etapas da montagem SMD, reduzindo dependência de operação manual e organizando melhor o processo de prototipagem.",
    role:
      "Responsável por estruturar a lógica de automação, integrar controle, eletrônica e firmware e validar o comportamento do sistema como um conjunto único.",
    impact:
      "Consolidou um case de integração end-to-end entre mecânica, eletrônica e software, reforçando capacidade de transformar conceito técnico em sistema funcional.",
    stack: ["Firmware", "Controle", "Eletrônica", "Automação"],
    tags: ["Embedded", "Motion Logic", "Prototype"],
    icon: WorkflowIcon,
  },
  {
    title: "Sistemas de Monitoramento IoT",
    area: "Telemetria e aquisição em tempo real",
    context:
      "Arquiteturas para monitoramento em campo com múltiplos sensores, exigindo aquisição contínua, validação dos sinais e transmissão confiável.",
    role:
      "Atuação no desenvolvimento e ajuste dos fluxos de coleta, integração de sensores, processamento inicial dos dados e troubleshooting operacional.",
    impact:
      "Melhorou a robustez da telemetria e a confiança nas medições utilizadas em ambientes reais de operação e monitoramento.",
    stack: ["IoT", "Telemetria", "Sensores", "Data Pipeline"],
    tags: ["Field Systems", "Reliability", "Real Time"],
    icon: ActivityIcon,
  },
  {
    title: "Sistema de Comunicação LoRa",
    area: "Conectividade entre dispositivos",
    context:
      "Necessidade de comunicação de longo alcance para dispositivos conectados, com atenção à estabilidade do enlace e à integração da arquitetura.",
    role:
      "Desenho da comunicação entre nós, testes de conectividade e definição de uma base técnica para integração com sistemas maiores de IoT.",
    impact:
      "Fortaleceu repertório em comunicação embarcada, integração de dispositivos e decisões práticas para cenários com restrição de alcance e infraestrutura.",
    stack: ["LoRa", "IoT", "Comunicação", "Embedded"],
    tags: ["Wireless", "Device Integration", "Architecture"],
    icon: RadioIcon,
  },
  {
    title: "Automações e Processamento de Dados",
    area: "Tooling operacional e confiabilidade",
    context:
      "Rotinas operacionais gerando dados brutos com inconsistências, retrabalho manual e baixa rastreabilidade para análise técnica.",
    role:
      "Desenvolvimento de scripts para tratamento, filtragem, organização e integração dos dados com foco em produtividade e qualidade operacional.",
    impact:
      "Reduziu esforço manual, melhorou a consistência da informação e acelerou o uso prático dos dados em análise e tomada de decisão.",
    stack: ["Python", "Dados", "Automação", "Integração"],
    tags: ["Tooling", "Validation", "Operational Data"],
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

function buttonPrimaryClass() {
  return "inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300";
}

function buttonSecondaryClass() {
  return "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/5";
}

function buttonTertiaryClass() {
  return "inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/15";
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

function CaseCard({ project }: { project: (typeof featuredProjects)[number] }) {
  const Icon = project.icon;

  return (
    <article className={`${cardClass()} h-full p-6 lg:p-7`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{project.area}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm font-semibold text-white">Contexto / problema</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{project.context}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Papel do Nickolas</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{project.role}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contribuição / impacto</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{project.impact}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
            {item}
          </span>
        ))}
        {project.tags.map((item) => (
          <span key={item} className={badgeClass()}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const updated = new Date(repo.updated_at).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const repoTags = Array.from(new Set([repo.language, ...(repo.topics ?? [])].filter(Boolean) as string[])).slice(0, 4);

  return (
    <article className={`${cardClass()} flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/40`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Curadoria GitHub</p>
          <h4 className="mt-3 text-xl font-semibold text-white">{repo.name}</h4>
        </div>
        <GitBranchIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
      </div>

      <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-300">
        {repo.description || "Repositório técnico selecionado por reforçar aderência a automação, embedded, integração ou dados."}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {repoTags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className={badgeClass()}>★ {repo.stargazers_count}</span>
        <span className={badgeClass()}>Forks {repo.forks_count}</span>
        <span>Atualizado em {updated}</span>
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir repositório ${repo.name} no GitHub em nova aba`}
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
      >
        Abrir repositório <ExternalLinkIcon className="h-4 w-4" />
      </a>
    </article>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon: Icon,
  external = false,
  valueClassName,
}: {
  href?: string;
  label: string;
  value: string;
  icon: typeof MailIcon;
  external?: boolean;
  valueClassName?: string;
}) {
  const content = (
    <>
      <div className="flex min-w-0 items-start gap-3">
        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-5 text-slate-400">{label}</p>
          <p className={`mt-1 text-sm font-medium leading-6 text-white sm:text-base ${valueClassName ?? "break-words"}`}>
            {value}
          </p>
        </div>
      </div>
      {href && <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-slate-500" />}
    </>
  );

  if (!href) {
    return <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={`${label}: ${value}${external ? " em nova aba" : ""}`}
      className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/30 hover:bg-slate-950/80"
    >
      {content}
    </a>
  );
}

export default function PortfolioPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        setLoadingRepos(true);
        setRepoError(null);

        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        if (!response.ok) {
          throw new Error("Não foi possível carregar os repositórios públicos do GitHub.");
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

  const totalSkills = useMemo(() => skillGroups.reduce((acc, group) => acc + group.skills.length, 0), []);
  const heroContentMotion = reduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55 } };
  const heroAsideMotion = reduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.08 } };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.14),transparent_20%),radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.14),transparent_22%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a href="#inicio" className="text-lg font-black tracking-tight text-white" aria-label="Voltar ao início do portfólio">
            <span className="text-cyan-300">&lt;</span> Nickolas <span className="text-cyan-300">/&gt;</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir conversa no WhatsApp com Nickolas em nova aba"
            className={`${buttonPrimaryClass()} px-4 py-2.5`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-20">
          <motion.div {...heroContentMotion} className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200">
              <SparklesIcon className="h-4 w-4" />
              Automation Engineer · Embedded Systems · Firmware · IoT · Telemetry
            </div>

            <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engenharia aplicada para sistemas embarcados, firmware e aquisição de dados em campo.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Nickolas Bernardo Alvarez Gomes atua na ponte entre <strong className="text-white">hardware</strong>,
              <strong className="text-white"> software</strong>, <strong className="text-white">firmware</strong>,
              telemetria e confiabilidade operacional. O foco é entregar sistemas que coletam, processam e transmitem dados
              com consistência em contextos reais de monitoramento, automação e IoT.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir conversa no WhatsApp com Nickolas em nova aba"
                className={buttonPrimaryClass()}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Falar no WhatsApp
              </a>
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir perfil de GitHub de Nickolas em nova aba"
                className={buttonSecondaryClass()}
              >
                <GithubIcon className="h-4 w-4" />
                Ver GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir perfil de LinkedIn de Nickolas em nova aba"
                className={buttonTertiaryClass()}
              >
                <LinkedInIcon className="h-4 w-4" />
                Ver LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className={`${cardClass()} p-4`}>
                <p className="text-xl font-bold text-white">{experience.length}+</p>
                <p className="mt-1 text-sm text-slate-300">Experiências aplicadas entre automação, P&D e monitoramento.</p>
              </div>
              <div className={`${cardClass()} p-4`}>
                <p className="text-xl font-bold text-white">{featuredProjects.length}</p>
                <p className="mt-1 text-sm text-slate-300">Cases técnicos organizados como problema, papel e impacto.</p>
              </div>
              <div className={`${cardClass()} p-4`}>
                <p className="text-xl font-bold text-white">{totalSkills}+</p>
                <p className="mt-1 text-sm text-slate-300">Competências cobrindo firmware, dados, integração e tooling.</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...heroAsideMotion} className="grid gap-4">
            <article className={`${cardClass()} p-6`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Resumo para recrutadores</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Perfil técnico forte para funções que exigem integração entre firmware, sensores, telemetria e dados.
              </h2>

              <div className="mt-6 space-y-4">
                {recruiterSummary.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className={`${cardClass()} p-6`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Disponibilidade</p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Aberto a oportunidades e projetos técnicos em Embedded Systems, Firmware, IoT, Telemetria,
                Data Acquisition e integração de sistemas.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className={badgeClass()}>Remote-ready</span>
                <span className={badgeClass()}>Embedded / Firmware</span>
                <span className={badgeClass()}>IoT / Telemetry</span>
              </div>
            </article>
          </motion.div>
        </section>

        <section id="sobre" className="border-y border-white/10 bg-slate-900/40 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Sobre"
              title="Posicionamento técnico orientado a sistemas reais"
              description="O foco do portfólio é mostrar Nickolas como um profissional capaz de conectar hardware, firmware, aquisição de dados, telemetria e troubleshooting operacional em contextos onde confiabilidade importa."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className={`${cardClass()} h-full p-6`}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experiencia" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionTitle
            eyebrow="Experiência"
            title="Atuação prática em monitoramento, automação e P&D"
            description="Experiências que reforçam capacidade de trabalhar com integração de sensores, firmware, dados experimentais e troubleshooting em ambientes técnicos."
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/70 via-white/10 to-transparent md:block" />
            <div className="space-y-8">
              {experience.map((job) => (
                <div key={`${job.company}-${job.role}`} className="relative md:pl-14">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="border-y border-white/10 bg-slate-900/40 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Projetos"
              title="Selected technical cases para Embedded, Firmware e IoT"
              description="Os projetos destacados abaixo foram reescritos como cases: contexto, papel técnico, stack e contribuição concreta. A intenção é facilitar a leitura de recrutadores e líderes técnicos."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <CaseCard key={project.title} project={project} />
              ))}
            </div>

            <div className="mt-16">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Repositórios públicos curados</h3>
                  <p className="mt-2 max-w-2xl text-slate-300">
                    Curadoria focada em aderência técnica: automação, embedded, IoT, integração, firmware, tooling e
                    dados. A seção evita priorizar apenas atividade recente.
                  </p>
                </div>
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir perfil completo de GitHub de Nickolas em nova aba"
                  className={buttonSecondaryClass()}
                >
                  Ver perfil completo <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>

              {loadingRepos ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
                  ))}
                </div>
              ) : repoError ? (
                <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6 text-sm leading-7 text-amber-50">
                  {repoError} Ainda assim, o site continua funcional. Para exibir os repositórios, tente novamente ou verifique o limite de requisições da API do GitHub.
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="habilidades" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionTitle
            eyebrow="Habilidades"
            title="Base técnica construída para firmware, integração e dados"
            description="Organização por domínio para destacar amplitude sem perder foco: programação, embarcados, telemetria, dados e ferramental de trabalho."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className={`${cardClass()} h-full p-6`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className={badgeClass()}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="contato" className="border-t border-white/10 bg-slate-900/60 py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contato</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Canal rápido para vagas, projetos e conversas técnicas
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Para recrutadores e equipes técnicas, o contato mais direto é pelo WhatsApp. E-mail, LinkedIn e GitHub
                também ficam acessíveis para análise de perfil e continuidade da conversa.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir conversa no WhatsApp com Nickolas em nova aba"
                  className={buttonPrimaryClass()}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
                <a href={`mailto:${EMAIL}`} aria-label={`Enviar e-mail para ${EMAIL}`} className={buttonSecondaryClass()}>
                  <MailIcon className="h-4 w-4" />
                  Enviar e-mail
                </a>
              </div>
            </div>

            <div className={`${cardClass()} p-6`}>
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard href={WHATSAPP_URL} label="WhatsApp" value="" icon={WhatsAppIcon} external />
                <ContactCard href={`mailto:${EMAIL}`} label="E-mail" value={EMAIL} icon={MailIcon} valueClassName="break-all" />
                <ContactCard href={LINKEDIN_URL} label="LinkedIn" value="" icon={LinkedInIcon} external />
                <ContactCard href={GITHUB_PROFILE} label="GitHub" value={GITHUB_USERNAME} icon={GithubIcon} external valueClassName="break-all" />
                <div className="sm:col-span-2">
                  <ContactCard label="Localização" value={LOCATION} icon={MapPinIcon} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center text-sm text-slate-400 sm:flex-row sm:text-left lg:px-8">
          <p>© 2026 Nickolas Bernardo Alvarez Gomes.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
