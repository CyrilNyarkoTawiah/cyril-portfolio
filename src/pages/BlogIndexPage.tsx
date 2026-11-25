import { Link } from 'react-router-dom'
import { CalendarDays, Clock } from 'lucide-react'
import { posts } from '../data/posts'
import Reveal from '../components/Reveal'

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function BlogIndexPage() {
  return (
    <div className="pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
          Insights & process notes
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Writing on design, 3D visualisation, software development and digital innovation.
        </p>
        <div className="mt-10 flex flex-col gap-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                to={`/blog/${post.slug}`}
                className="group grid gap-5 overflow-hidden rounded-2xl border border-navy/8 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_rgba(23,32,51,0.25)] sm:grid-cols-[240px_1fr] md:grid-cols-[280px_1fr]"
              >
                {post.image && (
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1.5 px-1 py-1 sm:py-2 sm:pl-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {post.category}
                  </span>
                  <h2 className="font-display text-xl font-bold text-navy md:text-2xl">{post.title}</h2>
                  <p className="line-clamp-2 text-sm leading-relaxed text-steel">{post.description}</p>
                  <p className="mt-auto flex items-center gap-4 pt-2 text-xs text-steel/80">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} /> {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} /> {post.readingTime}
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export { formatDate }
