import githubIcon from "@/assets/svg/icons/brands/github.svg";
import linkedinIcon from "@/assets/svg/icons/brands/linkedin.svg";
import whatsappIcon from "@/assets/svg/icons/brands/whatsapp.svg";
import arrowRightIcon from "@/assets/svg/icons/ui/arrow-right.svg";
import externalLinkIcon from "@/assets/svg/icons/ui/external-link.svg";
import mailIcon from "@/assets/svg/icons/ui/mail.svg";
import mapPinIcon from "@/assets/svg/icons/ui/map-pin.svg";
import menuIcon from "@/assets/svg/icons/ui/menu.svg";
import closeIcon from "@/assets/svg/icons/ui/close.svg";
import calendarIcon from "@/assets/svg/icons/ui/calendar.svg";
import checkIcon from "@/assets/svg/icons/ui/check.svg";
import firmwareIcon from "@/assets/svg/icons/engineering/firmware.svg";
import telemetryIcon from "@/assets/svg/icons/engineering/telemetry.svg";
import dataAcquisitionIcon from "@/assets/svg/icons/engineering/data-acquisition.svg";
import microcontrollerIcon from "@/assets/svg/icons/engineering/microcontroller.svg";
import hardwareIcon from "@/assets/svg/icons/engineering/hardware.svg";
import customProjectIcon from "@/assets/svg/icons/engineering/custom-project.svg";
import apiIcon from "@/assets/svg/icons/services/api.svg";
import workflowIcon from "@/assets/svg/icons/services/workflow.svg";
import dashboardIcon from "@/assets/svg/icons/services/dashboard.svg";
import integrationIcon from "@/assets/svg/icons/services/integration.svg";
import embeddedFirmwareArt from "@/assets/svg/projects/embedded-firmware.svg";
import hardwareSoftwareBridgeArt from "@/assets/svg/projects/hardware-software-bridge.svg";
import leadRoutingArt from "@/assets/svg/projects/lead-routing.svg";
import operationsDashboardArt from "@/assets/svg/projects/operations-dashboard.svg";
import telemetryMonitoringArt from "@/assets/svg/projects/telemetry-monitoring.svg";

export const brandIcons = {
  github: githubIcon,
  linkedin: linkedinIcon,
  whatsapp: whatsappIcon
} as const;

export const uiIcons = {
  arrowRight: arrowRightIcon,
  calendar: calendarIcon,
  check: checkIcon,
  close: closeIcon,
  externalLink: externalLinkIcon,
  mail: mailIcon,
  mapPin: mapPinIcon,
  menu: menuIcon
} as const;

export const engineeringIcons = {
  customProject: customProjectIcon,
  dataAcquisition: dataAcquisitionIcon,
  firmware: firmwareIcon,
  hardware: hardwareIcon,
  microcontroller: microcontrollerIcon,
  telemetry: telemetryIcon
} as const;

export const serviceIcons = {
  api: apiIcon,
  dashboard: dashboardIcon,
  integration: integrationIcon,
  workflow: workflowIcon
} as const;

export const projectMedia = {
  aboutPreview: hardwareSoftwareBridgeArt,
  automation: operationsDashboardArt,
  compass: embeddedFirmwareArt,
  hero: telemetryMonitoringArt,
  iot: telemetryMonitoringArt,
  lora: embeddedFirmwareArt,
  operations: leadRoutingArt,
  raccoon: hardwareSoftwareBridgeArt,
  trello: operationsDashboardArt
} as const;
