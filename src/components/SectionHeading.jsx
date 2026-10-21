function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  className = '',
}) {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </p>
      <h2 id={titleId}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeading
