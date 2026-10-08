export default function NativeCardSlider() {
  const dummyCards = [
    { id: 1, title: 'Card One', bg: 'bg-blue-500' },
    { id: 2, title: 'Card Two', bg: 'bg-green-500' },
    { id: 3, title: 'Card Three', bg: 'bg-purple-500' },
    { id: 4, title: 'Card Four', bg: 'bg-pink-500' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 overflow-hidden">
      {/* Container wraps the list and enables horizontal swiping */}
      <div className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-6">
        {dummyCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bg} text-white min-w-[280px] sm:min-w-[350px] h-64 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg snap-center`}
          >
            {card.title}
          </div>
        ))}
      </div>
    </div>
  );
}
