import { Link } from 'react-router-dom';
import { Mail, GraduationCap, Briefcase, ChevronRight, Star, Users, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import StatBar from '../components/StatBar';
import SectionHeading from '../components/SectionHeading';
import CtaBand from '../components/CtaBand';
import { partners, supportTeam, firm } from '../data/siteData';
import dineshPhoto from '../assets/team/dinesh.jpeg';
import dhawalPhoto from '../assets/team/dhawal.jpeg';
import nikitaPhoto from '../assets/team/nikita.jpg';

const supportIcons = { Users, BookOpen, Briefcase };

const partnerPhotos = {
  dinesh: dineshPhoto,
  dhawal: dhawalPhoto,
  nikita: nikitaPhoto,
};

function PartnerCard({ p, reversed }) {
  const photo = (
    <div className="relative">
      <img
        src={partnerPhotos[p.id]}
        alt={p.name}
        className="w-full h-[380px] md:h-full object-cover"
      />
      {p.badge && (
        <span className="absolute top-4 left-4 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm inline-flex items-center gap-1.5">
          <Star size={12} fill="currentColor" /> {p.badge}
        </span>
      )}
      <span className="absolute bottom-4 left-4 bg-navy-900/85 text-gold-300 text-xs font-semibold px-3 py-1.5 rounded-sm">
        {p.credential}
      </span>
    </div>
  );

  const info = (
    <div className="p-8 sm:p-10 flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <p className="eyebrow text-gold-600 text-xs uppercase">{p.experience}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4 order-first sm:order-none">
        {p.tags.map((t) => (
          <span key={t} className="text-xs bg-cream text-navy-600 px-2.5 py-1 rounded-sm border border-navy-100">
            {t}
          </span>
        ))}
      </div>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">{p.name}</h3>
      <p className="text-gold-600 font-semibold text-sm mt-1">{p.role}</p>
      <a href={`mailto:${p.email}`} className="inline-flex items-center gap-1.5 text-navy-400 text-sm mt-1.5 hover:text-gold-600">
        <Mail size={14} /> {p.email}
      </a>
      <p className="text-navy-500 text-sm leading-relaxed mt-5 mb-6">{p.bio}</p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-navy-400 mb-2.5 flex items-center gap-1.5">
            <GraduationCap size={14} className="text-gold-500" /> Qualifications
          </p>
          <ul className="space-y-1.5">
            {p.qualifications.map((q) => (
              <li key={q} className="text-sm text-navy-600 flex gap-1.5">
                <span className="text-gold-500">›</span> {q}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-navy-400 mb-2.5 flex items-center gap-1.5">
            <Briefcase size={14} className="text-gold-500" /> Areas of Expertise
          </p>
          <ul className="space-y-1.5">
            {p.expertise.map((e) => (
              <li key={e} className="text-sm text-navy-600 flex gap-1.5">
                <span className="text-gold-500">›</span> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 border border-navy-100 rounded-sm overflow-hidden bg-white">
      {reversed ? (
        <>
          <div className="order-2 md:order-1">{info}</div>
          <div className="order-1 md:order-2">{photo}</div>
        </>
      ) : (
        <>
          {photo}
          {info}
        </>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <div>
      <PageHero
        eyebrow="The People Behind the Practice"
        title="Our Team"
        crumb="Our Team"
        description="Three qualified chartered accountants, one shared commitment — delivering precise, reliable and personalised financial services to every client."
      />

      <StatBar
        stats={[
          { value: '3', label: 'Qualified CAs' },
          { value: '41+', label: 'Combined Years' },
          { value: '500+', label: 'Clients Served' },
          { value: '9', label: 'Practice Areas' },
        ]}
      />

      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col gap-8">
          {partners.map((p, i) => (
            <PartnerCard key={p.id} p={p} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Behind the Scenes"
            title="Our Support Team"
            description="Our partners are supported by a dedicated team of article assistants, tax executives and client service professionals — ensuring every client receives prompt, attentive service."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {supportTeam.map((s) => {
              const Icon = supportIcons[s.icon];
              return (
                <div key={s.title} className="bg-white border-t-4 border-gold-500 rounded-sm p-7 text-center">
                  <div className="w-12 h-12 rounded bg-cream flex items-center justify-center text-gold-600 mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-navy-800 mb-2">{s.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 border-t border-navy-100">
        <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-gold-500 bg-cream rounded-sm p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-navy-900">Interested in Joining Our Team?</h3>
            <p className="text-navy-500 text-sm mt-1.5">
              We welcome applications from qualified CAs and motivated article students. Send your CV to
              us.
            </p>
          </div>
          <a
            href={`mailto:${firm.email1}`}
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded transition-colors whitespace-nowrap"
          >
            <Mail size={16} /> Send Your CV
          </a>
        </div>
      </section>

      <CtaBand
        eyebrow="Work With Our Experts"
        title="Ready to Get Expert Advice?"
        description="Book a free consultation with one of our partners and get personalised guidance for your financial and compliance needs."
        primaryLabel="Book Free Consultation"
      />
    </div>
  );
}
