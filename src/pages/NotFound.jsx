import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-6 py-32 text-center">
      <p className="font-display text-6xl font-bold text-gold-500">404</p>
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mt-4">
        Page not found
      </h1>
      <p className="text-navy-500 mt-3">The page you\u2019re looking for doesn\u2019t exist or has moved.</p>
      <Link
        to="/"
        className="inline-block mt-8 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
