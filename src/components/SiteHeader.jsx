import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Client work', href: '/#gallery' },
  { label: 'Inspiration', href: '/#inspiration' },
  { label: 'Our story', href: '/#about' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a className="brand" href="/#home" onClick={closeMenu} aria-label="Myra Flower Decoration home">
          <BrandLogo className="header-brand-logo" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            className="header-catalogue"
            href="/catalogue/myra-catalogue.pdf"
            download="MYRA-Flower-Decoration-Catalogue.pdf"
            onClick={closeMenu}
          >
            <Download size={15} aria-hidden="true" />
            Download Catalogue
          </a>
          <a className="header-contact" href="/#contact" onClick={closeMenu}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
