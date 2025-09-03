# 06-Testing · Vitest + React Testing Library y Playwright

1) Objetivo
- Probar componentes cliente y server con Vitest/RTL.
- Ejecutar E2E con Playwright (login simulado y lectura de post).

2) Prerequisitos
- Node 18+, pnpm.

3) Diagrama ASCII

Unit (vitest) -> componentes
E2E (playwright) -> navegador -> app dev

4) Conceptos clave
- Render de componentes con `@testing-library/react`.
- Mock de RSC/Server Actions mediante funciones.
- Playwright para flujos de usuario reales.

5) Paso a paso
- 1. Instalar Vitest y RTL.
- 2. Configurar setup y test básico.
- 3. Playwright `npx playwright install` y test simple.

6) Ejemplo mínimo runnable
- Ver `examples/06-testing/01-vitest-rtl-playwright/`.

7) Errores comunes
- Olvidar `jsdom` en environment para RTL.
- Tests E2E inestables por esperas implícitas.

8) Performance/SEO/A11y tips
- Prueba accesibilidad básica con `getByRole`.
- Evita dependencias globales entre tests.

9) Ejercicios
- Agrega un test de Server Action mockeada.
- Añade E2E que compruebe navegación entre rutas.

10) Soluciones
- Ver `06-testing/solucion.md`.

11) Quiz breve
- 1. ¿Qué lib renderiza componentes en tests? (R: RTL)
- 2. ¿Qué env usa RTL? (R: jsdom)
- 3. ¿Qué comando instala navegadores? (R: npx playwright install)
- 4. ¿Qué test valida flujos reales? (R: E2E)
- 5. ¿Cómo seleccionas accesible? (R: getByRole)

12) Referencias
- Vitest: https://vitest.dev
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- Playwright: https://playwright.dev
