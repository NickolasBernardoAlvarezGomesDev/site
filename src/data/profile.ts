import { engineeringIcons, projectMedia, serviceIcons } from "@/assets/media";
import { links } from "@/data/links";

export type ExpertiseItem = {
  title: string;
  description: string;
  icon: string;
};

export type SkillCluster = {
  title: string;
  description: string;
  items: string[];
  icon: string;
};

export type CredibilityBlock = {
  title: string;
  description: string;
  highlight: string;
};

export const profile = {
  name: "Nickolas Bernardo Alvarez Gomes",
  shortName: "Nickolas Bernardo",
  role: "Engenheiro de Automacao",
  headline: "Sistemas embarcados, firmware e telemetria para operacoes reais",
  subtitle:
    "Engenheiro de Automacao com atuacao em sensores, aquisicao de dados, firmware, integracao hardware-software e confiabilidade operacional em ambientes reais.",
  supportingText:
    "Experiencia com microcontroladores, dataloggers, LoRa, HTTP, monitoramento em campo, troubleshooting e organizacao de fluxos de dados tecnicos.",
  location: "Rio Grande, RS, Brasil",
  summary:
    "Minha atuacao esta concentrada em problemas que exigem integracao entre eletronica, firmware, comunicacao e dados. Tenho mais aderencia a ambientes onde o desafio nao e apenas programar, mas fazer o sistema funcionar com consistencia em condicoes reais de uso.",
  specialties: [
    "Firmware embarcado",
    "Telemetria",
    "Aquisicao de dados",
    "Sensores",
    "Integracao hardware-software",
    "Troubleshooting"
  ],
  proofBar: ["SiMCosta", "Green Next", "FURG / CI3D", "Embedded", "IoT", "Firmware", "Telemetry"],
  heroHighlights: [
    "Sensores, dataloggers e microcontroladores em fluxo continuo de coleta",
    "Leitura, validacao e transmissao de dados com foco em campo",
    "Diagnostico de falhas de medicao, comunicacao e rastreabilidade"
  ],
  heroMedia: {
    src: projectMedia.hero,
    alt: "Composicao tecnica com fluxo de telemetria, aquisicao e monitoramento."
  },
  aboutMedia: {
    src: projectMedia.aboutPreview,
    alt: "Composicao tecnica representando integracao entre hardware, firmware e dados."
  },
  contactTitle: "Disponivel para oportunidades e desafios tecnicos",
  contactText:
    "Para conversar sobre vagas, projetos ou necessidades tecnicas relacionadas a firmware, sistemas embarcados, telemetria e integracao hardware-software, entre em contato.",
  ctas: {
    projects: "/projetos",
    contact: "/contato",
    about: "/sobre",
    whatsapp: links.whatsapp,
    github: links.github,
    linkedin: links.linkedin,
    email: links.email,
    cv: links.cv
  }
} as const;

export const expertise: ExpertiseItem[] = [
  {
    title: "Firmware e embarcados",
    description:
      "Desenvolvimento e ajuste de firmware para microcontroladores, sensores e dispositivos que dependem de comportamento previsivel e integracao confiavel.",
    icon: engineeringIcons.firmware
  },
  {
    title: "Telemetria e aquisicao",
    description:
      "Estruturacao de fluxos para coleta, transmissao e observabilidade de dados em tempo real, com foco em monitoramento e operacao em campo.",
    icon: engineeringIcons.telemetry
  },
  {
    title: "Confiabilidade e troubleshooting",
    description:
      "Diagnostico, validacao e correcao de falhas de medicao, comunicacao e rastreabilidade em sistemas tecnicos.",
    icon: engineeringIcons.dataAcquisition
  }
];

export const skillClusters: SkillCluster[] = [
  {
    title: "Linguagens e software",
    description: "Ferramental usado para firmware, scripts de apoio e integracoes tecnicas.",
    items: ["Python", "C", "C++", "MicroPython", "TypeScript", "APIs"],
    icon: serviceIcons.api
  },
  {
    title: "Embarcados e firmware",
    description: "Base pratica em microcontroladores, sensores e validacao do comportamento do dispositivo.",
    items: ["ESP32", "STM32", "Atmega", "CRBasic", "Dataloggers", "Debug de comunicacao"],
    icon: engineeringIcons.microcontroller
  },
  {
    title: "IoT e dados",
    description: "Fluxos de aquisicao, transporte, tratamento inicial e observabilidade operacional.",
    items: ["LoRa", "HTTP", "Telemetria", "Pipelines de dados", "Validacao de medicoes"],
    icon: serviceIcons.dashboard
  },
  {
    title: "Ferramentas e ambiente",
    description: "Ambiente de trabalho para integracao, suporte tecnico e continuidade operacional.",
    items: ["Git", "Linux", "Documentacao tecnica", "Prototipagem", "Troubleshooting"],
    icon: serviceIcons.integration
  }
];

export const credibilityBlocks: CredibilityBlock[] = [
  {
    title: "SiMCosta",
    description: "Monitoramento, aquisicao de dados e suporte tecnico em sistemas com operacao em campo.",
    highlight: "Firmware, sensores e telemetria aplicada."
  },
  {
    title: "Green Next",
    description: "Testes e analise tecnica com foco em consistencia de medicao e padronizacao operacional.",
    highlight: "Qualidade de dados e rastreabilidade."
  },
  {
    title: "CI3D / FURG",
    description: "Pesquisa aplicada em dispositivos, automacao, prototipagem e integracao eletromecanica.",
    highlight: "P&D proximo ao hardware."
  }
];

export const aboutDifferentials = [
  {
    title: "Integracao ponta a ponta",
    description:
      "Consigo navegar entre eletronica, firmware, comunicacao e dados sem perder a visao do sistema como um todo."
  },
  {
    title: "Operacao real como criterio",
    description:
      "Priorizo solucoes que suportem ruido, variacao de sinal, manutencao e diagnostico em uso real."
  },
  {
    title: "Leitura tecnica de falhas",
    description:
      "Tenho aderencia a contextos em que depuracao, validacao e rastreabilidade importam tanto quanto a implementacao."
  }
];
