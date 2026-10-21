import { ArrowUpRight, Camera, MapPin } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'
import { businessDetails } from '../data/businessDetails.js'

function SiteFooter({ year }) {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <a className="brand footer-brand" href="/#home" aria-label="Myra Flower Decoration home">
          <BrandLogo className="footer-brand-logo" />
        </a>
        <p>{businessDetails.tagline}</p>
        <a
          className="footer-address"
          href={businessDetails.maps}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${businessDetails.address} on Google Maps`}
        >
          <MapPin size={16} aria-hidden="true" />
          <span>{businessDetails.address}</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a
          className="footer-social"
          href={businessDetails.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit MYRA Flower Decoration on Instagram"
        >
          <Camera size={17} aria-hidden="true" />
          Instagram <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {year} MYRA FLOWER DECORATION</span>
        <a href="/#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default SiteFooter
