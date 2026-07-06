import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { servicesQuickList } from '../data/siteData';

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  subject: '',
  message: '',
};

/**
 * variant: 'dark' | 'light' — controls input styling to fit the surrounding section
 * full: if true, renders email/subject/message fields (used on the Contact page).
 *       if false, renders the compact Home-page version (name/phone/service/date).
 * showDate: whether to show the "preferred date" field (Home quick form only)
 */
export default function ConsultationForm({ variant = 'light', full = false, showDate = false }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const dark = variant === 'dark';

  const inputClasses = dark
    ? 'w-full bg-navy-700/60 border border-navy-500 text-white placeholder-navy-300 rounded px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors'
    : 'w-full bg-white border border-navy-200 text-navy-800 placeholder-navy-300 rounded px-4 py-3 text-sm focus:border-gold-400 outline-none transition-colors';

  const labelClasses = dark
    ? 'block text-xs font-semibold uppercase tracking-wide text-navy-200 mb-2'
    : 'block text-xs font-semibold uppercase tracking-wide text-navy-500 mb-2';

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.';
    else if (!/^[+\d][\d\s-]{7,}$/.test(values.phone.trim())) next.phone = 'Enter a valid phone number.';
    if (!values.service) next.service = 'Please select a service.';
    if (full) {
      if (!values.message.trim()) next.message = 'Please tell us a bit about your query.';
      if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        next.email = 'Enter a valid email address.';
      }
    }
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // NOTE: no backend is wired up yet. Replace this block with a real API call,
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
    console.log('Consultation request submitted:', values);
    setSubmitted(true);
    setValues(initialState);
  }

  if (submitted) {
    return (
      <div
        className={`max-w-xl mx-auto text-center rounded-sm p-10 ${
          dark ? 'bg-navy-700/60 border border-navy-500' : 'bg-cream border border-navy-100'
        }`}
      >
        <CheckCircle2 className="mx-auto text-gold-500 mb-4" size={40} />
        <h3 className={`font-display text-xl font-semibold mb-2 ${dark ? 'text-white' : 'text-navy-800'}`}>
          Thank you — your message has been received.
        </h3>
        <p className={dark ? 'text-navy-200 text-sm' : 'text-navy-500 text-sm'}>
          Our team will reach out within 24 hours to schedule your free consultation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-gold-500 hover:text-gold-600 font-semibold text-sm"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={full ? '' : 'max-w-4xl mx-auto bg-navy-900/40 rounded-sm p-6 sm:p-8 border border-navy-600'}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses} htmlFor="name">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Rajesh Sharma"
            value={values.name}
            onChange={handleChange}
            className={inputClasses}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 7568052266"
            value={values.phone}
            onChange={handleChange}
            className={inputClasses}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
        </div>

        {full && (
          <div>
            <label className={labelClasses} htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="rajesh@example.com"
              value={values.email}
              onChange={handleChange}
              className={inputClasses}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
          </div>
        )}

        <div>
          <label className={labelClasses} htmlFor="service">Service Required *</label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className={inputClasses}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="">Select a service</option>
            {servicesQuickList.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p id="service-error" className="text-red-400 text-xs mt-1.5">{errors.service}</p>}
        </div>

        {showDate && !full && (
          <div>
            <label className={labelClasses} htmlFor="date">Preferred Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        )}

        {full && (
          <div className="sm:col-span-2">
            <label className={labelClasses} htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Brief subject of your query"
              value={values.subject}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        )}

        {full && (
          <div className="sm:col-span-2">
            <label className={labelClasses} htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your requirements, questions or any specific concerns..."
              value={values.message}
              onChange={handleChange}
              className={`${inputClasses} resize-y`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
          </div>
        )}
      </div>

      <div className={`flex items-center gap-4 flex-wrap ${full ? 'mt-6' : 'mt-6'}`}>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded transition-colors"
        >
          <Send size={16} /> {full ? 'Send Message' : 'Book Now'}
        </button>
        <span className={`text-xs ${dark ? 'text-navy-300' : 'text-navy-400'}`}>
          We respond within 24 hours
        </span>
      </div>
    </form>
  );
}
