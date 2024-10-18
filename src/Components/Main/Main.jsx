import React, { useState } from 'react';
import styles from './main.module.css';

export default function Main() {
  // State to hold text and image URLs
  const [aboutText, setAboutText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
  const [aboutImage, setAboutImage] = useState("img/d8ff1d73-811a-4290-b401-f660b40bceee.jfif");

  const [service1Image, setService1Image] = useState("img/service1.jpg");
  const [service2Image, setService2Image] = useState("img/service2.jpg");
  const [service3Image, setService3Image] = useState("img/service3.jpg");

  const [blog1Image, setBlog1Image] = useState("img/blog1.jpg");
  const [blog2Image, setBlog2Image] = useState("img/blog2.jpg");
  const [blog3Image, setBlog3Image] = useState("img/blog3.jpg");

  // State for admin editing mode
  const [isAdmin, setIsAdmin] = useState(true); // Change to false to disable editing

  return (
    <section className="main">
      <div className={styles.mainImg}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, aut?</p>
      </div>
      
      <div className={styles.about}>
          <div className={styles.title}>О нас </div>
          <div className={styles.aboutContainer}>
            {isAdmin ? (
              <>
                <input 
                  type="text" 
                  value={aboutImage} 
                  onChange={(e) => setAboutImage(e.target.value)} 
                  placeholder="URL изображения" 
                />
                <input 
                  type="text" 
                  value={aboutText} 
                  onChange={(e) => setAboutText(e.target.value)} 
                  placeholder="Текст о нас" 
                />
              </>
            ) : (
              <img src={aboutImage} alt="About" />
            )}
            <div className={styles.aboutContent}>
                <p>{aboutText}</p>
                <button>Узнать подробнее </button>
            </div>
          </div>
      </div>
      
      <div className={styles.services}>
        <div className={styles.title}>Наши Услуги</div>
        <div className={styles.servicesContainer}>
          {isAdmin ? (
            <div>
              <input 
                type="text" 
                value={service1Image} 
                onChange={(e) => setService1Image(e.target.value)} 
                placeholder="URL изображения услуги 1" 
              />
              <input 
                type="text" 
                value={service2Image} 
                onChange={(e) => setService2Image(e.target.value)} 
                placeholder="URL изображения услуги 2" 
              />
              <input 
                type="text" 
                value={service3Image} 
                onChange={(e) => setService3Image(e.target.value)} 
                placeholder="URL изображения услуги 3" 
              />
            </div>
          ) : (
            <>
              <div className={styles.serviceCard}>
                <img src={service1Image} alt="Услуга 1" />
                <div className={styles.serviceContent}>
                  <h3>Услуга 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quia.</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <img src={service2Image} alt="Услуга 2" />
                <div className={styles.serviceContent}>
                  <h3>Услуга 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quia.</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <img src={service3Image} alt="Услуга 3" />
                <div className={styles.serviceContent}>
                  <h3>Услуга 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quia.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className={styles.blog}>
        <div className={styles.title}>Последние Новости</div>
        <div className={styles.blogContainer}>
          {isAdmin ? (
            <div>
              <input 
                type="text" 
                value={blog1Image} 
                onChange={(e) => setBlog1Image(e.target.value)} 
                placeholder="URL изображения новости 1" 
              />
              <input 
                type="text" 
                value={blog2Image} 
                onChange={(e) => setBlog2Image(e.target.value)} 
                placeholder="URL изображения новости 2" 
              />
              <input 
                type="text" 
                value={blog3Image} 
                onChange={(e) => setBlog3Image(e.target.value)} 
                placeholder="URL изображения новости 3" 
              />
            </div>
          ) : (
            <>
              <div className={styles.blogPost}>
                <img src={blog1Image} alt="Новость 1" />
                <div className={styles.blogContent}>
                  <h3>Заголовок новости 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ratione!</p>
                </div>
              </div>
              <div className={styles.blogPost}>
                <img src={blog2Image} alt="Новость 2" />
                <div className={styles.blogContent}>
                  <h3>Заголовок новости 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ratione!</p>
                </div>
              </div>
              <div className={styles.blogPost}>
                <img src={blog3Image} alt="Новость 3" />
                <div className={styles.blogContent}>
                  <h3>Заголовок новости 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ratione!</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className={styles.contactForm}>
        <div className={styles.title}>Обратная связь</div>
        <form >
          <div className={styles.formGroup}>
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Сообщение:</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
}
