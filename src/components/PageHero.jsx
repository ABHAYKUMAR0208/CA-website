import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ eyebrow, title, description, crumb, image, children }) {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/80 to-navy-900" />
        </div>
      )}
      <div className="relative max-w-content mx-auto px-6 lg:px-10 pt-8 pb-16 lg:pb-20">
        
        <h1 className="font-display text-4xl sm:text-5xl font-bold max-w-2xl">{title}</h1>
        {description && (
          <p className="mt-5 text-navy-200 max-w-2xl leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
