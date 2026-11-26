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

import bluecrest14 from '../assets/projects/bluecrest-14.webp'
import aiCover from '../assets/ai-taste-cover.png'
import fromConcept3dCover from '../assets/from-concept-3d-cover.png'
import edgeAiCover from '../assets/edge-ai-cover.png'
import twinCover from '../assets/digital-twin-cover.png'
import spatialCover from '../assets/spatial-cover.png'

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
    image: fromConcept3dCover,
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
    slug: 'the-computer-that-never-calls-home',
    title: 'The smartest computer you own is the one that never calls home',
    description:
      'Why the future of AI is offline: intelligence that lives on your device, works without a network, and answers before your patience does. Written from Accra, where edge AI is not a constraint but a design school.',
    category: 'Edge AI',
    date: '2026-11-26',
    readingTime: '3 min read',
    image: edgeAiCover,
    reviewed: true,
    body: [
      {
        type: 'p',
        text: 'Everyone pictures AI as something in the cloud, a distant brain you send your questions to and wait for answers. The interesting shift is happening in the opposite direction: intelligence is moving onto the device in your hand, running without a connection, without sending your data anywhere, and without asking permission from a server farm in another hemisphere.',
      },
      {
        type: 'p',
        text: 'This matters more in Accra than in Amsterdam. In a market where data is expensive and connectivity is honest about its bad days, cloud-dependent intelligence is a luxury good. An AI that runs on the phone itself changes the equation entirely: translation that works in a taxi with two bars, a camera that understands what it sees without uploading your life, an assistant that keeps working when the network does not. Offline-first is not a constraint we apologise for here. It is a design school of its own, and edge AI is its graduating class.',
      },
      {
        type: 'p',
        text: 'I learned this from building software for cars. When I built an Android video player for car screens, offline-first was not a feature, it was the entire premise: the app had to assume no network at all and still be worth opening. Every decision that followed, from the media library that works without a sync to the interface that never shows a spinner of hope, started from that one assumption. Designing for the edge forces a useful humility. You stop designing for the demo and start designing for the drive home.',
      },
      {
        type: 'p',
        text: 'There is a second dividend that the privacy conversation usually buries: latency. When the model lives on the device, the answer comes back before your patience does. The best user interface I know is the one that answers faster than doubt can set in.',
      },
      {
        type: 'quote',
        text: 'The coming decade of African software will not be won by whoever has the biggest data centre, but by whoever respects the rhythm of the network their user actually has.',
      },
      {
        type: 'p',
        text: 'Put the intelligence where the user is. It is the only place it has always truly lived.',
      },
    ],
  },
  {
    slug: 'a-second-accra',
    title: 'A second Accra you can flood on purpose',
    description:
      'A digital twin of Accra would let engineers break the city in simulation every day, for the price of compute, before the June rains break it for free.',
    category: 'Digital Twins',
    date: '2026-11-26',
    readingTime: '3 min read',
    image: twinCover,
    reviewed: true,
    body: [
      {
        type: 'p',
        text: 'Every June, the rain writes the same headline over Accra, and every year the city responds after the fact. Here is a different proposal: build the city twice. Once in concrete and asphalt, and once in data, where the flooding can happen every single day and cost nothing but compute.',
      },
      {
        type: 'p',
        text: 'A digital twin is a living model of a real system, fed by whatever sensors and records exist, honest about what it does not know. Engineers already twin aircraft engines and factory lines. The provocative idea is that a city drain is exactly the same kind of machine, just larger and more political: water enters, water exits, and somewhere in between there is a capacity number nobody wants to meet.',
      },
      {
        type: 'p',
        text: 'With a credible twin, you could break the city on purpose before nature does it for free. Let the model rain for forty days over the Odaw basin. Watch which junctions drown first. Change the geometry, the culverts, the maintenance schedule, and let the model break again. Failure gets moved from the physical world, where it costs lives and property, into the simulation, where it costs a Tuesday of compute.',
      },
      {
        type: 'quote',
        text: 'The twin does not need to be perfect to be useful; it needs to be better than surprise. Right now, surprise is our leading forecaster.',
      },
      {
        type: 'p',
        text: 'The honest caveat is that a twin is only as good as its data, and data is exactly what growing cities lack. But that is the wrong excuse. There is a second discipline too, the one I care about most: making the future legible. A simulation nobody can read changes nobody’s mind. The twin earns its budget the day an engineer, a planner and a journalist can all look at the same picture of a drowned junction and agree on what they are seeing. Visualisation is not the decoration on top of the model; it is the argument that pays for it.',
      },
      {
        type: 'p',
        text: 'Build the second city. Break it gently, every day, on purpose, until the first one stops breaking us.',
      },
    ],
  },
  {
    slug: 'the-screen-leaves-the-glass',
    title: 'The screen is about to leave the glass',
    description:
      'What happens to design when depth stops being an illusion: spatial computing ends the five-hundred-year reign of the rectangle, and the craft moves from faking presence to deserving it.',
    category: 'Spatial Computing',
    date: '2026-11-26',
    readingTime: '3 min read',
    image: spatialCover,
    reviewed: true,
    body: [
      {
        type: 'p',
        text: 'Every screen you have ever loved was a rectangle, and every rectangle was a window with the view painted on. Spatial computing is the industry finally admitting that windows were always a compromise: the content wanted to be in the room, not behind the glass.',
      },
      {
        type: 'p',
        text: 'The hardware wave is real and recurring, headset by headset, each generation lighter and less absurd. But hardware was never the interesting question. The interesting question is what a designer does when depth stops being an illusion and becomes a material. A 3D visualiser spends years learning to fake space inside flat screens: perspective, parallax, the careful lie that makes a rendered building feel walkable. Spatial computing removes the lie. The model is simply there, on the table, at real scale, and the craft moves from faking presence to deserving it.',
      },
      {
        type: 'p',
        text: 'I got a preview of this demand years ago, building the 3D visualisation of the BlueCrest campus in my final year. The model lived on a flat screen, but the questions everyone asked were spatial ones: can I walk it? Where is my faculty? Which entrance do I use? People wanted presence, and the best I could offer was a careful lie rendered in Lumion. The technology that answers honestly is now arriving, and I recognise the appetite because I have spent years faking the supply.',
      },
      {
        type: 'p',
        text: 'For practice, the consequences land in unglamorous places first. An architect walking a client through a house that does not exist yet, catching the design flaw in minute two instead of month six. A technician seeing the machine’s internals annotated in the air above the machine. A student in Kumasi dissecting a heart that beats in her living room.',
      },
      {
        type: 'quote',
        text: 'The rectangle had a five-hundred-year run, from the first framed painting to the phone in your pocket. It was a good run.',
      },
      {
        type: 'p',
        text: 'But the most exciting canvas of the next decade is not a canvas at all. It is the room, and everything that can finally live in it.',
      },
    ],
  },
]

export const getPost = (slug: string | undefined) =>
  posts.find((p) => p.slug === slug)
