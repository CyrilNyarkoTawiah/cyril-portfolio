import { cn } from '../lib/cn'

/** The CT lettermark — navy C, green T. */
export function CTMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'font-display inline-flex items-center justify-center font-extrabold leading-none',
        className,
      )}
    >
      <span className="text-ink">C</span>
      <span className="text-brand">T</span>
    </span>
  )
}

export default function CTLogo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  return (
    <span className="flex items-center gap-3">
      <CTMark className={variant === 'dark' ? 'text-2xl' : 'text-2xl brightness-0 invert'} />
      <span
        aria-hidden="true"
        className={cn('h-6 w-px', variant === 'dark' ? 'bg-white/20' : 'bg-white/25')}
      />
      <span
        className={cn(
          'font-display text-base font-bold tracking-tight md:text-lg',
          variant === 'dark' ? 'text-ink' : 'text-white',
        )}
      >
        Cyril Nyarko Tawiah
      </span>
    </span>
  )
}
