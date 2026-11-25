export interface Post {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readingTime: string
  image?: string
  /** Reference link shown at the end of the article. */
  reference?: { label: string; url: string }
  /** Paragraph blocks: 'p' | 'h2' | 'quote' | 'img'. */
  body: Array<{ type: 'p' | 'h2' | 'quote' | 'img'; text?: string; src?: string }>
  /** Set once the author has reviewed the draft. */
  reviewed?: boolean
}

import bluecrest10 from '../assets/projects/bluecrest-10.webp'
import bluecrest14 from '../assets/projects/bluecrest-14.webp'

export const posts: Post[] = [
  {
    slug: 'from-concept-to-3d',
    title: 'From concept to 3D: my campus visualisation workflow',
    description:
      'How I turned the BlueCrest University College campus into a walkable 3D film, modelling in SketchUp, rendering in Lumion, and finishing for the university’s most-watched Instagram Live.',
    category: '3D Visualisation',
    date: '2026-11-25',
    readingTime: '2 min read',
    image: bluecrest10,
    reviewed: true,
    reference: {
      label: 'Read the original feature on the BlueCrest blog',
      url: 'https://blog.bluecrest.edu.gh/2021/05/25/bluecrest-college-student-creates-3d-visuals-of-the-campus/',
    },
    body: [
      {
        type: 'p',
        text: 'During my final year at the BlueCrest School of Technology, I built the university a complete 3D visualisation of its own campus, so that anyone searching for it online could recognise the place before ever setting foot there.',
      },
      {
        type: 'p',
        text: 'The build ran across four applications: modelling block by block in SketchUp Pro, rendering with full day and night lighting in Lumion 10, colour grading the stills in Adobe Lightroom, and finishing with transitions and music in Filmora. When the university shared the film in June 2021, it drew over 400 live viewers on Instagram, the college’s highest at the time.',
      },
      {
        type: 'img',
        src: bluecrest14,
      },
      {
        type: 'quote',
        text: 'A visualisation succeeds when someone who has never visited the campus can already find their way around it.',
      },
      {
        type: 'p',
        text: 'The university documented the project in its own write-up, published on the BlueCrest blog in May 2021, and the film went on to feature on the intranet and YouTube channel. That workflow has shaped every 3D job I have taken since: model faithfully, light honestly, edit for the audience that will actually watch.',
      },
    ],
  },
]

export const getPost = (slug: string | undefined) =>
  posts.find((p) => p.slug === slug)
