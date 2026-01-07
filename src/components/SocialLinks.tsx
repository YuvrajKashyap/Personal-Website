// this is my reusable social links row (icons with hover + click)
// i’ll reuse this in hero + contact so everything stays consistent

import { site } from "@/content/site";

type SocialItem = {
  label: string;
  href: string;
  icon: (props: { className?: string }) => JSX.Element;
};

function IconGithub({ className }: { className?: string }) {
  return (
    // github icon (simple inline svg so i don’t need extra libraries)
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48
        0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63
        1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07
        0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05.8-.23 1.66-.35 2.51-.35
        .85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75
        0 3.94-2.34 4.81-4.57 5.06.36.32.69.95.69 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48
        A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.3V9h3.41v1.56h.05
        c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V9H3.56v11.45z"
      />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 7.2a3 3 0 0 0-2.11-2.13C17.82 4.6 12 4.6 12 4.6s-5.82 0-7.49.47A3 3 0 0 0 2.4 7.2
        31.3 31.3 0 0 0 2 12s.05 2.6.4 4.8a3 3 0 0 0 2.11 2.13c1.67.47 7.49.47 7.49.47s5.82 0 7.49-.47
        a3 3 0 0 0 2.11-2.13c.35-2.2.4-4.8.4-4.8s-.05-2.6-.4-4.8zM10.2 15.4V8.6l6 3.4-6 3.4z"
      />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.78L23 22h-6.9l-5.4-7.02L4.6 22H2l7.3-8.35L1 2h7l4.9 6.4L18.9 2zm-1.2 18h1.7L7.2 3.9H5.4L17.7 20z"
      />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z"
      />
      <path
        fill="currentColor"
        d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.1A2.9 2.9 0 1 0 12 15a2.9 2.9 0 0 0 0-5.9z"
      />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5H4zm16 10V10l-8 5-8-5v8h16z"
      />
    </svg>
  );
}

export function SocialLinks() {
  // i’m listing these in the order i want them shown
  const items: SocialItem[] = [
    { label: "github", href: site.links.github, icon: IconGithub },
    { label: "linkedin", href: site.links.linkedin, icon: IconLinkedIn },
    { label: "youtube", href: site.links.youtube, icon: IconYouTube },
    { label: "x", href: site.links.x, icon: IconX },
    { label: "instagram", href: site.links.instagram, icon: IconInstagram },
    { label: "email", href: `mailto:${site.links.email}`, icon: IconMail },
  ];

  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={item.label}
          className="
            inline-flex h-10 w-10 items-center justify-center
            rounded-xl border border-white/10 bg-white/5
            text-white/70
            transition-colors
            hover:bg-white/10 hover:text-white hover:border-white/20
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40
          "
        >
          <item.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
