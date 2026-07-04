(function(){

window.VAFIT = window.VAFIT || {};
window.ENGINE = window.ENGINE || {};
window.WORLD = { centerX:0, centerY:0 };

const canvas = document.getElementById("globe-canvas");
const ctx = canvas.getContext("2d");

ENGINE.canvas = canvas;
ENGINE.ctx = ctx;

let w,h,dpr;

function resize(){

  dpr = window.devicePixelRatio || 1;

  w = canvas.width = innerWidth * dpr;
  h = canvas.height = innerHeight * dpr;

  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";

  ctx.setTransform(dpr,0,0,dpr,0,0);

  WORLD.centerX = innerWidth / 2;
  WORLD.centerY = innerHeight / 2;

  if(window.onEngineResize){
    window.onEngineResize(w,h);
  }

}

window.addEventListener("resize", resize);
resize();

/* 🔁 JEDINÝ RENDER LOOP */
function loop(){

  if(window.drawEngine){
    window.drawEngine();
  }

  requestAnimationFrame(loop);

}

requestAnimationFrame(loop);

console.log("🌉 Bridge ready");

})();
