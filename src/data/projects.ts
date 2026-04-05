import { projectMedia } from "@/assets/media";
import { links } from "@/data/links";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  technicalContext: string;
  role: string;
  result: string;
  stack: string[];
  coverImage: string;
  coverAlt: string;
  gallery: ProjectGalleryItem[];
  repoUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  category: string;
  lessonsLearned: string[];
  architectureNotes: string[];
  evidence: string[];
  evidenceLinks: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "sistemas-de-monitoramento-iot",
    title: "Sistemas de Monitoramento IoT",
    shortDescription:
      "Caso orientado a coleta, validacao e transmissao de dados tecnicos em ambientes de monitoramento e operacao em campo.",
    overview:
      "Projeto focado na sustentacao de sistemas de monitoramento com multiplos sensores, dataloggers e canais de transmissao para uso tecnico em ambiente real.",
    problem:
      "Sistemas de campo com multiplos sensores exigiam coleta continua, validacao inicial dos sinais e transmissao confiavel dos dados, mesmo diante de ruido, variacao operacional e necessidade de rastreabilidade.",
    technicalContext:
      "O contexto exigia integrar sensores, logica embarcada, dataloggers e fluxos de transmissao para que o dado chegasse utilizavel ao monitoramento. Isso inclui leitura, organizacao, verificacao de consistencia e troubleshooting de comunicacao.",
    role:
      "Atuei no ajuste de firmware e rotinas de aquisicao, integracao de sensores, processamento inicial dos dados e suporte tecnico ao diagnostico operacional em campo.",
    result:
      "Contribui para aumentar a confiabilidade da telemetria e a consistencia das medicoes usadas em sistemas reais de monitoramento.",
    stack: ["IoT", "Sensores", "Telemetria", "Dataloggers", "LoRa", "HTTP", "Validacao de dados"],
    coverImage: projectMedia.iot,
    coverAlt: "Fluxo de telemetria e monitoramento aplicado a sistemas tecnicos em campo.",
    gallery: [
      {
        src: projectMedia.iot,
        alt: "Representacao de fluxo de telemetria com sensores e transmissao.",
        caption: "Fluxo de aquisicao e transmissao representando a camada de campo e a leitura operacional."
      },
      {
        src: projectMedia.automation,
        alt: "Painel tecnico de observabilidade e dados.",
        caption: "Visualizacao que representa a consolidacao dos dados para uso operacional."
      }
    ],
    repoUrl: null,
    liveUrl: null,
    featured: true,
    category: "Telemetria aplicada",
    lessonsLearned: [
      "Confiabilidade precisa ser tratada desde a leitura do sinal, e nao apenas no dashboard.",
      "Operacao em campo pede logs, estados claros e diagnostico rapido para reduzir retrabalho."
    ],
    architectureNotes: [
      "Leitura de sensores e condicionamento inicial do sinal.",
      "Validacao local, serializacao e definicao do payload de transmissao.",
      "Envio por canais como LoRa ou HTTP conforme a arquitetura disponivel.",
      "Consumo do dado em monitoramento, analise tecnica ou automacao."
    ],
    evidence: [
      "Atuacao em sensores, dataloggers, transmissao de dados e troubleshooting operacional.",
      "Contribuicao direta em um contexto real de monitoramento e observabilidade tecnica."
    ],
    evidenceLinks: [
      { label: "Perfil GitHub", url: links.github },
      { label: "LinkedIn", url: links.linkedin }
    ]
  },
  {
    slug: "raccoonpnp-maquina-insersora-smd",
    title: "Maquina Insersora SMD / RaccoonPnP",
    shortDescription:
      "Projeto de automacao e prototipagem que combina mecanica, eletronica, controle e logica embarcada em um mesmo fluxo.",
    overview:
      "Caso de integracao end-to-end para uma maquina insersora SMD, em que o desafio central e fazer subsistemas diferentes trabalharem de forma coordenada e previsivel.",
    problem:
      "A construcao de uma maquina insersora SMD demanda sincronismo entre mecanica, acionamento, controle e comportamento do sistema, o que torna a integracao muito mais critica do que a implementacao isolada de cada parte.",
    technicalContext:
      "O projeto exige leitura do comportamento da maquina, validacao de sequencias, ajuste fino de integracao entre componentes e prototipagem iterativa para aproximar a execucao do comportamento esperado.",
    role:
      "Participei da estruturacao da logica de automacao, da integracao entre eletronica, controle e software, e da validacao do comportamento do prototipo.",
    result:
      "O projeto consolidou um caso real de integracao entre mecanica, eletronica e software, reforcando repertorio em firmware, controle e validacao de sistema fisico.",
    stack: ["Automacao", "Firmware", "Controle", "Eletronica", "Prototipagem", "Integracao"],
    coverImage: projectMedia.raccoon,
    coverAlt: "Representacao de integracao entre hardware, firmware e controle para um sistema fisico.",
    gallery: [
      {
        src: projectMedia.raccoon,
        alt: "Composicao de integracao entre subsistemas de hardware e software.",
        caption: "A imagem representa a necessidade de coordenar hardware, logica e verificacao do comportamento."
      },
      {
        src: projectMedia.operations,
        alt: "Fluxo tecnico indicando sequencia e roteamento de operacoes.",
        caption: "Fluxo conceitual para entender a sequencia operacional e a validacao das etapas."
      }
    ],
    repoUrl: "https://github.com/NickolasBernardoAlvarezGomesDev/RaccoonPnP",
    liveUrl: null,
    featured: true,
    category: "Automacao embarcada",
    lessonsLearned: [
      "Projetos fisicos exigem integracao e iteracao constante entre software, eletronica e comportamento mecanico.",
      "Validar sequencia e estados da maquina e tao importante quanto implementar a logica."
    ],
    architectureNotes: [
      "Camada mecanica e de acionamento.",
      "Camada de controle e sequenciamento operacional.",
      "Camada de integracao entre eletronica, software e comportamento esperado.",
      "Validacao iterativa do prototipo em ciclos curtos."
    ],
    evidence: [
      "Repositorio publico: RaccoonPnP.",
      "Projeto aderente a integracao hardware-software em sistema fisico real."
    ],
    evidenceLinks: [{ label: "Repositorio RaccoonPnP", url: "https://github.com/NickolasBernardoAlvarezGomesDev/RaccoonPnP" }]
  },
  {
    slug: "sistema-de-comunicacao-lora",
    title: "Sistema de Comunicacao LoRa",
    shortDescription:
      "Exploracao de conectividade embarcada de longo alcance para transmitir dados tecnicos com estabilidade e baixo acoplamento.",
    overview:
      "Projeto voltado a comunicacao entre dispositivos em cenarios com restricao de alcance, priorizando robustez do enlace e simplicidade operacional.",
    problem:
      "Em contextos distribuidos, a transmissao de dados precisa continuar funcional mesmo quando a infraestrutura de rede nao e a ideal ou quando a topologia do ambiente limita outras abordagens.",
    technicalContext:
      "O desafio esta em organizar leitura, empacotamento e envio dos dados de forma leve, previsivel e compativel com dispositivos embarcados operando com recursos limitados.",
    role:
      "Atuei na estruturacao do fluxo de comunicacao, no entendimento da integracao entre dispositivos e no ajuste da confiabilidade do enlace em cenarios tecnicos.",
    result:
      "O projeto ampliou repertorio em arquitetura de comunicacao embarcada e serviu como base pratica para cenarios de telemetria distribuida.",
    stack: ["LoRa", "IoT", "Embedded", "Comunicacao serial", "Telemetria"],
    coverImage: projectMedia.lora,
    coverAlt: "Representacao de firmware embarcado usado em fluxo de comunicacao tecnica.",
    gallery: [
      {
        src: projectMedia.lora,
        alt: "Diagrama representando camada embarcada e comunicacao.",
        caption: "Base embarcada para coleta e transmissao de dados com recursos enxutos."
      }
    ],
    repoUrl: null,
    liveUrl: null,
    featured: false,
    category: "Comunicacao embarcada",
    lessonsLearned: [
      "A robustez do enlace depende tanto do protocolo quanto da forma como o payload e organizado.",
      "Projetos de comunicacao exigem diagnostico simples e reproduzivel para operacao."
    ],
    architectureNotes: [
      "Leitura local dos dados.",
      "Montagem do pacote de transmissao.",
      "Envio entre dispositivos com foco em estabilidade do enlace.",
      "Recepcao e aproveitamento do dado em outra ponta do sistema."
    ],
    evidence: ["Caso alinhado a telemetria distribuida e sistemas tecnicos de campo."],
    evidenceLinks: []
  },
  {
    slug: "automacoes-e-processamento-de-dados",
    title: "Automacoes e Processamento de Dados",
    shortDescription:
      "Rotinas para tratamento, filtragem, organizacao e integracao de dados tecnicos gerados por processos operacionais.",
    overview:
      "Bloco de projetos focados em reduzir retrabalho manual e tornar dados operacionais mais utilizaveis em analise, monitoramento e tomada de decisao.",
    problem:
      "Processos tecnicos frequentemente geram dados dispersos, inconsistentes ou com baixa padronizacao, o que dificulta leitura operacional e aumenta retrabalho manual.",
    technicalContext:
      "O trabalho envolve organizar pipelines leves, padronizar entradas, tratar excecoes e transformar dados brutos em insumos confiaveis para consumo interno.",
    role:
      "Atuei na construcao de scripts, rotinas de transformacao e pontos de integracao voltados a padronizacao e fluidez operacional.",
    result:
      "As automacoes ajudaram a reduzir tarefas repetitivas e aumentaram a consistencia da informacao utilizada em analise tecnica e operacao.",
    stack: ["Python", "Automacao", "Tratamento de dados", "Integracao", "Scripts"],
    coverImage: projectMedia.automation,
    coverAlt: "Visualizacao de fluxo operacional e consolidacao de dados tecnicos.",
    gallery: [
      {
        src: projectMedia.automation,
        alt: "Painel tecnico representando consolidacao de dados.",
        caption: "Estruturacao de dados para leitura mais direta e uso operacional."
      },
      {
        src: projectMedia.operations,
        alt: "Fluxo de roteamento e integracao operacional.",
        caption: "Representacao de automacoes que conectam origem, tratamento e destino da informacao."
      }
    ],
    repoUrl: null,
    liveUrl: null,
    featured: false,
    category: "Dados e automacao",
    lessonsLearned: [
      "Automacao so gera valor quando reduz friccao real do processo.",
      "Padronizacao e tratamento de excecao importam tanto quanto o script principal."
    ],
    architectureNotes: [
      "Recepcao e leitura de dados de entrada.",
      "Validacao e saneamento do conteudo.",
      "Transformacao para formato util ao processo.",
      "Entrega ao destino final ou integracao com outros sistemas."
    ],
    evidence: ["Bloco util para demonstrar capacidade de integracao e melhoria operacional."],
    evidenceLinks: []
  },
  {
    slug: "compass",
    title: "Compass",
    shortDescription:
      "Base embarcada em MicroPython para leitura de heading com MPU9250, filtragem por Kalman e transmissao serial do angulo.",
    overview:
      "Repositorio publico que consolida experimentos para leitura de bussola embarcada com sensor MPU9250, incluindo calibracao, filtragem e distribuicao do heading.",
    problem:
      "Leituras de heading via magnetometro tendem a sofrer com ruido, salto angular e dependencia de calibracao, o que compromete estabilidade e reaproveitamento do modulo.",
    technicalContext:
      "O projeto trabalha com MicroPython, I2C para leitura do MPU9250, filtros de Kalman escalar e vetorial, e envio do heading filtrado por UART para outra ponta do sistema.",
    role:
      "Estruturei e documentei uma base embarcada para leitura, suavizacao e distribuicao do heading, comparando abordagens simples e experimentais para estabilizacao do angulo medido.",
    result:
      "O repositorio demonstra capacidade de lidar com leitura de sensor, calibracao, filtragem angular e comunicacao entre dispositivos em um fluxo coerente para embarcados.",
    stack: ["MicroPython", "MPU9250", "I2C", "UART", "Kalman filter", "TinyML exploratorio"],
    coverImage: projectMedia.compass,
    coverAlt: "Representacao de firmware embarcado e leitura de sensores inerciais.",
    gallery: [
      {
        src: projectMedia.compass,
        alt: "Representacao de modulo embarcado com sensores.",
        caption: "Leitura do MPU9250 e organizacao da base embarcada em MicroPython."
      },
      {
        src: projectMedia.operations,
        alt: "Fluxo tecnico de transmissao e processamento.",
        caption: "Fluxo conceitual da transmissao serial do heading filtrado e uso em outro dispositivo."
      }
    ],
    repoUrl: "https://github.com/NickolasBernardoAlvarezGomesDev/Compass",
    liveUrl: null,
    featured: false,
    category: "Firmware e sensores",
    lessonsLearned: [
      "Filtrar seno e cosseno reduz descontinuidades proximas de 0 e 360 graus.",
      "Calibracao e parametrizacao precisam ser tratadas como parte da arquitetura, nao como ajuste final."
    ],
    architectureNotes: [
      "Aquisicao do MPU9250 via I2C.",
      "Calibracao e correcao do magnetometro.",
      "Filtragem angular com Kalman escalar e vetorial.",
      "Transmissao do heading filtrado via UART."
    ],
    evidence: [
      "README detalhado descrevendo drivers, filtros e scripts de referencia.",
      "Scripts publicos como bussola_final.py e trancep.py demonstrando filtragem e serializacao."
    ],
    evidenceLinks: [{ label: "Repositorio Compass", url: "https://github.com/NickolasBernardoAlvarezGomesDev/Compass" }]
  },
  {
    slug: "trello-card-api",
    title: "trello-card-api",
    shortDescription:
      "Integracao simples e reutilizavel com a API do Trello para criacao automatizada de cards a partir de scripts ou outros sistemas.",
    overview:
      "Projeto pequeno, mas objetivo, usado para demonstrar organizacao de integracao HTTP, encapsulamento de credenciais e reutilizacao em automacoes.",
    problem:
      "Criar cards manualmente ou repetir chamadas brutas para a API do Trello aumenta friccao operacional quando a demanda vem de scripts, bots ou fluxos internos.",
    technicalContext:
      "O repositorio usa Python, requests e configuracao por arquivo JSON para encapsular autenticacao e criacao de cards em uma interface mais simples de consumo.",
    role:
      "Implementei a classe de integracao, organizei a estrutura do projeto e deixei um caminho reutilizavel para criar cards unitarios ou em lote a partir de texto.",
    result:
      "O projeto demonstra capacidade de transformar uma API externa em uma camada de automacao clara, reaproveitavel e facil de integrar com outros processos.",
    stack: ["Python", "Requests", "Trello REST API", "HTTP", "Automacao"],
    coverImage: projectMedia.trello,
    coverAlt: "Painel e fluxo de integracao representando automacao com API externa.",
    gallery: [
      {
        src: projectMedia.trello,
        alt: "Painel abstrato de automacao e integracao.",
        caption: "Representacao da camada de integracao reutilizavel com API externa."
      }
    ],
    repoUrl: "https://github.com/NickolasBernardoAlvarezGomesDev/trello-card-api",
    liveUrl: null,
    featured: false,
    category: "Integracao e automacao",
    lessonsLearned: [
      "Encapsular autenticacao e defaults reduz atrito para reaproveitamento do codigo.",
      "Mesmo integracoes pequenas ganham qualidade quando a estrutura do projeto e previsivel."
    ],
    architectureNotes: [
      "Leitura das credenciais por arquivo JSON.",
      "Encapsulamento da API em uma classe dedicada.",
      "Criacao de cards unitarios e em lote a partir de strings.",
      "Uso como bloco reutilizavel em scripts ou sistemas internos."
    ],
    evidence: [
      "README descrevendo objetivo, stack e estrutura de diretorios.",
      "Classe TrelloAPI com create_card e create_cards_from_string."
    ],
    evidenceLinks: [{ label: "Repositorio trello-card-api", url: "https://github.com/NickolasBernardoAlvarezGomesDev/trello-card-api" }]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
