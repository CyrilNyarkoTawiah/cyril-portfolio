export interface SkillGroup {
  title: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Design & Branding',
    description: 'From first sketch to press-ready files.',
    skills: [
      'Adobe Creative Suite',
      'CorelDRAW',
      'Figma',
      'Brand guidelines',
      'Print & publication layout',
    ],
  },
  {
    title: '3D & Motion',
    description: 'Building worlds and setting them in motion.',
    skills: [
      'Google SketchUp',
      'Lumion',
      'Lightroom',
      'Filmora',
      'Whiteboard animation',
      'Motion graphics',
      '3D modelling & animation',
    ],
  },
  {
    title: 'Software Development',
    description: 'Shipping real apps, not demos.',
    skills: [
      'Android development',
      'Kotlin',
      'Jetpack Compose',
      'Room',
      'Web development',
      'CI-built releases',
    ],
  },
  {
    title: 'Information Systems',
    description: 'Organising knowledge into systems.',
    skills: ['Digitisation', 'Knowledge management', 'Information-systems projects'],
  },
]
