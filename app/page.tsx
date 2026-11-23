import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

const instagramPosts = [
  { type: "reel", id: "DYWawFMvuto", label: "A recent tarot reel" },
  { type: "reel", id: "DTMMy44j_zZ", label: "A recent tarot reel" },
  { type: "p", id: "Cy92IZ7gl7N", label: "From Archana’s Instagram" },
  { type: "p", id: "Cy7P0yBgBMz", label: "From Archana’s Instagram" },
  { type: "p", id: "Cy5xIMRAlPH", label: "From Archana’s Instagram" },
  { type: "p", id: "Cy5wi14gay1", label: "From Archana’s Instagram" },
];

const uploadsPlaylist = "UUIrH67QojN-08VHLO_O-2yA";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span className="eyebrow-line" />{children}</p>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="The Ultimate Path home">
          <Image className="brand-mark" src="/the-ultimate-path-poster.jpg" alt="" width={96} height={96} priority />
          <span className="brand-name">The Ultimate Path<small>Tarot readings · Gorakhpur</small></span>
        </a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#readings">Readings</a><a href="#stories">Social stories</a></nav>
        <a className="header-cta" href="#connect">Connect <span>↗</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-stars" aria-hidden="true" />
          <div className="hero-copy" data-reveal>
            <Eyebrow>A tarot reading with Archana Mahajan</Eyebrow>
            <h1>Somewhere within,<br /><em>you already know.</em></h1>
            <p className="hero-intro">Bring the question that’s been on your mind. A thoughtful tarot reading can help you see it from a new angle and find space for your own intuition.</p>
            <div className="hero-actions"><a className="button button-dark" href="#connect">Start a conversation <span>↗</span></a><a className="text-link" href="#readings">Explore the readings <span>↓</span></a></div>
            <div className="hero-note"><span className="note-star">✳</span><span>A quieter moment.<br />A clearer next step.</span></div>
          </div>
          <div className="hero-stage" aria-label="The Ultimate Path tarot reading poster">
            <div className="stage-halo" />
            <div className="stage-orbit stage-orbit-one" />
            <div className="stage-orbit stage-orbit-two" />
            <div className="stage-orbit stage-orbit-three" />
            <div className="hero-photo-shell">
              <Image className="hero-photo" src="/the-ultimate-path-poster.jpg" alt="The Ultimate Path tarot reading poster by Archana Mahajan" width={640} height={640} priority sizes="(max-width: 600px) 78vw, (max-width: 900px) 44vw, 38vw" />
              <div className="photo-glint" aria-hidden="true" />
            </div>
            <div className="stage-note stage-note-top"><span>✦</span> PAUSE · REFLECT · SEE CLEARLY</div>
            <div className="stage-badge"><span>✧</span><small>YOUR PATH<br />YOUR PACE</small></div>
            <div className="stage-caption">ARCHANA MAHAJAN <i>·</i> TAROT READER</div>
          </div>
          <div className="hero-bottom"><span>GORAKHNATH ROAD · GORAKHPUR</span><span>PERSONAL TAROT READINGS · A SPACE TO REFLECT</span></div>
        </section>

        <section className="intro-section" id="about">
          <div className="section-label">THE ULTIMATE PATH <span>01 — A LITTLE ABOUT US</span></div>
          <div className="intro-grid">
            <h2 data-reveal>Find a little room<br />to <em>hear yourself.</em></h2>
            <div className="intro-text" data-reveal><p>Life has a way of asking big questions. A tarot reading offers a quiet moment to explore what’s on your mind, see things from a fresh angle, and reconnect with the choices that feel right for you.</p><p>At The Ultimate Path, Archana creates a thoughtful, welcoming space for your questions and your journey.</p><a href="#connect" className="underlined-link">Start a conversation <span>↗</span></a></div>
          </div>
        </section>

        <section className="reading-section" id="readings">
          <div className="section-label">A READING FOR YOUR MOMENT <span>02 — TAROT</span></div>
          <div className="reading-grid">
            <div className="reading-lead" data-reveal><h2>Come as you are.<br /><em>Bring what’s on<br />your mind.</em></h2><p>Every reading begins with listening. Together, we make space for the questions you’re carrying and the insight you’re ready to meet.</p></div>
            <div className="reading-list" data-reveal>
              <article><span className="reading-number">01</span><div><h3>Personal tarot reading</h3><p>A one-to-one reading shaped around what matters to you right now.</p></div><span className="reading-icon">✧</span></article>
              <article><span className="reading-number">02</span><div><h3>Clarity for your next step</h3><p>Explore a decision or turning point with a fresh perspective.</p></div><span className="reading-icon">☾</span></article>
              <article><span className="reading-number">03</span><div><h3>Space to reflect</h3><p>A gentle, unhurried conversation guided by the cards and your own intuition.</p></div><span className="reading-icon">✳</span></article>
            </div>
          </div>
          <p className="gentle-note">Tarot is a tool for reflection and personal insight. Your choices always remain your own.</p>
        </section>

        <section className="video-section" id="videos">
          <div className="video-heading"><div><div className="section-label">FROM ARCHANA’S YOUTUBE <span>03 — WATCH & REFLECT</span></div><h2>A little guidance,<br /><em>wherever you are.</em></h2></div><a className="underlined-link" href="https://www.youtube.com/@ArchanaMahajan-rg5hq" target="_blank" rel="noreferrer">Visit the channel <span>↗</span></a></div>
          <p className="video-intro">The latest tarot videos from Archana’s YouTube channel.</p>
          <div className="video-grid" aria-label="Latest videos from Archana Mahajan">
            {Array.from({ length: 4 }, (_, index) => {
              const query = new URLSearchParams({ listType: "playlist", list: uploadsPlaylist, index: String(index) });
              return <figure className="video-card" key={index} data-reveal><div className="video-frame"><iframe src={`https://www.youtube.com/embed?${query.toString()}`} title={`Recent tarot video ${index + 1} from Archana Mahajan`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><figcaption>From Archana’s YouTube channel</figcaption></figure>;
            })}
          </div>
        </section>

        <section className="social-gallery" id="stories">
          <div className="gallery-heading" data-reveal><div><div className="section-label">A GLIMPSE FROM INSTAGRAM <span>04 — ON THE CARDS</span></div><h2>Reflections from<br /><em>Archana’s world.</em></h2></div><a className="underlined-link" href="https://www.instagram.com/the_ultimate_path/" target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a></div>
          <p className="gallery-intro">Recent reels and posts, shared directly from Archana’s Instagram profile.</p>
          <div className="instagram-grid">
            {instagramPosts.map((post, index) => <article className="instagram-card" key={post.id} data-reveal style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
              <iframe title={post.label} src={`https://www.instagram.com/${post.type}/${post.id}/embed/`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
            </article>)}
          </div>
        </section>

        <section className="connect-section" id="connect">
          <div className="connect-orbit" aria-hidden="true"><span>✳</span></div>
          <div className="contact-poster" data-reveal><Image src="/the-ultimate-path-poster.jpg" alt="The Ultimate Path tarot reading poster featuring Archana Mahajan and her contact numbers" width={640} height={640} sizes="(max-width: 600px) 86vw, (max-width: 900px) 30vw, 25vw" /></div>
          <div className="connect-copy" data-reveal><Eyebrow>Your next step starts with a hello</Eyebrow><h2>Let’s find a time<br /><em>to talk.</em></h2><p>For tarot reading enquiries, connect with Archana on your preferred social platform.</p><div className="phone-links" aria-label="Call Archana"><a href="tel:+919076977905"><span>Call</span> +91 90769 77905 <b>↗</b></a><a href="tel:+918052623615"><span>Call</span> +91 80526 23615 <b>↗</b></a></div><a className="button button-light" href="https://jsdl.in/DT-99QRHHHBLIG" target="_blank" rel="noreferrer">View business listing <span>↗</span></a></div>
          <div className="social-links" data-reveal>
            <a href="https://www.instagram.com/the_ultimate_path/" target="_blank" rel="noreferrer"><span className="social-icon">◎</span><span><b>Instagram</b><small>@the_ultimate_path</small></span><span className="social-arrow">↗</span></a>
            <a href="https://www.facebook.com/archana.mahajan.98/" target="_blank" rel="noreferrer"><span className="social-icon">f</span><span><b>Facebook</b><small>Archana Mahajan</small></span><span className="social-arrow">↗</span></a>
            <a href="https://www.youtube.com/@ArchanaMahajan-rg5hq" target="_blank" rel="noreferrer"><span className="social-icon">▷</span><span><b>YouTube</b><small>Archana Mahajan</small></span><span className="social-arrow">↗</span></a>
            <a href="https://jsdl.in/DT-99QRHHHBLIG" target="_blank" rel="noreferrer"><span className="social-icon">⌖</span><span><b>Find us</b><small>Gorakhnath Road, Gorakhpur</small></span><span className="social-arrow">↗</span></a>
          </div>
        </section>
      </main>

      <footer><a className="brand footer-brand" href="#home"><Image className="brand-mark" src="/the-ultimate-path-poster.jpg" alt="" width={96} height={96} loading="lazy" /><span className="brand-name">The Ultimate Path<small>Tarot readings · Gorakhpur</small></span></a><span className="footer-note">A moment for your path forward.</span><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
    </>
  );
}

