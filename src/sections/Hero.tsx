import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, MapPin } from 'lucide-react'
import { site } from '../data/site'
import { BehanceLink } from '../components/Footer'
import portrait from '../assets/portrait.jpg'
import { navigateToSection } from '../lib/scroll'

const ease = [0.22, 0.61, 0.36, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const item = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 26 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  })

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left column */}
        <div>
          <motion.p {...item(0)} className="text-sm font-semibold tracking-[0.18em] text-steel">
            HELLO, I&rsquo;M
          </motion.p>
          <motion.h1
            {...item(0.08)}
            className="font-display mt-3 text-5xl font-extrabold leading-[1.04] tracking-tight text-ink md:text-6xl lg:text-[64px]"
          >
            Cyril Nyarko
            <br />
            Tawiah
          </motion.h1>
          <motion.div {...item(0.18)} className="mt-5 flex flex-wrap items-center gap-x-2.5 text-lg text-steel md:text-xl">
            <span>Designer</span>
            <span aria-hidden="true" className="text-brand">•</span>
            <span>3D Visualizer</span>
            <span aria-hidden="true" className="text-brand">•</span>
            <span>Developer</span>
          </motion.div>

          <motion.p {...item(0.26)} className="mt-7 border-l-[3px] border-brand pl-4">
            <span className="font-display block text-2xl font-bold text-brand md:text-[28px]">
              {site.motto[0]}
            </span>
            <span className="font-display block text-2xl font-bold text-ink md:text-[28px]">
              {site.motto[1]}
            </span>
          </motion.p>

          <motion.p {...item(0.34)} className="mt-6 max-w-[52ch] leading-relaxed text-steel">
            {site.intro}
          </motion.p>

          <motion.div {...item(0.42)} className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => navigateToSection('projects')}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Explore Projects
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div {...item(0.5)} className="mt-9 flex items-center gap-5">
            <div className="flex items-center gap-4 text-ink">
              <BehanceLink className="transition-colors hover:text-brand" />
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-brand"
              >
                <Github size={20} />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-brand"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <span aria-hidden="true" className="h-5 w-px bg-navy/15" />
            <p className="inline-flex items-center gap-1.5 text-sm text-steel">
              <MapPin size={15} className="text-brand" /> {site.location}
            </p>
          </motion.div>
        </div>

        {/* Right column, portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          {/* Green blob + pale accent behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-4 h-[103%] w-[86%] rotate-6 rounded-[32px] bg-brand/85"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 h-[52%] w-[40%] rotate-[-8deg] rounded-[28px] bg-pale"
          />
          <img
            src={portrait}
            alt="Portrait of Cyril Nyarko Tawiah"
            width={460}
            height={560}
            className="relative z-10 aspect-[4/5] w-full rounded-[28px] object-cover shadow-[0_24px_60px_-24px_rgba(23,32,51,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
