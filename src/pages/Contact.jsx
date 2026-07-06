import { Phone, Mail, MapPin, Clock, ChevronRight, MessageCircle, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import ConsultationForm from '../components/ConsultationForm';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import SectionHeading from '../components/SectionHeading';
import { firm, faqs, servicesQuickList } from '../data/siteData';

export default function Contact() {
  const mapQuery = encodeURIComponent(firm.address);

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        crumb="Contact"
        description="Reach out for a free consultation. We respond within 24 hours — usually much sooner."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`tel:${firm.phone1.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 border border-navy-500 hover:border-gold-400 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            View All Services <ChevronRight size={16} />
          </a>
        </div>
      </PageHero>

      {/* Contact info cards */}
      <section className="bg-cream py-10">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Phone,
              label: 'Phone',
              lines: [firm.phone1, firm.phone2],
              action: { label: 'Call Now', href: `tel:${firm.phone1.replace(/\s/g, '')}` },
            },
            {
              icon: Mail,
              label: 'Email',
              lines: [firm.email1, firm.email2],
              action: { label: 'Send Email', href: `mailto:${firm.email1}` },
            },
            {
              icon: MapPin,
              label: 'Office Address',
              lines: [firm.address],
              action: { label: 'Get Directions', href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
            },
            {
              icon: Clock,
              label: 'Office Hours',
              lines: [firm.hoursWeekday, firm.hoursSunday],
            },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-sm p-6 border-t-4 border-gold-500">
              <div className="w-11 h-11 rounded bg-cream flex items-center justify-center text-gold-600 mb-4">
                <c.icon size={20} />
              </div>
              <p className="text-xs uppercase tracking-wide text-navy-400 mb-2">{c.label}</p>
              {c.lines.map((line) => (
                <p key={line} className="text-navy-700 text-sm font-medium leading-relaxed">{line}</p>
              ))}
              {c.action && (
                <a
                  href={c.action.href}
                  target={c.action.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-gold-600 hover:text-gold-700 text-sm font-semibold mt-3"
                >
                  {c.action.label} <ChevronRight size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="eyebrow text-gold-600 text-xs uppercase mb-2">Send a Message</p>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">Book a Free Consultation</h2>
            <ConsultationForm variant="light" full />
          </div>

          <div className="flex flex-col gap-5">
            <a
              href={`https://wa.me/${firm.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1fb959] text-white rounded-sm p-5 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={22} />
              </div>
              <div className="flex-1">
                <p className="font-semibold">Chat on WhatsApp</p>
                <p className="text-xs text-white/90">Instant response during office hours</p>
              </div>
              <ChevronRight size={18} />
            </a>

            <div className="bg-navy-900 text-white rounded-sm p-6">
              <p className="flex items-center gap-2 font-display font-semibold text-lg mb-2">
                <Calendar size={18} className="text-gold-400" /> Prefer a Call?
              </p>
              <p className="text-navy-300 text-sm leading-relaxed mb-4">
                Call us directly and we'll schedule a convenient time for your free consultation.
              </p>
              <a href={`tel:${firm.phone1.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gold-300 font-semibold text-sm mb-2 hover:text-gold-200">
                <Phone size={14} /> {firm.phone1}
              </a>
              <a href={`tel:${firm.phone2.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gold-300 font-semibold text-sm hover:text-gold-200">
                <Phone size={14} /> {firm.phone2}
              </a>
            </div>

            <div className="bg-cream rounded-sm p-6">
              <p className="font-display font-semibold text-lg text-navy-800 mb-4">We Can Help With</p>
              <ul className="space-y-2.5">
                {servicesQuickList.map((s) => (
                  <li key={s} className="text-sm text-navy-600 flex items-center gap-2">
                    <span className="text-gold-500">›</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream section-pad">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow text-gold-600 text-xs uppercase mb-2">Find Us</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">Our Office Location</h2>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
            >
              <MapPin size={15} /> Get Directions
            </a>
          </div>
          <div className="rounded-sm overflow-hidden border border-navy-100 h-[420px]">
            <iframe
              title="Office location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
          <Faq items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
