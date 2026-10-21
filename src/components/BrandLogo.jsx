function BrandLogo({ className = '' }) {
  return (
    <img
      className={`brand-logo ${className}`}
      src="/images/logo.png"
      alt="MYRA Flower Decoration — Make Your Moments Bloom."
      width="1280"
      height="1280"
      decoding="async"
    />
  )
}

export default BrandLogo
