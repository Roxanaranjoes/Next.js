# 07-Deploy · Vercel (env vars, previews por PR, buenas prácticas)

1) Objetivo
- Desplegar una app Next.js en Vercel.
- Configurar variables de entorno y previews por PR.
- Aplicar buenas prácticas de producción.

2) Prerequisitos
- Cuenta en Vercel y acceso al repo.

3) Diagrama ASCII

Push -> GitHub -> Vercel Build -> Preview URL
                          |-> Prod (main)

4) Conceptos clave
- Envs por entorno: Development/Preview/Production.
- Secrets y `.env` locales (no commitear).
- Preview deployments por PR.

5) Paso a paso
- 1. Importar repo en Vercel.
- 2. Definir envs en Project Settings.
- 3. Probar preview con PR.
- 4. Promover a producción tras review.

6) Ejemplo mínimo runnable
- Ver `examples/07-deploy/01-vercel/`.

7) Errores comunes
- Falta de envs en Vercel (build falla).
- URL absolutas incorrectas entre preview/prod.

8) Performance/SEO/A11y tips
- Activa imágenes estáticas optimizadas en dominio permitido.
- Revisa Core Web Vitals en Vercel Analytics.

9) Ejercicios
- Añade env `API_BASE_URL` y consúmela en RSC.
- Configura dominio custom.

10) Soluciones
- Ver `07-deploy/solucion.md`.

11) Quiz breve
- 1. ¿Qué crea Vercel por PR? (R: Preview URL)
- 2. ¿Dónde configuro envs? (R: Project Settings)
- 3. ¿Se commitea `.env`? (R: No)
- 4. ¿Cómo promover a prod? (R: Merge a main o Promote)
- 5. ¿Qué revisar tras deploy? (R: Logs y métricas)

12) Referencias
- Vercel Next.js: https://vercel.com/guides/deploying-nextjs-with-vercel
