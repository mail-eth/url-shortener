export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center space-y-6">
          <div className="text-8xl mb-4">🔗</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            URL Shortener
          </h1>
          <p className="text-xl text-gray-600">
            Shorten long URLs
          </p>
          <div className="pt-8">
            <button className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
              Get Started
            </button>
          </div>
          <div className="pt-8 text-sm text-gray-500">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </main>
  );
}