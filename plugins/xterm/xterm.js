const OPTIONS_TERM = {
  useStyle: true,
  screenKeys: true,
  cursorBlink: true,
  //You have to set the same number in your server
  cols: 100,
  theme: {
    background: "#333"
  },
  fontFamily: '"MesloLGS NF", "DejaVu Sans Mono", Consolas, "Lucida Console", monospace'
};

let term;

window.slidesk.xterm_response = (data) => {
  term.write(data.data);
};

document.querySelectorAll(".xterm").forEach((xterm, _) => {
  term = new Terminal(OPTIONS_TERM);
  term.open(xterm);
  term.onData((data) => {
    window.slidesk.io.send(
      JSON.stringify({
        plugin: "xterm",
        data
      })
    );
  });
  window.slidesk.io.send(
    JSON.stringify({
      plugin: "xterm",
      data: "\n"
    })
  );
  setTimeout(() => {
    window.slidesk.io.send(
      JSON.stringify({
        plugin: "xterm",
        data: "clear\n"
      })
    );
  }, 500)
});