// Copies raw mic frames to the main thread and reports block peak for auto-stop.
class Rec extends AudioWorkletProcessor {
  process(inputs) { const ch = inputs[0] && inputs[0][0]; if (ch) { let p = 0; for (let i = 0; i < ch.length; i++) { const a = Math.abs(ch[i]); if (a > p) p = a; } this.port.postMessage({ buf: ch.slice(0), peak: p }); } return true; }
}
registerProcessor('rpm-rec', Rec);
