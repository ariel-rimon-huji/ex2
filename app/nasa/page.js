// page.js
import { unstable_noStore as noStore } from 'next/cache';
import styles from "./page.module.css";

async function getData(count = 10) {
  noStore(); // Opt out of static rendering
  
  const apiKey = process.env.NASA_API_KEY;
  
  try {
    if (!apiKey) {
      throw new Error('NASA API key is not configured');
    }

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`
    );
    
    if (!response.ok) {
      throw new Error(`NASA API responded with status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching NASA APOD data:', error);
    return []; // Return empty array instead of throwing
  }
}

export default async function NasaPage() {
  const apodData = await getData(6);
  
  if (!apodData.length) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>NASA Astronomy Picture of the Day</h1>
        <div className={styles.error}>
          <p>Unable to load NASA APOD data. Please try again later.</p>
          <p>Make sure you have configured the NEXT_PUBLIC_NASA_API_KEY in your environment variables.</p>
        </div>
      </main>
    );
  }

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