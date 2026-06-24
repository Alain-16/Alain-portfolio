"use client";

/* ============================================================
   Global DOM behaviors ported from the design's app.js:
   nav scroll state, mobile menu, scroll reveal, card 3D tilt,
   and skill -> project highlighting. Runs once after mount and
   attaches to the server-rendered markup.
   ============================================================ */
import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- Nav scroll state ---------- */
    const nav = document.getElementById("nav");
    function onScroll() {
      if (!nav) return;
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    /* ---------- Mobile menu ---------- */
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    const onBurger = () => document.body.classList.toggle("menu-open");
    const closeMenu = () => document.body.classList.remove("menu-open");
    if (burger) {
      burger.addEventListener("click", onBurger);
      cleanups.push(() => burger.removeEventListener("click", onBurger));
    }
    if (menu) {
      const links = Array.from(menu.querySelectorAll("a"));
      links.forEach((a) => a.addEventListener("click", closeMenu));
      cleanups.push(() => links.forEach((a) => a.removeEventListener("click", closeMenu)));
    }

    /* ---------- Scroll reveal ---------- */
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- Card 3D tilt + glow tracking ---------- */
    if (!reduce && window.matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll<HTMLElement>(".tilt").forEach((card) => {
        let raf: number | null = null;
        let tx = 0;
        let ty = 0;
        function apply() {
          card.style.transform =
            "perspective(900px) rotateX(" + ty + "deg) rotateY(" + tx + "deg)";
          raf = null;
        }
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          tx = (px - 0.5) * 8;
          ty = (0.5 - py) * 7;
          card.style.setProperty("--mx", px * 100 + "%");
          card.style.setProperty("--my", py * 100 + "%");
          if (!raf) raf = requestAnimationFrame(apply);
        };
        const onLeave = () => {
          card.style.transition = "transform .5s cubic-bezier(.22,.61,.36,1)";
          card.style.transform = "";
          setTimeout(() => (card.style.transition = ""), 500);
        };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
          if (raf) cancelAnimationFrame(raf);
        });
      });
    }

    /* ---------- Skill -> project highlight ---------- */
    const projMap: Record<string, string> = {
      qamis: ".proj-featured",
      dsr: "#projects .card:nth-of-type(2)",
      emr: "#projects .card:nth-of-type(3)",
    };
    document.querySelectorAll<HTMLElement>(".chip[data-proj]").forEach((chip) => {
      const key = chip.getAttribute("data-proj")!;
      const sel = projMap[key];
      const enter = () => {
        const card = sel && document.querySelector<HTMLElement>(sel);
        if (card) {
          card.style.borderColor = "rgba(59,172,182,.6)";
          card.style.boxShadow =
            "0 0 0 1px rgba(59,172,182,.3), 0 24px 50px -30px rgba(0,0,0,.8)";
        }
      };
      const leave = () => {
        const card = sel && document.querySelector<HTMLElement>(sel);
        if (card) {
          card.style.borderColor = "";
          card.style.boxShadow = "";
        }
      };
      chip.addEventListener("mouseenter", enter);
      chip.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        chip.removeEventListener("mouseenter", enter);
        chip.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
