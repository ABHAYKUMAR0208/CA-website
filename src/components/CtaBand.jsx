import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Mail } from 'lucide-react';
import { firm } from '../data/siteData';

export default function CtaBand({
  eyebrow = 'Get Started Today',
  title = 'Ready to Get Started?',
  description = `Join 500+ clients who trust ${firm.name} for all their financial and compliance needs.`,
  primaryLabel = 'Book Free Consultation',
  primaryTo = '/contact',
  showEmail = false,
}) {
  return (
    <section className="bg-navy-900 border-t border-b border-gold-500/40">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 text-center text-white">
        <p className="eyebrow text-gold-400 text-xs uppercase mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-navy-200 max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded transition-colors"
          >
            {primaryLabel} <ChevronRight size={18} />
          </Link>
          <a
            href={`tel:${firm.phone1.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 border border-navy-500 hover:border-gold-400 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            <Phone size={16} /> {firm.phone1}
          </a>
          {showEmail && (
            <a
              href={`mailto:${firm.email1}`}
              className="inline-flex items-center gap-2 border border-navy-500 hover:border-gold-400 text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              <Mail size={16} /> Email Us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
