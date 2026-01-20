import HeroCard from '../components/HeroCard';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* This checks if Tailwind is working by centering everything on a gray background */}
      <HeroCard />
    </div>
  );
}

export default Home;