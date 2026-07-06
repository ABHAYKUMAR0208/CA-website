export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl mb-12 ${alignment}`}>
      <p className="eyebrow text-gold-600 text-xs uppercase mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">{title}</h2>
      <div className={`h-1 w-14 bg-gold-500 mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {description && <p className="mt-5 text-navy-500 leading-relaxed">{description}</p>}
    </div>
  );
}
