
import { PageFrame } from "../components/site-nav";

const videos = [
  {
    number: "01",
    title: "Live Performance",
    description: "A live performance, captured in the moment.",
    platform: "INSTAGRAM",
    url: "https://www.instagram.com/reel/DTK_vFjj5MX/",
    thumbnail: "/instagram-performance.jpg",
    featured: true,
  },
  {
    number: "02",
    title: "Live Performance",
    description: "Another moment on stage.",
    platform: "YOUTUBE",
    url: "https://youtube.com/shorts/-Mh5p2y8aUo",
    thumbnail: "https://img.youtube.com/vi/-Mh5p2y8aUo/hqdefault.jpg",
    featured: false,
  },
  {
    number: "03",
    title: "Original Lyrics",
    description: "A glimpse into my work as a lyricist.",
    platform: "YOUTUBE",
    url: "https://youtube.com/shorts/EET1JpV3Cec",
    thumbnail: "https://img.youtube.com/vi/EET1JpV3Cec/hqdefault.jpg",
    featured: false,
  },
];

export default function ListenPage() {
  return (
    <PageFrame>
      <main className="inner-page shell listen-page">
        <p className="eyebrow">
          <span className="live-dot" /> LISTEN / WATCH
        </p>

        <div className="inner-heading">
          <h1>
            Music, in
            <br />
            <em>different forms.</em>
          </h1>

          <p>
            Live performances, acoustic music, and a look
            at my work as a lyricist.
          </p>
        </div>

        <section className="listen-section">
          <div className="section-heading">
            <h2>Selected videos</h2>
            <span>03 VIDEOS</span>
          </div>

          <div className="video-grid">
            {videos.map((video) => (
              <a
                className={`video-card ${
                  video.featured ? "featured-video" : ""
                }`}
                key={video.number}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${video.title} on ${video.platform}`}
              >
                <div className="video-image">
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} thumbnail`}
                    loading="lazy"
                  />
                  <span className="video-number">{video.number}</span>
                  <span className="thumbnail-play" aria-hidden="true">
                    ▶
                  </span>
                  <span className="thumbnail-platform">
                    {video.platform}
                  </span>
                </div>

                <div className="video-meta">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <span className="watch-link">
                    WATCH VIDEO <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
