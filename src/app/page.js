"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';
import Link from 'next/link';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { ChatPopup } from '@/components/chat-popup/chat-popup';


export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    testimonials: false,
    cta: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const featuresSection = document.getElementById('features');
      const testimonialsSection = document.getElementById('testimonials');
      const ctaSection = document.getElementById('cta');

      const windowHeight = window.innerHeight;

      const isElementInView = (element) => {
        const elementTop = element?.getBoundingClientRect().top;
        return elementTop <= windowHeight * 0.75;
      };

      setIsVisible({
        hero: isElementInView(heroSection),
        features: isElementInView(featuresSection),
        testimonials: isElementInView(testimonialsSection),
        cta: isElementInView(ctaSection),
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Real-time Chat Application</title>
        <meta name="description" content="Real-time Chat Application Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section
          id="hero"
          className={`${styles.hero} ${isVisible.hero ? styles.appear : ''}`}
        >
          <div className="container">
            <h1>Welcome to our Real-time Chat Application</h1>
            <p>A modern solution for instant communication</p>
          </div>
        </section>

        <section
          id="features"
          className={`${styles.features} ${isVisible.features ? styles.appear : ''}`}
        >
          <div className="container">
            <h2>Key Features</h2>
            <ul>
              <li>Real-time messaging</li>
              <li>Group chats</li>
              <li>File sharing</li>
              <li>Emojis and reactions</li>
            </ul>
          </div>
        </section>

        <section
          id="testimonials"
          className={`${styles.testimonials} ${isVisible.testimonials ? styles.appear : ''}`}
        >
          <div className="container">
            <h2>What Our Users Say</h2>
            <div className={styles.testimonial}>
              <p>This chat app changed the way we collaborate in our team. Highly recommended!</p>
              <p>- John Doe, CEO at ABC Inc.</p>
            </div>
            <div className={styles.testimonial}>
              <p>Ive tried many chat apps before, but this one stands out with its simplicity and speed.</p>
              <p>- Jane Smith, Designer</p>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className={`${styles.cta} ${isVisible.cta ? styles.appear : ''}`}
        >
          <div className="container">
            <h2>Ready to get started?</h2>
            <Link href="/register">
              <button className="btn btn-primary" >Sign Up Now</button>
            </Link>
          </div>
        </section>
      </main>
       <div>
       {isChatOpen ? <ChatPopup setOpen={setIsChatOpen} /> :
          <div className={styles.chat_icon_wrapper}>
                <ChatBubbleIcon onClick={()=>{
            setIsChatOpen(true)
          }} className={styles.chat_icon} />
      </div>}
      </div>
    </div>
  );
}
