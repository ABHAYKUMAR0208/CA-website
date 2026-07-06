import AnimatedNumber from './AnimatedNumber';

export default function StatBar({ stats, variant = 'gold' }) {
  const bg = variant === 'gold' ? 'bg-gold-500 text-navy-900' : 'bg-navy-800 text-white';
  return (
    <div className={`${bg} py-8`}>
      <div className="max-w-content mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl sm:text-4xl font-bold">
              <AnimatedNumber value={s.value} />
            </p>
            <p className="text-xs sm:text-sm uppercase tracking-wide mt-1 opacity-90">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
