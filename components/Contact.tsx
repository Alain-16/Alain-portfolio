/* ============================================================
   CONTACT (static info column + Booking client widget)
   ============================================================ */
import Booking from "./Booking";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Let&apos;s Talk</span>
          <h2>Book a conversation.</h2>
          <p>Whether it&apos;s a role, a collaboration, or a project — let&apos;s find time to talk.</p>
        </div>

        <div className="contact-grid">
          {/* left: context + links */}
          <div className="contact-info reveal" data-d="1">
            <a href="mailto:mugishalain81@gmail.com" className="email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="var(--teal)" strokeWidth="1.6" />
                <path
                  d="M4 7l8 6 8-6"
                  stroke="var(--teal)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              mugishalain81@gmail.com
            </a>
            <div className="socials">
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18.6v-5.4c0-1.3 0-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H10z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" title="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
            </div>
            <div className="contact-loc">
              <span className="cl-dot"></span>
              <p>
                Based in <b>Kelowna, BC</b> — open to remote opportunities across Canada and the US.
              </p>
            </div>
            <ul className="contact-assure">
              <li>30-minute intro call, no pressure</li>
              <li>Calendar invite sent to both of us automatically</li>
              <li>
                Prefer email? <a href="mailto:mugishalain81@gmail.com">Reach me directly</a>
              </li>
            </ul>
          </div>

          {/* right: booking widget */}
          <Booking />
        </div>
      </div>
    </section>
  );
}
