
import { PageFrame } from "../components/site-nav";

export default function AboutPage() {
  return (
    <PageFrame>
      <main className="inner-page shell about-page">
        <p className="eyebrow">
          <span className="live-dot" /> ABOUT
        </p>

        <div className="inner-heading">
          <h1>
            About <em>Kalim.</em>
          </h1>

          <p>A little about me and what I do.</p>
        </div>

        <section className="about-feature">
          <div className="about-photo">
            <img
              src="/images/artist.jpg"
              alt="Kalim performing live"
              className="about-portrait"
            />
          </div>

          <div className="about-copy">
            <p className="lead">Hi, I’m Kalim.</p>

            <p>
              I’m a singer, songwriter, and live performer
              with a love for creating and performing music.
            </p>

            <p>
              My work brings together vocals, acoustic
              performances, and songwriting. I enjoy exploring
              different ways of expressing a song, whether
              through a live performance or a more intimate
              acoustic session.
            </p>

            <p>
              I’m always looking for new opportunities to
              collaborate, perform, and share my music with
              audiences. If you’re interested in booking a 
              performance or collaborating, please get in touch.
            </p>

            <a
              className="text-link"
              href="https://www.instagram.com/kalim_acoustics/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            
<div className="about-languages">
  <p className="eyebrow">SINGING IN</p>
  <h2>One voice, <em> five languages. </em> </h2>

  <div className="about-language-list">
    <span>Kannada</span>
    <span>Hindi</span>
    <span>Telugu</span>
    <span>Tamil</span>
    <span>English</span>
  </div>
</div>

          </div>
        </section>
      </main>
    </PageFrame>
  );
}
