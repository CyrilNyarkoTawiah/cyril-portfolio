import Reveal from './Reveal'
import { cn } from '../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
  /** Render as h1 (page heading) or h2 (section heading). */
  as?: 'h1' | 'h2'
}

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-2',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-brand">
        <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-brand" />
        {eyebrow}
      </span>
      <Tag className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
        {title}
      </Tag>
    </Reveal>
  )
}
