"use client";

/* ============================================================
   HERO — Three.js interconnected node-globe
   Ported from the design's hero3d.js into a client component.
   ============================================================ */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.innerWidth < 760;

    // ---- palette ----
    const TEAL = new THREE.Color(0x3bacb6);
    const SAGE = new THREE.Color(0x9cb080);
    const OLIVE = new THREE.Color(0x859f3d);
    const BG = 0x0d0d0d;

    const NODES = isSmall ? 96 : 220;
    const R = 1.0;
    const LINK_COS = 0.87;
    const MAX_LINKS = isSmall ? 240 : 620;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, 2.0, 4.4);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 3.25);

    const group = new THREE.Group();
    scene.add(group);

    // ---- round soft point sprite ----
    function dotTexture() {
      const s = 64;
      const c = document.createElement("canvas");
      c.width = c.height = s;
      const g = c.getContext("2d")!;
      const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      grd.addColorStop(0, "rgba(255,255,255,1)");
      grd.addColorStop(0.45, "rgba(255,255,255,0.85)");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grd;
      g.fillRect(0, 0, s, s);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }
    const sprite = dotTexture();

    // ---- Fibonacci sphere distribution ----
    const pts: THREE.Vector3[] = [];
    const offv = 2 / NODES;
    const inc = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODES; i++) {
      const y = i * offv - 1 + offv / 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * inc;
      pts.push(
        new THREE.Vector3(Math.cos(phi) * rad, y, Math.sin(phi) * rad).multiplyScalar(R)
      );
    }

    // ---- node points ----
    const nPos = new Float32Array(NODES * 3);
    const nCol = new Float32Array(NODES * 3);
    for (let n = 0; n < NODES; n++) {
      nPos[n * 3] = pts[n].x;
      nPos[n * 3 + 1] = pts[n].y;
      nPos[n * 3 + 2] = pts[n].z;
      const col = Math.random() < 0.72 ? TEAL : SAGE;
      const f = 0.7 + Math.random() * 0.3;
      nCol[n * 3] = col.r * f;
      nCol[n * 3 + 1] = col.g * f;
      nCol[n * 3 + 2] = col.b * f;
    }
    const nGeo = new THREE.BufferGeometry();
    nGeo.setAttribute("position", new THREE.BufferAttribute(nPos, 3));
    nGeo.setAttribute("color", new THREE.BufferAttribute(nCol, 3));
    const nMat = new THREE.PointsMaterial({
      size: isSmall ? 0.052 : 0.045,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      fog: true,
    });
    group.add(new THREE.Points(nGeo, nMat));

    // ---- links between near nodes ----
    const linePos: number[] = [];
    const lineCol: number[] = [];
    let links = 0;
    for (let a = 0; a < NODES && links < MAX_LINKS; a++) {
      for (let b = a + 1; b < NODES && links < MAX_LINKS; b++) {
        if (pts[a].dot(pts[b]) > LINK_COS) {
          linePos.push(pts[a].x, pts[a].y, pts[a].z, pts[b].x, pts[b].y, pts[b].z);
          const lc = TEAL;
          lineCol.push(lc.r, lc.g, lc.b, lc.r, lc.g, lc.b);
          links++;
        }
      }
    }
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    lGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineCol, 3));
    const lMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      fog: true,
      depthWrite: false,
    });
    group.add(new THREE.LineSegments(lGeo, lMat));

    // ---- hub nodes (key countries) — brighter, pulsing ----
    const HUBS = 6;
    const hPos = new Float32Array(HUBS * 3);
    const hCol = new Float32Array(HUBS * 3);
    for (let h = 0; h < HUBS; h++) {
      const src = pts[Math.floor((h / HUBS) * NODES + 7) % NODES];
      hPos[h * 3] = src.x;
      hPos[h * 3 + 1] = src.y;
      hPos[h * 3 + 2] = src.z;
      const hc = h % 3 === 0 ? OLIVE : TEAL;
      hCol[h * 3] = hc.r;
      hCol[h * 3 + 1] = hc.g;
      hCol[h * 3 + 2] = hc.b;
    }
    const hGeo = new THREE.BufferGeometry();
    hGeo.setAttribute("position", new THREE.BufferAttribute(hPos, 3));
    hGeo.setAttribute("color", new THREE.BufferAttribute(hCol, 3));
    const hMat = new THREE.PointsMaterial({
      size: 0.14,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      fog: true,
    });
    group.add(new THREE.Points(hGeo, hMat));

    // ---- faint inner wireframe core for depth ----
    const core = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(R * 0.34, 1)),
      new THREE.LineBasicMaterial({ color: 0x31511e, transparent: true, opacity: 0.35, fog: true })
    );
    group.add(core);

    group.rotation.x = -0.18;

    // ---- interaction state ----
    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;
    function onMove(e: MouseEvent) {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    }
    function onTilt(e: DeviceOrientationEvent) {
      if (e.gamma == null) return;
      tmx = Math.max(-1, Math.min(1, e.gamma / 45)) * 0.5;
      tmy = Math.max(-1, Math.min(1, ((e.beta ?? 45) - 45) / 45)) * 0.5;
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("deviceorientation", onTilt);

    // ---- sizing ----
    function resize() {
      const w = canvas!.clientWidth || canvas!.parentElement!.clientWidth;
      const hgt = canvas!.clientHeight || canvas!.parentElement!.clientHeight;
      if (!w || !hgt) return;
      camera.aspect = w / hgt;
      camera.position.z = w / hgt < 0.8 ? 4.0 : 3.25;
      camera.updateProjectionMatrix();
      renderer.setSize(w, hgt, false);
    }
    window.addEventListener("resize", resize);
    resize();

    // ---- loop ----
    let t = 0;
    let running = false;
    let raf: number | null = null;
    function frame() {
      if (!running) return;
      t += 0.016;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      group.rotation.y += 0.0016 + mx * 0.0012;
      const targetX = -0.18 + my * 0.5;
      group.rotation.x += (targetX - group.rotation.x) * 0.05;
      group.position.x = mx * 0.25;

      hMat.size = 0.12 + Math.sin(t * 1.8) * 0.03;
      hMat.opacity = 0.7 + Math.sin(t * 1.8) * 0.2;

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

    renderer.render(scene, camera);

    if (reduce) {
      group.rotation.y = 0.6;
      renderer.render(scene, camera);
    } else {
      play();
    }

    const io = new IntersectionObserver(
      (ents) => ents.forEach((en) => (en.isIntersecting ? play() : stop())),
      { threshold: 0 }
    );
    io.observe(canvas);

    function onVis() {
      document.hidden ? stop() : play();
    }
    document.addEventListener("visibilitychange", onVis);

    // ---- cleanup ----
    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("deviceorientation", onTilt);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      sprite.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="mesh" ref={canvasRef} />;
}
