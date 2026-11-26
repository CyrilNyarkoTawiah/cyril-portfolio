import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, Car, Route } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projectFilters, projects, type Project } from '../data/projects'
import { useState } from 'react'
import { cn } from '../lib/cn'

function ProjectCover({ project }: { project: Project }) {
  // Designed brand cover for apps without real screenshots, never a fabricated UI image.
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#0a0f1b]">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/25 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-pale/10 blur-2xl"
      />
      {project.icon ? (
        <img
          src={project.icon}
          alt={`${project.title} app icon`}
          className="z-10 h-24 w-24 rounded-[22px] object-cover shadow-lg md:h-28 md:w-28"
        />
      ) : (
        <span className="z-10 inline-flex h-24 w-24 items-center justify-center rounded-[22px] bg-white/10 text-pale md:h-28 md:w-28">
          {project.coverIcon === 'route' ? <Route size={44} /> : <Car size={44} />}
        </span>
      )}
      <span className="font-display absolute bottom-3 left-4 z-10 text-sm font-bold tracking-wide text-white/85">
        {project.category}
      </span>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <Link
        to={`/project/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-surface shadow-[0_2px_12px_-6px_rgba(23,32,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(23,32,51,0.25)]"
      >
        <div className="overflow-hidden">
          {(project.cover ?? project.images?.[0]) ? (
            <img
              src={project.cover ?? project.images?.[0]}
              alt={project.title}
              loading="lazy"
              className={
                project.cardFit === 'cover'
                  ? 'aspect-[16/10] w-full object-cover'
                  : project.gallery === 'phone' || project.category === 'Android Applications'
                    ? 'aspect-[16/10] w-full bg-navy/5 object-contain p-3'
                    : 'aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]'
              }
            />
          ) : (
            <ProjectCover project={project} />
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-bold leading-snug text-ink">
              {project.title}
            </h3>
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pale text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-steel [align-self:stretch] flex-1">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
            <span className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink/80">
              {project.category}
            </span>
            {project.tools.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const visible = projects.filter(
    (p) => filter === 'All' || p.categories.includes(filter),
  )

  return (
    <section id="projects" className="scroll-mt-24 bg-surface2/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured Projects" title="Selected Works" />
        </div>

        {/* Filters */}
        <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                'cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors',
                filter === f
                  ? 'bg-brand text-white'
                  : 'border border-navy/12 bg-paper text-ink/70 hover:border-brand/40 hover:text-brand',
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* DCDA recognition feature */}
        {filter === 'All' && (
          <Reveal delay={0.08} className="mt-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-brand/25 bg-pale p-6 md:flex-row md:items-center md:gap-6 md:p-8">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                <Award size={28} />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink md:text-xl">
                  Best of the Best, DCDA Long Beach 2024
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink/75 md:max-w-3xl">
                  Apex Legends: Autumn Estates Reimagined was selected as a Best of the Best
                  exhibitor at the DCDA Long Beach International Design Invitation Exhibition,
                  California State University, Long Beach, USA, {' '}
                  <Link to="/project/apex-autumn-estates" className="font-semibold text-brand underline underline-offset-2">
                    see the project
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
