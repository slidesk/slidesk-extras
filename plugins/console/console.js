document.addEventListener("DOMContentLoaded", () => {
  const key = "plugin_console";
  const el = document.getElementById("console");
  window.slidesk.terminals[key] = new XTerm(key);
  window.slidesk.terminals[key].attachTo(el);
  el.addEventListener("wheel", (e) => {
    if (window.slidesk.terminals[key].terminal.buffer.active.baseY > 0) {
      e.preventDefault();
    }
  });
  window.slidesk.terminals[key].startListening();
});

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === "•") {
    document.getElementById("console").classList.toggle("open");
    document.getElementById("console").focus();
  }
});
