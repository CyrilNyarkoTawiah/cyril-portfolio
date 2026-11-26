import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import type { Post } from '../data/posts'

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function Meta({ post, light = false }: { post: Post; light?: boolean }) {
  return (
    <p className={`flex items-center gap-4 text-xs ${light ? 'text-white/60' : 'text-steel/80'}`}>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays size={13} /> {formatDate(post.date)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock size={13} /> {post.readingTime}
      </span>
    </p>
  )
}

/**
 * Each post carries its own card variant, so the blog list reads as five
 * distinct designs rather than one repeated row. Variants:
 *   split     - navy card, cover on the right, white text (taste-is-the-new-scarcity)
 *   editorial - pale green panel, pill category chip, green rule (from-concept-to-3d)
 *   poster    - full-bleed cover, white body, hairline meta divider (edge AI)
 *   stacked   - full-bleed cover over a navy title band (digital twins)
 *   framed    - inset cover with an offset pale frame that turns green on hover (spatial)
 */
export default function BlogCard({ post }: { post: Post }) {
  if (post.card === 'split') {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl bg-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-22px_rgba(23,32,51,0.55)] md:flex-row-reverse md:items-stretch"
      >
        {post.image && (
          <div className="overflow-hidden md:w-2/5">
            <img
              src={post.image}
              alt=""
              loading="lazy"
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] md:h-full"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2 p-6 md:p-7">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9fc98f]">
            {post.category}
          </span>
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">{post.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-white/70">{post.description}</p>
          <div className="mt-auto flex items-center justify-between pt-3">
            <Meta post={post} light />
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (post.card === 'editorial') {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col gap-5 overflow-hidden rounded-2xl bg-pale p-5 transition-all duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-6"
      >
        {post.image && (
          <div className="overflow-hidden rounded-xl sm:w-60 md:w-72">
            <img
              src={post.image}
              alt=""
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-1 w-12 rounded-full bg-brand" />
          <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-deep">
            {post.category}
          </span>
          <h3 className="font-display text-xl font-bold text-ink md:text-2xl">{post.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-steel">{post.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <Meta post={post} />
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (post.card === 'stacked') {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_16px_36px_-20px_rgba(23,32,51,0.25)] transition-all duration-300 hover:-translate-y-0.5"
      >
        {post.image && (
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt=""
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2 bg-ink p-5 md:p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9fc98f]">
            {post.category}
          </span>
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">{post.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-white/70">{post.description}</p>
          <div className="mt-3">
            <Meta post={post} light />
          </div>
        </div>
      </Link>
    )
  }

  if (post.card === 'poster') {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_rgba(23,32,51,0.25)]"
      >
        {post.image && (
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt=""
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {post.category}
          </span>
          <h3 className="font-display text-xl font-bold text-ink md:text-2xl">{post.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-steel">{post.description}</p>
          <div className="mt-3 border-t border-navy/8 pt-3">
            <Meta post={post} />
          </div>
        </div>
      </Link>
    )
  }

  // 'framed'
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-navy/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_rgba(23,32,51,0.25)] md:p-6"
    >
      {post.image && (
        <div className="overflow-hidden rounded-lg border-[5px] border-pale shadow-[10px_10px_0_0_#eaf2e6] transition-all duration-300 group-hover:shadow-[6px_6px_0_0_#4f8a3b]">
          <img
            src={post.image}
            alt=""
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 px-1 pb-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          {post.category}
        </span>
        <h3 className="font-display text-xl font-bold text-ink md:text-2xl">{post.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-steel">{post.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <Meta post={post} />
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pale text-brand transition-colors group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}
