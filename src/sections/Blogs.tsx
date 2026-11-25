import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { posts } from '../data/posts'

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function Blogs() {
  return (
    <section id="blogs" className="scroll-mt-24 bg-surface2/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Blogs" title="Insights & process notes" />
        <div className="mt-10 flex flex-col gap-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/8 bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_16px_36px_-20px_rgba(23,32,51,0.25)] sm:flex-row sm:items-center"
              >
                {post.image && (
                  <div className="overflow-hidden rounded-xl sm:w-56 md:w-64">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-1.5 px-1 pb-2 sm:px-2 sm:py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {post.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-steel">
                    {post.description}
                  </p>
                  <p className="mt-2 flex items-center gap-4 text-xs text-steel/80">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} /> {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} /> {post.readingTime}
                    </span>
                  </p>
                </div>
                <span className="mr-2 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pale text-brand transition-colors group-hover:bg-brand group-hover:text-white sm:inline-flex">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
