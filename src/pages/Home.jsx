import { Link } from 'react-router-dom';
import {
  FileText, Landmark, ShieldCheck, BookOpen, Building2, ClipboardList,
  FileCheck2, TrendingUp, Rocket, ChevronRight, Award, Globe, Compass, Users, CheckCircle2, Briefcase, Phone, Mail, Star,
} from 'lucide-react';
import StatBar from '../components/StatBar';
import AnimatedNumber from '../components/AnimatedNumber';
import SectionHeading from '../components/SectionHeading';
import CtaBand from '../components/CtaBand';
import { firm, services, testimonials } from '../data/siteData';
import ConsultationForm from '../components/ConsultationForm';

const iconMap = {
  FileText, Landmark, ShieldCheck, BookOpen, Building2, ClipboardList, FileCheck2, TrendingUp, Rocket,
  Award, Globe, Compass,
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=70"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/50" />
        </div>
        <div className="relative max-w-content mx-auto px-6 lg:px-10 pt-14 pb-20 lg:pt-20 lg:pb-28">
          <p className="eyebrow text-gold-400 text-xs uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-gold-400 inline-block" /> Chartered Accountants · Jaipur
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
            <span className="text-gold-400">Trusted</span> Chartered Accountants in Jaipur
          </h1>
          <p className="mt-6 text-navy-200 max-w-xl text-lg leading-relaxed">
            25+ Years of Excellence in Taxation, Audit &amp; Financial Advisory. Your compliance, our
            commitment.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3.5 rounded transition-colors"
            >
              Book an Appointment <ChevronRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-navy-400 hover:border-gold-400 text-white font-semibold px-6 py-3.5 rounded transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <StatBar
        variant="navy"
        stats={[
          { value: firm.stats.years, label: 'Years Experience' },
          { value: firm.stats.clients, label: 'Happy Clients' },
          { value: firm.stats.services, label: 'Service Areas' },
          { value: firm.stats.compliance, label: 'Compliance Record' },
        ]}
      />

      {/* SERVICES GRID */}
      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.id}
                  className="group border border-navy-100 border-l-4 border-l-gold-500 rounded-sm p-6 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-l-navy-800"
                >
                  <div className="w-11 h-11 rounded bg-cream flex items-center justify-center text-gold-600 mb-4 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-navy-800 mb-2">{s.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4">{s.shortDesc}</p>
                  <Link
                    to="/services"
                    className="text-gold-600 hover:text-gold-700 text-sm font-semibold inline-flex items-center gap-1"
                  >
                    Learn More{' '}
                    <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Clients Trust Us"
            title="Why Choose Us"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, title: '25+ Years of Excellence', desc: 'Decades of trusted practice serving businesses and individuals across Rajasthan.' },
              { icon: Users, title: 'Expert CA Team', desc: 'Qualified Chartered Accountants with deep domain expertise across all practice areas.' },
              { icon: CheckCircle2, title: 'End-to-End Compliance', desc: 'From registration to annual filings — we handle your complete compliance calendar.' },
              { icon: Briefcase, title: 'Personalized Service', desc: 'Every client gets dedicated attention with solutions tailored to their unique needs.' },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-navy-800 rounded p-6 flex gap-4 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-700 hover:shadow-lg cursor-default"
              >
                <div className="w-12 h-12 rounded bg-navy-700 flex items-center justify-center text-gold-400 shrink-0 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1.5">{item.title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="section-pad bg-cream">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=70"
              alt="Handshake between advisor and client"
              className="rounded-sm w-full h-[380px] object-cover"
            />
            <div className="absolute -bottom-7 -right-5 sm:-right-7 bg-white rounded-sm shadow-xl px-6 py-5 border-l-4 border-gold-500 hidden sm:block">
              <p className="font-display text-3xl font-bold text-navy-900 leading-none">
                <AnimatedNumber value="25+" />
              </p>
              <p className="text-xs uppercase tracking-wide text-navy-500 mt-1.5 whitespace-nowrap">
                Years of Excellence
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold-600 text-xs uppercase mb-3">About the Firm</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">
              A Legacy of Trust &amp; Financial Excellence
            </h2>
            <div className="h-1 w-14 bg-gold-500 mt-4 mb-6" />
            <p className="text-navy-500 leading-relaxed mb-4">
              Founded over 25 years ago, {firm.name} has grown into one of Jaipur's most respected CA
              firms. We serve a diverse clientele — from startups and SMEs to HNIs and large corporations —
              with integrity, precision and deep expertise.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8">
              Our team of qualified Chartered Accountants brings specialized knowledge across taxation,
              audit, compliance and advisory — ensuring every client receives solutions that are both
              legally sound and strategically optimal.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Learn More About Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Client Stories" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-sm p-7 relative">
                <p className="font-display text-5xl text-gold-300 leading-none mb-2">&ldquo;</p>
                <p className="text-navy-600 text-sm leading-relaxed mb-6">{t.quote}</p>
                <div className="flex gap-1 text-gold-500 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-display font-semibold text-navy-800">{t.name}</p>
                <p className="text-xs text-navy-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM BAND */}
      <section className="bg-navy-800">
        <div className="max-w-content mx-auto px-6 lg:px-10 py-16">
          <div className="text-center mb-10">
            <p className="eyebrow text-gold-400 text-xs uppercase mb-3">Get Started Today</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Book a Free Consultation</h2>
            <p className="text-navy-300 mt-3">Speak with our expert CAs — no obligation, completely free.</p>
          </div>
          <ConsultationForm variant="dark" showDate />
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-navy-200">
            <a href={`tel:${firm.phone1.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-gold-300">
              <Phone size={15} /> {firm.phone1}
            </a>
            <a href={`mailto:${firm.email1}`} className="inline-flex items-center gap-2 hover:text-gold-300">
              <Mail size={15} /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}