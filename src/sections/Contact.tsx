import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'
import { BehanceLink } from '../components/Footer'
import { Github, Linkedin } from 'lucide-react'

interface Fields {
  name: string
  email: string
  subject: string
  message: string
}

const empty: Fields = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [sent, setSent] = useState(false)

  const set = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    setErrors((er) => ({ ...er, [key]: undefined }))
    setSent(false)
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: Partial<Fields> = {}
    if (!fields.name.trim()) er.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) er.email = 'Please enter a valid email address.'
    if (!fields.subject.trim()) er.subject = 'Please add a subject.'
    if (!fields.message.trim()) er.message = 'Please write a short message.'
    setErrors(er)
    if (Object.keys(er).length > 0) return

    // Static site: compose the message in the visitor's own email app. Nothing is "sent"
    // until they press send there, so we never show a false success state.
    const body = [
      `Hi Cyril,`,
      ``,
      fields.message,
      ``,
      `— ${fields.name} (${fields.email})`,
    ].join('\n')
    const url = `mailto:${site.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = url
    setSent(true)
  }

  const inputCls = (hasError?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy placeholder:text-steel/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 ${
      hasError ? 'border-red-400 focus:ring-red-300' : 'border-navy/12 focus:border-brand'
    }`

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Contact" title="Let's build something together" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Details */}
          <Reveal className="flex flex-col gap-5">
            <p className="max-w-[46ch] leading-relaxed text-steel">
              Have a publication to lay out, a space to visualise, or an app to build? My inbox
              is open.
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3.5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pale text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Mail size={19} />
                  </span>
                  <span className="text-[15px] font-medium text-navy transition-colors group-hover:text-brand">
                    {site.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="group flex items-center gap-3.5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pale text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Phone size={19} />
                  </span>
                  <span className="text-[15px] font-medium text-navy transition-colors group-hover:text-brand">
                    {site.phones.join('  ·  ')}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pale text-brand">
                  <MapPin size={19} />
                </span>
                <span className="text-[15px] font-medium text-navy">{site.location}</span>
              </li>
            </ul>
            <div className="mt-2 flex items-center gap-4 text-navy">
              <BehanceLink className="transition-colors hover:text-brand" />
              <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-brand">
                <Github size={20} />
              </a>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-brand">
                <Linkedin size={20} />
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <form onSubmit={submit} noValidate className="flex flex-col gap-4 rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_2px_12px_-6px_rgba(23,32,51,0.08)] md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-name" className="text-sm font-semibold text-navy">
                    Full Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    value={fields.name}
                    onChange={set('name')}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className={inputCls(errors.name)}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-email" className="text-sm font-semibold text-navy">
                    Email Address
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    value={fields.email}
                    onChange={set('email')}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-subject" className="text-sm font-semibold text-navy">
                  Subject
                </label>
                <input
                  id="cf-subject"
                  type="text"
                  value={fields.subject}
                  onChange={set('subject')}
                  placeholder="What is this about?"
                  aria-invalid={Boolean(errors.subject)}
                  className={inputCls(errors.subject)}
                />
                {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-message" className="text-sm font-semibold text-navy">
                  Message
                </label>
                <textarea
                  id="cf-message"
                  rows={5}
                  value={fields.message}
                  onChange={set('message')}
                  placeholder="Tell me about the project…"
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputCls(errors.message)} resize-y`}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="group mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-deep"
              >
                Send Message
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <p aria-live="polite" className="text-center text-xs leading-relaxed text-steel">
                {sent
                  ? 'Your email app is opening with the message ready — press send there and it lands in my inbox.'
                  : 'This opens your email app with everything pre-filled — no data is collected on this site.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
