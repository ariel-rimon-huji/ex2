// page.js
import styles from "./page.module.css";

async function getData(count = 10) {
  const apiKey = process.env.NASA_API_KEY;
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch APOD data');
  }
  
  return response.json();
}

export default async function NasaPage() {
  const apodData = await getData(6);
  
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>NASA Astronomy Picture of the Day</h1>
      <div className={styles.grid}>
        {apodData.map((item) => (
          <article key={item.date} className={styles.card}>
            <img 
              src={item.url} 
              alt={item.title}
              className={styles.image}
            />
            <div className={styles.content}>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <time className={styles.date}>{item.date}</time>
              <p className={styles.explanation}>{item.explanation}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}