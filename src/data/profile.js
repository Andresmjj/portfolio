
export const profile = {
  name: 'Andrés Maldonado Jiménez',
  shortName: 'Andrés Maldonado',
  role: 'Desarrollador Full Stack',
  focus: 'Backend y APIs REST',
  location: 'Medellín, Colombia',
  email: 'andresmaldonado1022@gmail.com',
  phone: '@ANDRESMJJ',
  whatsappUsuario: 'ANDRESMJJ',
  linkedin: 'https://www.linkedin.com/in/andresmaldonadoj/',
  github: 'https://github.com/Andresmjj',
  site: 'https://andresmaldonado.vercel.app/',
  cv: '/Andres-Maldonado-CV.pdf',
  availability: 'Disponible para trabajo presencial, híbrido o remoto',
  headline: 'Desarrollador Full Stack con enfoque en backend.',
  intro:
    'He colaborado en la contruccion y despliegue de aplicaciones web, E-commerce, Landing pages y soluciones con IA aplicada.',
  summary:
    'Desarrollador Full Stack con enfoque en backend y más de un año de experiencia construyendo y desplegando aplicaciones web en producción para el sector salud, con continuidad como contratista independiente desde julio de 2026. Cubro el ciclo completo del producto: APIs REST sobre una plataforma modular con NestJS, modelado de datos con PostgreSQL y Prisma, interfaces en React y despliegue en Linux con Docker y Nginx. Complemento el desarrollo con SEO técnico, rendimiento e integración de modelos de lenguaje para automatizar flujos de negocio.',
  whatsappMessage:
    'Hola Andrés, vi tu portafolio y me gustaría conversar sobre una oportunidad.',
}

export const whatsappUrl = `https://wa.me/${profile.whatsappUsuario}?text=${encodeURIComponent(
  profile.whatsappMessage,
)}`

export const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
  'Conversemos sobre una oportunidad',
)}`

export const stats = [
  {
    value: '1a 5m',
    label: 'En DoClio, desde junio de 2025',
    detail: 'Empleado por contrato y, desde julio de 2026, contratista independiente.',
  },
  {
    value: '124',
    label: 'Endpoints REST en producción',
  },
  {
    value: '24',
    label: 'Modelos en PostgreSQL',
    detail: 'Esquema modelado y evolucionado con Prisma.',
  },
  {
    value: '23',
    label: 'Migraciones versionadas',
    detail: '30 cambios de esquema a mi cargo.',
  },
  {
    value: '70',
    label: 'Páginas en React',
    detail: 'Un frontend de 57 rutas integrado con las APIs.',
  },
  {
    value: '11',
    label: 'Landings de servicio',
    detail: 'Trabajo de metadatos y Core Web Vitals en una de ellas.',
  },
]

export const journey = [
  {
    id: 'doclio',
    period: 'jun. 2025 – actualidad',
    type: 'Experiencia profesional',
    title: 'DoClio',
    subtitle: 'Marketplace de servicios de salud · Medellín',
    description:
      'Desarrollé módulos completos sobre una plataforma con 124 endpoints REST y 16 dominios de negocio. Modelé los datos en PostgreSQL con Prisma, conecté un frontend React de 70 páginas y llevé el servicio a producción con Docker y Nginx.',
    note: 'Empleado de planta (jun. 2025 – jun. 2026) · contratista independiente (jul. 2026 – actualidad).',
    tags: ['Node.js', 'NestJS', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'Docker'],
  },
  {
    id: 'queremekatar',
    period: 'Proyecto personal',
    type: 'Producto propio',
    title: 'QuererMekatiar',
    subtitle: 'E-commerce con arquitectura de microservicios',
    description:
      'Diseñé la arquitectura distribuida y el modelo de datos de cada servicio. Implementé autenticación con JWT y Google Login (OAuth2) y las APIs que integran catálogo, usuarios y pedidos.',
    note: 'Un proyecto para aislar fallos y desplegar cada módulo por separado.',
    tags: ['Node.js', 'NestJS', 'React', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    id: 'ai-inventory',
    period: '2026 · Proyecto personal',
    type: 'Producto propio',
    title: 'AI Inventory Assistant',
    subtitle: 'Agente de IA para gestión de inventarios',
    description:
      'Construí una API con FastAPI e integré Google Gemini mediante Function Calling para consultar y operar el inventario en lenguaje natural. La persistencia vive en PostgreSQL con SQLAlchemy y migraciones en Alembic.',
    note: 'Lenguaje natural convertido en operaciones reales sobre la base de datos.',
    tags: ['Python', 'FastAPI', 'Google Gemini', 'PostgreSQL', 'SQLAlchemy', 'Alembic'],
  },
]

export const projects = journey.map((item, index) => ({
  number: String(index + 1).padStart(2, '0'),
  id: item.id,
  kicker: item.type,
  title: item.title,
  subtitle: item.subtitle,
  description: item.description,
  tags: item.tags,
  takeaway: [
    'El dato se modela una vez y se migra sin romper lo que ya está en producción.',
    'La API y la interfaz se construyen como una sola unidad, con errores visibles.',
    'Cada servicio se despliega de forma predecible en Linux con Docker.',
  ][index],
  link:
    item.id === 'doclio'
      ? { label: 'Ver DoClio', href: 'https://doclio.com.co' }
      : { label: 'Ver en GitHub', href: profile.github },
}))

export const skillGroups = [
  {
    title: 'Backend y APIs',
    items: ['Node.js', 'NestJS', 'TypeScript', 'Python (FastAPI)', 'APIs REST', 'Microservicios'],
  },
  {
    title: 'Datos',
    items: ['PostgreSQL', 'Prisma', 'MongoDB', 'SQLAlchemy', 'Alembic'],
  },
  {
    title: 'Frontend',
    items: ['React 18', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Tiempo real e infraestructura',
    items: ['Socket.io', 'Redis', 'Docker', 'Docker Compose', 'Linux', 'Nginx', 'Git'],
  },
  {
    title: 'IA aplicada y seguridad',
    items: ['Google Gemini', 'Function calling', 'JWT', 'OAuth2', 'Argon2'],
  },
  {
    title: 'En formación',
    items: ['Java / Spring Boot', 'Angular', 'Inglés B1'],
  },
]

export const education = [
  {
    title: 'Ingeniería de Software',
    school: 'Politécnico Grancolombiano',
    period: 'En curso · homologación desde Tecnólogo en ADSO',
  },
  {
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    school: 'SENA',
    period: '2023 – 2025',
  },
  {
    title: 'Técnico en Sistemas',
    school: 'SENA',
    period: '2022 – 2023',
  },
]

export const certifications = ['Conceptos de Ciberseguridad · SENA']

export const faqs = [
  {
    question: '¿Quién es Andrés Maldonado Jiménez?',
    answer:
      'Es un desarrollador Full Stack radicado en Medellín, con enfoque en backend. Desde junio de 2025 construye producto en DoClio y también desarrolla proyectos propios de e-commerce e IA aplicada.',
  },
  {
    question: '¿En qué trabaja y desde cuándo?',
    answer:
      'Trabaja en DoClio, un marketplace de servicios de salud: empleado de planta entre junio de 2025 y junio de 2026, y contratista independiente desde julio de 2026.',
  },
  {
    question: '¿Qué tecnologías domina?',
    answer:
      'Trabaja con Node.js, NestJS, TypeScript, React, PostgreSQL con Prisma, Redis y Docker. Java con Spring Boot y Angular los está aprendiendo; su inglés es B1.',
  },
  {
    question: '¿Cómo puede contactarlo?',
    answer:
      'Por WhatsApp al +57 312 655 8732 o al correo andresmaldonado1022@gmail.com. Está disponible para modalidad presencial, híbrida o remota.',
  },
]
