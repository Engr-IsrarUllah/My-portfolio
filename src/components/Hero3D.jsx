"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, Sparkles, Terminal } from "lucide-react";

export default function Hero3D({ className = "" }) {
  const mountRef = useRef(null);
  const [activeTab, setActiveTab] = useState("agent");
  const isDraggingRef = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const manualRotation = useRef({ x: 0.18, y: -0.35 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 2.2, 10.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Main Workstation Group (centered)
    const workstationGroup = new THREE.Group();
    rootGroup.add(workstationGroup);

    // --- 2. Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const blueSpot = new THREE.PointLight(0x3b82f6, 3.5, 20);
    blueSpot.position.set(-4, 5, 4);
    scene.add(blueSpot);

    const cyanSpot = new THREE.PointLight(0x06b6d4, 2.5, 20);
    cyanSpot.position.set(4, 3, 3);
    scene.add(cyanSpot);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 1.2);
    rimLight.position.set(0, -3, -5);
    scene.add(rimLight);

    // --- 3. Dynamic Screen Texture (Developer Terminal & Code) ---
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const sCtx = screenCanvas.getContext("2d");

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.anisotropy = 4;

    const codeLines = [
      { text: "// Production AI Agent Core", color: "#64748b" },
      { text: "import { DistributedAgent, RAG } from '@ai/core';", color: "#38bdf8" },
      { text: "import { QdrantVectorDB } from '@db/vectors';", color: "#38bdf8" },
      { text: "", color: "#ffffff" },
      { text: "const agent = new DistributedAgent({", color: "#f8fafc" },
      { text: "  runtime: 'Next.js 16 + Node.js',", color: "#a5f3fc" },
      { text: "  orchestrator: 'LangGraph Engine',", color: "#a7f3d0" },
      { text: "  latency: '11ms (edge deployed)',", color: "#fde68a" },
      { text: "  status: 'Ready for Autonomous Tasks',", color: "#34d399" },
      { text: "});", color: "#f8fafc" },
      { text: "", color: "#ffffff" },
      { text: "await agent.deploy({ uptime: '99.99%' });", color: "#818cf8" },
      { text: "⚡ System operational: All microservices synced.", color: "#4ade80" },
    ];

    let cursorVisible = true;
    let blinkTimer = 0;

    const renderScreenContent = (time) => {
      sCtx.fillStyle = "#0c0e14";
      sCtx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

      // Terminal Header Bar
      sCtx.fillStyle = "#181b26";
      sCtx.fillRect(0, 0, screenCanvas.width, 52);

      // Header Buttons
      sCtx.fillStyle = "#ef4444";
      sCtx.beginPath();
      sCtx.arc(30, 26, 7, 0, Math.PI * 2);
      sCtx.fill();

      sCtx.fillStyle = "#eab308";
      sCtx.beginPath();
      sCtx.arc(52, 26, 7, 0, Math.PI * 2);
      sCtx.fill();

      sCtx.fillStyle = "#22c55e";
      sCtx.beginPath();
      sCtx.arc(74, 26, 7, 0, Math.PI * 2);
      sCtx.fill();

      // Header Title
      sCtx.fillStyle = "#94a3b8";
      sCtx.font = "bold 20px monospace";
      sCtx.fillText("israr-core.tsx — git:(main) ✓ [Production Cluster]", 110, 33);

      // Header Status Tag
      sCtx.fillStyle = "#059669";
      sCtx.fillRect(screenCanvas.width - 150, 14, 126, 26);
      sCtx.fillStyle = "#ecfdf5";
      sCtx.font = "bold 13px sans-serif";
      sCtx.fillText("● 100% HEALTHY", screenCanvas.width - 140, 32);

      // Code Lines
      sCtx.font = "20px 'Fira Code', 'JetBrains Mono', Consolas, monospace";
      let startY = 95;
      const lineHeight = 34;

      codeLines.forEach((line, index) => {
        // Line number
        sCtx.fillStyle = "#334155";
        sCtx.fillText((index + 1).toString().padStart(2, "0"), 28, startY);

        // Code text
        sCtx.fillStyle = line.color;
        sCtx.fillText(line.text, 68, startY);

        startY += lineHeight;
      });

      // Animated Cursor
      if (cursorVisible) {
        sCtx.fillStyle = "#38bdf8";
        sCtx.fillRect(490, startY - lineHeight + 4, 12, 22);
      }

      // Bottom Telemetry Strip
      sCtx.fillStyle = "#111827";
      sCtx.fillRect(0, screenCanvas.height - 48, screenCanvas.width, 48);

      sCtx.fillStyle = "#38bdf8";
      sCtx.font = "14px monospace";
      sCtx.fillText("MEMORY: 32MB / 512MB  |  RPS: 4,820  |  AGENT RUNS: 1,429  |  REGION: GLOBAL EDGE", 30, screenCanvas.height - 20);

      // Animated pulse bar
      const pulseWidth = ((Math.sin(time * 3) + 1) / 2) * 120 + 40;
      sCtx.fillStyle = "#3b82f6";
      sCtx.fillRect(screenCanvas.width - 180, screenCanvas.height - 28, pulseWidth, 8);

      screenTexture.needsUpdate = true;
    };

    // --- 4. 3D Developer Laptop Construction ---
    const laptopGroup = new THREE.Group();
    workstationGroup.add(laptopGroup);

    // Laptop Base Materials
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.85,
      roughness: 0.25,
    });

    const screenBezelMat = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      metalness: 0.9,
      roughness: 0.2,
    });

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });

    // A. Base Chassis (Bottom part of laptop)
    const baseGeo = new THREE.BoxGeometry(5.0, 0.16, 3.4);
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    baseMesh.position.y = -0.08;
    laptopGroup.add(baseMesh);

    // B. Keyboard Inset Texture & Mesh
    const kbCanvas = document.createElement("canvas");
    kbCanvas.width = 512;
    kbCanvas.height = 256;
    const kCtx = kbCanvas.getContext("2d");
    kCtx.fillStyle = "#121318";
    kCtx.fillRect(0, 0, 512, 256);

    // Draw keyboard grid
    kCtx.strokeStyle = "#27272a";
    kCtx.lineWidth = 2;
    const rows = 5;
    const cols = 14;
    const kw = 30;
    const kh = 22;
    const gap = 5;
    const startX = 18;
    const startY = 16;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        kCtx.fillStyle = "#1c1d24";
        kCtx.fillRect(startX + c * (kw + gap), startY + r * (kh + gap), kw, kh);
        kCtx.strokeRect(startX + c * (kw + gap), startY + r * (kh + gap), kw, kh);
      }
    }

    // Trackpad
    kCtx.strokeStyle = "#38bdf8";
    kCtx.lineWidth = 1.5;
    kCtx.fillStyle = "#181a20";
    kCtx.roundRect(190, 160, 130, 80, 8);
    kCtx.fill();
    kCtx.stroke();

    const kbTexture = new THREE.CanvasTexture(kbCanvas);
    const kbMat = new THREE.MeshStandardMaterial({
      map: kbTexture,
      roughness: 0.4,
      metalness: 0.5,
    });

    const kbGeo = new THREE.PlaneGeometry(4.4, 2.8);
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.rotation.x = -Math.PI / 2;
    kbMesh.position.set(0, 0.01, 0.1);
    laptopGroup.add(kbMesh);

    // C. Glowing Base Edge Rim
    const baseGlowGeo = new THREE.BoxGeometry(5.08, 0.04, 3.48);
    const baseGlowMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.35,
    });
    const baseGlowMesh = new THREE.Mesh(baseGlowGeo, baseGlowMat);
    baseGlowMesh.position.y = -0.12;
    laptopGroup.add(baseGlowMesh);

    // D. Screen Display Lid (Rotated at modern 108-degree open angle)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0, -1.6);
    lidGroup.rotation.x = THREE.MathUtils.degToRad(-15);
    laptopGroup.add(lidGroup);

    // Screen Lid Back
    const lidGeo = new THREE.BoxGeometry(5.0, 3.3, 0.1);
    const lidMesh = new THREE.Mesh(lidGeo, screenBezelMat);
    lidMesh.position.set(0, 1.65, 0);
    lidGroup.add(lidMesh);

    // Active Display Screen Panel
    const screenGeo = new THREE.PlaneGeometry(4.65, 2.95);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.65, 0.055);
    lidGroup.add(screenMesh);

    // Screen Ambient Backlight Glow
    const screenGlowLight = new THREE.PointLight(0x38bdf8, 2, 8);
    screenGlowLight.position.set(0, 1.6, 0.8);
    lidGroup.add(screenGlowLight);

    // --- 5. Orbiting Holographic Tech Tokens ---
    // Badge generation helper
    const createBadgeTexture = (label, sublabel, iconColor, bgLinear) => {
      const bCanvas = document.createElement("canvas");
      bCanvas.width = 180;
      bCanvas.height = 180;
      const bCtx = bCanvas.getContext("2d");

      // Card Background
      bCtx.fillStyle = bgLinear || "rgba(15, 23, 42, 0.9)";
      bCtx.beginPath();
      bCtx.roundRect(10, 10, 160, 160, 24);
      bCtx.fill();

      // Card Border
      bCtx.strokeStyle = iconColor || "#38bdf8";
      bCtx.lineWidth = 4;
      bCtx.stroke();

      // Main Icon / Glyph
      bCtx.fillStyle = "#ffffff";
      bCtx.font = "bold 52px 'Fira Code', monospace";
      bCtx.textAlign = "center";
      bCtx.fillText(label, 90, 88);

      // Sublabel
      bCtx.fillStyle = iconColor || "#94a3b8";
      bCtx.font = "bold 18px sans-serif";
      bCtx.fillText(sublabel, 90, 130);

      const texture = new THREE.CanvasTexture(bCanvas);
      return texture;
    };

    const techBadges = [
      { label: "AI", sub: "GenAI Core", color: "#38bdf8", radius: 4.8, speed: 0.6, yOffset: 0.8, phase: 0 },
      { label: "{ }", sub: "Full Stack", color: "#10b981", radius: 5.2, speed: 0.5, yOffset: -0.4, phase: 1.2 },
      { label: "⚛", sub: "Next.js 16", color: "#60a5fa", radius: 4.5, speed: 0.7, yOffset: 1.6, phase: 2.4 },
      { label: "λ", sub: "FastAPI / Node", color: "#f59e0b", radius: 5.5, speed: 0.45, yOffset: -0.9, phase: 3.6 },
      { label: "🗄️", sub: "Vector DB", color: "#a855f7", radius: 4.9, speed: 0.55, yOffset: 1.1, phase: 4.8 },
      { label: "</>", sub: "TypeScript", color: "#3b82f6", radius: 5.4, speed: 0.65, yOffset: -0.2, phase: 5.5 },
    ];

    const orbitingNodes = [];

    techBadges.forEach((badge) => {
      const nodeGroup = new THREE.Group();

      const bTex = createBadgeTexture(badge.label, badge.sub, badge.color);
      const bMat = new THREE.MeshBasicMaterial({
        map: bTex,
        transparent: true,
        side: THREE.DoubleSide,
      });

      // 3D Card Glass Geometry
      const cardGeo = new THREE.PlaneGeometry(1.3, 1.3);
      const cardMesh = new THREE.Mesh(cardGeo, bMat);
      nodeGroup.add(cardMesh);

      // Glowing Backing halo
      const haloGeo = new THREE.PlaneGeometry(1.4, 1.4);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(badge.color),
        transparent: true,
        opacity: 0.15,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.z = -0.02;
      nodeGroup.add(haloMesh);

      rootGroup.add(nodeGroup);
      orbitingNodes.push({
        group: nodeGroup,
        config: badge,
        texture: bTex,
        cardGeo,
        haloGeo,
        bMat,
        haloMat,
      });
    });

    // --- 6. Orbiting Holographic Rings & Data Stream Splines ---
    const orbitRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(5.2, 0.025, 16, 120),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.3,
      })
    );
    orbitRing1.rotation.x = Math.PI / 2.3;
    orbitRing1.rotation.y = 0.2;
    workstationGroup.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(5.7, 0.02, 16, 120),
      new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.2,
      })
    );
    orbitRing2.rotation.x = Math.PI / 1.7;
    orbitRing2.rotation.z = 0.4;
    workstationGroup.add(orbitRing2);

    // --- 7. Floating Cyber Data Particles ---
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- 8. Cyber Ground Grid ---
    const gridHelper = new THREE.GridHelper(16, 24, 0x3b82f6, 0x1e293b);
    gridHelper.position.y = -2.2;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.35;
    scene.add(gridHelper);

    // --- 9. Interaction Handlers (Mouse tilt + Click & Drag Orbit) ---
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      targetMouse.x = (clientX / rect.width) * 2 - 1;
      targetMouse.y = -(clientY / rect.height) * 2 + 1;

      if (isDraggingRef.current) {
        const deltaX = e.clientX - prevMousePos.current.x;
        const deltaY = e.clientY - prevMousePos.current.y;
        manualRotation.current.y += deltaX * 0.008;
        manualRotation.current.x += deltaY * 0.008;
        // Clamp vertical rotation
        manualRotation.current.x = Math.max(-0.6, Math.min(0.8, manualRotation.current.x));
        prevMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch support
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMousePos.current.x;
        const deltaY = e.touches[0].clientY - prevMousePos.current.y;
        manualRotation.current.y += deltaX * 0.008;
        manualRotation.current.x += deltaY * 0.008;
        manualRotation.current.x = Math.max(-0.6, Math.min(0.8, manualRotation.current.x));
        prevMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 500;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    window.addEventListener("resize", handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- 10. Animation Loop ---
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Terminal cursor blink
      blinkTimer += 0.03;
      if (blinkTimer > 1) {
        blinkTimer = 0;
        cursorVisible = !cursorVisible;
      }

      // Smooth mouse damping
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Update screen content periodically
      renderScreenContent(elapsedTime);

      // Workstation gentle floating bob
      workstationGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Combine manual drag rotation with slight mouse tilt
      if (!isDraggingRef.current) {
        // Slow auto-spin return when not dragging
        manualRotation.current.y += 0.002;
      }

      workstationGroup.rotation.y = manualRotation.current.y + mouse.x * 0.25;
      workstationGroup.rotation.x = manualRotation.current.x - mouse.y * 0.18;

      // Orbiting Tech Badges
      orbitingNodes.forEach(({ group, config }) => {
        const angle = elapsedTime * config.speed + config.phase;
        const x = Math.cos(angle) * config.radius;
        const z = Math.sin(angle) * config.radius;
        const y = config.yOffset + Math.sin(elapsedTime * 2 + config.phase) * 0.25;

        group.position.set(x, y, z);
        // Make badge always look directly at the camera
        group.lookAt(camera.position);
      });

      // Rings subtle rotation
      orbitRing1.rotation.z = elapsedTime * 0.15;
      orbitRing2.rotation.y = elapsedTime * 0.1;

      // Data particles slow upward drift
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Reset rotation function exposed to parent if needed
    container.resetRotation = () => {
      manualRotation.current = { x: 0.18, y: -0.35 };
    };

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      baseGeo.dispose();
      chassisMat.dispose();
      kbGeo.dispose();
      kbMat.dispose();
      kbTexture.dispose();
      baseGlowGeo.dispose();
      baseGlowMat.dispose();
      lidGeo.dispose();
      screenBezelMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      screenTexture.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      gridHelper.dispose();
      orbitRing1.geometry.dispose();
      orbitRing1.material.dispose();
      orbitRing2.geometry.dispose();
      orbitRing2.material.dispose();

      orbitingNodes.forEach((node) => {
        node.cardGeo.dispose();
        node.haloGeo.dispose();
        node.bMat.dispose();
        node.haloMat.dispose();
        node.texture.dispose();
      });
    };
  }, []);

  const handleResetOrientation = () => {
    if (mountRef.current && mountRef.current.resetRotation) {
      mountRef.current.resetRotation();
    }
  };

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Container */}
      <div
        ref={mountRef}
        className="w-full h-[380px] sm:h-[450px] lg:h-[500px] cursor-grab active:cursor-grabbing relative overflow-hidden"
      />

      {/* Floating Interactive Controls & Hint Bar */}
      <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between pointer-events-none z-10 px-2 py-1.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-zinc-300">Cluster: Active</span>
          <span className="text-zinc-600">|</span>
          <span className="hidden sm:inline text-zinc-400">Drag to inspect 360°</span>
        </div>

        <button
          onClick={handleResetOrientation}
          className="pointer-events-auto flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all text-[11px] cursor-pointer"
          title="Reset 3D camera angle"
        >
          <RotateCw size={11} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
