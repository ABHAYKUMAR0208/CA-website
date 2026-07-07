// Central place for firm content. Edit this file to update text across the whole site.

export const firm = {
  name: 'Jain Dinesh Kumar & Co',
  shortName: 'Jain Dinesh Kumar & Co',
  tagline: 'Chartered Accountants',
  strapline: 'Trusted Chartered Accountants — Jaipur, Rajasthan',
  phone1: '+91 7568052266',
  phone2: '+91 9829010523',
  whatsapp: '917568052266',
  email1: 'dhawal@jaindkca.in',
  email2: 'dinesh@jaindkca.in',
  address: 'A-21, Van Vihar, Tonk Road, Jaipur, Rajasthan – 302018',
  hoursWeekday: 'Mon – Sat: 9:30 AM – 7:00 PM',
  hoursSunday: 'Sunday: By Appointment Only',
  founded: 1999,
  stats: {
    years: '25+',
    clients: '500+',
    services: '12',
    compliance: '100%',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

export const services = [
  {
    id: 'income-tax',
    icon: 'FileText',
    title: 'Income Tax',
    tagline: 'Accurate filing. Maximum savings.',
    summary:
      'Comprehensive income tax services for individuals, HUFs, firms, companies and trusts. We handle everything from ITR preparation to complex assessments and appeals.',
    shortDesc: 'ITR filing, tax planning, assessments & appeals for individuals and businesses.',
    idealFor: 'Individuals, HUFs, Salaried Professionals, Business Owners, NRIs',
    included: [
      'ITR filing for individuals, HUF, firms & companies',
      'Income tax assessments and scrutiny handling',
      'TDS compliance and advisory',
      'Tax audit under Section 44AB',
      'Tax planning and optimization strategies',
      'Appeals before CIT(A) and ITAT',
      'Advance tax computation and planning',
      'Capital gains computation and planning',
    ],
  },
  {
    id: 'gst-services',
    icon: 'Landmark',
    title: 'GST Services',
    tagline: 'Seamless GST compliance, end-to-end.',
    summary:
      'Complete GST lifecycle management — from registration and monthly returns to annual audits and departmental representation. Stay compliant, avoid penalties.',
    shortDesc: 'GST registration, returns, reconciliation and advisory.',
    idealFor: 'Traders, Manufacturers, Service Providers, E-commerce Sellers, Exporters',
    included: [
      'GST registration for all business types',
      'Monthly / quarterly GSTR-1, GSTR-3B filing',
      'Annual return GSTR-9 and GSTR-9C',
      'GST reconciliation and ITC matching',
      'GST audit and health check',
      'E-way bill compliance',
      'GST refund applications',
      'Departmental notices and representation',
    ],
  },
  {
    id: 'audit-assurance',
    icon: 'ShieldCheck',
    title: 'Audit & Assurance',
    tagline: 'Independent assurance you can rely on.',
    summary:
      'Rigorous, independent audit services that go beyond compliance — providing actionable insights to strengthen your financial controls and governance.',
    shortDesc: 'Statutory, internal, tax and concurrent audits with independent assurance.',
    idealFor: 'Companies, Banks, NBFCs, Trusts, NGOs, Partnership Firms',
    included: [
      'Statutory audit under Companies Act 2013',
      'Internal audit and process review',
      'Stock and debtors audit',
      'Management audit and efficiency review',
      'Tax audit under Income Tax Act',
      'Statutory and Concurrent audit for banks and NBFCs',
      'Forensic audit and fraud investigation',
      'Due diligence for M&A transactions',
    ],
  },
  {
    id: 'accounting-bookkeeping',
    icon: 'BookOpen',
    title: 'Accounting & Bookkeeping',
    tagline: 'Clean books. Clear decisions.',
    summary:
      'Accurate, timely accounting and bookkeeping services that give you a real-time view of your financial health — so you can make informed business decisions.',
    shortDesc: 'Bookkeeping, financial statements, MIS reporting and payroll management.',
    idealFor: 'Startups, SMEs, Retailers, Service Businesses, NGOs',
    included: [
      'Day-to-day bookkeeping and ledger maintenance',
      'MIS reports and management dashboards',
      'Accounts payable and receivable management',
      'Fixed asset register maintenance',
      'Financial statement preparation (P&L, Balance Sheet)',
      'Payroll processing and salary structuring',
      'Bank reconciliation statements',
      'Tally, QuickBooks and Zoho Books support',
    ],
  },
  {
    id: 'company-registration',
    icon: 'Building2',
    title: 'Company Registration',
    tagline: 'Start right. Start compliant.',
    summary:
      'End-to-end business incorporation services — from choosing the right structure to obtaining all registrations and licenses needed to start operations legally.',
    shortDesc: 'Pvt Ltd, LLP, OPC, partnership firm and trust registration end-to-end.',
    idealFor: 'Entrepreneurs, Startups, Professionals, NGOs, Foreign Investors',
    included: [
      'Public Limited andPrivate Limited',
      'One Person Company (OPC) registration',
      'Conversion of Partnerships/ Proprietor into company and Vice versa',
      'Conversion of LLP into company and Vice versa',
      'Limited Liability Partnership (LLP) formation',
      'Formation of Producer company',
      'Section 8 company (NGO/Trust) registration',
      
    ],
  },
  {
    id: 'roc-compliance',
    icon: 'ClipboardList',
    title: 'ROC Compliance',
    tagline: 'Stay compliant with MCA regulations.',
    summary:
      'Comprehensive company law compliance services to keep your company in good standing with the Registrar of Companies and avoid penalties.',
    shortDesc: 'Annual filings, board resolutions, statutory registers and MCA compliance.',
    idealFor: 'Private Limited Companies, LLPs, OPCs, Section 8 Companies',
    included: [
      'Annual filing — AOC-4, MGT-7 / MGT-7A',
      'Statutory registers and minutes maintenance',
      'Change in directors, address, share capital',
      'LLP annual return filing (Form 11, Form 8)',
      'Board meeting and AGM documentation',
      'Director KYC (DIR-3 KYC)',
      'Charge creation, modification and satisfaction',
      'Strike off and winding up procedures',
    ],
  },
  {
    id: 'tds-services',
    icon: 'FileCheck2',
    title: 'TDS Services',
    tagline: 'Deduct right. Deposit on time.',
    summary:
      'Complete TDS compliance management — ensuring correct deductions, timely deposits and accurate return filing to avoid interest, penalties and prosecution.',
    shortDesc: 'TDS deduction, deposit, return filing and TDS certificate management.',
    idealFor: 'Employers, Companies, Firms, Individuals making specified payments',
    included: [
      'TDS deduction advisory for all payments',
      'Quarterly TDS return filing (24Q, 26Q, 27Q)',
      'TDS reconciliation with 26AS / AIS',
      'TDS default notices and rectification',
      'Monthly TDS deposit and challan management',
      'Form 16 and Form 16A generation',
      'Lower deduction certificate applications',
      'TAN registration and surrender',
    ],
  },
  {
    id: 'business-advisory',
    icon: 'TrendingUp',
    title: 'Business Advisory',
    tagline: 'Strategic guidance for sustainable growth.',
    summary:
      'Beyond compliance — we act as your trusted financial advisor, helping you make strategic decisions that drive growth, manage risk and maximize value.',
    shortDesc: 'Financial planning, restructuring, valuations and strategic growth advisory.',
    idealFor: 'SMEs, Family Businesses, HNIs, Promoters, Investors',
    included: [
      'Business valuation and financial modelling',
      'Project finance and CMA data preparation',
      'Succession planning and family settlements',
      'Virtual CFO services for SMEs',
      'Business restructuring and reorganization',
      'Investment advisory and portfolio review',
      'Budgeting, forecasting and variance analysis',
    ],
  },
  {
    id: 'startup-consultancy',
    icon: 'Rocket',
    title: 'Startup Consultancy',
    tagline: 'From idea to IPO-ready.',
    summary:
      'Dedicated startup support covering everything from incorporation and compliance to funding advisory and scaling — so you can focus on building your product.',
    shortDesc: 'End-to-end startup setup: structure, funding, compliance and scaling support.',
    idealFor: 'Tech Startups, D2C Brands, SaaS Companies, Funded Ventures',
    included: [
      'Startup India registration and DPIIT recognition',
      'Equity structuring and cap table management',
      'ESOP design and implementation',
      'Angel and VC funding compliance',
      'FEMA / RBI compliance for foreign investment',
      'Convertible note and SAFE documentation',
      'Pitch deck financial modelling',
      'Compliance calendar and automation setup',
    ],
  },
  {
    id: 'corporate-subsidies-state-incentives',
    icon: 'Award',
    title: 'Government Subsidy & State Incentives',
    tagline: 'Unlock the incentives you\u2019ve already earned.',
    summary:
      'Specialised advisory to help businesses identify, apply for and secure state and central government financial subsidies — including dedicated RIPS and MSME incentive support.',
    shortDesc: 'Government subsidy advisory, RIPS benefits and MSME policy support.',
    idealFor: 'Manufacturers, MSMEs, Investors, Businesses Expanding in Rajasthan',
    included: [
      'Government Subsidy Advisory — identifying, applying for and securing state and central financial subsidies',
      'RIPS Benefits (Rajasthan Investment Promotion Scheme) compliance and consultancy',
      'RIPS investment subsidy applications',
      'Employment generation subsidy claims',
      'Interest and electricity duty exemption applications',
      'MSME Policy Support — central government grant schemes and manufacturing incentives',
    ],
  },
  {
    id: 'fema-international-compliance',
    icon: 'Globe',
    title: 'FEMA & International Compliance',
    tagline: 'Cross-border compliance, handled correctly.',
    summary:
      'End-to-end FEMA advisory for businesses and individuals dealing with foreign investment — from inbound FDI structuring to outbound ODI compliance and RBI compounding.',
    shortDesc: 'FDI structuring, ODI compliance and FEMA compounding with RBI.',
    idealFor: 'Foreign Investors, Indian Companies with Overseas Interests, NRIs',
    included: [
      'Foreign Direct Investment (FDI) — structuring inbound investments and equity share allocations',
      'RBI filings for FDI transactions',
      'Overseas Direct Investment (ODI) compliance for foreign subsidiaries and joint ventures',
      'ODI support for offshore asset investments',
      'FEMA Compounding Procedures — regularising technical or procedural contraventions',
      'Compounding applications with the Reserve Bank of India (RBI)',
    ],
  },
  {
    id: 'uae-international-cross-border-services',
    icon: 'Compass',
    title: 'UAE & International Cross-Border Services',
    tagline: 'Your finance partner in the UAE and beyond.',
    summary:
      'Dedicated UAE and Middle East advisory covering corporate tax, VAT, business incorporation and outsourced accounting — built for businesses operating across borders.',
    shortDesc: 'UAE corporate tax, VAT, incorporation and outsourced accounting services.',
    idealFor: 'UAE-based Entities, Businesses Expanding to the Middle East, NRIs',
    included: [
      'UAE Corporate Tax (CT) — implementation, impact assessment, registrations and filings for the 9% regime',
      'UAE VAT Compliance — standard registrations and periodic return filings',
      'International tax refund claims',
      'Offshore & Mainland Incorporations — UAE Free Zone, Mainland and Offshore business setup',
      'UAE Outsourced Accounting — virtual bookkeeping and management reporting',
      'Financial accounting compliant with IFRS standards for Middle Eastern entities',
    ],
  },
];

export const partners = [
  {
    id: 'dinesh',
    name: 'CA Dinesh Kumar Jain',
    role: 'Founder & Senior Partner',
    experience: '25+ Years Experience',
    email: firm.email2,
    badge: 'Founder',
    credential: 'FCA — Fellow Member, ICAI',
    tags: ['Income Tax & Assessments', 'Business Advisory', 'Corporate Law', 'Succession Planning'],
    bio:
      'CA Dinesh Kumar Jain founded the firm in 1999 with a vision to provide high-quality, personalised financial services to businesses and individuals across Rajasthan. With over 25 years of practice, he has guided hundreds of clients through complex tax matters, corporate restructuring and business growth strategies. His deep expertise in income tax assessments and appellate proceedings has earned him a reputation as one of Jaipur\u2019s most trusted chartered accountants.',
    qualifications: [
      'B.Com (Hons.) — University of Rajasthan',
      'FCA — Fellow Chartered Accountant, ICAI',
      'Diploma in Information Systems Audit (DISA)',
      'Certified Concurrent Auditor — RBI',
    ],
    expertise: [
      'Income Tax Assessments & Appeals',
      'Business Restructuring',
      'Tax Planning for HNIs',
      'Corporate Advisory',
      'Family Business Succession',
      'Bank Audit & Concurrent Audit',
    ],
  },
  {
    id: 'dhawal',
    name: 'CA Dhawal Jain',
    role: 'Partner',
    experience: '8 Years Experience',
    email: firm.email1,
    credential: 'FCA — Fellow Member, ICAI',
    tags: ['GST Compliance', 'Direct Tax', 'Startup Advisory', 'ROC Compliance'],
    bio:
      'CA Dhawal Jain brings 8 years of focused experience in GST compliance, direct taxation and startup advisory. He works closely with SMEs, startups and e-commerce businesses, helping them navigate complex compliance requirements and build sound financial foundations. His practical, client-first approach ensures businesses stay compliant while focusing on growth.',
    qualifications: [
      'B.Com — University of Rajasthan',
      'FCA — Fellow Chartered Accountant, ICAI',
      'Certificate Course in UAE Corporate Tax — ICAI',
      'Certificate Course in Concurrent Audit of Banks — ICAI',
    ],
    expertise: [
      'GST Registration & Returns',
      'GST Audit & Reconciliation',
      'Income Tax Filing & Planning',
      'Company & LLP Registration',
      'ROC Compliance',
      'Startup & MSME Advisory',
    ],
  },
  {
    id: 'nikita',
    name: 'CA Nikita Jain',
    role: 'Partner',
    experience: '8 Years Experience',
    email: firm.email1,
    credential: 'FCA — Fellow Member, ICAI',
    tags: ['Audit & Assurance', 'Accounting', 'TDS Compliance', 'Financial Reporting'],
    bio:
      'CA Nikita Jain specialises in audit, assurance and accounting services with 8 years of hands-on experience across diverse industries. She leads the firm\u2019s audit engagements and oversees accounting and bookkeeping services for a wide range of clients including manufacturing firms, trading companies and service businesses. Her meticulous attention to detail ensures accurate financial reporting and robust internal controls.',
    qualifications: [
      'B.Com (Hons.) — University of Rajasthan',
      'FCA — Fellow Chartered Accountant, ICAI',
    ],
    expertise: [
      'Statutory & Internal Audit',
      'Accounting & Bookkeeping',
      'TDS Compliance & Returns',
      'Financial Statement Preparation',
      'Payroll Processing',
      'MIS Reporting',
    ],
  },
];

export const supportTeam = [
  {
    title: 'Article Assistants',
    desc: 'CA students undergoing articleship training, assisting across all practice areas with energy and precision.',
    icon: 'Users',
  },
  {
    title: 'Tax Executives',
    desc: 'Experienced professionals handling day-to-day compliance, filings and client coordination.',
    icon: 'BookOpen',
  },
  {
    title: 'Client Support',
    desc: 'Dedicated support staff ensuring seamless communication, document management and timely delivery.',
    icon: 'Briefcase',
  },
];

export const testimonials = [
  {
    quote:
      'Jain Dinesh Kumar & Co have been our trusted CA partners for over 10 years. Their expertise in GST and income tax has saved us significantly. Highly professional and always available.',
    name: 'Rajesh Sharma',
    role: 'Director, Sharma Enterprises',
  },
  {
    quote:
      'They guided us through our startup registration, funding compliance and tax structuring seamlessly. The team is knowledgeable, responsive and genuinely invested in our success.',
    name: 'Priya Agarwal',
    role: 'Founder, TechStart Jaipur',
  },
  {
    quote:
      'Excellent service for all our accounting and ROC compliance needs. They are thorough, deadline-conscious and always proactive. I recommend them without hesitation.',
    name: 'Mahesh Gupta',
    role: 'Proprietor, Gupta Trading Co.',
  },
];

export const milestones = [
  {
    year: '1999',
    title: 'Firm Founded',
    desc: 'CA Dinesh Jain established the practice in Jaipur with a focus on income tax and audit services.',
  },
  {
    year: '2005',
    title: 'GST & Indirect Tax Wing',
    desc: 'Expanded into indirect taxation as the regulatory landscape evolved, building a dedicated GST practice.',
  },
  {
    year: '2012',
    title: 'Corporate Advisory Division',
    desc: 'Launched company law, ROC compliance and business advisory services for growing corporates.',
  },
  {
    year: '2018',
    title: '500+ Client Milestone',
    desc: 'Crossed 500 active clients across individuals, SMEs, startups and HNIs — a testament to trust built over decades.',
  },
  {
    year: '2022',
    title: 'Startup & MSME Cell',
    desc: 'Dedicated cell for startups and MSMEs offering end-to-end compliance, funding advisory and growth support.',
  },
  {
    year: '2024',
    title: '25 Years of Excellence',
    desc: 'Celebrated 25 years of uninterrupted service with a team of qualified CAs, CS and tax professionals.',
  },
];

export const coreValues = [
  { title: 'Integrity', desc: 'We uphold the highest ethical standards in every engagement — no shortcuts, no compromises.', icon: 'ShieldCheck' },
  { title: 'Precision', desc: 'Meticulous attention to detail ensures every filing, audit and advisory is accurate and complete.', icon: 'Target' },
  { title: 'Client-First', desc: 'Your goals drive our work. We invest time to understand your business before recommending solutions.', icon: 'Users' },
  { title: 'Continuous Learning', desc: 'Tax laws change constantly. Our team stays ahead through ongoing education and professional development.', icon: 'BookOpen' },
  { title: 'Compliance', desc: 'We ensure full statutory compliance so you can focus on growing your business without worry.', icon: 'ClipboardCheck' },
  { title: 'Excellence', desc: '25+ years of consistent quality service has made us one of Jaipur\u2019s most trusted CA firms.', icon: 'Award' },
];

export const credentials = [
  'Member, Institute of Chartered Accountants of India (ICAI)',
  'Registered with ICAI — Membership No. XXXXXX',
  'Empanelled with various banks for concurrent & statutory audits',
  'Registered GST Practitioner',
  'Authorised representative before Income Tax Appellate Tribunal (ITAT)',
  'Member, Jaipur Branch of CIRC of ICAI',
];

export const faqs = [
  {
    q: 'How quickly can I get an appointment?',
    a: 'We typically respond to consultation requests within 24 hours, often much sooner. For urgent matters, call us directly or message us on WhatsApp and we\u2019ll do our best to accommodate you the same day.',
  },
  {
    q: 'Do you offer services for NRIs?',
    a: 'Yes. We regularly assist Non-Resident Indians with income tax filing, capital gains planning, repatriation compliance, DTAA benefits and property-related taxation. Most of our NRI engagements are handled entirely online.',
  },
  {
    q: 'What documents should I bring for a first consultation?',
    a: 'For an initial consultation, bring your PAN and Aadhaar, last two years\u2019 ITRs (if any), relevant financial statements or bank statements, and any notices or correspondence from tax authorities. We\u2019ll let you know if anything specific is needed based on your query.',
  },
  {
    q: 'Do you serve clients outside Jaipur?',
    a: 'Yes, we serve clients across Rajasthan and India through phone, email and video consultations, with secure digital document sharing. Physical presence at our office is only required for certain audit or registration formalities.',
  },
];

export const servicesQuickList = [
  'Income Tax',
  'GST Services',
  'Audit & Assurance',
  'Accounting & Bookkeeping',
  'Company Registration',
  'ROC Compliance',
  'TDS Services',
  'Business Advisory',
  'Startup Consultancy',
  'Government Subsidy & State Incentives',
  'FEMA & International Compliance',
  'UAE & International Cross-Border Services',
];