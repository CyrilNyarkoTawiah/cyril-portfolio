import apex1 from '../assets/projects/apex-1.webp'
import apex2 from '../assets/projects/apex-2.webp'
import apex3 from '../assets/projects/apex-3.webp'
import bluecrest1 from '../assets/projects/bluecrest-1.webp'
import bluecrest2 from '../assets/projects/bluecrest-2.webp'
import bluecrest3 from '../assets/projects/bluecrest-3.webp'
import csir1 from '../assets/projects/csir-1.webp'
import csir2 from '../assets/projects/csir-2.webp'
import cri1 from '../assets/projects/cri-1.webp'
import cri2 from '../assets/projects/cri-2.webp'
import cit1 from '../assets/projects/citations-1.webp'
import cit2 from '../assets/projects/citations-2.webp'
import tanktrackIcon from '../assets/projects/tanktrack-icon.png'
import spyIcon from '../assets/projects/spyyourmoney-icon.png'

export type ProjectCategory =
  | 'Graphic Design'
  | '3D Visualisation'
  | 'Android Applications'
  | 'Web Development'
  | 'Publications'
  | 'Motion Graphics'

export interface CaseStudy {
  overview: string
  objective: string
  process: string[]
  outcome: string
  /** Extra note distinguishing personal vs team contribution. */
  note?: string
}

export interface Project {
  slug: string
  title: string
  category: string
  categories: ProjectCategory[]
  description: string
  tools: string[]
  /** Real imagery — never a fabricated screenshot. */
  images?: string[]
  /** Real app icon, where one exists. */
  icon?: string
  /** Lucide icon name for designed brand covers. */
  coverIcon?: 'car' | 'route'
  year: string
  recognition?: string
  links?: { label: string; url: string }[]
  caseStudy: CaseStudy
}

export const projectFilters: Array<'All' | ProjectCategory> = [
  'All',
  'Graphic Design',
  '3D Visualisation',
  'Android Applications',
  'Web Development',
  'Publications',
  'Motion Graphics',
]

export const projects: Project[] = [
  {
    slug: 'apex-autumn-estates',
    title: 'Apex Legends: Autumn Estates Reimagined',
    category: '3D Visualisation',
    categories: ['Graphic Design', '3D Visualisation'],
    description:
      'An exhibition-selected reimagining of the Autumn Estates development, shown at the DCDA Long Beach International Design Invitation Exhibition.',
    tools: ['3D Modelling', 'Rendering', 'Presentation Design'],
    images: [apex1, apex2, apex3],
    year: '2024',
    recognition:
      'Best of the Best exhibitor — DCDA Long Beach International Design Invitation Exhibition, California State University, Long Beach, USA, 2024.',
    links: [
      {
        label: 'View on Behance',
        url: 'https://www.behance.net/gallery/198041377/Project-Apex-Legends-Remodeling-Autumn-Estates',
      },
    ],
    caseStudy: {
      overview:
        'Apex Legends: Autumn Estates Reimagined is a design-exhibition entry that reimagines the Autumn Estates residential development as a cohesive visual story. The piece was selected for exhibition at the DCDA Long Beach International Design Invitation Exhibition, hosted at California State University, Long Beach, in 2024, where it was shown among the Best of the Best exhibitors.',
      objective:
        'To present a residential estate not just as buildings, but as a lived environment — balancing architectural accuracy with the warmth of landscape, light and human scale, to an international exhibition standard.',
      process: [
        'Studied the estate layout and identified the viewpoints that would carry the story of the development.',
        'Modelled the structures and surroundings, keeping proportions faithful to the real site.',
        'Rendered with attention to natural light and material honesty, then finished the presentation boards with a restrained, editorial layout.',
        'Refined the entry against exhibition requirements for the international panel.',
      ],
      outcome:
        'The work was selected as a Best of the Best exhibitor and shown at California State University, Long Beach, in 2024 — placing a Ghanaian design voice on an international exhibition wall.',
      note: 'Individual design and visualisation work.',
    },
  },
  {
    slug: 'bluecrest-campus-3d',
    title: 'BlueCrest Campus 3D Visualisation',
    category: '3D Visualisation',
    categories: ['3D Visualisation', 'Motion Graphics'],
    description:
      'A complete 3D visualisation of the BlueCrest University College campus — featured on the university blog, intranet and YouTube, and in its most-watched Instagram Live.',
    tools: ['SketchUp Pro', 'Lumion 10', 'Lightroom', 'Filmora'],
    images: [bluecrest1, bluecrest2, bluecrest3],
    year: '2021',
    links: [
      {
        label: 'Instagram video',
        url: 'https://www.instagram.com/tv/CPTb43HjcgR/',
      },
      {
        label: 'View on Behance',
        url: 'https://www.behance.net/gallery/198042179/Project-BlueCrest-College-Modeling-and-Animation',
      },
    ],
    caseStudy: {
      overview:
        'A full three-dimensional visualisation of the BlueCrest University College campus, produced as a final-year project at the BlueCrest School of Technology. The video was shared on the university official platforms and became the most-watched Instagram Live video the college had recorded at the time, with over 400 views.',
      objective:
        'To give the university an accurate, walkable digital twin of its campus — something the marketing team could show prospective students who had never set foot on the grounds.',
      process: [
        'Measured and modelled every campus building in SketchUp Pro, block by block, matching the real grounds.',
        'Lit and rendered the scenes in Lumion 10, choosing camera paths that mirror how a visitor actually moves through the campus.',
        'Graded stills in Lightroom for colour consistency between renders.',
        'Assembled the final film in Filmora with pacing built for social sharing.',
      ],
      outcome:
        'The university featured the project on its blog, intranet and YouTube channel. Shared on Instagram in June 2021, it drew over 400 views — the highest ever recorded on any of the college’s Instagram Live videos at that point, and, in the college’s own words, it helped boost the institution’s brand equity.',
      note: 'Individual final-year project. The college’s marketing team distributed the finished video.',
    },
  },
  {
    slug: 'roadplay',
    title: 'RoadPlay',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'A shipped Android video player built for the car — plays video on the parked car screen and returns to the film automatically when the head unit wakes.',
    tools: ['Kotlin', 'Jetpack Compose'],
    coverIcon: 'car',
    year: '2026',
    links: [
      {
        label: 'GitHub — v1.1.0 release',
        url: 'https://github.com/CyrilNyarkoTawiah/RoadPlay/releases',
      },
    ],
    caseStudy: {
      overview:
        'RoadPlay is an Android video player designed around one specific moment: the parked car. It plays video on the car screen while the vehicle is parked, and when the head unit wakes, playback returns to the film automatically — no fumbling through menus at the wheel.',
      objective:
        'To make in-car video effortless for drivers who spend long waits in the car: open, play, step away, come back to exactly where the story paused.',
      process: [
        'Designed the playback experience around the parked-video car-screen mode, with the car’s display as the primary target.',
        'Built the player in Kotlin with Jetpack Compose, handling the head-unit lifecycle so video resumes on wake.',
        'Signed the release build and published version 1.1.0 through a CI-built GitHub release.',
      ],
      outcome:
        'Version 1.1.0 is shipped as a signed release on GitHub. A real-car test round is the next milestone for the player.',
      note: 'Personal project — design, development and release.',
    },
  },
  {
    slug: 'tanktrack',
    title: 'TankTrack',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'An Android trip and fuel tracker with live trip statistics, car-display support and six interface themes — built with Kotlin and Jetpack Compose.',
    tools: ['Kotlin', 'Jetpack Compose'],
    icon: tanktrackIcon,
    year: '2026',
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/CyrilNyarkoTawiah/TankTrack',
      },
    ],
    caseStudy: {
      overview:
        'TankTrack records trips and fuel for everyday drivers: live trip statistics while you move, car-display support for the drives themselves, and a tracking history you can actually learn from.',
      objective:
        'To turn scattered fuel receipts and odometer guesses into one clean, offline record of what the car really costs and how it is driven.',
      process: [
        'Shaped the data model around trips and refuels, keeping every entry quick to log from behind the wheel.',
        'Built the interface in Kotlin with Jetpack Compose, including live trip statistics and support for car displays.',
        'Shipped six interface themes so the app matches the driver, not the other way round.',
      ],
      outcome:
        'A working trip and fuel tracker with live statistics, car-display support and six themes, in active development with CI-built releases.',
      note: 'Personal project — design, development and release.',
    },
  },
  {
    slug: 'pacetrail',
    title: 'PaceTrail',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'An offline-first running and pace tracker — live GPS tracking, route drawing, splits, achievements and CSV/GPX export, backed by 40 passing unit tests.',
    tools: ['Kotlin', 'Jetpack Compose', 'Room'],
    coverIcon: 'route',
    year: '2026',
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/CyrilNyarkoTawiah/PaceTrail',
      },
    ],
    caseStudy: {
      overview:
        'PaceTrail is an offline-first running companion: it tracks pace live over GPS, draws the route as you run, logs splits, and stores everything locally so it works far from any signal.',
      objective:
        'To give runners a tracker they can trust anywhere in Accra and beyond — no signal required, no data held hostage, with exports that outlive the app.',
      process: [
        'Built the tracking core on live GPS with route drawing and running splits, storing runs in a Room database.',
        'Added achievements and CSV/GPX export so the data stays the runner’s own.',
        'Held the logic to a test-first standard — 40 passing unit tests guard the tracking and export paths.',
      ],
      outcome:
        'An offline-first tracker with live GPS, route drawing, splits, achievements, CSV and GPX export, and a unit-test suite of 40 passing tests.',
      note: 'Personal project — design, development and release.',
    },
  },
  {
    slug: 'spyyourmoney',
    title: 'SpyYourMoney',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'An offline-first personal finance app — accounts, budgets, bills and subscriptions, debts and savings goals, encrypted backup and rule-based spending insights.',
    tools: ['Kotlin', 'Jetpack Compose'],
    icon: spyIcon,
    year: '2026',
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/CyrilNyarkoTawiah/SpyYourMoney',
      },
    ],
    caseStudy: {
      overview:
        'SpyYourMoney watches money the way a detective would: every account, budget, bill, subscription, debt and savings goal in one offline-first place, with encrypted backup and CSV export.',
      objective:
        'To make personal finances legible without an internet connection or an account somewhere else — your money story lives on your phone, encrypted.',
      process: [
        'Modelled the full personal-finance picture: accounts, budgets, bills and subscriptions, debts and savings goals.',
        'Added rule-based spending insights that read patterns in the ledger and say what is actually happening.',
        'Protected the ledger with encrypted backup and kept export as CSV so the data always leaves on the owner’s terms.',
      ],
      outcome:
        'A complete offline-first finance app with accounts, budgets, bills and subscriptions, debts and savings goals, encrypted backup, CSV export and rule-based insights.',
      note: 'Personal project — design, development and release.',
    },
  },
  {
    slug: 'institutional-design-publications',
    title: 'Institutional Design & Publications',
    category: 'Publications',
    categories: ['Graphic Design', 'Publications'],
    description:
      'Selected design work for CSIR-INSTI — annual reports, brochures, banners, branding, the CSIR-Crops Research Institute Book of Abstracts and institutional citations.',
    tools: ['Adobe Creative Suite', 'CorelDRAW', 'Print Layout', 'Branding'],
    images: [csir1, csir2, cri1, cri2, cit1, cit2],
    year: '2022 — Present',
    links: [
      {
        label: 'CSIR-INSTI 3D on Behance',
        url: 'https://www.behance.net/gallery/198044169/Project-CSIR-INSTI-Modeling-and-animation',
      },
      {
        label: 'CRI Book of Abstracts on Behance',
        url: 'https://www.behance.net/gallery/208531245/CSIR-CRI-BOOK-OF-ABSTRACTS-2018-BOOK-DESIGN',
      },
      {
        label: 'Citations on Behance',
        url: 'https://www.behance.net/gallery/208532541/CITATION-DESIGN-FOR-CSIR-INSTITUTES',
      },
    ],
    caseStudy: {
      overview:
        'Ongoing institutional design for the CSIR – Institute for Scientific and Technological Information (INSTI): the visual materials an institute publishes to report, promote and honour. The range runs from annual reports and brochures to banners, social media graphics, branding materials, the CSIR-Crops Research Institute Book of Abstracts and institutional citations.',
      objective:
        'To give a scientific institution a consistent, credible visual voice — publications that read as carefully as the research inside them, and event materials that carry the institute’s identity without noise.',
      process: [
        'Design annual reports, brochures, flyers and banners for institute programmes and events.',
        'Lay out multi-author publications, including the CSIR-Crops Research Institute Book of Abstracts, holding long documents to a single typographic system.',
        'Produce institutional citations and social media graphics to the same brand rules.',
        'Handle video editing and multimedia production alongside the print work.',
      ],
      outcome:
        'A steady stream of institutional publications and event materials produced to one standard, across print and screen, since August 2022.',
      note: 'Personal design contributions within the institute’s wider communications team — institutional materials are team productions.',
    },
  },
]

export const getProject = (slug: string | undefined) =>
  projects.find((p) => p.slug === slug)
