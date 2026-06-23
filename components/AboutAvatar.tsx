"use client";

/* ============================================================
   ABOUT — Three.js geometric "AM" avatar
   Ported from the design's about3d.js. Sits behind the AM
   monogram inside .brand-art; swap-for-headshot ready.
   ============================================================ */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AboutAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const TEAL = 0x3bacb6,
      SAGE = 0x9cb080,
      OLIVE = 0x859f3d;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.4;

    const group = new THREE.Group();
    scene.add(group);

    function wire(geo: THREE.BufferGeometry, color: number, op: number) {
      return new THREE.LineSegments(
        new THREE.WireframeGeometry(geo),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: op })
      );
    }

    const outer = wire(new THREE.IcosahedronGeometry(1.2, 0), TEAL, 0.55);
    const mid = wire(new THREE.OctahedronGeometry(0.82, 0), SAGE, 0.6);
    const inner = wire(new THREE.IcosahedronGeometry(0.42, 0), OLIVE, 0.7);
    group.add(outer);
    group.add(mid);
    group.add(inner);

    function dotTex() {
      const s = 48;
      const c = document.createElement("canvas");
      c.width = c.height = s;
      const g = c.getContext("2d")!;
      const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      grd.addColorStop(0, "rgba(255,255,255,1)");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grd;
      g.fillRect(0, 0, s, s);
      return new THREE.CanvasTexture(c);
    }
    const ringTex = dotTex();
    const ring = new THREE.Group();
    const NODES = 7;
    const rPos = new Float32Array(NODES * 3);
    for (let i = 0; i < NODES; i++) {
      const a = (i / NODES) * Math.PI * 2;
      rPos[i * 3] = Math.cos(a) * 1.55;
      rPos[i * 3 + 1] = Math.sin(a) * 0.5;
      rPos[i * 3 + 2] = Math.sin(a) * 1.55;
    }
    const rGeo = new THREE.BufferGeometry();
    rGeo.setAttribute("position", new THREE.BufferAttribute(rPos, 3));
    ring.add(
      new THREE.Points(
        rGeo,
        new THREE.PointsMaterial({
          size: 0.16,
          map: ringTex,
          color: TEAL,
          transparent: true,
          opacity: 0.9,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        })
      )
    );
    group.add(ring);

    group.rotation.x = 0.3;

    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;
    function onMove(e: MouseEvent) {
      const r = canvas!.getBoundingClientRect();
      tmx = (e.clientX - r.left) / r.width - 0.5;
      tmy = (e.clientY - r.top) / r.height - 0.5;
    }
    function onLeave() {
      tmx = 0;
      tmy = 0;
    }
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    function resize() {
      const w = canvas!.clientWidth,
        h = canvas!.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    window.addEventListener("resize", resize);

    let running = false;
    let raf: number | null = null;
    function frame() {
      if (!running) return;
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;
      outer.rotation.y += 0.0032;
      outer.rotation.x += 0.0011;
      mid.rotation.y -= 0.0052;
      mid.rotation.z += 0.0024;
      inner.rotation.x += 0.006;
      inner.rotation.y += 0.004;
      ring.rotation.y += 0.0018;
      group.rotation.y += 0.0009;
      group.rotation.z = -mx * 0.15;
      group.rotation.x = 0.3 + my * 0.4;
      camera.position.x = mx * 0.5;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    function play() {
      if (!running && !reduce) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    }
    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    }

    resize();
    renderer.render(scene, camera);
    if (!reduce) play();

    const io = new IntersectionObserver(
      (ents) => ents.forEach((en) => (en.isIntersecting ? play() : stop())),
      { threshold: 0 }
    );
    io.observe(canvas);

    function onVis() {
      document.hidden ? stop() : play();
    }
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      ringTex.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="aboutArt" ref={canvasRef} />;
}
