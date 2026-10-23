
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The artist" },
  { href: "/listen", label: "Listen / Watch" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Bookings" },
];

export default function SiteNav() {
  return (
    <nav className="nav shell">
      <a className="wordmark" href="/">
        KALIM<span>®</span>
      </a>

      <div className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <a className="nav-cta" href="/book">
        Book a set ↗
      </a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <a className="wordmark" href="/">
        KALIM<span>®</span>
      </a>

      <span>INDEPENDENT ARTIST · LIVE MUSIC</span>

      <a href="/book">BOOKINGS ↗</a>
    </footer>
  );
}

export function PageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
