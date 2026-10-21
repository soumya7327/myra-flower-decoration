import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react'
import { motion } from 'framer-motion'

function PhotoGrid({ photos, categoryTitle, label, sourceLabel }) {
  const [activePhoto, setActivePhoto] = useState(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!activePhoto) return undefined

    closeButtonRef.current?.focus()

    function closeOnEscape(event) {
      if (event.key === 'Escape') setActivePhoto(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
      triggerRef.current?.focus()
    }
  }, [activePhoto])

  return (
    <>
      <div className="category-photo-grid">
        {photos.map((photo) => (
          <button
            className="category-photo-button"
            key={photo.src}
            type="button"
            aria-haspopup="dialog"
            onClick={(event) => {
              triggerRef.current = event.currentTarget
              setActivePhoto(photo)
            }}
            aria-label={`Enlarge ${photo.alt}`}
          >
            <img
              className="category-photo"
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
            />
            <span className="category-photo-type">{sourceLabel}</span>
            <span className="category-photo-caption">
              {photo.label || categoryTitle}
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {activePhoto && (
        <div
          className="photo-lightbox"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActivePhoto(null)
          }}
        >
          <div
            className="photo-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${label}: ${activePhoto.alt}`}
          >
            <button
              className="photo-lightbox-close"
              type="button"
              aria-label="Close enlarged photo"
              ref={closeButtonRef}
              onClick={() => setActivePhoto(null)}
            >
              <X size={22} aria-hidden="true" />
            </button>
            <img
              className="photo-lightbox-image"
              src={activePhoto.src}
              alt={activePhoto.alt}
            />
            <p className="photo-lightbox-caption">
              {label} · {activePhoto.label || categoryTitle}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

function CategoryGallery({ category }) {
  const hasClientWork = category.clientWork.length > 0
  const hasInspiration = category.inspiration.length > 0

  return (
    <main className="category-gallery-page">
      <div className="page-shell category-gallery-shell">
        <a className="category-back-link" href="/#services">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to services
        </a>
        <motion.header
          className="category-gallery-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow">
            <span className="eyebrow-line" />
            MYRA FLOWER DECORATION
          </p>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </motion.header>

        <section
          className="category-work-section"
          aria-labelledby="client-work-heading"
        >
          <div className="category-section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                COMPLETED EVENT PHOTOGRAPHS
              </p>
              <h2 id="client-work-heading">MYRA client work</h2>
            </div>
            <span className="image-source-badge">MYRA CLIENT WORK</span>
          </div>
          {hasClientWork ? (
            <PhotoGrid
              photos={category.clientWork}
              categoryTitle={category.title}
              label="MYRA client work"
              sourceLabel="MYRA CLIENT WORK"
            />
          ) : (
            <p className="category-empty-state">
              Client photos for {category.title.toLowerCase()} will appear here
              when they are available.
            </p>
          )}
        </section>

        {hasInspiration && (
          <section
            className="category-inspiration-section"
            aria-labelledby="category-inspiration-heading"
          >
            <div className="category-section-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  IDEAS AND POSSIBILITIES
                </p>
                <h2 id="category-inspiration-heading">
                  Decoration inspiration
                </h2>
              </div>
              <span className="image-source-badge">INSPIRATION ONLY</span>
            </div>
            <p className="category-inspiration-note">
              These reference photos are for inspiration only and are not
              represented as MYRA FLOWER DECORATION client work.
            </p>
            <PhotoGrid
              photos={category.inspiration}
              categoryTitle={category.title}
              label="Decoration inspiration only"
              sourceLabel="INSPIRATION ONLY"
            />
          </section>
        )}
      </div>
    </main>
  )
}

export default CategoryGallery
