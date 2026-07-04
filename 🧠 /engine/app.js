// 🧬 písmenková koule engine

const canvas = document.getElementById("globe-canvas");
const ctx = canvas.getContext("2d");

let w = innerWidth;
let h = innerHeight;
let dpr = window.devicePixelRatio || 1;

/* resize hook z bridge */
window.onEngineResize = function(W,H){
  w = W;
  h = H;
};

const chars = "PNFTVIVEGLYPH0123456789";

const points = [];
const R = 140;

/* generace bodů */
for(let i=0;i<220;i++){

  const a = Math.random()*Math.PI*2;
  const b = Math.random()*Math.PI;

  points.push({
    x: Math.sin(b)*Math.cos(a),
    y: Math.cos(b),
    z: Math.sin(b)*Math.sin(a),
    c: chars[Math.floor(Math.random()*chars.length)]
  });

}

let rot = 0;

/* 🎯 hlavní render */
window.drawEngine = function(){

  ctx.clearRect(0,0,innerWidth,innerHeight);

  const cx = innerWidth/2;
  const cy = innerHeight/2;

  rot += 0.003;

  for(const p of points){

    let x = p.x;
    let z = p.z;

    let rx = x*Math.cos(rot) - z*Math.sin(rot);
    let rz = x*Math.sin(rot) + z*Math.cos(rot);

    const scale = R * (1 + rz*0.3);

    const sx = cx + rx * scale;
    const sy = cy + p.y * scale;

    const alpha = 0.3 + (rz+1)/2;

    ctx.fillStyle = `rgba(255,217,141,${alpha})`;
    ctx.font = "12px monospace";
    ctx.fillText(p.c, sx, sy);
  }

};
