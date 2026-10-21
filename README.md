# MYRA Flower Decoration

A responsive website for **MYRA Flower Decoration**, designed with a luxury black-and-gold visual theme. Built with React, Vite, Tailwind CSS 4, Framer Motion, and Lucide React.

**Live website:** https://myra-flower-decoration.vercel.app/

## Features

- Responsive homepage and navigation for desktop and mobile.
- Luxury black-and-gold branding with floral imagery.
- Event galleries for wedding, engagement, birthday, reception, stage decoration, and other events.
- Separate client-work and decoration-inspiration sections.
- Catalogue viewing and download, including a navbar download button.
- Inquiry form with validation and a WhatsApp click-to-chat handoff. The visitor reviews the prefilled message and sends it through WhatsApp.
- Direct contact links for WhatsApp, email, and Instagram.
- Gallery routes configured for production deployment on Vercel.

## Tech stack

- React
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Vercel (deployment)

## Run locally

Requirements: Node.js and npm.

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite.

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Catalogue

The catalogue is stored at `public/catalogue/myra-catalogue.pdf`.

- Website catalogue: https://myra-flower-decoration.vercel.app/catalogue/myra-catalogue.pdf
- The website provides catalogue access from the homepage and the navigation bar.

## Gallery routes

- Wedding: https://myra-flower-decoration.vercel.app/gallery/wedding
- Engagement: https://myra-flower-decoration.vercel.app/gallery/engagement
- Birthday: https://myra-flower-decoration.vercel.app/gallery/birthday
- Reception: https://myra-flower-decoration.vercel.app/gallery/reception
- Stage: https://myra-flower-decoration.vercel.app/gallery/stage
- Other events: https://myra-flower-decoration.vercel.app/gallery/other-events

Portfolio and inspiration image information is maintained in `src/data/images.js`. Each category has separate `clientWork` and `inspiration` arrays. Inspiration photos are labeled separately and are not presented as MYRA client work.

The homepage hero uses the locally optimized image `public/images/inspiration/hero/white-floral-stage.webp`, based on an Unsplash photo by Esra Korkmaz, available under the Unsplash License:
https://unsplash.com/photos/a-room-with-white-chairs-and-flowers-on-the-wall-eUZtFa-_I3U

## Business contact

- **Email:** myraflowerdecoration@gmail.com
- **Phone / WhatsApp:** +91 93376 82176
- **WhatsApp:** https://wa.me/919337682176
- **Instagram:** https://www.instagram.com/myra_decoration_oupada/
- **Address:** Oupada, Soro, Balasore, Odisha – 756049, India.
- **Map:** https://www.google.com/maps/search/?api=1&query=Oupada%2C%20Soro%2C%20Balasore%2C%20Odisha%20756049

## Images and branding

The official logo is at `public/images/logo.png`. The supplied files `public/images/wedding1.jpeg` through `public/images/wedding4.jpeg` are listed as wedding client work and preserved in their original location and filenames. Selected photographs from the supplied MYRA catalogue are optimized as WebP files in `public/images/client-work/<category>/` and included only in their assigned category. Unsplash photographs remain separate and are labeled as decoration inspiration.

To add actual client photos:

1. Create a category folder, for example `public/images/client-work/engagement/`.
2. Copy the supplied photo there unchanged, keeping its original filename.
3. Add an entry with its exact public path, descriptive alt text, and caption to that category's `clientWork` array in `src/data/images.js`.
4. Only add a photo to a category when its event type is known. Ask for clarification when it is not.

Supported client-work folders are `wedding`, `engagement`, `birthday`, `reception`, `stage`, and `other-events`. To add a local inspiration image, place it in `public/images/inspiration/<category>/` and add an entry to that category's `inspiration` array in the same data file.

## Deployment

The production website is hosted on Vercel and connected to the GitHub repository. Updates pushed to the `main` branch can trigger a new production deployment.
