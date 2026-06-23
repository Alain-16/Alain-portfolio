"use client";

/* ============================================================
   BOOKING WIDGET — real scheduling via Cal.com inline embed.
   Replaces the earlier mock calendar. Cal.com handles Google
   Calendar sync, live availability, conflict detection and
   invites; bookings post straight to the connected calendar.

   Set your Cal link in .env.local:
     NEXT_PUBLIC_CAL_LINK="your-cal-username/30min"
   ============================================================ */
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// e.g. "alainmugisha/30min" — the public link of your Cal.com event type.
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "your-cal-username/30min";
const NS = "intro-call";

export default function Booking() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NS });
      // Theme the embed to match the portfolio's dark / teal palette.
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#3BACB6" },
          light: { "cal-brand": "#3BACB6" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="booking reveal" data-d="2">
      <div className="bk-head">
        <span className="mono-mark">AM</span>
        <div className="bk-head-txt">
          <span className="bk-name">Alain Mugisha</span>
          <span className="bk-meta">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>{" "}
            30 min · Intro call
          </span>
        </div>
        <span className="bk-tz">PT · Vancouver</span>
      </div>

      <div className="bk-embed">
        <Cal
          namespace={NS}
          calLink={CAL_LINK}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}
