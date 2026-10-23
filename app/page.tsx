
import { PageFrame } from "./components/site-nav";

export default function Home() {
  return (
    <PageFrame>
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" /> SINGER · LIVE PERFORMER
            </p>

            <h1>
              A voice, a guitar,
              <br />
              <em>a thousand stories.</em>
            </h1>

            <p className="hero-text">
              Sharing my love for music through acoustic covers,
              live performances, and the occasional story behind
              the lyrics.
            </p>

            <div className="hero-actions">
              <a className="button" href="/listen">
                Listen / Watch ↗
              </a>

              <a className="text-link" href="/about">
                Meet the artist →
              </a>
            </div>

            <div className="hero-foot">
              <span>LIVE MUSIC</span>
              <span>AVAILABLE FOR BOOKINGS</span>
            </div>
          </div>

          <a
            className="hero-art"
            href="/gallery"
            aria-label="Open performance gallery"
          >
            <img
              src="/images/artist.jpg"
              alt="Kalim singing and playing guitar live"
              className="artist-hero-image"
            />
            <span className="hero-image-caption">
              LIVE · UNPLUGGED · IN THE MOMENT
            </span>
          </a>
        </section>

        <section className="ticker">
          <div className="ticker-track">
            <span>LIVE MUSIC</span>
            <i>✳</i>
            <span>ACOUSTIC SESSIONS</span>
            <i>✳</i>
            <span>SONGS & STORIES</span>
            <i>✳</i>
            <span>LIVE MUSIC</span>
          </div>
        </section>

        <section className="home-links shell">
          <div className="section-kicker">
            <span>EXPLORE</span>
            <span>STEP INTO MY WORLD</span>
          </div>

          <div className="link-grid">
            <a className="feature-link" href="/listen">
              <span className="feature-number">01 / SOUND</span>
              <h2>
                Listen
                <br />
                <em>& watch.</em>
              </h2>
              <span className="feature-bottom">
                PERFORMANCE VIDEOS ↗
              </span>
            </a>

            <a className="feature-link" href="/about">
              <span className="feature-number">02 / STORY</span>
              <h2>
                A little
                <br />
                <em>about me.</em>
              </h2>
              <span className="feature-bottom">
                MEET THE ARTIST ↗
              </span>
            </a>

            <a className="feature-link" href="/gallery">
              <span className="feature-number">03 / MOMENTS</span>
              <h2>
                Out there,
                <br />
                <em>playing.</em>
              </h2>
              <span className="feature-bottom">
                VIEW THE GALLERY ↗
              </span>
            </a>

            <a
              className="feature-link feature-link-accent"
              href="/book"
            >
              <span className="feature-number">
                04 / LET'S CONNECT
              </span>
              <h2>
                Have a room?
                <br />
                <em>Let's talk.</em>
              </h2>
              <span className="feature-bottom">
                BOOK A LIVE SET ↗
              </span>
            </a>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
