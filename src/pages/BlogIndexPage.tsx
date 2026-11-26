import BlogCard, { formatDate } from '../components/BlogCard'
import Reveal from '../components/Reveal'
import { posts } from '../data/posts'

export default function BlogIndexPage() {
  return (
    <div className="pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Insights & process notes
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Writing on design, 3D visualisation, software development and digital innovation.
        </p>
        <div className="mt-10 flex flex-col gap-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export { formatDate }
