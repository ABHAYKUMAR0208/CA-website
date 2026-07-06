import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { firm, navLinks } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top contact strip */}
      <div className="hidden md:flex items-center justify-between bg-navy-900 text-navy-100 text-sm px-6 lg:px-10 py-2">
        <span>{firm.strapline}</span>
        <div className="flex items-center gap-6">
          <a href={`tel:${firm.phone1.replace(/\s/g, '')}`} className="hover:text-gold-300 transition-colors">
            {firm.phone1}
          </a>
          <a href={`mailto:${firm.email1}`} className="hover:text-gold-300 transition-colors">
            {firm.email1}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 lg:px-10 py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <div className="w-11 h-11 rounded-full border-2 border-gold-400 flex items-center justify-center bg-navy-900 text-gold-300 font-display font-bold text-lg">
            JD
          </div>
          <div className="leading-tight">
            <p className="font-display font-semibold text-navy-800 text-lg">{firm.name}</p>
            <p className="text-xs tracking-wide text-gold-600 uppercase">{firm.tagline}</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors pb-1 border-b-2 ${
                  isActive
                    ? 'text-gold-600 border-gold-500'
                    : 'text-navy-700 border-transparent hover:text-gold-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden text-navy-800 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-navy-100 bg-white px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-base font-semibold border-b border-navy-50 ${
                    isActive ? 'text-gold-600' : 'text-navy-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href={`tel:${firm.phone1.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-navy-700 font-semibold text-sm"
            >
              <Phone size={16} /> {firm.phone1}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-center bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm px-5 py-3 rounded transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
