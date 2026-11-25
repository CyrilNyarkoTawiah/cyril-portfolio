export interface Role {
  title: string
  organisation: string
  period: string
  location?: string
  current?: boolean
  points: string[]
}

export const roles: Role[] = [
  {
    title: 'Senior Graphic Designer / Senior Technical Officer',
    organisation: 'CSIR – Institute for Scientific and Technological Information (INSTI)',
    period: 'August 2022 — Present',
    location: 'Accra, Ghana',
    current: true,
    points: [
      'Institutional graphic design and branding.',
      'Annual reports, brochures, banners and promotional materials.',
      'Video editing and multimedia production.',
      'Motion graphics and 3D modelling.',
      'Digitisation and information-systems projects.',
    ],
  },
  {
    title: 'IT Management — National Service',
    organisation: 'Ghana Revenue Authority, Head Office',
    period: '2021 — 2022',
    location: 'Accra, Ghana',
    points: [
      'Whiteboard animation for advertisements.',
      'Daily software troubleshooting.',
      'Training team members in design and animation software.',
    ],
  },
  {
    title: 'Architectural Animator (3D Modelling)',
    organisation: 'Glover Limited and William and Co.',
    period: '2019 — 2020',
    points: [
      '3D architectural rendering and animation.',
      'Estate visualisation.',
      'Collaboration with 3D modelling and graphic design teams.',
      'Product, mailer and packaging design.',
    ],
  },
  {
    title: 'Graphic Designer',
    organisation: 'Spring Consult',
    period: '2019 — 2020',
    location: 'Asylum Down, Accra',
    points: [
      'Design presentations and client consultations.',
      'Business cards, flyers and banners.',
      'Product and packaging design.',
    ],
  },
]

export interface Education {
  award: string
  school: string
  period: string
  note?: string
}

export const education: Education[] = [
  {
    award: 'MPhil, Information Systems',
    school: 'University of Professional Studies, Accra (UPSA)',
    period: 'Currently pursuing',
  },
  {
    award: 'BSc, Information Technology',
    school: 'BlueCrest University College, Accra',
    period: '2017 — 2021',
    note: 'Final-year project: Full campus 3D visualisation.',
  },
  {
    award: 'St. Thomas Aquinas Senior High School',
    school: 'Visual Art',
    period: '2015 — 2017',
  },
]

export const aboutIntro =
  'I am a multidisciplinary designer, 3D visualiser and developer with a background in Information Technology. My work combines visual creativity, technical problem-solving and digital development to create meaningful experiences and practical solutions.'
