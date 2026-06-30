import GameCard from "./components/GameCard";
import "./App.css";

function App() {
  const jogos = [
    {
      id: 1,
      titulo: "GTA V Online (PS4)",
      descricao: "Modo online cheio de missões, assaltos e liberdade total em Los Santos.",
      imagem: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
    },
    {
      id: 2,
      titulo: "CS 2",
      descricao: "Jogo de tiro competitivo focado em estratégia e habilidade.",
      imagem: "https://upload.wikimedia.org/wikipedia/en/6/6a/CS2_Cover_Art.jpg"
    },
    {
      id: 3,
      titulo: "Assetto Corsa Competizione (PS4)",
      descricao: "Simulação realista de corrida com foco em GT3.",
      imagem: "https://upload.wikimedia.org/wikipedia/en/8/8c/Assetto_Corsa_Competizione.jpg"
    },
    {
      id: 4,
      titulo: "Need For Speed Hot Pursuit (PS3)",
      descricao: "Corridas intensas com perseguições policiais eletrizantes.",
      imagem: "https://upload.wikimedia.org/wikipedia/en/6/6f/NFS_Hot_Pursuit_Box_Art.jpg"
  },
    {
      id: 5,
      titulo: "FIFA 25 (PS4)",
      descricao: "Simulação de futebol com modos online e carreira.",
      imagem: "https://upload.wikimedia.org/wikipedia/en/7/7c/EA_Sports_FC_24_cover.jpg"
    },
    {
      id: 6,
      titulo: "CSGO",
      descricao: "Clássico FPS competitivo que marcou gerações.",
      imagem: "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg"
    }
  ];

  return (
    <div className="container">
      <h1>🎮 Meus Jogos Favoritos</h1>

      <div className="grid">
        {jogos.map((jogo) => (
          <GameCard
            key={jogo.id}
            titulo={jogo.titulo}
            descricao={jogo.descricao}
            imagem={jogo.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;