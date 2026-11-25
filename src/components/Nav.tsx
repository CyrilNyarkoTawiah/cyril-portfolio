import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import CTLogo from './CTLogo'
import { cn } from '../lib/cn'

export default function Nav() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname, state } = useLocation() as { pathname: string; state?: { scrollTo?: string } }
  const pendingScroll = useRef<string | null>(null)

  // Pending section scroll after navigating home from another page.
  useEffect(() => {
    if (pathname === '/' && state?.scrollTo) {
      pendingScroll.current = state.scrollTo
      // Consume by replacing state.
      navigate('/', { replace: true, state: null })
    }
  }, [pathname, state, navigate])

  useEffect(() => {
    if (pathname !== '/' || !pendingScroll.current) return
    const id = pendingScroll.current
    pendingScroll.current = null
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 350)
    return () => window.clearTimeout(t)
  }, [pathname])

  // Scroll-spy on the home page sections.
  useEffect(() => {
    if (pathname !== '/') return
    const sections = navLinks
      .map((l) => l.href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.1, 0.25] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (href: string) => {
    setOpen(false)
    const id = href.replace('#', '')
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  const goHome = () => {
    setOpen(false)
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur transition-shadow duration-300',
        scrolled && 'shadow-[0_1px_0_0_rgba(23,32,51,0.08),0_8px_24px_-16px_rgba(23,32,51,0.18)]',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-[72px] md:px-8"
      >
        <button
          onClick={goHome}
          aria-label="Home — Cyril Nyarko Tawiah"
          className="shrink-0 cursor-pointer"
        >
          <CTLogo />
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = pathname === '/' && active === id
            return (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative cursor-pointer text-[15px] font-medium transition-colors',
                  isActive ? 'text-brand' : 'text-ink/80 hover:text-ink',
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand transition-all duration-300',
                    isActive ? 'opacity-100' : 'scale-x-0 opacity-0',
                  )}
                />
              </button>
            )
          })}
          <button
            onClick={() => goTo('contact')}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Let&rsquo;s Talk
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-white/10 bg-paper px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => goTo(link.href)}
                  className="w-full cursor-pointer border-b border-white/10 py-3.5 text-left font-display text-lg font-semibold text-ink"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => goTo('contact')}
            className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-deep"
          >
            Let&rsquo;s Talk <ArrowRight size={16} />
          </button>
          <p className="mt-4 text-center text-xs text-steel">{site.location}</p>
        </div>
      )}
    </header>
  )
}
