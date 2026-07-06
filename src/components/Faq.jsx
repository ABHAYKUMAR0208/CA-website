import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-navy-100 border-t border-b border-navy-100">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-navy-800 text-lg">{item.q}</span>
              <ChevronRight
                size={20}
                className={`text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
              />
            </button>
            {isOpen && (
              <p className="pb-5 text-navy-500 leading-relaxed pr-8">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
