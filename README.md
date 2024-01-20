# franck-g.fr

The code source of my personal website, showcasing my projects, experiences, photos and videos.


[Visit →][franck-g]

It's still under development. I'm currently working on some features and improvements.

## Tech stack

This website was built on top of the ["Next.js Blog with a Native Authoring Experience"][template-source] template.

It offers a statically generated pages that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content.

It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

> **Note**
>
> This project still uses the `/pages` directory for Next.js routing.
> I might migrate it to the [/app][app-dir] directory in the future.
>
> Live preview during editing doesn't work for the moment. I focused on having a functional website first.

## Getting started

**All the informations about the template, its features, and how to use it are available in the [template repository][template-source].**

You need to create a have a [sanity.io][sanity-homepage] project. Follow the [.env.local.example][`.env.local.example`] file to create a `.env.local` file with your project data.

Don't forget to install the dependencies on the first run

```bash
pnpm install
```

Then you can start the development server

```bash
pnpm dev
```

Open [http://localhost:3000][localhost-3000] with your browser to see the result.

Open [http://localhost:3000/studio][localhost-3000-studio] to access the Sanity Studio.

## Inspirations & credits

This website was achieved by mashing up ideas and ressources from

- [TailwindUI Spotlight template][TailwindUI Spotlight template] for the main inspiration. I didn't bought it, but recreated some parts myself.
- [Crafting the Next.js Website, by Rauno Freiberg][crafting-nextjs-org] for the shining stars effect on the header.
- [Precedent.dev][precedent.dev] for the reusable Tooltip component.
- [Shadcn UI][shadcn-ui] for the reusable modal component.

[`.env.local.example`]: .env.local.example
[nextjs]: https://github.com/vercel/next.js
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[app-dir]: https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory
[franck-g]: https://franck-g.fr/
[template-source]: https://github.com/sanity-io/nextjs-blog-cms-sanity-v3
[TailwindUI Spotlight template]: https://tailwindui.com/templates/spotlight
[crafting-nextjs-org]: https://rauno.me/craft/nextjs
[Precedent.dev]: https://precedent.dev/
[shadcn-ui]: https://ui.shadcn.com/