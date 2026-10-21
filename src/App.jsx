import { MotionConfig, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Download,
  FileText,
  Flower2,
  Heart,
  MapPin,
  Sparkles,
} from 'lucide-react'
import ContactForm from './components/ContactForm.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import CategoryGallery from './components/CategoryGallery.jsx'
import { serviceCategories } from './data/images.js'
import { businessDetails } from './data/businessDetails.js'
import './App.css'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const currentYear = new Date().getFullYear()

const heroInspiration = {
  src: '/images/inspiration/hero/myra-hero-bouquet.jpg',
  alt: 'Decoration inspiration: bride holding an elegant bouquet',
  width: 1800,
  height: 1200,
}

const editorialInspiration = {
  featured: {
    src: '/images/inspiration/editorial/editorial-garden.jpg',
    alt: 'Outdoor ceremony beneath a garden pavilion with soft floral arrangements',
    caption: 'A garden ceremony',
    width: 1100,
    height: 1650,
  },
  details: [
    {
      src: '/images/inspiration/editorial/editorial-wedding.jpg',
      alt: 'Soft bridal bouquet in warm natural light',
      caption: 'Soft floral details',
      width: 1800,
      height: 1200,
    },
    {
      src: '/images/inspiration/editorial/editorial-reception.jpg',
      alt: 'Elegant reception table with a delicate floral centerpiece',
      caption: 'An intimate reception',
      width: 1100,
      height: 733,
    },
  ],
}

function Image({
  src,
  alt,
  className = '',
  eager = false,
  width,
  height,
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
    />
  )
}

function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <>
        <SiteHeader />
        <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-image-wrap">
            <Image
              src={heroInspiration.src}
              alt={heroInspiration.alt}
              className="hero-image"
              eager
              width={heroInspiration.width}
              height={heroInspiration.height}
            />
            <div className="hero-image-shade" />
          </div>
          <div className="hero-content page-shell">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="eyebrow">
                <span className="eyebrow-line" />
                MYRA FLOWER DECORATION
              </p>
              <h1 id="hero-title">
                Make your
                <br />
                moments <em>bloom.</em>
              </h1>
              <p className="hero-description">
                Thoughtful floral styling for weddings, celebrations and all
                the moments worth remembering.
              </p>
              <a className="button button-gold" href="#services">
                Discover our work <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#services" aria-label="Scroll to services">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </section>

        <section className="services section-space" id="services">
          <div className="page-shell">
            <SectionHeading
              eyebrow="WHAT WE DO"
              title={
                <>
                  Every gathering,
                  <br />
                  <em>beautifully in bloom.</em>
                </>
              }
              description="From the first flowers to the final finishing touch, we make room for the feeling you want your day to hold."
            />
            <div className="service-grid">
              {serviceCategories.map((category, index) => {
                const hasClientWork = category.clientWork.length > 0
                const cardImage = hasClientWork
                  ? category.clientWork[0]
                  : category.inspiration[0]

                return (
                <motion.article
                  className="service-card"
                  key={category.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.16 }}
                  variants={reveal}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="service-image-wrap">
                    <Image
                      src={cardImage.src}
                      alt={cardImage.alt}
                      className="service-image"
                    />
                    <span className="service-number">
                      0{index + 1}
                    </span>
                    <span className="image-source-badge service-source-badge">
                      {hasClientWork
                        ? 'MYRA CLIENT WORK'
                        : 'DECORATION INSPIRATION'}
                    </span>
                  </div>
                  <div className="service-card-copy">
                    <div>
                      <h3>
                        <a href={`/gallery/${category.id}`}>
                          {category.title}
                        </a>
                      </h3>
                      <p>{category.description}</p>
                      <a
                        className="service-gallery-link"
                        href={`/gallery/${category.id}`}
                      >
                        View Gallery <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                    <Flower2
                      className="service-flower"
                      size={19}
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </div>
                </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className="gallery section-space"
          id="gallery"
          aria-labelledby="moments-heading"
        >
          <div className="page-shell gallery-editorial">
            <div className="gallery-editorial-heading">
              <SectionHeading
                eyebrow="DECORATION INSPIRATION"
                className="gallery-editorial-copy"
                titleId="moments-heading"
                title={
                  <>
                    Moments made
                    <br />
                    <em>memorable.</em>
                  </>
                }
                description="Explore thoughtful floral details, graceful garden settings, and warm reception styling. These reference images are for inspiration, not MYRA client work."
              />
              <a className="text-link gallery-explore-link" href="/#services">
                Explore Our Galleries
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="gallery-editorial-layout">
              <motion.figure
                className="gallery-editorial-feature"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.14 }}
                variants={reveal}
                transition={{ duration: 0.65 }}
              >
                <div className="gallery-editorial-feature-image">
                  <Image
                    src={editorialInspiration.featured.src}
                    alt={editorialInspiration.featured.alt}
                    className="gallery-editorial-image"
                    width={editorialInspiration.featured.width}
                    height={editorialInspiration.featured.height}
                  />
                </div>
                <figcaption>{editorialInspiration.featured.caption}</figcaption>
              </motion.figure>
              <div className="gallery-editorial-details">
                {editorialInspiration.details.map((image, index) => (
                  <motion.figure
                    className="gallery-editorial-detail"
                    key={image.src}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.14 }}
                    variants={reveal}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                  >
                    <div className="gallery-editorial-detail-image">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="gallery-editorial-image"
                        width={image.width}
                        height={image.height}
                      />
                    </div>
                    <figcaption>{image.caption}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="inspiration section-space" id="inspiration">
          <div className="page-shell">
            <div className="gallery-heading-row">
              <SectionHeading
                eyebrow="IDEAS FOR YOUR CELEBRATION"
                title={
                  <>
                    Decoration
                    <br />
                    <em>inspiration.</em>
                  </>
                }
                description="Reference imagery to help explore styles and possibilities. These photographs are inspiration only, not MYRA FLOWER DECORATION client work."
              />
              <span className="gallery-sparkle" aria-hidden="true">
                <Sparkles size={31} strokeWidth={1} />
              </span>
            </div>
            <div className="inspiration-grid">
              {serviceCategories.flatMap((category) =>
                category.inspiration.map((image, index) => (
                  <motion.figure
                    className="inspiration-item"
                    key={`${category.id}-${image.src}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.14 }}
                    variants={reveal}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="inspiration-image"
                    />
                    <span className="image-source-badge inspiration-source-badge">
                      DECORATION INSPIRATION
                    </span>
                    <figcaption>
                      <span>{category.title}</span>
                      <span className="inspiration-caption-label">
                        Inspiration only
                      </span>
                    </figcaption>
                  </motion.figure>
                )),
              )}
            </div>
          </div>
        </section>

        <section className="catalogue section-space" id="catalogue">
          <div className="page-shell catalogue-inner">
            <div className="catalogue-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                A LITTLE MORE TO INSPIRE
              </p>
              <h2>
                Discover the
                <br />
                <em>MYRA catalogue.</em>
              </h2>
              <p>
                Explore the MYRA Flower Decoration event catalogue for more
                floral ideas and celebration inspiration.
              </p>
            </div>
            <div className="catalogue-actions">
              <a
                className="button button-gold"
                href="/catalogue/myra-catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the MYRA Flower Decoration catalogue in a new tab"
              >
                <FileText size={16} aria-hidden="true" />
                View Catalogue
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                className="button button-outline"
                href="/catalogue/myra-catalogue.pdf"
                download="MYRA-Flower-Decoration-Catalogue.pdf"
                aria-label="Download the MYRA Flower Decoration catalogue PDF"
              >
                <Download size={16} aria-hidden="true" />
                Download Catalogue
              </a>
            </div>
          </div>
        </section>

        <section className="about section-space" id="about">
          <div className="page-shell about-grid">
            <motion.div
              className="about-image-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ duration: 0.65 }}
            >
              <Image
                src={serviceCategories[0].inspiration[0].src}
                alt={serviceCategories[0].inspiration[0].alt}
                className="about-image"
              />
              <span className="image-source-badge about-source-badge">
                DECORATION INSPIRATION
              </span>
              <div className="about-image-caption">
                <Heart size={15} strokeWidth={1.4} aria-hidden="true" />
                <span>Made for your kind of magic</span>
              </div>
            </motion.div>
            <motion.div
              className="about-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <p className="eyebrow">
                <span className="eyebrow-line" />
                A NOTE ABOUT MYRA
              </p>
              <h2>
                Your day, your story,
                <br />
                <em>told in flowers.</em>
              </h2>
              <p>
                At Myra Flower Decoration, we believe the most beautiful
                celebrations feel personal. We bring flowers, thoughtful
                details and a little sense of wonder together to create a
                setting that feels like it belongs to you.
              </p>
              <p>
                Whether you are planning a wedding, an engagement or a
                gathering close to your heart, we would love to hear what you
                have in mind.
              </p>
              <a className="text-link" href="#contact">
                Tell us about your day <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="contact section-space" id="contact">
          <div className="page-shell">
            <div className="contact-intro">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                LET’S MAKE SOMETHING MEANINGFUL
              </p>
              <h2>
                Have a moment
                <br />
                <em>in mind?</em>
              </h2>
              <p>
                Tell us a little about what you are celebrating. We would be
                delighted to hear from you.
              </p>
              <div className="contact-links">
                <a
                  className="contact-link"
                  href={businessDetails.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit MYRA Flower Decoration on Instagram"
                >
                  <Camera size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <small>FOLLOW ALONG</small>
                    Instagram
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a
                  className="contact-link"
                  href={businessDetails.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat with MYRA Flower Decoration on WhatsApp"
                >
                  <span className="whatsapp-mark" aria-hidden="true">W</span>
                  <span>
                    <small>SAY HELLO ON</small>
                    WhatsApp
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a
                  className="contact-link"
                  href={businessDetails.phoneLink}
                  aria-label={`Call ${businessDetails.name} at ${businessDetails.phone}`}
                >
                  <span className="contact-initial" aria-hidden="true">T</span>
                  <span>
                    <small>GIVE US A CALL</small>
                    {businessDetails.phone}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a
                  className="contact-link"
                  href={`mailto:${businessDetails.email}`}
                  aria-label={`Email ${businessDetails.name} at ${businessDetails.email}`}
                >
                  <span className="contact-initial" aria-hidden="true">@</span>
                  <span>
                    <small>WRITE TO US</small>
                    {businessDetails.email}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <a
                className="contact-address"
                href={businessDetails.maps}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${businessDetails.address} on Google Maps`}
              >
                <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <small>FIND US</small>
                  {businessDetails.address}
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
        </main>
        <SiteFooter year={currentYear} />
      </>
    </MotionConfig>
  )
}

function App() {
  const categoryId = window.location.pathname.match(/^\/gallery\/([^/]+)\/?$/)?.[1]
  const category = serviceCategories.find((item) => item.id === categoryId)

  if (category) {
    return (
      <MotionConfig reducedMotion="user">
        <>
          <SiteHeader />
          <CategoryGallery category={category} />
          <SiteFooter year={currentYear} />
        </>
      </MotionConfig>
    )
  }

  return <HomePage />
}

export default App
