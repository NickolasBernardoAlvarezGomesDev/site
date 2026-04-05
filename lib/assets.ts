export type LocalAsset = {
  src: string;
  alt: string;
};

export const IMAGES = {
  hero: {
    primary: {
      src: "/assets/svg/illustrations/engineering/hardware-software-bridge.svg",
      alt: "Ilustracao de integracao entre hardware, firmware, dashboards e software."
    },
    secondary: {
      src: "/assets/svg/illustrations/engineering/telemetry-monitoring.svg",
      alt: "Ilustracao de telemetria, sensores, alertas e monitoramento."
    }
  },
  value: {
    firmware: {
      src: "/assets/svg/illustrations/engineering/embedded-firmware.svg",
      alt: "Ilustracao de firmware, microcontroladores e integracao com perifericos."
    },
    telemetry: {
      src: "/assets/svg/illustrations/engineering/telemetry-monitoring.svg",
      alt: "Ilustracao de observabilidade e telemetria aplicada."
    },
    data: {
      src: "/assets/svg/illustrations/proof/operations-dashboard.svg",
      alt: "Ilustracao de dashboard tecnico com metricas operacionais e fluxo de dados."
    }
  },
  projects: {
    iotMonitoring: {
      src: "/assets/svg/illustrations/engineering/telemetry-monitoring.svg",
      alt: "Ilustracao de telemetria e monitoramento tecnico em campo."
    },
    hardwareSoftware: {
      src: "/assets/svg/illustrations/engineering/hardware-software-bridge.svg",
      alt: "Ilustracao de integracao entre hardware, firmware e software."
    },
    routing: {
      src: "/assets/svg/illustrations/proof/lead-routing.svg",
      alt: "Ilustracao de roteamento tecnico e fluxo de integracao entre etapas."
    }
  },
  contact: {
    primary: {
      src: "/assets/svg/illustrations/engineering/hardware-software-bridge.svg",
      alt: "Ilustracao de integracao de sistemas e engenharia aplicada."
    }
  }
} as const satisfies Record<string, Record<string, LocalAsset>>;

export const ICONS = {
  brands: {
    whatsapp: "/assets/svg/icons/brands/whatsapp.svg",
    forms: "/assets/svg/icons/brands/forms.svg",
    github: "/assets/svg/icons/brands/github.svg",
    linkedin: "/assets/svg/icons/brands/linkedin.svg"
  },
  services: {
    support: "/assets/svg/icons/services/support.svg",
    chatbot: "/assets/svg/icons/services/chatbot.svg",
    integration: "/assets/svg/icons/services/integration.svg",
    workflow: "/assets/svg/icons/services/workflow.svg",
    alerts: "/assets/svg/icons/services/alerts.svg",
    automation: "/assets/svg/icons/services/automation.svg",
    dashboard: "/assets/svg/icons/services/dashboard.svg",
    api: "/assets/svg/icons/services/api.svg",
    webhook: "/assets/svg/icons/services/webhook.svg",
    crm: "/assets/svg/icons/services/crm.svg",
    spreadsheet: "/assets/svg/icons/services/spreadsheet.svg"
  },
  engineering: {
    sensor: "/assets/svg/icons/engineering/sensor.svg",
    sensors: "/assets/svg/icons/engineering/sensor.svg",
    firmware: "/assets/svg/icons/engineering/firmware.svg",
    telemetry: "/assets/svg/icons/engineering/telemetry.svg",
    hardware: "/assets/svg/icons/engineering/hardware.svg",
    microcontroller: "/assets/svg/icons/engineering/microcontroller.svg",
    dataAcquisition: "/assets/svg/icons/engineering/data-acquisition.svg",
    customProject: "/assets/svg/icons/engineering/custom-project.svg"
  },
  ui: {
    arrowRight: "/assets/svg/icons/ui/arrow-right.svg",
    check: "/assets/svg/icons/ui/check.svg",
    menu: "/assets/svg/icons/ui/menu.svg",
    close: "/assets/svg/icons/ui/close.svg",
    copy: "/assets/svg/icons/ui/copy.svg",
    externalLink: "/assets/svg/icons/ui/external-link.svg",
    link: "/assets/svg/icons/ui/link.svg",
    mail: "/assets/svg/icons/ui/mail.svg",
    calendar: "/assets/svg/icons/ui/calendar.svg",
    mapPin: "/assets/svg/icons/ui/map-pin.svg",
    gitBranch: "/assets/svg/icons/ui/git-branch.svg"
  }
} as const;
