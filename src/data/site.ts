export const site = {
  name: 'Cyril Nyarko Tawiah',
  title: 'Designer · 3D Visualizer · Developer',
  motto: ['Creative thinking.', 'Technical execution.'],
  intro:
    'I design, model and develop — from brand visuals and publications to immersive 3D visualisations, motion graphics and Android applications.',
  location: 'Accra, Ghana',
  email: 'cyriltawiah9@gmail.com',
  phones: ['+233 550 292 767', '+233 560 030 144'],
  socials: {
    behance: 'https://www.behance.net/cyriltawiah',
    github: 'https://github.com/CyrilNyarkoTawiah',
    linkedin: 'https://linkedin.com/in/cyril-nyarko-tawiah-229060151',
  },
  cvUrl: `${import.meta.env.BASE_URL}Cyril_Tawiah_CV_v5.pdf`,
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
] as const
