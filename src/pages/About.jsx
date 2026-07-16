import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Target, Users, BookOpen, ClipboardCheck, Award, CheckCircle2, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CtaBand from '../components/CtaBand';
import { firm, milestones, coreValues, credentials } from '../data/siteData';
import dineshPhoto from '../assets/team/dinesh.jpeg';


const valueIcons = { ShieldCheck, Target, Users, BookOpen, ClipboardCheck, Award };

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="About the Firm"
        crumb="About Us"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=70"
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
  src={dineshPhoto}
  alt="CA Dinesh Jain, Founding Partner"
  className="rounded-sm w-full h-[440px] object-cover object-[center_20%]"
/>
            <div className="absolute bottom-4 left-4 bg-navy-900/90 text-white px-4 py-2 rounded-sm">
              <p className="font-semibold text-sm">CA Dinesh Jain</p>
              <p className="text-xs text-gold-300">Founding Partner, FCA</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold-600 text-xs uppercase mb-3">25+ Years of Trust</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">
              A Legacy Built on Integrity &amp; Excellence
            </h2>
            <div className="h-1 w-14 bg-gold-500 mt-4 mb-6" />
            <p className="text-navy-500 leading-relaxed mb-4">
              Founded in {firm.founded} by CA Dinesh Jain, our firm began as a boutique income tax and
              audit practice in Jaipur. Over the past 25+ years, we have grown into a full-service
              chartered accountancy firm trusted by hundreds of individuals, startups, SMEs and large
              corporations across Rajasthan.
            </p>
            <p className="text-navy-500 leading-relaxed mb-4">
              Our growth has been driven not by aggressive expansion, but by the depth of relationships we
              build with every client. We believe that great financial advice is personal — it requires
              understanding your business, your goals and your challenges before recommending any
              solution.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8">
              Today, our team of qualified Chartered Accountants, Company Secretaries and tax professionals
              brings specialized expertise across all areas of taxation, audit, compliance and advisory —
              ensuring every client receives solutions that are legally sound, strategically optimal and
              delivered with care.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8">
              Our firm is a Peer Reviewed Practice Unit, holding a valid Peer Review Certificate issued by the Institute of Chartered Accountants of India (ICAI) valid till 31 Aug 2028.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: firm.stats.years, label: 'Years' },
                { value: firm.stats.clients, label: 'Clients' },
                { value: firm.stats.services, label: 'Services' },
              ].map((s) => (
                <div key={s.label} className="border border-navy-100 rounded-sm py-4 text-center">
                  <p className="font-display text-2xl font-bold text-navy-900">{s.value}</p>
                  <p className="text-xs uppercase text-navy-400 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded transition-colors"
            >
              Book a Free Consultation <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream section-pad">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <div className="bg-gold-500 text-navy-900 rounded-sm p-8">
            <p className="eyebrow text-xs uppercase mb-2 text-navy-800">Our Mission</p>
            <h3 className="font-display text-2xl font-bold mb-3">Empowering Financial Clarity</h3>
            <p className="text-navy-800 leading-relaxed text-sm">
              To provide every client — individual or enterprise — with accurate, timely financial
              guidance that empowers informed decisions, ensures full compliance and drives sustainable
              growth.
            </p>
          </div>
          <div className="bg-white border border-navy-100 rounded-sm p-8">
            <p className="eyebrow text-xs uppercase mb-2 text-gold-600">Our Vision</p>
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Jaipur's Most Trusted CA Firm</h3>
            <p className="text-navy-500 leading-relaxed text-sm">
              To be the most trusted and respected chartered accountancy firm in Rajasthan — known for our
              integrity, expertise and the lasting impact we create for every client we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Our Journey" title="25 Years of Milestones" />
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-navy-900 text-gold-300 font-display font-bold text-sm px-3.5 py-2 rounded-sm shrink-0">
                    {m.year}
                  </div>
                  {i !== milestones.length - 1 && <div className="w-px flex-1 bg-navy-100 my-1" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-display font-semibold text-lg text-navy-800 mb-1.5">{m.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="What Guides Us" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => {
              const Icon = valueIcons[v.icon];
              return (
                <div key={v.title} className="bg-navy-800 rounded-sm p-6">
                  <div className="w-11 h-11 rounded bg-navy-700 flex items-center justify-center text-gold-400 mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership preview */}
      <section className="bg-cream section-pad">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="The People Behind the Practice" title="Our Leadership Team" />
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { initials: 'DJ', name: 'CA Dinesh Jain', role: 'Founding Partner', exp: '25+ Years Experience', focus: 'Income Tax, Audit & Business Advisory' },
              { initials: 'DJ', name: 'CA Dhawal Jain', role: 'Partner — Taxation', exp: '8+ Years Experience', focus: 'GST, Direct Tax & Corporate Compliance' },
              { initials: 'NJ', name: 'CA Nikita Jain', role: 'Partner — Audit', exp: '8+ Years Experience', focus: 'Statutory Audit, Internal Audit & Assurance' },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-sm p-6 text-center border-t-4 border-gold-500">
                <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-300 font-display font-bold flex items-center justify-center mx-auto mb-4">
                  {p.initials}
                </div>
                <h3 className="font-display font-semibold text-navy-800">{p.name}</h3>
                <p className="text-gold-600 text-xs uppercase font-semibold tracking-wide mt-1">{p.role}</p>
                <p className="text-navy-400 text-xs mt-2">{p.exp}</p>
                <p className="text-navy-500 text-sm mt-3">{p.focus}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Meet the Full Team <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-pad bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-gold-600 text-xs uppercase mb-3">Qualifications &amp; Registrations</p>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">Our Credentials</h2>
            <ul className="space-y-3.5">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-navy-600 text-sm">
                  <CheckCircle2 size={18} className="text-gold-500 shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=70"
              alt="Team reviewing documents together"
              className="rounded-sm w-full h-[340px] object-cover"
            />
            <div className="absolute -bottom-6 left-6 right-6 bg-white shadow-lg rounded-sm p-5 flex gap-3">
              <Quote className="text-gold-500 shrink-0" size={28} />
              <div>
                <p className="text-navy-600 text-sm italic">
                  Their expertise and dedication have been invaluable to our business growth over the
                  years.
                </p>
                <p className="text-xs text-navy-400 mt-2 font-semibold">— Rajesh Sharma, Sharma Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to Work Together?"
        title="Let's Build Your Financial Future"
        description="Whether you're an individual, startup or established business — our team is ready to help you navigate every financial challenge with confidence."
        primaryLabel="Book a Free Consultation"
      />
    </div>
  );
}
