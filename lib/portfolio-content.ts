import { ICONS, IMAGES, type LocalAsset } from "@/lib/assets";

type BrandIconName = keyof typeof ICONS.brands;
type ServiceIconName = keyof typeof ICONS.services;
type EngineeringIconName = keyof typeof ICONS.engineering;
type UIIconName = keyof typeof ICONS.ui;

export type IconSpec =
  | { kind: "brand"; name: BrandIconName }
  | { kind: "service"; name: ServiceIconName }
  | { kind: "engineering"; name: EngineeringIconName }
  | { kind: "ui"; name: UIIconName };

export type ValueArea = {
  title: string;
  description: string;
  icon: IconSpec;
};

export type AboutArea = {
  title: string;
  description: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type CaseStudy = {
  title: string;
  eyebrow: string;
  problem: string;
  work: string;
  result: string;
  stack: string[];
  image: LocalAsset;
  icon: IconSpec;
};

export type SecondaryProject = {
  title: string;
  description: string;
  result: string;
  stack: string[];
  icon: IconSpec;
};

export type SkillGroup = {
  title: string;
  icon: IconSpec;
  items: string[];
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: IconSpec;
  external?: boolean;
  valueClassName?: string;
};

export const PROFILE = {
  name: "Nickolas Bernardo Alvarez Gomes",
  shortRole: "Firmware | Telemetria | Sistemas embarcados",
  location: "Rio Grande - RS, Brasil",
  email: "nickolas_gomes1996@outlook.com",
  githubUsername: "NickolasBernardoAlvarezGomesDev",
  githubUrl: "https://github.com/NickolasBernardoAlvarezGomesDev",
  linkedinUrl: "https://www.linkedin.com/in/nickolas-bernardo-alvarez-gomes-2bb114141",
  whatsappUrl: "https://wa.me/5551999213128?text=Ol%C3%A1!"
} as const;

export const NAV_ITEMS = [
  { label: "Valor", href: "#valor" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "GitHub", href: "#github" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" }
] as const;

export const HERO_CONTEXT = ["Sensores", "Microcontroladores", "Dataloggers", "LoRa", "HTTP", "Troubleshooting"] as const;

export const VALUE_AREAS: ValueArea[] = [
  {
    title: "Firmware e integracao embarcada",
    description:
      "Desenvolvimento e ajuste de firmware para microcontroladores, sensores e dispositivos que dependem de comunicacao confiavel entre hardware e software.",
    icon: { kind: "engineering", name: "firmware" }
  },
  {
    title: "Telemetria e aquisicao de dados",
    description:
      "Estruturacao de fluxos para coleta, transmissao e monitoramento de dados em tempo real, com foco em observabilidade e operacao em campo.",
    icon: { kind: "engineering", name: "telemetry" }
  },
  {
    title: "Confiabilidade e troubleshooting",
    description:
      "Tratamento de sinais, validacao de dados, depuracao de medicoes e suporte tecnico a sistemas com ruido, inconsistencias ou baixa rastreabilidade.",
    icon: { kind: "engineering", name: "dataAcquisition" }
  }
];

export const ABOUT_AREAS: AboutArea[] = [
  {
    title: "Firmware e integracao embarcada",
    description:
      "Integro firmware, sensores, perifericos e protocolos para que o dispositivo se comporte de forma previsivel dentro do sistema completo."
  },
  {
    title: "Telemetria e aquisicao de dados",
    description:
      "Trabalho no caminho do sinal ate o monitoramento, da leitura ao envio e a organizacao dos dados para uso operacional."
  },
  {
    title: "Confiabilidade e troubleshooting",
    description:
      "Atuo em diagnostico, validacao e correcao quando medicoes, comunicacao ou rastreabilidade comprometem o funcionamento esperado."
  }
];

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    role: "Engenheiro de Automacao (Pleno)",
    company: "SiMCosta",
    period: "2025 - atual",
    summary:
      "Atuacao em sistemas de monitoramento e aquisicao de dados para operacao em campo, combinando firmware, sensores, dataloggers e troubleshooting tecnico.",
    highlights: [
      "Desenvolvimento de firmware com MicroPython, C e CRBasic para dispositivos e rotinas de coleta.",
      "Integracao de sensores ambientais, eletroquimicos e inerciais em sistemas de monitoramento.",
      "Configuracao de dataloggers, transmissao e pipelines de dados em tempo real.",
      "Diagnostico de falhas de medicao, comunicacao e consistencia operacional."
    ]
  },
  {
    role: "Estagiario em Engenharia",
    company: "Green Next",
    period: "2024 - 2025",
    summary:
      "Suporte tecnico a testes e analise experimental de baterias, com foco em consistencia de medicao, documentacao e leitura de dados.",
    highlights: [
      "Execucao e acompanhamento de testes de desempenho em baterias.",
      "Padronizacao de documentacao tecnica para aumentar rastreabilidade do processo.",
      "Apoio em analise de dados experimentais e organizacao de rotinas operacionais."
    ]
  },
  {
    role: "Pesquisa e Desenvolvimento (P&D)",
    company: "CI3D / FURG",
    period: "2019 - 2025",
    summary:
      "Desenvolvimento de dispositivos e sistemas experimentais com interface proxima ao hardware, unindo automacao, controle e prototipagem.",
    highlights: [
      "Construcao de sistemas embarcados e dispositivos automatizados para projetos experimentais.",
      "Integracao entre hardware, software, controle e prototipagem eletromecanica.",
      "Validacao tecnica de solucoes com sensores, automacao e eletronica aplicada."
    ]
  }
];

export const PRIMARY_CASE_STUDIES: CaseStudy[] = [
  {
    title: "Sistemas de Monitoramento IoT",
    eyebrow: "Estudo de caso",
    problem:
      "Sistemas de campo com multiplos sensores exigiam coleta continua, validacao inicial dos sinais e transmissao confiavel dos dados.",
    work:
      "Participei do ajuste dos fluxos de aquisicao, integracao de sensores, processamento inicial e troubleshooting operacional.",
    result:
      "Contribui para aumentar a confiabilidade da telemetria e a consistencia das medicoes utilizadas em ambientes reais de monitoramento.",
    stack: ["IoT", "Sensores", "Telemetria", "Pipelines de dados", "Sistemas em campo", "Validacao"],
    image: IMAGES.projects.iotMonitoring,
    icon: { kind: "engineering", name: "telemetry" }
  },
  {
    title: "Maquina Insersora SMD",
    eyebrow: "Estudo de caso",
    problem:
      "A montagem e prototipagem SMD dependiam de etapas manuais e de uma logica integrada entre mecanica, eletronica e controle.",
    work:
      "Estruturei a logica de automacao, a integracao entre controle, eletronica e firmware e a validacao do comportamento do sistema.",
    result:
      "O projeto consolidou um caso real de integracao end-to-end entre mecanica, eletronica e software, com comportamento funcional validado em prototipo.",
    stack: ["Automacao", "Firmware", "Controle", "Eletronica", "Prototipagem"],
    image: IMAGES.projects.hardwareSoftware,
    icon: { kind: "service", name: "workflow" }
  }
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: "Sistema de Comunicacao LoRa",
    description:
      "Projeto voltado a conectividade entre dispositivos com foco em enlace de longo alcance e estabilidade de comunicacao.",
    result:
      "Ampliou repertorio em arquitetura de comunicacao embarcada e integracao de dispositivos em cenarios com restricao de alcance.",
    stack: ["LoRa", "IoT", "Comunicacao", "Embedded"],
    icon: { kind: "engineering", name: "sensor" }
  },
  {
    title: "Automacoes e Processamento de Dados",
    description:
      "Rotinas para tratamento, filtragem, organizacao e integracao de dados tecnicos gerados por processos operacionais.",
    result:
      "Reduziu retrabalho manual e melhorou a consistencia da informacao usada em analise e tomada de decisao.",
    stack: ["Python", "Dados", "Integracao", "Tooling"],
    icon: { kind: "service", name: "api" }
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Linguagens e software",
    icon: { kind: "service", name: "api" },
    items: ["Python", "C", "C++", "MicroPython", "APIs", "Scripts"]
  },
  {
    title: "Embarcados e firmware",
    icon: { kind: "engineering", name: "firmware" },
    items: ["Firmware", "ESP32", "STM32", "Atmega", "Debugging", "Integracao hardware-software"]
  },
  {
    title: "IoT e dados",
    icon: { kind: "engineering", name: "dataAcquisition" },
    items: ["Telemetria", "LoRa", "HTTP", "Dataloggers", "Validacao de dados", "Pipelines de dados"]
  },
  {
    title: "Ferramentas e ambiente",
    icon: { kind: "engineering", name: "customProject" },
    items: ["Git", "Linux", "Troubleshooting", "Prototipagem", "Documentacao tecnica"]
  }
];

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "WhatsApp",
    value: "55 51 99921-3128",
    href: PROFILE.whatsappUrl,
    icon: { kind: "brand", name: "whatsapp" },
    external: true
  },
  {
    label: "E-mail",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: { kind: "ui", name: "mail" },
    valueClassName: "break-all"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nickolas-bernardo-alvarez-gomes-2bb114141",
    href: PROFILE.linkedinUrl,
    icon: { kind: "brand", name: "linkedin" },
    external: true,
    valueClassName: "break-all"
  },
  {
    label: "GitHub",
    value: PROFILE.githubUsername,
    href: PROFILE.githubUrl,
    icon: { kind: "brand", name: "github" },
    external: true,
    valueClassName: "break-all"
  }
];
