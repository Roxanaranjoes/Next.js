# 02-Styling · CSS Modules, Tailwind, Fuentes e Imágenes

1) Objetivo
- Estilar componentes con CSS Modules y Tailwind.
- Activar modo oscuro y diseño responsive.
- Optimizar fuentes con `next/font` e imágenes con `next/image`.

2) Prerequisitos
- Haber corrido un ejemplo base.
- Conocer conceptos básicos de CSS.

3) Diagrama ASCII

app/layout -> globals.css (Tailwind) -> componentes
            -> next/font -> clase en <body>
component.module.css -> estilos locales

4) Conceptos clave
- CSS Modules: `styles.module.css` con scoping automático.
- Tailwind: utilidades atómicas, `dark` class para modo oscuro.
- Fuentes: `next/font/google` evita FOUT y optimiza.
- Imágenes: `next/image` optimiza formatos y tamaños.

5) Paso a paso
- 1. Instalar Tailwind y PostCSS.
- 2. Configurar `tailwind.config.ts` y `globals.css`.
- 3. Crear componente con CSS Module.
- 4. Usar `next/font` y `next/image`.

6) Ejemplo mínimo runnable
- Ver `examples/02-styling/01-css-modules-tailwind/`.

7) Errores comunes
- Olvidar incluir `globals.css` en `layout.tsx`.
- No configurar `content` en `tailwind.config`.
- Imagenes sin `alt` (accesibilidad/SEO).

8) Performance/SEO/A11y tips
- Usa `next/font` para evitar layout shift.
- Pasa `sizes` y `priority` en imágenes above-the-fold.
- Respeta contraste y focus states.

9) Ejercicios
- Añade toggle de modo oscuro con `data-theme` o clase `dark`.
- Crea un grid responsive de tarjetas con `next/image`.
- Cambia la fuente a `Inter` con `next/font/google`.

10) Soluciones
- Ver `02-styling/solucion.md`.

11) Quiz breve
- 1. ¿Dónde se activa Tailwind? (R: globals.css + config)
- 2. ¿`next/font` evita FOUT? (R: Sí)
- 3. ¿Cómo habilitas dark mode en Tailwind? (R: class/media; usamos class)
- 4. ¿`next/image` requiere `alt`? (R: Sí)
- 5. ¿CSS Modules aplica scoping? (R: Sí)

12) Referencias
- Tailwind + Next: https://tailwindcss.com/docs/guides/nextjs
- next/font: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- next/image: https://nextjs.org/docs/app/building-your-application/optimizing/images
