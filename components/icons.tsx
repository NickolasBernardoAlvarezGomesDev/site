export type IconProps = {
  className?: string;
};

function iconClass(className?: string) {
  return className ?? "h-5 w-5";
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass(className)} aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.793 23.385c.6.11.82-.26.82-.577v-2.02c-3.338.726-4.042-1.417-4.042-1.417-.547-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.303.762-1.602-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.525.117-3.18 0 0 1.008-.323 3.3 1.23a11.454 11.454 0 0 1 6 0c2.29-1.553 3.296-1.23 3.296-1.23.654 1.655.243 2.877.119 3.18.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.921.43.37.814 1.103.814 2.222v3.293c0 .32.217.694.825.576A12.001 12.001 0 0 0 12 .5Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  const whatsappClass = className ? `${className} origin-center scale-[0.9]` : "h-5 w-5 origin-center scale-[0.9]";

  return (
    <svg viewBox="0 0 32 32" className={whatsappClass} aria-hidden="true" fill="currentColor">
      <path d="M15.96 2.67C8.7 2.67 2.8 8.42 2.8 15.52c0 2.27.6 4.48 1.74 6.42L2.8 28.4l6.63-1.73a13.35 13.35 0 0 0 6.53 1.69c7.26 0 13.16-5.76 13.16-12.84c0-3.43-1.34-6.65-3.78-9.07c-2.43-2.42-5.66-3.78-9.38-3.78Zm0 23.43h-.01c-2.09 0-4.15-.55-5.96-1.59l-.39-.23-3.93 1.02 1.04-3.8-.25-.4a10.93 10.93 0 0 1-1.66-5.58c0-5.84 4.99-10.59 11.16-10.59c2.97 0 5.76 1.08 7.83 3.15c2.09 2.07 3.24 4.82 3.24 7.45c0 5.85-4.99 10.58-11.07 10.58Z" />
      <path d="M22.52 18.15c-.35-.17-2.03-.99-2.35-1.1c-.31-.11-.54-.16-.78.17c-.22.34-.9 1.08-1.11 1.3c-.2.23-.4.25-.75.08c-.35-.17-1.49-.54-2.83-1.72c-1.04-.93-1.75-2.06-1.95-2.4c-.2-.34-.02-.52.15-.69c.16-.15.35-.39.53-.59c.17-.2.23-.34.35-.56c.12-.23.06-.42-.03-.59c-.08-.17-.77-1.85-1.05-2.54c-.28-.67-.56-.59-.77-.6h-.65c-.22 0-.57.08-.88.41c-.3.34-1.16 1.12-1.16 2.73c0 1.6 1.18 3.14 1.34 3.36c.16.22 2.31 3.52 5.61 4.94c.79.34 1.4.55 1.89.7c.79.25 1.5.21 2.07.13c.63-.09 2-.81 2.27-1.58c.27-.77.27-1.43.19-1.57c-.08-.14-.31-.22-.66-.39Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass(className)} aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm-.45 15.5v-5.3c0-2.84-1.52-4.16-3.54-4.16-1.63 0-2.36.9-2.76 1.53v-1.31H9.46c.04.87 0 9.24 0 9.24h2.8v-5.16c0-.28.02-.56.1-.76.22-.56.72-1.14 1.56-1.14 1.1 0 1.54.86 1.54 2.12v4.94ZM6.24 8.11c.98 0 1.58-.65 1.58-1.46-.02-.83-.6-1.46-1.56-1.46-.96 0-1.58.63-1.58 1.46 0 .81.6 1.46 1.54 1.46Zm1.4 10.39V9.26H4.84v9.24Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function CpuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M19 9h4M19 15h4M1 9h4M1 15h4" />
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
      <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

export function RadioIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.48M7.76 7.76a6 6 0 0 0 0 8.48" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M21 3a5 5 0 0 1-6.86 4.64L6.4 15.38a2 2 0 1 1-2.83-2.83l7.74-7.74A5 5 0 0 1 21 3Z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v5H5V5h5" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function WorkflowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <rect x="3" y="4" width="7" height="5" rx="1.5" />
      <rect x="14" y="15" width="7" height="5" rx="1.5" />
      <rect x="14" y="4" width="7" height="5" rx="1.5" />
      <path d="M10 6.5h4M12 6.5v11M12 17.5h2" />
    </svg>
  );
}

export function TerminalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="m4 6 4 4-4 4" />
      <path d="M12 18h8" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" />
    </svg>
  );
}

export function ActivityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  );
}

export function FileCodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <path d="m10 13-2 2 2 2M14 13l2 2-2 2" />
    </svg>
  );
}

export function GitBranchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 5h6a4 4 0 0 1 4 4v1" />
      <path d="M6 7v8a3 3 0 0 0 3 3h7" />
    </svg>
  );
}

export function SparklesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
    </svg>
  );
}

export function LaptopIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass(className)} aria-hidden="true">
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M2 19h20" />
    </svg>
  );
}
