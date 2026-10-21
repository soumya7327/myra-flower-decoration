import { useRef, useState } from 'react'
import { ArrowUpRight, LoaderCircle } from 'lucide-react'
import { businessDetails } from '../data/businessDetails.js'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactForm() {
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitLockRef = useRef(false)

  function handleFieldChange(event) {
    const { name, value } = event.currentTarget
    if (whatsappUrl) {
      setStatus('')
      setWhatsappUrl('')
    }

    setErrors((currentErrors) => {
      if (!currentErrors[name]) return currentErrors

      let error = ''
      if (!value.trim()) {
        error = 'This field is required.'
      } else if (name === 'email' && !emailPattern.test(value.trim())) {
        error = 'Enter a valid email address.'
      }

      return { ...currentErrors, [name]: error }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (submitLockRef.current) return

    setStatus('')
    setWhatsappUrl('')

    const formData = new FormData(event.currentTarget)
    const fields = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      eventType: String(formData.get('eventType') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    }
    const nextErrors = {}

    if (!fields.name) nextErrors.name = 'Please enter your name.'
    if (!fields.email) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(fields.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!fields.eventType) {
      nextErrors.eventType = 'Please choose an event type.'
    }
    if (!fields.message) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      event.currentTarget.elements
        .namedItem(Object.keys(nextErrors)[0])
        ?.focus()
      return
    }

    const message = [
      'New Decoration Inquiry - MYRA FLOWER DECORATION',
      '',
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Event type: ${fields.eventType}`,
      '',
      'Message:',
      fields.message,
    ].join('\n')
    const url = `${businessDetails.whatsapp}?text=${encodeURIComponent(message)}`

    submitLockRef.current = true
    setIsSubmitting(true)
    setWhatsappUrl(url)

    try {
      const whatsappWindow = window.open(url, '_blank')
      if (whatsappWindow) {
        whatsappWindow.opener = null
        setStatus(
          'WhatsApp opened in a new tab. Review your inquiry and press Send in WhatsApp to deliver it.',
        )
      } else {
        setStatus(
          'WhatsApp did not open automatically. Use the link below, then press Send in WhatsApp to deliver your inquiry.',
        )
      }
    } catch (error) {
      console.error('Unable to open the WhatsApp inquiry link.', error)
      setStatus(
        'WhatsApp could not be opened automatically. Use the link below, then press Send in WhatsApp to deliver your inquiry.',
      )
    } finally {
      window.setTimeout(() => {
        submitLockRef.current = false
        setIsSubmitting(false)
      }, 1000)
    }
  }

  function renderFieldError(name) {
    return errors[name] ? (
      <span className="field-error" id={`${name}-error`} role="alert">
        {errors[name]}
      </span>
    ) : null
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          SEND AN INQUIRY
        </p>
        <p>Share a few details and we’ll take it from there.</p>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="How should we call you?"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            onChange={handleFieldChange}
          />
          {renderFieldError('name')}
        </label>
        <label className="form-field">
          <span>Email address</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onChange={handleFieldChange}
          />
          {renderFieldError('email')}
        </label>
      </div>
      <label className="form-field">
        <span>What are you celebrating?</span>
        <select
          name="eventType"
          defaultValue=""
          required
          aria-invalid={Boolean(errors.eventType)}
          aria-describedby={errors.eventType ? 'eventType-error' : undefined}
          onChange={handleFieldChange}
        >
          <option value="" disabled>
            Choose an event type
          </option>
          <option>Wedding</option>
          <option>Engagement</option>
          <option>Birthday</option>
          <option>Reception</option>
          <option>Other celebration</option>
        </select>
        {renderFieldError('eventType')}
      </label>
      <label className="form-field">
        <span>Tell us a little more</span>
        <textarea
          name="message"
          rows="4"
          placeholder="Your ideas, date, or anything you'd like us to know..."
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onChange={handleFieldChange}
        />
        {renderFieldError('message')}
      </label>
      <button className="button button-gold form-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoaderCircle size={16} className="spinner" aria-hidden="true" />
            Opening WhatsApp
          </>
        ) : (
          <>
            Send an inquiry <ArrowUpRight size={16} aria-hidden="true" />
          </>
        )}
      </button>
      <p className="form-status" aria-live="polite" role="status">
        {status}
        {whatsappUrl && (
          <>
            {' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp to review and send
            </a>
          </>
        )}
      </p>
    </form>
  )
}

export default ContactForm
