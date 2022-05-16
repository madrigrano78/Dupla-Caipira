import "./styles.css";

export function App() {
  return (
  <div className="container-dupla">
    <img className="background-dupla" src="/assets/background.png" alt="Tião Carrereiro e Pardinho de fundo" />

    <section className="container-tiao">
     <img className="img-tiao-carreiro" src="/assets/logo.png" alt="Tião Carreiro Logo" />
     <h1>Discografia</h1>
    </section>

  <section className="container-player">
    <p>Digite uma palavra chave</p>
    <input className="search-bar" type="search" name="Min" id="" />
  </section>

  <button className="search-button">
    Procurar
  </button>

  </div>
  )
}

