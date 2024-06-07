import { useState } from 'react';
import bands from '../../Constants/bands';
import styles from './Form.module.css';

function Form() {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState('');

  function validateUrl(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.lenght < 43) {
      setErrors('ERROR: URL Inválida!!!');
      return false;
    } else {
      return url.substring(32, 43);
    }
  }

  function onSave(event) {
    event.preventDefault();

    if (!category || category === '-') {
      setErrors('ERRO: Escolha uma Banda!!!');
      return;
    } else {
      setErrors('');
    }

    const urlVideo = validateUrl(url);
    if (urlVideo && category) {
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));

      setUrl('');
      setCategory('');
    } else {
      setErrors('ERROR: URL Inválida!!!');
    }
  }

  return (
    <section className={styles.formContainer}>
      <h2>Cadastro</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do Video</label>
          <input
            type="text"
            placeholder="Digite a URL do video"
            required={true}
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            minLength="43"
            maxLength="43"
          />
        </div>
        <div>
          <label>Banda</label>
          <select
            required={true}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="-">Selecione uma Banda</option>
            {bands.map((band) => {
              return (
                <option value={band} key={band}>
                  {band}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
        <div>{errors}</div>
      </form>
    </section>
  );
}

export default Form;
