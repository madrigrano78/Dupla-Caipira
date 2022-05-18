import "./styles.css";

export function AddTrackForm({ onClose, albumId }) {
  async function handleTrackAddition(e) {
    e.preventDefault();
    const album_id = albumId;
    const number = Number(e.target[0].value);
    const title = e.target[1].value;
    const duration = Number(e.target[2].value);

    try {
      await fetch(`https://tiao.supliu.com.br/api/track`, {
        method: "POST",
        body: JSON.stringify({ album_id, number, title, duration }),
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
    <form className="form-add-track" onSubmit={handleTrackAddition}>
      <h1 className="title-track">Adicionar Faixa</h1>
      <input className="input-track" type="text" placeholder="Número" />
      <input className="input-track" type="text" placeholder="Titulo" />
      <input className="input-track" type="text" placeholder="Duração" />
      <button className="button-submit-add" type="submit">
        Adicionar
      </button>
    </form>
  );
}
