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
import aiCover from '../assets/ai-taste-cover.png'

export const posts: Post[] = [
  {
    slug: 'taste-is-the-new-scarcity',
    title: 'AI made execution cheap. Taste is the new scarcity.',
    description:
      'What AI actually changes for a multidisciplinary designer and developer in Accra: the technical execution gap collapsed, and creative thinking became the whole game.',
    category: 'Artificial Intelligence',
    date: '2026-11-25',
    readingTime: '3 min read',
    image: aiCover,
    reviewed: true,
    body: [
      {
        type: 'p',
        text: 'Everyone is asking whether AI will take their job. I think that is the wrong question. Ask instead what becomes scarce when anyone can draft, render and code at speed, because whatever becomes scarce is exactly what to master. My answer: taste.',
      },
      {
        type: 'p',
        text: 'I saw the early version of this in my own workflow. When I built the 3D visualisation of the BlueCrest campus, the pipeline was the moat: one tool for modelling, another for lighting and rendering, another for grading, another for the edit. Each step needed months of skill, and the software was the barrier that separated professionals from hobbyists. Every stage of that pipeline is now getting an AI layer, and the barrier is dissolving.',
      },
      {
        type: 'p',
        text: 'Here is what does not dissolve. Knowing that a render feels dead before anyone can explain why. Recognising that a layout lies about the data inside it. Choosing what is worth building at all. These are judgment calls, and no model makes them for you. The tools now hand everyone a competent first draft; they cannot tell you when the competent thing is the wrong thing.',
      },
      {
        type: 'quote',
        text: 'AI made technical execution cheap. That is exactly why creative thinking is now worth everything.',
      },
      {
        type: 'p',
        text: 'For a one-person studio in Accra, this is the best news in a decade. The distance between an idea and a finished artifact has collapsed to the length of your judgment. You no longer need permission, a big team or a big budget to work at a global standard. You need an eye, a standard, and the stubbornness to iterate until the work earns it. The execution gap is gone. The taste gap is wide open. Build in the gap.',
      },
    ],
  },
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
