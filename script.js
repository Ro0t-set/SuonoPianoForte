const DO = new Audio("sounds/do.wav");
const DOB = new Audio("sounds/dodie.wav");
const RE = new Audio("sounds/re.wav");
const REB = new Audio("sounds/redie.wav");
const MI = new Audio("sounds/mi.wav");
const FA = new Audio("sounds/fa.wav");
const FAB = new Audio("sounds/fadie.wav");
const SOL = new Audio("sounds/sol.wav");
const SOLB = new Audio("sounds/soldie.wav");
const LA = new Audio("sounds/la.wav");
const LAB = new Audio("sounds/ladie.wav");
const SI = new Audio("sounds/si.wav");
const DOA = new Audio("sounds/doA.wav");



const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

var nota = document.getElementById("nota")
