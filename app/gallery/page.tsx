
import { PageFrame } from "../components/site-nav";

export default function GalleryPage() {
  return (
    <PageFrame>
      <main className="inner-page shell gallery-page gallery-compact">
        <p className="eyebrow">
          <span className="live-dot" /> GALLERY
        </p>

        <div className="inner-heading">
          <h1>
            Moments <em>in music.</em>
          </h1>
          <p>
            A few moments from live performances and beyond.
          </p>
        </div>

        <section className="gallery-page-grid gallery-editorial-grid">
          <article className="gallery-main-photo">
            <img
              src="/images/performance-1.jpg"
              alt="Kalim performing live with a guitar"
              className="gallery-photo"
            />
            <div className="gallery-photo-caption">
              <span>01</span>
              <span>ON STAGE</span>
            </div>
          </article>

          <article className="gallery-side-photo">
            <img
              src="/images/performance-3.jpg"
              alt="Kalim performing live"
              className="gallery-photo"
            />
            <div className="gallery-photo-caption">
              <span>02</span>
              <span>LIVE PERFORMANCE</span>
            </div>
          </article>

          <article className="gallery-side-photo">
            <img
              src="/images/performance-2.jpg"
              alt="Kalim seated with a guitar"
              className="gallery-photo"
            />
            <div className="gallery-photo-caption">
              <span>03</span>
              <span>A QUIETER MOMENT</span>
            </div>
          </article>
        </section>

        <section className="gallery-booking-cta">
          <div>
            <p className="eyebrow">HAVE A SHOW IN MIND?</p>
            <h2>
              Let’s make <em>it a night to remember.</em>
            </h2>
          </div>

          <a href="/book" className="gallery-booking-link">
            Book a live set ↗
          </a>
        </section>
      </main>
    </PageFrame>
  );
}
