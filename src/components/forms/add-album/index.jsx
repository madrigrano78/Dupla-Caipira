import "./styles.css";

export function AddAlbumForm({ onClose }) {
  async function handleAlbumAdition(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const year = Number(e.target[1].value);

    try {
      await fetch(`https://tiao.supliu.com.br/api/album`, {
        method: "POST",
        body: JSON.stringify({ name, year }),
        headers: {
          Authorization: "gabrielmmrodrigues@hotmail.com",
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      alert(error);
    }
    onClose();
  }
  return (
    <form className="form-add-album" onSubmit={handleAlbumAdition}>
      <h1 className="title-album">Adicionar Álbum</h1>
      <input className="input-name-album" type="text" placeholder="Nome" />
      <input className="input-year-album" type="text" placeholder="Ano" />
      <button className="button-submit-add" type="submit">
        Adicionar
      </button>
    </form>
  );
}
