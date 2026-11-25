export interface Post {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readingTime: string
  image?: string
  /** Paragraph blocks — 'p' | 'h2' | 'quote'. */
  body: Array<{ type: 'p' | 'h2' | 'quote'; text: string }>
  /** Set once the author has reviewed the draft. */
  reviewed?: boolean
}

import bluecrest10 from '../assets/projects/bluecrest-10.webp'

export const posts: Post[] = [
  {
    slug: 'from-concept-to-3d',
    title: 'From concept to 3D: my campus visualisation workflow',
    description:
      'How I turned the BlueCrest University College campus into a walkable 3D film — modelling in SketchUp, rendering in Lumion, and finishing for the university’s most-watched Instagram Live.',
    category: '3D Visualisation',
    date: '2026-11-25',
    readingTime: '4 min read',
    image: bluecrest10,
    body: [
      {
        type: 'p',
        text: 'In my final year at the BlueCrest School of Technology, I set out to do something the university had never had: a complete three-dimensional visualisation of its own campus. Not a floor plan, not a photo tour — a film that lets you move through the grounds the way a visitor would.',
      },
      {
        type: 'h2',
        text: 'Start from the real measurements',
      },
      {
        type: 'p',
        text: 'Every good visualisation is a faithful one. I modelled each campus building in SketchUp Pro, block by block, checking proportions against the real grounds. The temptation at this stage is to beautify — round the corners, widen the walkways — but the project only works if a student recognises their own lecture block.',
      },
      {
        type: 'h2',
        text: 'Light it like a place, not a model',
      },
      {
        type: 'p',
        text: 'Lumion 10 handled lighting and rendering. The camera paths follow the route a visitor actually walks — gate, courtyard, lecture halls — because familiarity is what turns a render into a place. I graded the stills in Lightroom afterwards so colour stayed consistent between renders shot at different times of the modelling process.',
      },
      {
        type: 'h2',
        text: 'Finish for the feed',
      },
      {
        type: 'p',
        text: 'The final assembly happened in Filmora, with pacing built for social: establish the campus in the first seconds, then keep moving. When the university shared the video in June 2021, it recorded over 400 views on Instagram — the highest ever recorded on any of the college’s Instagram Live videos at that point. The college’s own write-up credited it with boosting the institution’s brand equity, and the project went on to feature on the university’s blog, intranet and YouTube channel.',
      },
      {
        type: 'quote',
        text: 'A visualisation succeeds when someone who has never visited the campus can already find their way around it.',
      },
      {
        type: 'p',
        text: 'That project taught me the workflow I still use for every 3D job since: model faithfully, light honestly, and edit for the audience that will actually watch it.',
      },
    ],
  },
]

export const getPost = (slug: string | undefined) =>
  posts.find((p) => p.slug === slug)
