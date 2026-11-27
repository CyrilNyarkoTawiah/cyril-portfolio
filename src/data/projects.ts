import apex1 from '../assets/projects/apex-1.webp'
import apex2 from '../assets/projects/apex-2.webp'
import apex3 from '../assets/projects/apex-3.webp'
import apex4 from '../assets/projects/apex-4.webp'
import apex5 from '../assets/projects/apex-5.webp'
import apex6 from '../assets/projects/apex-6.webp'
import apex7 from '../assets/projects/apex-7.webp'
import apex8 from '../assets/projects/apex-8.webp'
import apex9 from '../assets/projects/apex-9.webp'
import apex10 from '../assets/projects/apex-10.webp'
import apex11 from '../assets/projects/apex-11.webp'
import apex12 from '../assets/projects/apex-12.webp'
import apex13 from '../assets/projects/apex-13.webp'
import apex14 from '../assets/projects/apex-14.webp'
import apex15 from '../assets/projects/apex-15.webp'
import apex16 from '../assets/projects/apex-16.webp'
import apex17 from '../assets/projects/apex-17.webp'
import apex18 from '../assets/projects/apex-18.webp'
import apex19 from '../assets/projects/apex-19.webp'
import bluecrest1 from '../assets/projects/bluecrest-1.webp'
import bluecrest2 from '../assets/projects/bluecrest-2.webp'
import bluecrest3 from '../assets/projects/bluecrest-3.webp'
import bluecrest4 from '../assets/projects/bluecrest-4.webp'
import bluecrest5 from '../assets/projects/bluecrest-5.webp'
import bluecrest6 from '../assets/projects/bluecrest-6.webp'
import bluecrest7 from '../assets/projects/bluecrest-7.webp'
import bluecrest8 from '../assets/projects/bluecrest-8.webp'
import bluecrest9 from '../assets/projects/bluecrest-9.webp'
import bluecrest10 from '../assets/projects/bluecrest-10.webp'
import bluecrest11 from '../assets/projects/bluecrest-11.webp'
import bluecrest12 from '../assets/projects/bluecrest-12.webp'
import bluecrest13 from '../assets/projects/bluecrest-13.webp'
import bluecrest14 from '../assets/projects/bluecrest-14.webp'
import bluecrest15 from '../assets/projects/bluecrest-15.webp'
import csir1 from '../assets/projects/csir-1.webp'
import csir2 from '../assets/projects/csir-2.webp'
import csir3 from '../assets/projects/csir-3.webp'
import csir4 from '../assets/projects/csir-4.webp'
import csir5 from '../assets/projects/csir-5.webp'
import csir6 from '../assets/projects/csir-6.webp'
import csir7 from '../assets/projects/csir-7.webp'
import csir8 from '../assets/projects/csir-8.webp'
import cri1 from '../assets/projects/cri-1.webp'
import cri2 from '../assets/projects/cri-2.webp'
import cri3 from '../assets/projects/cri-3.webp'
import cri4 from '../assets/projects/cri-4.webp'
import cri5 from '../assets/projects/cri-5.webp'
import cri6 from '../assets/projects/cri-6.webp'
import citations1 from '../assets/projects/citations-1.webp'
import citations2 from '../assets/projects/citations-2.webp'
import citations3 from '../assets/projects/citations-3.webp'
import citations4 from '../assets/projects/citations-4.webp'
import citations5 from '../assets/projects/citations-5.webp'
import citations6 from '../assets/projects/citations-6.webp'
import citations7 from '../assets/projects/citations-7.webp'
import citations8 from '../assets/projects/citations-8.webp'
import pacetrail1 from '../assets/projects/pacetrail-1.jpg'
import pacetrail2 from '../assets/projects/pacetrail-2.jpg'
import pacetrail3 from '../assets/projects/pacetrail-3.jpg'
import pacetrail4 from '../assets/projects/pacetrail-4.jpg'
import pacetrail5 from '../assets/projects/pacetrail-5.jpg'
import pacetrail6 from '../assets/projects/pacetrail-6.jpg'
import pacetrail7 from '../assets/projects/pacetrail-7.jpg'
import roadplay1 from '../assets/projects/roadplay-1.jpg'
import roadplayCard from '../assets/projects/roadplay-card.jpg'
import roadplay2 from '../assets/projects/roadplay-2.jpg'
import roadplay3 from '../assets/projects/roadplay-3.jpg'
import tanktrack1 from '../assets/projects/tanktrack-1.jpg'
import tanktrack2 from '../assets/projects/tanktrack-2.jpg'
import tanktrack3 from '../assets/projects/tanktrack-3.jpg'
import tanktrack4 from '../assets/projects/tanktrack-4.jpg'
import tanktrack5 from '../assets/projects/tanktrack-5.jpg'
import tanktrack6 from '../assets/projects/tanktrack-6.jpg'
import spyyourmoney1 from '../assets/projects/spyyourmoney-1.jpg'
import spyyourmoney2 from '../assets/projects/spyyourmoney-2.jpg'
import spyyourmoney3 from '../assets/projects/spyyourmoney-3.jpg'
import spyyourmoney4 from '../assets/projects/spyyourmoney-4.jpg'
import spyyourmoney5 from '../assets/projects/spyyourmoney-5.jpg'
import spyyourmoney6 from '../assets/projects/spyyourmoney-6.jpg'
import aashot1 from '../assets/projects/aashot-1.jpg'
import aashot2 from '../assets/projects/aashot-2.jpg'
import aashot4 from '../assets/projects/aashot-4.jpg'
import aashotCard from '../assets/projects/aashot-card.jpg'
import tanktrackCard from '../assets/projects/tanktrack-card.jpg'
import pacetrailCard from '../assets/projects/pacetrail-card.jpg'
import spyyourmoneyCard from '../assets/projects/spyyourmoney-card.jpg'

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
  /** Headline features rendered as a grid. */
  features?: Array<{ name: string; detail: string }>
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
  /** Real imagery, never a fabricated screenshot. */
  images?: string[]
  /** Real app icon, where one exists. */
  icon?: string
  /** Lucide icon name for designed brand covers. */
  coverIcon?: 'car' | 'route'
  /** Explicit card cover (defaults to images[0]); lets galleries stay in numeric order. */
  cover?: string
  /** 'cover' = full-bleed mockup cover even when the gallery is portrait screenshots. */
  cardFit?: 'cover'
  /** Gallery cell treatment: 'wide' (landscape covers) or 'phone' (portrait screenshots). */
  gallery?: 'wide' | 'phone'
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
    images: [apex1, apex2, apex3, apex4, apex5, apex6, apex7, apex8, apex9, apex10, apex11, apex12, apex13, apex14, apex15, apex16, apex17, apex18, apex19],
    cover: apex12,
    year: '2024',
    recognition:
      'Best of the Best exhibitor, DCDA Long Beach International Design Invitation Exhibition, California State University, Long Beach, USA, 2024.',
    links: [
      {
        label: 'View on Behance',
        url: 'https://www.behance.net/gallery/198041377/Project-Apex-Legends-Remodeling-Autumn-Estates',
      },
      {
        label: 'Exhibition book, DCDA 2024',
        url: 'https://fliphtml5.com/jikuw/zrts/DCDA2024Reutlingen_International_Exhibition/',
      },
    ],
    caseStudy: {
      overview:
        'Autumn Estates Reimagined began in my free time, as a serious gamer: one of the games I love is Apex Legends from EA, and what draws me in is its open world design, its maps, scenery and architecture. That pull moved me to take one part of the Olympus map, Autumn Estates, and rebuild it outside the game as a photoreal architectural visualisation. The piece went on to be selected for exhibition at the DCDA Long Beach International Design Invitation Exhibition, hosted at California State University, Long Beach, in 2024, where it was shown among the Best of the Best exhibitors.',
      objective:
        'To show how much of a game environment could be made to look realistic in our day, and to demonstrate the attention to detail in my work, by redesigning Autumn Estates, one part of Apex Legends’ Olympus map, with the same open world design language that made me fall in love with the game in the first place.',
      process: [
        'Studied the estate layout and identified the viewpoints that would carry the story of the development.',
        'Modelled the structures and surroundings, keeping proportions faithful to the real site.',
        'Rendered with attention to natural light and material honesty, then finished the presentation boards with a restrained, editorial layout.',
        'Refined the entry against exhibition requirements for the international panel.',
      ],
      outcome:
        'The work was selected as a Best of the Best exhibitor and shown at California State University, Long Beach, in 2024, placing a Ghanaian design voice on an international exhibition wall.',
      note: 'Individual design and visualisation work.',
    },
  },
  {
    slug: 'bluecrest-campus-3d',
    title: 'BlueCrest Campus 3D Visualisation',
    category: '3D Visualisation',
    categories: ['3D Visualisation', 'Motion Graphics'],
    description:
      'A complete 3D visualisation of the BlueCrest University College campus, featured on the university blog, intranet and YouTube, and in its most-watched Instagram Live.',
    tools: ['SketchUp Pro', 'Lumion 10', 'Lightroom', 'Filmora'],
    images: [bluecrest1, bluecrest2, bluecrest3, bluecrest4, bluecrest5, bluecrest6, bluecrest7, bluecrest8, bluecrest9, bluecrest10, bluecrest11, bluecrest12, bluecrest13, bluecrest14, bluecrest15],
    cover: bluecrest10,
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
        'To give the university an accurate, walkable digital twin of its campus, something the marketing team could show prospective students who had never set foot on the grounds.',
      process: [
        'Measured and modelled every campus building in SketchUp Pro, block by block, matching the real grounds.',
        'Lit and rendered the scenes in Lumion 10, choosing camera paths that mirror how a visitor actually moves through the campus.',
        'Graded stills in Lightroom for colour consistency between renders.',
        'Assembled the final film in Filmora with pacing built for social sharing.',
      ],
      outcome:
        'The university featured the project on its blog, intranet and YouTube channel. Shared on Instagram in June 2021, it drew over 400 views, the highest ever recorded on any of the college’s Instagram Live videos at that point, and, in the college’s own words, it helped boost the institution’s brand equity.',
      note: 'Individual final-year project. The college’s marketing team distributed the finished video.',
    },
  },
  {
    slug: 'roadplay',
    title: 'RoadPlay',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'A custom-built Android Auto video player developed from the ground up in Kotlin, bringing personal video libraries to the car screen with a companion mobile app.',
    tools: ['Kotlin', 'Android Auto', 'Jetpack Compose'],
    images: [roadplay1, roadplay2, roadplay3],
    cover: roadplayCard,
    cardFit: 'cover',
    year: '2026',
    links: [
      {
        label: 'GitHub releases',
        url: 'https://github.com/CyrilNyarkoTawiah/RoadPlay/releases',
      },
    ],
    caseStudy: {
      overview:
        'RoadPlay is a custom-built Android Auto video player developed from the ground up using Kotlin. The project started with a simple question: could I build my own app to access and play my personal video collection through my car\u2019s infotainment screen?',
      objective:
        'To develop a video player that makes personal video libraries accessible through Android Auto, overcoming the platform\u2019s conventional restrictions on video playback while providing a smooth, intuitive and customisable user experience. Beyond basic playback, the project aimed to deliver a complete media environment: video library browsing, playback controls, display options, playback-state management and a companion mobile app for configuration.',
      process: [
        'Started from a platform restriction: Android Auto does not natively permit video playback on the car display, so I explored an alternative Android Auto media-app implementation that made the project possible.',
        'Grew the experiment into a fully featured in-car media experience across sixteen signed releases, from v1.0.0 to v2.3.0.',
        'Designed it to work across different vehicle brands and models, so the experience is not tied to one particular vehicle.',
      ],
      outcome:
        'A refined, feature-rich Android Auto media experience, evolved from an unstable prototype into a polished application across sixteen signed releases.',
      features: [
        { name: 'Video library', detail: 'Browse personal videos on the car screen using grid or list views, complete with real video thumbnails.' },
        { name: 'Continue watching', detail: 'A dedicated feature for quickly returning to previously watched content.' },
        { name: 'Video playback', detail: 'Parked-mode playback with flexible aspect-ratio controls, similar to those found in VLC.' },
        { name: 'Playback state management', detail: 'Preserves playback state across gear changes and transitions between browsing and playback.' },
        { name: 'Smart playback controls', detail: 'Tap-to-reveal controls that automatically hide, alongside a mini-player that keeps the library accessible during playback.' },
        { name: 'Built-in car browser', detail: 'An integrated browser with YouTube support, fullscreen video, an on-screen keyboard and phone-based keyboard input.' },
        { name: 'Customisation', detail: 'Five selectable themes to personalise the interface.' },
        { name: 'Phone companion app', detail: 'A dedicated mobile interface for managing application settings.' },
      ],
      note: 'Personal project, design, development and release.',
    },
  },
  {
    slug: 'tanktrack',
    title: 'TankTrack',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'An offline-first fuel-tracking Android app for Ghanaian drivers: automatic trip recording, live trip monitoring, fuel analytics and Android Auto integration.',
    tools: ['Kotlin', 'Jetpack Compose', 'MapLibre', 'Android Auto'],
    images: [tanktrack1, tanktrack2, tanktrack3, tanktrack4, tanktrack5, tanktrack6],
    cover: tanktrackCard,
    cardFit: 'cover',
    gallery: 'phone',
    year: '2026',
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/CyrilNyarkoTawiah/TankTrack',
      },
    ],
    caseStudy: {
      overview:
        'TankTrack is a fuel-tracking Android application developed for Ghanaian drivers, designed to provide a clearer picture of vehicle fuel consumption, travel patterns and running costs. The idea behind the project was simple: give drivers a practical way to understand how much fuel their vehicles consume, how much they spend on fuel and how efficiently their vehicles perform over time.',
      objective:
        'To build a reliable and privacy-focused fuel management application that helps Ghanaian motorists monitor their fuel consumption, track journeys and make informed decisions about vehicle running costs. The project also aimed to extend this experience beyond the phone by integrating TankTrack with Android Auto, allowing drivers to access relevant trip information directly from the vehicle\u2019s infotainment system.',
      process: [
        'Combined manual fuel logging with automatic trip recording to calculate real-world fuel consumption and driving expenses.',
        'Built with an offline-first approach: no personal data uploaded to external servers, and fuel prices based on actual prices entered by users across Ghana\u2019s six fuel companies rather than estimated figures.',
        'Evolved the app through continuous development and iterative testing from a basic fuel-logging tool into a comprehensive vehicle-monitoring system with live trip tracking, interactive maps, fuel analytics and Android Auto integration.',
      ],
      outcome:
        'A feature-rich vehicle and fuel management application, combining live trip tracking, interactive maps, fuel analytics, data management and Android Auto integration.',
      features: [
        { name: 'Fuel logging', detail: 'Record fuel purchases, fill-ups, quantities, prices and expenses to build a detailed fuel history.' },
        { name: 'Automatic trip recording', detail: 'Capture journeys automatically through a foreground service while driving.' },
        { name: 'Fuel consumption analytics', detail: 'Calculate actual fuel consumption, estimated fuel usage and vehicle running costs using recorded data.' },
        { name: 'Live trip monitoring', detail: 'Display distance travelled, speed, journey duration and estimated fuel consumption in real time.' },
        { name: 'Interactive mapping', detail: 'Integrated MapLibre maps that follow the vehicle\u2019s movement and draw the route as the journey progresses.' },
        { name: 'Trip history', detail: 'Review recorded journeys, manage trip records and benefit from additional safeguards against accidental deletion.' },
        { name: 'Data export', detail: 'Export and preserve recorded information for personal records and future reference.' },
        { name: 'Customisable interface', detail: 'A Material-themed interface with six selectable colour themes, supporting both light and dark modes.' },
        { name: 'Offline-first privacy', detail: 'Keep fuel records and trip information stored locally on the device without uploading personal data to external servers.' },
        { name: 'Android Auto integration', detail: 'A live driving information card on compatible car infotainment systems, showing distance, speed, elapsed time, estimated fuel consumption and an animated route sparkline.' },
        { name: 'Extended car dashboard (in development)', detail: 'Work is ongoing to unlock a more comprehensive parked-mode dashboard on the car\u2019s display, featuring analytics cards, route visualisation and additional fuel insights.' },
      ],
      note: 'Personal project, design, development and release.',
    },
  },
  {
    slug: 'pacetrail',
    title: 'PaceTrail',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'A native Android running companion built for my brother: GPS tracking, run replay, splits, achievements and MapLibre mapping, offline-first with no account required.',
    tools: ['Kotlin', 'Jetpack Compose', 'MapLibre', 'Room'],
    images: [pacetrail1, pacetrail2, pacetrail3, pacetrail4, pacetrail5, pacetrail6, pacetrail7],
    cover: pacetrailCard,
    cardFit: 'cover',
    gallery: 'phone',
    year: '2026',
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/CyrilNyarkoTawiah/PaceTrail',
      },
    ],
    caseStudy: {
      overview:
        'PaceTrail is a native Android running application I developed for my brother, Lexie, with the tagline \u201cFind your pace. Own your path.\u201d Built with Kotlin and Jetpack Compose, it serves as a personal running companion: GPS-based run tracking, fitness insights and progress monitoring, working offline with no user account or backend, all personal running data stored on the device.',
      objective:
        'To create a personalised, offline-first running companion that records real GPS runs reliably (even with the screen off), keeps running history private and stored locally, turns every run into a meaningful experience through visual summaries, achievements and performance analysis, gives training suggestions based on actual history rather than fabricated statistics, and can be built, maintained and updated through GitHub without a traditional Android Studio workflow.',
      process: [
        'Foundation: established the project structure, implemented the six themes, configured the local database and created the automated GitHub Actions build workflow.',
        'Core running features: developed the GPS recording engine with pause and resume, saved runs, running history and a post-run completion screen.',
        'Personalisation: added a fitness profile with BMI calculations, photo support, training suggestions, personal goals, backup and restore, data export, a welcome tour, help centre and running calendar.',
        'First real builds: relied on GitHub Actions to build and test, worked through build logs to fix missing imports across ten files, a typo and an SDK configuration error.',
        'Complete UI redesign: redesigned the entire experience around four visual references, with gradient themes, bundled fonts, an illustrated hero scene, floating navigation, spring-based button interactions, animated rings and charts, confetti effects, a starting countdown and shareable running images.',
        'Update 2, ten major improvements: two-step run deletion, run replay, fixed centred navigation bar, swipe and tap controls, more achievement badges, a scoreboard, pre-run, during-run and post-run notes, individual run analysis, a swipeable calendar, and location and route sharing.',
        'Update 3, mapping: integrated OpenStreetMap through MapLibre after exploring Google Maps (whose API key required account and billing setup), structured so Google Maps can be enabled later with a valid key.',
      ],
      outcome:
        'A complete running companion delivered through several development stages, redesigns and three major updates, packaged as PaceTrail.zip (the full source project) and PaceTrail-update-3.zip (a lightweight update package with the six modified files). One of my most hands-on experiences in Android development: GPS technologies, mapping, UI/UX design, automated builds and deployment, turning a personal idea into something functional and practical.',
      features: [
        { name: 'GPS running and recording', detail: 'Foreground-service GPS engine that records even with the screen off, GPS filtering, pause and resume with separate active and paused time, optional distance goals, pre-run countdown, voice updates and swipe-or-tap controls.' },
        { name: 'Post-run experience', detail: 'A completion screen with summaries and celebration effects, photo support, notes before, during and after a run, animated route replay, and shareable running summary, route and location sharing.' },
        { name: 'Performance analysis', detail: 'Kilometre-by-kilometre splits, best running efforts, time spent at different paces, longest continuous steady-running stretch, and individual run statistics.' },
        { name: 'Progress and motivation', detail: 'A points-based scoreboard with progressive levels, 24 achievement badges including half-marathon, marathon and ultra-marathon milestones, personal bests, weekly goals and progress charts.' },
        { name: 'Additional features', detail: 'Interactive calendar with swipeable monthly navigation, six colour themes in light and dark modes, backup and restore, CSV and GPX export, an integrated help centre, and OpenStreetMap street mapping through MapLibre.' },
        { name: 'Project deliverables', detail: 'PaceTrail.zip, the complete application source project, and PaceTrail-update-3.zip, a lightweight update package containing only the six files modified in the latest update.' },
      ],
      note: 'Personal project, built for my brother, design, development and release.',
    },
  },
  {
    slug: 'spyyourmoney',
    title: 'SpyYourMoney',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'An offline-first personal finance Android app: accounts, budgets, bills and subscriptions, debts, savings goals and spending insights, with no internet permission.',
    tools: ['Kotlin', 'Jetpack Compose'],
    images: [spyyourmoney1, spyyourmoney2, spyyourmoney3, spyyourmoney4, spyyourmoney5, spyyourmoney6],
    cover: spyyourmoneyCard,
    cardFit: 'cover',
    gallery: 'phone',
    year: '2026',
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/CyrilNyarkoTawiah/SpyYourMoney',
      },
    ],
    caseStudy: {
      overview:
        'SpyYourMoney is a personal finance Android application I developed to help me track my income, expenses, savings, debts and overall spending habits. It supports cash, Mobile Money and bank accounts, allowing me to manage all my finances from one place. I built it with an offline-first, privacy-focused approach: all records are entered manually and stored locally on my phone, with no internet permission, bank connections, backend server, user accounts or advertisements.',
      objective:
        'To build a personal finance tool that tracks income, expenses and transfers across multiple accounts; manages budgets, bills, subscriptions and expected income; monitors debts, repayments and savings goals; understands spending patterns through reports and financial insights; plans upcoming expenses with the Can I Afford This? feature; and keeps financial information private with local storage and secure backup options.',
      process: [
        'Modelled the full personal-finance picture: accounts, budgets, bills and subscriptions, debts and savings goals.',
        'Added rule-based spending insights that read patterns in the ledger and say what is actually happening, including the Money Leak Radar.',
        'Protected the ledger with biometric app lock and password-protected backups, and kept export as CSV so the data always leaves on the owner\u2019s terms.',
      ],
      outcome:
        'A fully featured personal finance system built for better visibility and control over my money, without relying on external financial services or sacrificing privacy.',
      features: [
        { name: 'Account management', detail: 'Cash, MoMo, bank, savings and other accounts.' },
        { name: 'Transaction tracking', detail: 'Record, edit, search and categorise income and expenses.' },
        { name: 'Budgeting', detail: 'Weekly, monthly and custom budgets with spending alerts and forecasts.' },
        { name: 'Bills and income', detail: 'Manage recurring payments, subscriptions and expected earnings.' },
        { name: 'Debt management', detail: 'Track borrowed and lent money, repayments and outstanding balances.' },
        { name: 'Savings goals', detail: 'Set targets, monitor contributions and calculate required monthly savings.' },
        { name: 'Financial calendar', detail: 'View transactions, bills, debts, goals and scheduled tasks.' },
        { name: 'Reports and insights', detail: 'Spending breakdowns, financial trends and Money Leak Radar.' },
        { name: 'Security and backup', detail: 'Biometric app lock, password-protected backups, restore and CSV export.' },
        { name: 'Customisation', detail: 'Six themes with light and dark modes, privacy mode and an animated startup screen.' },
      ],
      note: 'Personal project, design, development and release.',
    },
  },
  {
    slug: 'aashot',
    title: 'AAShot',
    category: 'Android Applications',
    categories: ['Android Applications'],
    description:
      'A Shizuku-powered Android Auto screen-capture tool, built for one reason: clean, true-to-screen captures of a wired AA session when the phone cannot screenshot it and a camera pointed at the head unit will not do.',
    tools: ['Kotlin', 'Shizuku', 'Android Auto'],
    images: [aashot1, aashot2, aashot4],
    cover: aashotCard,
    cardFit: 'cover',
    year: '2026',
    caseStudy: {
      overview:
        'AAShot exists because of a portfolio problem. I needed clean screenshots of my Android Auto apps for the very page you are reading, and Android Auto would not cooperate: the phone cannot screenshot the AA rendering on the car display, and photographing the head unit with a camera produces glare and crooked frames. Rather than settle for bad images of good work, I built the tool that takes them properly.',
      objective:
        'To produce clean, true-to-screen captures of a wired Android Auto session straight from the phone: no camera, no cropped photos, no compromised quality, packaged as a one-tap tool that works in the car.',
      process: [
        'Probed Android\u2019s display-capture paths and found the one that reaches virtual displays: screencap with stable display ids, which sees what normal screenshots cannot.',
        'Integrated Shizuku for privileged shell access from a plain phone app, handling the binder lifecycle and streaming binary PNG output without corrupting it.',
        'Taught the tool to recognise the AA session: capture every virtual display, pick the largest landscape one as the main car screen, then stitch the car\u2019s separate bottom-bar display beneath it, width-normalised, into a single composite.',
        'Added a Quick Settings tile so a capture is one tap from anywhere, and validated the whole flow in the car on a real wired AA connection.',
      ],
      outcome:
        'A working screen-capture tool, proven in the car: the images throughout this site\u2019s Android Auto projects are its output. Captures land as PNG files in Pictures/AndroidAuto, ready to publish.',
      features: [
        { name: 'Virtual-display capture', detail: 'Screencaps every virtual display over Shizuku and selects the largest landscape one as the AA main content.' },
        { name: 'Composite output', detail: 'Stitches the car\u2019s bottom-bar strip beneath the main area, width-normalised on a black background, into one PNG.' },
        { name: 'One-tap capture', detail: 'A Quick Settings tile plus an in-app capture button, so a shot is one tap from the driver\u2019s seat.' },
        { name: 'Gallery-ready saving', detail: 'PNG files land in Pictures/AndroidAuto, immediately viewable and shareable.' },
        { name: 'No AA registration', detail: 'A plain phone app with no Android Auto media declaration and no server gate, which is exactly why it could exist.' },
        { name: 'Proven in the car', detail: 'Captures maps, the AA launcher (RoadPlay and TankTrack visible), media playback and messages from a real wired session.' },
      ],
      note: 'Personal project, built to make the Android Auto work on this site photographable. Design, development and release.',
    },
  },
  {
    slug: 'csir-insti-3d',
    title: 'Project CSIR-INSTI: Modelling & Animation',
    category: '3D Visualisation',
    categories: ['3D Visualisation', 'Motion Graphics'],
    description: '3D modelling and animation of the CSIR-Institute for Scientific and Technological Information, produced from within the institute.',
    tools: ['SketchUp', 'Lumion', 'Photoshop'],
    images: [csir1, csir2, csir3, csir4, csir5, csir6, csir7, csir8],
    year: '2022–Present',
    links: [
                {
          label: 'View on Behance',
          url: 'https://www.behance.net/gallery/198044169/Project-CSIR-INSTI-Modeling-and-animation',
        },
      ],
    caseStudy: {
        overview:
          'A 3D modelling and animation study of the CSIR-Institute for Scientific and Technological Information (INSTI), the institute where I serve as Senior Graphic Designer / Technical Officer. The piece carries the institute’s buildings and grounds into three dimensions, rendered and set in motion.',
        objective:
          'To give the institute a dimensional portrait of itself, the same accuracy expected of my publications work, extended into space, light and motion.',
        process: [
          'Modelled the institute and its surroundings, keeping proportions faithful to the real site.',
          'Lit and rendered the scenes, then animated camera moves that present the buildings the way a visitor would meet them.',
          'Finished the renders and motion pieces to the same visual standard as the institute’s print identity.',
        ],
        outcome:
          'A 3D visualisation and animation set for the institute, published on Behance and used alongside the institute’s design and multimedia work.',
        note: 'Produced within my role at CSIR-INSTI.',
      },
  },
  {
    slug: 'csir-cri-book-of-abstracts',
    title: 'CSIR-CRI Book of Abstracts 2018',
    category: 'Publications',
    categories: ['Publications', 'Graphic Design'],
    description: 'Book design for the CSIR-Crops Research Institute Book of Abstracts (2018), a multi-author scientific programme held to one typographic system.',
    tools: ['Adobe Photoshop', 'Print Layout', 'Typography'],
    images: [cri1, cri2, cri3, cri4, cri5, cri6],
    year: '2018',
    links: [
                {
          label: 'View on Behance',
          url: 'https://www.behance.net/gallery/208531245/CSIR-CRI-BOOK-OF-ABSTRACTS-2018-BOOK-DESIGN',
        },
      ],
    caseStudy: {
        overview:
          'Layout and design for the CSIR-Crops Research Institute’s Book of Abstracts, the printed publication that collects the research abstracts for the institute’s 2018 scientific event. Dozens of multi-author entries had to sit together as one coherent, readable document.',
        objective:
          'To hold dense scientific abstracts in a system that reads cleanly page after page, disciplined typography, clear structure, and a cover that represents the research inside.',
        process: [
          'Set a typographic system for abstracts, authors and affiliations that survives hundreds of entries.',
          'Designed the cover and section openers to give the science a dignified, institutional face.',
          'Carried the layout through print production to the finished book.',
        ],
        outcome:
          'The 2018 Book of Abstracts, designed and produced as part of the institute’s publications programme, also featured on Behance.',
        note: 'Personal design contribution within the institute’s publications work.',
      },
  },
  {
    slug: 'csir-institute-citations',
    title: 'Citation Design for CSIR Institutes',
    category: 'Graphic Design',
    categories: ['Graphic Design', 'Publications'],
    description:
      'Institutional citations designed for CSIR institutes, formal honours that carry the institutes’ identity with restraint.',
    tools: ['Adobe Illustrator', 'Print Design'],
    images: [citations1, citations2, citations3, citations4, citations5, citations6, citations7, citations8],
    cover: citations3,
    year: '2022–Present',
    links: [
                {
          label: 'View on Behance',
          url: 'https://www.behance.net/gallery/208532541/CITATION-DESIGN-FOR-CSIR-INSTITUTES',
        },
      ],
    caseStudy: {
        overview:
          'A set of institutional citations designed for CSIR institutes, the formal honours presented to staff and partners. Each piece has to feel ceremonial without excess: the institutes’ identity, the recipient’s name, and nothing that competes with the moment.',
        objective:
          'To design citations worthy of the occasion, formal, warm and unmistakably institutional, in print quality.',
        process: [
          'Built each citation around the institutes’ identity, with ornament restrained to what the occasion earns.',
          'Set names and citations in typography that honours the recipient.',
          'Prepared the pieces for print and presentation.',
        ],
        outcome:
          'A continuing series of institutional citation designs for the CSIR institutes, published on Behance.',
        note: 'Personal design contribution within the institute’s work.',
      },
  },

]

export const getProject = (slug: string | undefined) =>
  projects.find((p) => p.slug === slug)
