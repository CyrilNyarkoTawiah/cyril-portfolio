import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { site } from '../data/site'
import CTLogo from './CTLogo'

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.84 11.03c.7-.36 1.13-.98 1.13-1.9 0-1.95-1.47-2.63-3.32-2.63H2v11.02h4.8c1.99 0 3.79-.94 3.79-3.15 0-1.37-.68-2.36-1.75-2.79zM4.44 8.35h2.13c.83 0 1.47.24 1.47 1.14 0 .85-.56 1.17-1.4 1.17H4.44V8.35zm2.35 7.32H4.44v-2.7h2.4c.98 0 1.63.4 1.63 1.4 0 .98-.72 1.3-1.68 1.3zM18.5 8.05h-4.6V6.86h4.6v1.19zm3.06 6.03c0-2.5-1.48-4.44-4.13-4.44-2.57 0-4.33 1.9-4.33 4.4 0 2.55 1.66 4.38 4.33 4.38 2.03 0 3.65-.94 4.02-2.94h-2.06c-.19.8-.98 1.3-1.9 1.3-1.32 0-2.05-.77-2.05-2.1h6.09c.02-.2.03-.4.03-.6zm-6.12-1.06c.07-1.06.76-1.83 1.97-1.83 1.14 0 1.85.83 1.9 1.83h-3.87z" />
    </svg>
  )
}

export function BehanceLink({ className }: { className?: string }) {
  return (
    <a
      href={site.socials.behance}
      target="_blank"
      rel="noreferrer"
      aria-label="Behance"
      className={className}
    >
      <BehanceIcon className="h-5 w-5" />
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <CTLogo variant="light" />
            <p className="font-display text-sm font-semibold text-pale">
              {site.motto[0]}
              <span className="text-brand"> {site.motto[1]}</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: site.socials.behance, label: 'Behance', icon: <BehanceIcon className="h-4.5 w-4.5" /> },
              { href: site.socials.github, label: 'GitHub', icon: <Github size={18} /> },
              { href: site.socials.linkedin, label: 'LinkedIn', icon: <Linkedin size={18} /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1 text-white/80 transition-colors hover:text-brand"
          >
            {site.email} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
