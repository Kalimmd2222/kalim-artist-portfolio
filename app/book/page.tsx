
import { PageFrame } from "../components/site-nav";

const bookingTypes = [
  "College Festivals",
  "Private Events",
  "Live Gigs",
  "Corporate Events",
  "Cafés & Restaurants",
  "Weddings",
  "Acoustic Sets",
  "Collaborations",
];

export default function BookPage() {
  return (
    <PageFrame>
      <main className="inner-page shell booking-page">
        <p className="eyebrow">
          <span className="live-dot" /> BOOKINGS / CONTACT
        </p>

        <div className="inner-heading booking-heading">
          <h1>
            Bookings <em>& enquiries.</em>
          </h1>

          <p>
            Available for live performances, events,
            and musical collaborations.
          </p>
        </div>

        <section className="booking-layout">
          <div className="booking-info">
            <div className="booking-block">
              <p className="booking-label">
                PERFORMANCE FORMAT
              </p>

              <h2>Solo Acoustic</h2>

              <p className="booking-description">
                Live vocals and acoustic guitar for
                a range of events and venues.
              </p>
            </div>

            <div className="booking-block">
              <p className="booking-label">
                AVAILABLE FOR
              </p>

              <div className="booking-tags">
                {bookingTypes.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </div>
            </div>

            <div className="booking-block booking-location">
              <p className="booking-label">
                BASED IN
              </p>

              <h3>Bengaluru, India</h3>

              <p>
                Currently accepting bookings within
                Bengaluru.
              </p>
            </div>
          </div>

          <div className="booking-contact">
            <p className="booking-label">
              GET IN TOUCH
            </p>

            <h2>
              Have an event
              <br />
              <em>in mind?</em>
            </h2>

            <p className="booking-contact-intro">
              For performance bookings and
              collaborations, feel free to reach
              out through any of the channels below.
            </p>

            <div className="booking-contact-links">
              <a
                href="mailto:kalimmd2222@gmail.com"
                className="booking-contact-item"
              >
                <div>
                  <span>EMAIL</span>
                  <strong>
                    kalimmd2222@gmail.com
                  </strong>
                </div>

                <span className="booking-arrow">
                  ↗
                </span>
              </a>

              <a
                href="https://wa.me/919036521396"
                target="_blank"
                rel="noreferrer"
                className="booking-contact-item"
              >
                <div>
                  <span>WHATSAPP</span>
                  <strong>
                    +91 90365 21396
                  </strong>
                </div>

                <span className="booking-arrow">
                  ↗
                </span>
              </a>

              <a
                href="https://www.instagram.com/kalim_acoustics/"
                target="_blank"
                rel="noreferrer"
                className="booking-contact-item"
              >
                <div>
                  <span>INSTAGRAM</span>
                  <strong>
                    @kalim_acoustics
                  </strong>
                </div>

                <span className="booking-arrow">
                  ↗
                </span>
              </a>
            </div>

            <p className="booking-contact-note">
              For enquiries, please include the
              event date, venue, and a brief
              description of the event.
            </p>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
