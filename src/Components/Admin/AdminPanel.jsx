import { useState } from 'react';


export default function AdminPanel() {
  const [mainText, setMainText] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e, setText) => setText(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API вызов для сохранения данных
    console.log('Сохранение данных...', { mainText, aboutText, image });
  };

  return (
    <section className={styles.adminPanel}>
      <h2>Админ панель</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="mainText">Текст главного изображения:</label>
          <textarea
            id="mainText"
            value={mainText}
            onChange={(e) => handleTextChange(e, setMainText)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="aboutText">О нас (текст):</label>
          <textarea
            id="aboutText"
            value={aboutText}
            onChange={(e) => handleTextChange(e, setAboutText)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Изображение:</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>

        <button type="submit">Сохранить изменения</button>
      </form>
    </section>
  );
}
