import { useState } from "react";
import { Modal } from "../components/modal";
import { AddAlbumForm } from "../components/forms/add-album";
import { AddTrackForm } from "../components/forms/add-track";
import "./styles.css";

export function App() {
  const [albums, setAlbums] = useState([]);
  const [input, setInput] = useState("");
  const [modalAddAlbumOpen, setAddAlbumOpen] = useState(false);
  const [modalAddTrackOpen, setAddTrackOpen] = useState(false);
  const [albumIdView, setAlbumIdView] = useState("");

  function handleAddTrackOpen() {
    setAddTrackOpen(true);
  }

  function handleAddTrackClose() {
    fetchAlbums();
    setAddTrackOpen(false);
  }

  function handleAddAlbumOpen() {
    setAddAlbumOpen(true);
  }

  function handleAddAlbumClose() {
    fetchAlbums();
    setAddAlbumOpen(false);
  }

  const handleAddition = (id) => {
    setAlbumIdView(id);
    handleAddTrackOpen();
  };

  const handleDeleteTrack = async (id) => {
    try {
      await fetch(`https://tiao.supliu.com.br/api/track/${id}`, {
        method: "DELETE",
        headers: { Authorization: "gabrielmmrodrigues@hotmail.com" },
      });
    } catch (error) {
      alert(error);
    }
    fetchAlbums();
  };

  const handleDeleteAlbum = async (id) => {
    try {
      await fetch(`https://tiao.supliu.com.br/api/album/${id}`, {
        method: "DELETE",
        headers: { Authorization: "gabrielmmrodrigues@hotmail.com" },
      });
    } catch (error) {
      alert(error);
    }
    fetchAlbums();
  };

  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        `https://tiao.supliu.com.br/api/album?keyword=${input}`,
        {
          headers: { Authorization: "gabrielmmrodrigues@hotmail.com" },
        }
      );
      const data = await response.json();
      setAlbums(data.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
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
            <div className="container-adicionar">
              <button className="adicionar-album" onClick={handleAddAlbumOpen}>
                Adicionar Álbum
              </button>
            </div>
            <p className="search-label">Digite uma palavra chave</p>
            <div className="container-search">
              <input
                onInput={(e) => setInput(e.target.value)}
                className="search-bar"
                type="search"
                placeholder="Min"
                name="Min"
                id=""
              />
              <button className="search-button" onClick={fetchAlbums}>
                Procurar
              </button>
            </div>

            <div className="container-albums">
              {albums?.[0]?.name &&
                albums.map((album) => (
                  <section key={album.id} className="container-data">
                    <h1>
                      Álbum: {album.name}, {album.year}
                    </h1>
                    <div className="button-track-container">
                      <button
                        className="track-add"
                        onClick={() => {
                          handleAddition(album.id);
                        }}
                      >
                        Adicionar Faixa
                      </button>
                      <button
                        className="button-delete"
                        onClick={() => {
                          handleDeleteAlbum(album.id);
                        }}
                      >
                        Excluir Álbum
                      </button>
                    </div>

                    <div className="track-subtitle">
                      <div className="track-details">
                        <p>Nº </p>
                        <p className="faixa-text">Faixa</p>
                      </div>

                      <p>Duração</p>
                    </div>

                    {album.tracks.map((track) => {
                      const minutes = String(
                        Math.floor(track.duration / 60)
                      ).padStart(2, "0");
                      const seconds = String(track.duration % 60).padStart(
                        2,
                        "0"
                      );
                      return (
                        <div key={track.id} className="container-tracks">
                          <div className="track-title-container">
                            <p>{track.number} </p>
                            <p className="faixa-track">{track.title}</p>
                            <button
                              className="button-delete-track"
                              onClick={() => {
                                handleDeleteTrack(track.id);
                              }}
                            >
                              X
                            </button>
                          </div>

                          <div className="container-duration">
                            <p>{`${minutes}:${seconds}`}</p>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                ))}
            </div>
          </section>
        </div>
      </div>
      {modalAddAlbumOpen && (
        <Modal onClose={handleAddAlbumClose}>
          <AddAlbumForm onClose={handleAddAlbumClose} />
        </Modal>
      )}
      {modalAddTrackOpen && (
        <Modal onClose={handleAddTrackClose}>
          <AddTrackForm onClose={handleAddTrackClose} albumId={albumIdView} />
        </Modal>
      )}
    </>
  );
}
