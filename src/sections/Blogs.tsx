import BlogCard from '../components/BlogCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { posts } from '../data/posts'

export default function Blogs() {
  return (
    <section id="blogs" className="scroll-mt-24 bg-surface2/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Blogs" title="Insights & process notes" />
        <div className="mt-10 flex flex-col gap-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

