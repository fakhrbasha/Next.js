# Next Framework
> SEO
- React: Uses Client-Side Rendering → search engines may not index properly.
- Next.js: Supports Server-Side Rendering (SSR) & Static Site Generation (SSG) → much better SEO.
> Routing
- React: Requires external library like react-router.
- Next.js: Built-in file-based routing → each folder = route, each page.tsx = page.
> API
- React: No backend, you must create a separate Node/Express server.
- Next.js: Has app/api for building backend APIs inside the same project.
> Performance
- React: First load is heavy (large JavaScript bundle).
- Next.js: Automatic code-splitting, image optimization, caching, and prefetch for faster load times.
> Configuration
- React: Manual setup for Webpack, Babel, TypeScript, ESLint.
- Next.js: Zero-config, everything works out of the box.
> Fullstack
- React: Only a UI library (frontend).
- Next.js: Fullstack framework (frontend + backend + deployment).
> CSR - SSR - SSG - ISR Search it
> Next.js Rendering Cheat Sheet
1. CSR – Client-Side Rendering
- Render happens in the browser after JavaScript loads.
- Pros: Highly interactive, good for dynamic state/UI.
- Cons: Poor SEO, slower first load.
- Use when: Content changes on every interaction, not SEO critical.
2. SSR – Server-Side Rendering
- Render happens on the server for every request.
- Pros: Great SEO, always fresh data.
- Cons: Higher server cost, slower TTFB.
- Use when: Personalized content, fast-changing data.
3. SSG – Static Site Generation
- Render happens at build time, HTML is cached and reused.
- Pros: Fastest performance (CDN), SEO friendly.
- Cons: Content becomes outdated until rebuild.
- Use when: Docs, blogs, marketing pages.
4. ISR – Incremental Static Regeneration
- Like SSG, but pages auto-refresh after a set time or on-demand.
- Pros: Mix of speed + freshness, SEO friendly.
- Cons: Slight stale window until revalidation.
- Use when: Blogs, pricing pages, semi-dynamic content.

## Create Next Project 
```bash
npx create-next-app@latest
```
- use ESLint more stable 
```bash
? Would you like your code inside a `src/` directory? » No / Yes -> yes
if choose no your project in  app
```
- Turbopack? -> Yes
