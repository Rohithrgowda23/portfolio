import * as THREE from "three";

/**
 * A field of nodes connected by faint lines when close together —
 * a nod to distributed backend systems / neural graphs, reacting
 * gently to the cursor. Mounts into the given container and returns
 * a cleanup function.
 */
export function initHeroScene(container: HTMLDivElement) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.z = 42;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const COUNT = 140;
  const positions = new Float32Array(COUNT * 3);
  const velocities: THREE.Vector3[] = [];
  const spread = 30;

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 1.2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    velocities.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.012,
        (Math.random() - 0.5) * 0.012,
        (Math.random() - 0.5) * 0.012
      )
    );
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x60a5fa,
    size: 0.28,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const lineGeometry = new THREE.BufferGeometry();
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x7c3aed,
    transparent: true,
    opacity: 0.18,
  });
  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  const mouse = { x: 0, y: 0 };
  function onMouseMove(e: MouseEvent) {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }
  window.addEventListener("mousemove", onMouseMove);

  let rafId: number;
  const maxDist = 8.5;

  function animate() {
    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < COUNT; i++) {
      let x = posAttr.getX(i) + velocities[i].x;
      let y = posAttr.getY(i) + velocities[i].y;
      let z = posAttr.getZ(i) + velocities[i].z;

      if (Math.abs(x) > spread) velocities[i].x *= -1;
      if (Math.abs(y) > spread * 0.6) velocities[i].y *= -1;
      if (Math.abs(z) > spread * 0.5) velocities[i].z *= -1;

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    const linePositions: number[] = [];
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = posAttr.getX(i) - posAttr.getX(j);
        const dy = posAttr.getY(i) - posAttr.getY(j);
        const dz = posAttr.getZ(i) - posAttr.getZ(j);
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDist) {
          linePositions.push(
            posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i),
            posAttr.getX(j), posAttr.getY(j), posAttr.getZ(j)
          );
        }
      }
    }
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    points.rotation.y += 0.0008;
    lines.rotation.y += 0.0008;

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
  }
  animate();

  function onResize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", onResize);

  return function cleanup() {
    cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onResize);
    geometry.dispose();
    material.dispose();
    lineGeometry.dispose();
    lineMaterial.dispose();
    renderer.dispose();
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  };
}
