import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { firm, servicesQuickList, navLinks } from '../data/siteData';

// Lucide dropped brand/logo icons, so social marks are small inline SVGs.
const socialIcons = [
  {
    label: 'Facebook',
    path: 'M13.5 9H15V6.5h-1.75C11.5 6.5 10.5 7.6 10.5 9.25V11H9v2.5h1.5V19h2.5v-5.5h1.75L15 11h-2v-1.25c0-.5.25-.75.5-.75Z',
  },
  {
    label: 'Twitter / X',
    path: 'M6 6l5.2 6.6L6.3 18h1.6l4.3-4.6L15.6 18H18l-5.5-7L17.4 6h-1.6l-3.9 4.2L8.4 6H6Z',
  },
  {
    label: 'LinkedIn',
    path: 'M7.5 9.5h-2V17h2V9.5Zm-1-3.2a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3ZM17 17v-4.2c0-2.25-1.2-3.3-2.8-3.3-1.3 0-1.9.72-2.2 1.22V9.5h-2V17h2v-4.1c0-.6.1-1.2 1-1.2.9 0 .9.7.9 1.25V17H17Z',
  },
  {
    label: 'Instagram',
    path: 'M8.5 6h7A2.5 2.5 0 0 1 18 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 15.5v-7A2.5 2.5 0 0 1 8.5 6Zm3.5 3.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.1-1.1a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200 border-t-4 border-gold-500">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-gold-400 flex items-center justify-center text-gold-300 font-display font-bold">
              JD
            </div>
            <p className="font-display text-white font-semibold text-lg leading-tight">{firm.name}</p>
          </div>
          <p className="text-sm text-navy-300 leading-relaxed">
            Trusted Chartered Accountants in Jaipur with 25+ years of excellence in taxation, audit,
            compliance and financial advisory services.
          </p>
          <div className="flex gap-3 mt-5">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#"
                aria-label={icon.label}
                className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:text-gold-400 hover:bg-navy-700 transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gold-400 eyebrow text-sm uppercase mb-4">Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            {servicesQuickList.slice(0, 9).map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">›</span> {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gold-400 eyebrow text-sm uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500">›</span> {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                <span className="text-gold-500">›</span> Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gold-400 eyebrow text-sm uppercase mb-4">Contact Us</h3>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
              <span>{firm.address}</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={18} className="text-gold-500 shrink-0" />
              <a href={`tel:${firm.phone1.replace(/\s/g, '')}`} className="hover:text-gold-300">
                {firm.phone1}
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail size={18} className="text-gold-500 shrink-0" />
              <a href={`mailto:${firm.email1}`} className="hover:text-gold-300">
                {firm.email1}
              </a>
            </li>
            <li className="bg-navy-800 rounded px-3 py-2.5 mt-2 text-xs">
              <p className="text-gold-400 font-semibold uppercase tracking-wide mb-1">Office Hours</p>
              <p>{firm.hoursWeekday}</p>
              <p>{firm.hoursSunday}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="max-w-content mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-400">
          <p>© {new Date().getFullYear()} {firm.name}, Chartered Accountants. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold-300">Terms of Service</a>
            <a href="#" className="hover:text-gold-300">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
