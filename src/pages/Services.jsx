import { Link } from 'react-router-dom';
import {
  FileText, Landmark, ShieldCheck, BookOpen, Building2, ClipboardList,
  FileCheck2, TrendingUp, Rocket, ChevronRight, Phone, Mail, CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { services, firm } from '../data/siteData';

const iconMap = {
  FileText, Landmark, ShieldCheck, BookOpen, Building2, ClipboardList, FileCheck2, TrendingUp, Rocket,
};

function ServiceCard({ service, reversed }) {
  const Icon = iconMap[service.icon];

  const infoBlock = (
    <div className="bg-navy-900 text-white p-8 sm:p-10 flex flex-col justify-center">
      <div className="w-12 h-12 rounded bg-navy-700 flex items-center justify-center text-gold-400 mb-5">
        <Icon size={24} />
      </div>
      <p className="eyebrow text-gold-400 text-xs uppercase mb-2">
        Service {String(services.indexOf(service) + 1).padStart(2, '0')}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">{service.title}</h3>
      <p className="italic text-gold-300 text-sm mb-4">&ldquo;{service.tagline}&rdquo;</p>
      <p className="text-navy-300 text-sm leading-relaxed mb-6">{service.summary}</p>
      <p className="text-xs uppercase tracking-wide text-navy-400 mb-1.5">Ideal For</p>
      <p className="text-sm text-navy-200 mb-7">{service.idealFor}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded transition-colors"
        >
          Enquire Now <ChevronRight size={15} />
        </Link>
        <a
          href={`tel:${firm.phone1.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-2 border border-navy-500 hover:border-gold-400 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
        >
          <Phone size={14} /> Call Us
        </a>
      </div>
    </div>
  );

  const includedBlock = (
    <div className="bg-white p-8 sm:p-10 border border-navy-100 flex flex-col justify-center">
      <p className="eyebrow text-gold-600 text-xs uppercase mb-4">What's Included</p>
      <ul className="grid sm:grid-cols-1 gap-3">
        {service.included.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm">
            <CheckCircle2 size={17} className="text-gold-500 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div id={service.id} className="grid md:grid-cols-2 scroll-mt-24">
      {reversed ? (
        <>
          <div className="order-2 md:order-1">{includedBlock}</div>
          <div className="order-1 md:order-2">{infoBlock}</div>
        </>
      ) : (
        <>
          {infoBlock}
          {includedBlock}
        </>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        crumb="Services"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=70"
      />

      <div className="bg-cream py-8">
        <p className="max-w-2xl mx-auto text-center px-6 text-navy-500 leading-relaxed">
          From individual tax filing to complex corporate compliance, we offer a full spectrum of
          chartered accountancy services — delivered with precision, integrity and a deep understanding of
          Indian tax and business law.
        </p>
      </div>

      <div className="flex flex-col gap-px bg-navy-100">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} reversed={i % 2 === 1} />
        ))}
      </div>

      <div className="bg-cream py-10">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Happy Clients' },
            { value: '100%', label: 'Compliance Record' },
            { value: '9', label: 'Practice Areas' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-navy-900">{s.value}</p>
              <p className="text-xs uppercase tracking-wide text-navy-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBand
        eyebrow="Not Sure Where to Start?"
        title="Talk to Our Experts — Free Consultation"
        description="Tell us about your needs and we'll recommend the right services for your situation — no obligation, completely free."
        primaryLabel="Book Free Consultation"
        showEmail
      />
    </div>
  );
}
import { Link } from 'react-router-dom';
import {
  FileText, Landmark, ShieldCheck, BookOpen, Building2, ClipboardList,
  FileCheck2, TrendingUp, Rocket, Award, Globe, Compass, ChevronRight, Phone, Mail, CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { services, firm } from '../data/siteData';

const iconMap = {
  FileText, Landmark, ShieldCheck, BookOpen, Building2, ClipboardList, FileCheck2, TrendingUp, Rocket,
  Award, Globe, Compass,
};

function ServiceCard({ service, reversed }) {
  const Icon = iconMap[service.icon];

  const infoBlock = (
    <div className="bg-navy-900 text-white p-8 sm:p-10 flex flex-col justify-center">
      <div className="w-12 h-12 rounded bg-navy-700 flex items-center justify-center text-gold-400 mb-5">
        <Icon size={24} />
      </div>
      <p className="eyebrow text-gold-400 text-xs uppercase mb-2">
        Service {String(services.indexOf(service) + 1).padStart(2, '0')}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">{service.title}</h3>
      <p className="italic text-gold-300 text-sm mb-4">&ldquo;{service.tagline}&rdquo;</p>
      <p className="text-navy-300 text-sm leading-relaxed mb-6">{service.summary}</p>
      <p className="text-xs uppercase tracking-wide text-navy-400 mb-1.5">Ideal For</p>
      <p className="text-sm text-navy-200 mb-7">{service.idealFor}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded transition-colors"
        >
          Enquire Now <ChevronRight size={15} />
        </Link>
        <a
          href={`tel:${firm.phone1.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-2 border border-navy-500 hover:border-gold-400 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
        >
          <Phone size={14} /> Call Us
        </a>
      </div>
    </div>
  );

  const includedBlock = (
    <div className="bg-white p-8 sm:p-10 border border-navy-100 flex flex-col justify-center">
      <p className="eyebrow text-gold-600 text-xs uppercase mb-4">What's Included</p>
      <ul className="grid sm:grid-cols-1 gap-3">
        {service.included.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm">
            <CheckCircle2 size={17} className="text-gold-500 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div id={service.id} className="grid md:grid-cols-2 scroll-mt-24">
      {reversed ? (
        <>
          <div className="order-2 md:order-1">{includedBlock}</div>
          <div className="order-1 md:order-2">{infoBlock}</div>
        </>
      ) : (
        <>
          {infoBlock}
          {includedBlock}
        </>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        crumb="Services"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=70"
      />

      <div className="bg-cream py-8">
        <p className="max-w-2xl mx-auto text-center px-6 text-navy-500 leading-relaxed">
          From individual tax filing to complex corporate compliance, we offer a full spectrum of
          chartered accountancy services — delivered with precision, integrity and a deep understanding of
          Indian tax and business law.
        </p>
      </div>

      <div className="flex flex-col gap-px bg-navy-100">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} reversed={i % 2 === 1} />
        ))}
      </div>

      <div className="bg-cream py-10">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Happy Clients' },
            { value: '100%', label: 'Compliance Record' },
            { value: '9', label: 'Practice Areas' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-navy-900">{s.value}</p>
              <p className="text-xs uppercase tracking-wide text-navy-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBand
        eyebrow="Not Sure Where to Start?"
        title="Talk to Our Experts — Free Consultation"
        description="Tell us about your needs and we'll recommend the right services for your situation — no obligation, completely free."
        primaryLabel="Book Free Consultation"
        showEmail
      />
    </div>
  );
}