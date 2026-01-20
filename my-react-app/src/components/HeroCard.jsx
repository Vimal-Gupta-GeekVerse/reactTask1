function HeroCard() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Hello Tailwind!
      </h2>
      <p className="text-gray-600 mb-4">
        This is your first component using modern Tailwind classes. It looks clean and professional instantly.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
        Click Me
      </button>
    </div>
  );
}

export default HeroCard;