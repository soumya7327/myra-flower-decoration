# MYRA Flower Decoration

A responsive landing page for MYRA Flower Decoration, built with React, Vite,
Tailwind CSS 4, Framer Motion and Lucide React.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```sh
npm run build
npm run preview
```

## Catalogue

The catalogue is served from `public/catalogue/myra-catalogue.pdf`. The home
page provides a view-in-new-tab link and a download link named
`MYRA-Flower-Decoration-Catalogue.pdf`.

## Contact form

The inquiry form opens a prefilled email draft to
`myraflowerdecoration@gmail.com` when
EmailJS is not configured. The visitor
must review and send that draft in their email application; the website does
not report it as sent.

To send inquiries through EmailJS:

1. Create a service and an email template in your EmailJS account.
2. Configure the template to use `from_name`, `reply_to`, `event_type`, and
   `message`.
3. Copy `.env.example` to `.env.local` and fill in the EmailJS service ID,
   template ID, and public key.
4. Restart the Vite development server after changing environment variables.

No EmailJS credentials are included in this project.

## Business contact

- Email: `myraflowerdecoration@gmail.com`
- Phone: `+91 93376 82176`
- WhatsApp: `https://wa.me/919337682176`
- Instagram: `https://www.instagram.com/myra_decoration_oupada/`
- Address: Oupada, Soro, Balasore, Odisha – 756049, India.

## Images and branding

The official logo is at `public/images/logo.png`. The supplied files
`public/images/wedding1.jpeg` through `public/images/wedding4.jpeg` are listed
as wedding client work and preserved in their original location and filenames.
Selected photographs from the supplied MYRA catalogue are optimized as WebP
files in `public/images/client-work/<category>/` and included only in their
assigned category. Unsplash photographs remain separate and are labeled as
decoration inspiration.

Each service category also has a direct gallery route:
`/gallery/wedding`, `/gallery/engagement`, `/gallery/birthday`,
`/gallery/reception`, `/gallery/stage`, and `/gallery/other-events`.
Categories without assigned client photos display an explicit empty state and
keep their inspiration photo in its own labeled section.

All portfolio and inspiration image information is maintained in
`src/data/images.js`. Each category has separate `clientWork` and
`inspiration` arrays.

The homepage “Moments made memorable” editorial feature uses three locally
stored Unsplash inspiration images in
`public/images/inspiration/editorial/`. They are labeled as inspiration and
are not presented as MYRA client work. The category gallery routes and their
client-work images remain separate.

The homepage hero uses the locally optimized
`public/images/inspiration/hero/white-floral-stage.webp`, based on an Unsplash
photo by Esra Korkmaz, available under the Unsplash License:
https://unsplash.com/photos/a-room-with-white-chairs-and-flowers-on-the-wall-eUZtFa-_I3U

To add actual client photos:

1. Create a category folder, for example
   `public/images/client-work/engagement/`.
2. Copy the supplied photo there unchanged, keeping its original filename.
3. Add an entry with its exact public path, descriptive alt text, and caption
   to that category's `clientWork` array in `src/data/images.js`.
4. Only add a photo to a category when its event type is known. Ask for
   clarification when it is not.

Supported client-work folders are `wedding`, `engagement`, `birthday`,
`reception`, `stage`, and `other-events`. To add a local inspiration image,
place it in `public/images/inspiration/<category>/` and add an entry to that
category's `inspiration` array in the same data file.
