import React from "react";

const games = [
  {
    title: "GTA V",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    source: "FitGirl",
  },
  {
    title: "Red Dead Redemption 2",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    source: "Dodi Repack",
  },
  {
    title: "The Witcher 3",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    source: "SteamUnlocked",
  },
  {
    title: "Cyberpunk 2077",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    source: "FitGirl",
  },
  {
    title: "Resident Evil 4 Remake",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
    source: "Dodi Repack",
  },
];

export default function Home() {
  return (
    <div style={{ background: '#0f0f0f', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Mohammed Mostafa - Free Game Hub 🎮</h1>
        <p style={{ color: '#bbb' }}>كل ألعابك المفضلة مجانًا – تحميل مباشر بدون تعقيد</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {games.map((game, index) => (
          <div key={index} style={{ background: '#1f1f1f', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={game.image} alt={game.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{game.title}</h2>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>المصدر: {game.source}</p>
              <button style={{ marginTop: '1rem', width: '100%', padding: '0.5rem', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '6px' }}>
                تحميل اللعبة
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: 'center', color: '#888', marginTop: '4rem', fontSize: '0.9rem' }}>
        &copy; 2025 Mohammed Mostafa. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}