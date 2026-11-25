import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'
import { getPost } from '../data/posts'
import { formatDate } from './BlogIndexPage'
import Reveal from '../components/Reveal'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 pb-24 pt-40 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Article not found</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-brand">
          <ArrowLeft size={17} /> All articles
        </Link>
      </div>
    )
  }

  return (
    <article className="pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Link
          to="/"
          state={{ scrollTo: 'blogs' }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-steel transition-colors hover:text-brand"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-brand">
          {post.category}
        </span>
        <h1 className="font-display mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 flex items-center gap-4 text-sm text-steel">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} /> {post.readingTime}
          </span>
        </p>

        {post.image && (
          <Reveal className="mt-8">
            <img
              src={post.image}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl border border-white/8 object-cover"
            />
          </Reveal>
        )}

        <div className="mt-8 flex flex-col gap-5 text-[16.5px] leading-[1.75] text-ink/85">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} className="font-display mt-4 text-2xl font-bold text-ink">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={i}
                  className="my-2 border-l-[3px] border-brand pl-5 font-display text-xl font-semibold text-ink"
                >
                  {block.text}
                </blockquote>
              )
            }
            return <p key={i}>{block.text}</p>
          })}
        </div>
      </div>
    </article>
  )
}
