"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { BrandIcon } from "@/components/icons/BrandIcons";
import { EngineeringIcon } from "@/components/icons/EngineeringIcons";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { UIIcon } from "@/components/icons/UIIcons";
import { IMAGES, type LocalAsset } from "@/lib/assets";
import { describeRepo, selectTopRepos, type GitHubRepo } from "@/lib/github";
import {
  ABOUT_AREAS,
  CONTACT_METHODS,
  EXPERIENCE_ENTRIES,
  HERO_CONTEXT,
  NAV_ITEMS,
  PRIMARY_CASE_STUDIES,
  PROFILE,
  SECONDARY_PROJECTS,
  SKILL_GROUPS,
  VALUE_AREAS,
  type IconSpec
} from "@/lib/portfolio-content";

type SectionTone = "dark" | "light";

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

function IconGlyph({
  icon,
  size = 20,
  className,
  decorative = true
}: {
  icon: IconSpec;
  size?: number;
  className?: string;
  decorative?: boolean;
}) {
  if (icon.kind === "brand") {
    return <BrandIcon name={icon.name} alt="" size={size} className={className} decorative={decorative} />;
  }

  if (icon.kind === "engineering") {
    return <EngineeringIcon name={icon.name} alt="" size={size} className={className} decorative={decorative} />;
  }

  if (icon.kind === "service") {
    return <ServiceIcon name={icon.name} alt="" size={size} className={className} decorative={decorative} />;
  }

  return <UIIcon name={icon.name} alt="" size={size} className={className} decorative={decorative} />;
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
  description?: string;
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
      {description ? <p className={`mt-5 text-base leading-8 ${light ? "text-white/74" : "text-slate"}`}>{description}</p> : null}
    </div>
  );
}

function ValueCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: IconSpec;
}) {
  return (
    <article className={cardClass()}>
      <div className="p-6">
        <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-ink/10 bg-mist text-ink">
          <IconGlyph icon={icon} size={24} />
        </div>
        <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate">{description}</p>
      </div>
    </article>
  );
}

function AboutCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.75rem] border border-ink/10 bg-mist/70 p-5 shadow-soft">
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
    </article>
  );
}

function ExperienceCard({
  role,
  company,
  period,
  summary,
  highlights
}: {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}) {
  return (
    <article className={`${cardClass()} h-full`}>
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl text-ink">{role}</h3>
            <p className="mt-1 text-accent">{company}</p>
          </div>
          <span className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-sm text-ink">{period}</span>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate">{summary}</p>

        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function CaseStudyCard({
  eyebrow,
  title,
  problem,
  work,
  result,
  stack,
  image,
  icon,
  reverse = false
}: {
  eyebrow: string;
  title: string;
  problem: string;
  work: string;
  result: string;
  stack: string[];
  image: LocalAsset;
  icon: IconSpec;
  reverse?: boolean;
}) {
  return (
    <article className={cardClass("dark")}>
      <div className="grid lg:grid-cols-[0.44fr_0.56fr]">
        <div className={`relative min-h-[280px] overflow-hidden rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none ${reverse ? "lg:order-2 lg:rounded-l-none lg:rounded-r-[2rem]" : ""}`}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
        </div>

        <div className={`p-6 lg:p-7 ${reverse ? "lg:order-1" : ""}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <Badge variant="inverse">{eyebrow}</Badge>
              <h3 className="mt-4 font-display text-3xl leading-tight text-ink">{title}</h3>
            </div>
            <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-night/55 text-ink">
              <IconGlyph icon={icon} size={24} className="brightness-0 invert" />
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.5rem] border border-ink/10 bg-night/45 p-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">Problema</span>
              <p className="mt-2 text-sm leading-7 text-slate">{problem}</p>
            </div>
            <div className="rounded-[1.5rem] border border-ink/10 bg-night/45 p-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">Atuacao</span>
              <p className="mt-2 text-sm leading-7 text-slate">{work}</p>
            </div>
            <div className="rounded-[1.5rem] border border-brand/20 bg-brand/10 p-4">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">Resultado</span>
              <p className="mt-2 text-sm leading-7 text-ink">{result}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/12 px-3 py-1 text-sm text-white/74">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function SecondaryProjectCard({
  title,
  description,
  result,
  stack,
  icon
}: {
  title: string;
  description: string;
  result: string;
  stack: string[];
  icon: IconSpec;
}) {
  return (
    <article className={cardClass()}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl text-ink">{title}</h3>
          <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-mist">
            <IconGlyph icon={icon} size={22} />
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate">{description}</p>
        <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-night/55 p-4 text-sm leading-7 text-slate">
          <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">Contribuicao</span>
          <p className="mt-2 text-ink">{result}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-sm text-ink">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const narrative = describeRepo(repo);
  const updated = new Date(repo.updated_at).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });

  return (
    <article className={`${cardClass()} flex h-full flex-col`}>
      <div className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="outline">GitHub</Badge>
            <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{repo.name}</h3>
          </div>
          <UIIcon name="gitBranch" alt="" decorative size={16} className="mt-1 h-4 w-4 shrink-0" />
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-[1.5rem] border border-ink/10 bg-mist p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">O que e</span>
            <p className="mt-2 text-sm leading-7 text-slate">{narrative.whatItIs}</p>
          </div>
          <div className="rounded-[1.5rem] border border-ink/10 bg-mist p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-accent">O que demonstra</span>
            <p className="mt-2 text-sm leading-7 text-slate">{narrative.demonstrates}</p>
          </div>
          <div className="rounded-[1.5rem] border border-brand/20 bg-brand/10 p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark">Por que importa</span>
            <p className="mt-2 text-sm leading-7 text-ink">{narrative.matters}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {narrative.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-slate">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate">
          <span>Atualizado em {updated}</span>
          <span>Star {repo.stargazers_count}</span>
          <span>Forks {repo.forks_count}</span>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent hover:text-sky"
        >
          Abrir repositorio <UIIcon name="externalLink" alt="" decorative size={16} className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function ContactMethodCard({
  label,
  value,
  href,
  icon,
  external,
  valueClassName
}: {
  label: string;
  value: string;
  href: string;
  icon: IconSpec;
  external?: boolean;
  valueClassName?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-start justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-night/25 p-4 hover:border-white/20 hover:bg-night/40"
    >
      <div className="flex min-w-0 items-start gap-3">
        <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-white">
          <IconGlyph icon={icon} size={20} className="brightness-0 invert" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-5 text-white/58">{label}</p>
          <p className={`mt-1 text-sm font-medium leading-6 text-white sm:text-base ${valueClassName ?? "break-words"}`}>{value}</p>
        </div>
      </div>
      <UIIcon name="arrowRight" alt="" decorative size={16} className="mt-1 h-4 w-4 shrink-0 brightness-0 invert" />
    </a>
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
          setRepos(selectTopRepos(data, 3));
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

  return (
    <div className="min-h-screen bg-night text-ink">
      <header className="sticky top-0 z-[90] border-b border-ink/10 bg-night/88 text-white backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a href="#topo" className="min-w-0 shrink-0">
            <span className="block font-display text-lg font-semibold tracking-tight sm:text-xl">{PROFILE.name}</span>
            <span className="block text-xs text-white/62">{PROFILE.shortRole}</span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/72 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <CTAButton href={PROFILE.githubUrl} variant="lightOutline" iconLeft={<BrandIcon name="github" alt="" decorative size={16} className="h-4 w-4 brightness-0 invert" />}>
              GitHub
            </CTAButton>
            <CTAButton href={PROFILE.whatsappUrl} iconLeft={<BrandIcon name="whatsapp" alt="" decorative size={16} className="h-4 w-4" />}>
              WhatsApp
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
            <UIIcon
              name={isMenuOpen ? "close" : "menu"}
              alt=""
              decorative
              size={20}
              className="h-5 w-5 brightness-0 invert"
            />
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
            </div>
          </div>
        ) : null}
      </header>

      <main id="main-content">
        <section id="topo" className="anchor-offset bg-hero-shell pb-16 pt-14 text-white lg:pb-24 lg:pt-20">
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="inverse">Nickolas Bernardo Alvarez Gomes</Badge>
              <h1 className="mt-6 font-display text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
                Firmware, telemetria e sistemas embarcados para aplicacoes reais
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/78 text-pretty">
                Atuo na integracao entre hardware, software e operacao em campo, desenvolvendo solucoes para aquisicao,
                transmissao, validacao e confiabilidade de dados em sistemas tecnicos.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                Experiencia com sensores, microcontroladores, dataloggers, LoRa, HTTP, troubleshooting e dados aplicados a monitoramento e automacao.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTAButton href="#projetos" iconRight={<UIIcon name="arrowRight" alt="" decorative size={16} className="h-4 w-4" />}>
                  Ver projetos
                </CTAButton>
                <CTAButton
                  href={PROFILE.githubUrl}
                  variant="lightOutline"
                  iconLeft={<BrandIcon name="github" alt="" decorative size={16} className="h-4 w-4 brightness-0 invert" />}
                >
                  Abrir GitHub
                </CTAButton>
                <CTAButton href="#contato" variant="light" iconRight={<UIIcon name="arrowRight" alt="" decorative size={16} className="h-4 w-4" />}>
                  Entrar em contato
                </CTAButton>
              </div>
            </div>

            <div className="space-y-5">
              <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-panel">
                <div className="relative aspect-[16/13]">
                  <Image src={IMAGES.hero.primary.src} alt={IMAGES.hero.primary.alt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-ink/10 bg-night/85 p-5 text-ink shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate">Aplicacoes reais</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate">
                    <li>Monitoramento em campo e observabilidade tecnica.</li>
                    <li>Aquisicao, validacao e transmissao de sinais.</li>
                    <li>Integracao entre dispositivo, firmware e software.</li>
                  </ul>
                </div>
              </article>

              <div className="flex flex-wrap gap-2">
                {HERO_CONTEXT.map((item) => (
                  <span key={item} className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="valor" className="anchor-offset section-shell py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Onde gero mais valor" title="Tres frentes em que minha contribuicao tende a ser mais forte." />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {VALUE_AREAS.map((item) => (
                <ValueCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="anchor-offset bg-sand/65 py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
            <SectionTitle
              eyebrow="Sobre"
              title="Perfil tecnico orientado a integracao, confiabilidade e operacao real"
              description="Minha atuacao esta concentrada em problemas que exigem integracao entre eletronica, firmware, comunicacao e dados. Tenho mais aderencia a ambientes onde o desafio nao e apenas programar, mas fazer o sistema funcionar com consistencia em condicoes reais de uso."
            />

            <div className="grid gap-4">
              {ABOUT_AREAS.map((item) => (
                <AboutCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="anchor-offset py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Experiencia" title="Atuacao em monitoramento, automacao e P&D com foco tecnico." />

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {EXPERIENCE_ENTRIES.map((item) => (
                <ExperienceCard key={`${item.company}-${item.role}`} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="anchor-offset section-shell bg-night py-20 text-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Projetos" title="Dois estudos de caso com foco em problema, atuacao e resultado." tone="light" />

            <div className="mt-12 space-y-6">
              {PRIMARY_CASE_STUDIES.map((item, index) => (
                <CaseStudyCard key={item.title} reverse={index % 2 === 1} {...item} />
              ))}
            </div>

            <div className="mt-14">
              <h3 className="font-display text-2xl text-white">Outros projetos relevantes</h3>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {SECONDARY_PROJECTS.map((item) => (
                  <SecondaryProjectCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="github" className="anchor-offset bg-mist/45 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle
                eyebrow="GitHub"
                title="Tres repositorios em destaque para leitura tecnica do perfil."
                description="A curadoria prioriza aderencia tecnica e utilidade para avaliacao de codigo publico."
              />
              <CTAButton href={PROFILE.githubUrl} variant="secondary" iconRight={<UIIcon name="externalLink" alt="" decorative size={16} className="h-4 w-4" />}>
                Abrir GitHub completo
              </CTAButton>
            </div>

            {loadingRepos ? (
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="h-[420px] animate-pulse rounded-[2rem] border border-ink/10 bg-sand" />
                ))}
              </div>
            ) : repoError ? (
              <div className="mt-12 rounded-[2rem] border border-amber-500/20 bg-amber-500/10 p-6 text-sm leading-7 text-amber-50">
                {repoError} Ainda assim, o link para o perfil completo segue disponivel.
              </div>
            ) : (
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="habilidades" className="anchor-offset py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Habilidades" title="Foco tecnico organizado por dominio." />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <article key={group.title} className={cardClass()}>
                  <div className="p-6">
                    <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-ink/10 bg-mist text-ink">
                      <IconGlyph icon={group.icon} size={24} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-sm text-ink">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-night py-20 text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <SectionTitle
                eyebrow="Contato"
                title="Aberto a oportunidades e desafios tecnicos."
                description="Estou aberto a oportunidades em firmware, sistemas embarcados, IoT, telemetria, aquisicao de dados e integracao entre hardware e software. Para conversar sobre vagas, projetos ou desafios tecnicos, entre em contato por WhatsApp, e-mail ou LinkedIn."
                tone="light"
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTAButton href={PROFILE.whatsappUrl} iconLeft={<BrandIcon name="whatsapp" alt="" decorative size={16} className="h-4 w-4" />}>
                  WhatsApp
                </CTAButton>
                <CTAButton href={`mailto:${PROFILE.email}`} variant="lightOutline" iconLeft={<UIIcon name="mail" alt="" decorative size={16} className="h-4 w-4 brightness-0 invert" />}>
                  E-mail
                </CTAButton>
                <CTAButton href={PROFILE.linkedinUrl} variant="light" iconLeft={<BrandIcon name="linkedin" alt="" decorative size={16} className="h-4 w-4" />}>
                  LinkedIn
                </CTAButton>
                <CTAButton href={PROFILE.githubUrl} variant="lightOutline" iconLeft={<BrandIcon name="github" alt="" decorative size={16} className="h-4 w-4 brightness-0 invert" />}>
                  GitHub
                </CTAButton>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-mist shadow-panel">
                <div className="relative aspect-[16/10]">
                  <Image src={IMAGES.contact.primary.src} alt={IMAGES.contact.primary.alt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
                </div>
              </div>

              <div className={`${cardClass("dark")} p-6`}>
                <div className="mb-5 rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/58">Localizacao</p>
                  <p className="mt-2 text-base text-white/82">{PROFILE.location}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {CONTACT_METHODS.map((item) => (
                    <ContactMethodCard key={item.label} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-night text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-display text-base text-white">{PROFILE.name}</p>
            <p className="mt-1 text-white/60">Firmware, telemetria e sistemas embarcados.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-white/68">
            <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={PROFILE.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
