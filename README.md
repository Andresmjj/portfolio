# Portafolio — Andrés Maldonado Jiménez

Portafolio personal de una sola página. Diseño sobrio y editorial, animaciones de scroll
discretas y carrusel nativo de proyectos. La misma historia que la hoja de vida: Full Stack
con focus en backend, producto real en producción y datos íntegros y trazables.

**En vivo:** https://andresmaldonado.vercel.app/

## Stack

- React 19 + Vite 8
- Tailwind CSS 4 (plugin de Vite, tokens en `src/index.css`)
- Animaciones sin librerías: IntersectionObserver, `requestAnimationFrame` y scroll-snap
- Vercel Analytics y Speed Insights (solo en producción)

## Scripts

```bash
npm ci
npm run dev      # servidor de desarrollo
npm run lint     # ESLint
npm run build    # build de producción en dist/
npm run preview  # servir dist/ localmente
```

## Estructura

```
src/
  data/profile.js        Fuente única de verdad: perfil, cifras, trayectoria,
                         proyectos, habilidades, formación y FAQ
  hooks/                 useReveal, useScrollProgress, useReducedMotion
  components/            Header, Hero, Evidence, Journey, ProjectsCarousel,
                         Skills, Education, Contact, Footer, Reveal, ScrollProgress
  index.css              Tokens de tema, estados de foco y reduced motion
public/
  Andres-Maldonado-CV.pdf  Hoja de vida General (ES), descarga única
  og-image.png             Imagen social 1200x630
  robots.txt / sitemap.xml / llms.txt
index.html               Metadatos, JSON-LD y fallback estático
```

## Contenido

Toda la información sale de `src/data/profile.js`, construido a partir de la hoja de vida
General (ES) y de las notas verificadas de Obsidian. Si cambias un dato aquí, actualiza
también los metadatos y el JSON-LD de `index.html` y el PDF de `public/`: las cuatro piezas
deben contar exactamente lo mismo (nombre, fechas, cifras y canales de contacto).

## Contacto

- Correo: andresmaldonado1022@gmail.com
- WhatsApp: +57 312 655 8732
- LinkedIn: https://www.linkedin.com/in/andresmaldonadoj/
- GitHub: https://github.com/Andresmjj
