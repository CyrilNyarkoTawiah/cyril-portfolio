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
import apex12 from '../assets/projects/apex-12.webp'
import citations3 from '../assets/projects/citations-3.webp'
import cri4 from '../assets/projects/cri-4.webp'

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
  {
    slug: 'best-of-the-best-autumn-estates',
    title: 'Best of the Best: Autumn Estates on an international wall',
    description:
      'How the Autumn Estates visualisation was selected for the DCDA Long Beach International Design Invitation Exhibition and shown among the Best of the Best exhibitors.',
    category: '3D Visualisation',
    date: '2026-11-20',
    readingTime: '2 min read',
    image: apex12,
    reviewed: true,
    reference: {
      label: 'See the DCDA 2024 exhibition book',
      url: 'https://fliphtml5.com/jikuw/zrts/DCDA2024Reutlingen_International_Exhibition/',
    },
    body: [
      {
        type: 'p',
        text: 'Apex Legends: Autumn Estates Reimagined began as a personal question: what does a residential estate look like when you present it as a lived environment rather than a collection of buildings? The answer became a set of exhibition boards that balance architectural accuracy with landscape, light and human scale.',
      },
      {
        type: 'img',
        src: apex12,
      },
      {
        type: 'p',
        text: 'In 2024 the work was selected for the DCDA Long Beach International Design Invitation Exhibition, hosted at California State University, Long Beach, in the United States. It was shown among the Best of the Best exhibitors, with Ghana represented among the participating countries.',
      },
      {
        type: 'quote',
        text: 'A residential estate is not a collection of buildings, it is a lived environment.',
      },
      {
        type: 'p',
        text: 'Carrying a Ghanaian design voice onto an international exhibition wall meant holding two disciplines at once: the patience of faithful 3D visualisation, and the restraint of an editorial layout that lets the render breathe. The exhibition book, linked below, documents the show.',
      },
    ],
  },
  {
    slug: 'designing-citations-that-earn-the-moment',
    title: 'Designing citations that earn the moment',
    description:
      'A continuing series of institutional citations for CSIR institutes: formal honours that carry the institutes’ identity with restraint, built for print.',
    category: 'Graphic Design',
    date: '2026-11-15',
    readingTime: '2 min read',
    image: citations3,
    reviewed: true,
    reference: {
      label: 'View the citation series on Behance',
      url: 'https://www.behance.net/gallery/208532541/CITATION-DESIGN-FOR-CSIR-INSTITUTES',
    },
    body: [
      {
        type: 'p',
        text: 'A citation is read once, held forever. When the CSIR institutes honour staff and partners, the printed piece carries the weight of the occasion, which makes it one of the most unforgiving briefs in institutional design: ceremonial without excess.',
      },
      {
        type: 'img',
        src: citations3,
      },
      {
        type: 'p',
        text: 'My approach is to build each piece around the institute’s identity, then take ornament away until only what the occasion earns remains. Names and citations are set in typography that honours the recipient, and every piece is prepared to full print quality.',
      },
      {
        type: 'quote',
        text: 'The institute’s identity, the recipient’s name, and nothing that competes with the moment.',
      },
      {
        type: 'p',
        text: 'The series has run since 2022 and continues to grow. A selection is published on Behance, linked below.',
      },
    ],
  },
  {
    slug: 'holding-the-science-together',
    title: 'Holding the science together: the 2018 Book of Abstracts',
    description:
      'Book design for the CSIR-Crops Research Institute Book of Abstracts 2018: dozens of multi-author scientific entries held together by one disciplined typographic system.',
    category: 'Publications',
    date: '2026-11-10',
    readingTime: '2 min read',
    image: cri4,
    reviewed: true,
    reference: {
      label: 'View the book design on Behance',
      url: 'https://www.behance.net/gallery/208531245/CSIR-CRI-BOOK-OF-ABSTRACTS-2018-BOOK-DESIGN',
    },
    body: [
      {
        type: 'p',
        text: 'A Book of Abstracts is where many scientists meet one page limit. For the CSIR-Crops Research Institute’s 2018 scientific event, dozens of multi-author entries had to sit together as one coherent, readable printed document.',
      },
      {
        type: 'p',
        text: 'The discipline is typographic: a system for abstracts, authors and affiliations that survives hundreds of entries without collapsing into noise, section structure that reads cleanly page after page, and a cover that gives the research inside a dignified, institutional face.',
      },
      {
        type: 'img',
        src: cri4,
      },
      {
        type: 'quote',
        text: 'Dense content does not need busy design. It needs a system that never gets in the way.',
      },
      {
        type: 'p',
        text: 'The book was designed and produced as part of the institute’s publications programme, and the design is documented on Behance, linked below.',
      },
    ],
  },
]

export const getPost = (slug: string | undefined) =>
  posts.find((p) => p.slug === slug)
