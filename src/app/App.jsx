import { useState, useEffect } from 'react';
import "./styles.css";

export function App() {
  const [data, setData] = useState();
  async function fetchAlbums() {
    const response = await fetch(
      "https://tiao.supliu.com.br/api/album",
      { headers: { Authorization: "gabrielmmrodrigues@hotmail.com" } }
    );
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {fetchAlbums()}, []);
  console.log(data)
  return (
    <div className="root-container">
      <img
        className="background-dupla"
        src="/assets/background.png"
        alt="Tião Carrereiro e Pardinho de fundo"
      />
      <div className="container-dupla">
        <header className="container-tiao">
          <img
            className="img-tiao-carreiro"
            src="/assets/logo.png"
            alt="Tião Carreiro Logo"
          />
          <h1 className="first-title">Discografia</h1>
        </header>

        <section className="container-player">
          <p className="search-p">Digite uma palavra chave</p>
          <div className="container-search">
            <input
              className="search-bar"
              type="search"
              placeholder="Min"
              name="Min"
              id=""
            />
            <button className="search-button">Procurar</button>
          </div>
        </section>
      </div>
    </div>
  );
}
