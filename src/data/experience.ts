export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Engenheiro de Automacao",
    company: "SiMCosta",
    period: "2025 - atual",
    summary:
      "Atuacao em sistemas de monitoramento e aquisicao de dados para operacao em campo, unindo firmware, sensores, dataloggers e troubleshooting tecnico.",
    bullets: [
      "Desenvolvimento e ajuste de firmware com MicroPython, C e CRBasic para rotinas de coleta e comunicacao.",
      "Integracao de sensores ambientais, eletroquimicos e inerciais em fluxos de monitoramento continuo.",
      "Configuracao de dataloggers, transmissao e organizacao de dados para uso operacional.",
      "Diagnostico de falhas de medicao, comunicacao e consistencia em sistemas tecnicos."
    ],
    stack: ["MicroPython", "CRBasic", "Sensores", "Dataloggers", "Telemetria"]
  },
  {
    role: "Estagiario em Engenharia",
    company: "Green Next",
    period: "2024 - 2025",
    summary:
      "Suporte tecnico a testes e analise experimental de baterias, com foco em consistencia de medicao, organizacao de rotinas e documentacao tecnica.",
    bullets: [
      "Execucao e acompanhamento de testes de desempenho em baterias com foco em repetibilidade.",
      "Padronizacao de documentacao para aumentar rastreabilidade de ensaios e procedimentos.",
      "Apoio na leitura, tratamento inicial e analise de dados experimentais.",
      "Suporte a operacao tecnica com abordagem orientada a validacao."
    ],
    stack: ["Analise de dados", "Documentacao", "Testes", "Operacao"]
  },
  {
    role: "Pesquisa e Desenvolvimento",
    company: "CI3D / FURG",
    period: "2019 - 2025",
    summary:
      "Desenvolvimento de dispositivos e sistemas experimentais com interface proxima ao hardware, envolvendo automacao, controle e prototipagem.",
    bullets: [
      "Construcao de sistemas embarcados e dispositivos automatizados para projetos experimentais.",
      "Integracao entre hardware, software, controle e prototipagem eletromecanica.",
      "Validacao tecnica de solucoes com sensores, automacao e eletronica aplicada.",
      "Apoio a projetos em contexto de P&D com foco em viabilidade e funcionamento consistente."
    ],
    stack: ["Automacao", "Controle", "Prototipagem", "Eletronica", "P&D"]
  }
];
