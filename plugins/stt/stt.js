window.addEventListener("load", () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Sorry, this plugin cannot be used in your browser.");
    document.getElementById("stt-startBtn").disabled = true;
  } else {
    const recognition = new SpeechRecognition();

    function startRecognition() {
      recognition.start();
      startBtn.disabled = true;
      stopBtn.disabled = false;
    }

    function stopRecognition() {
      recognition.stop();
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }

    recognition.lang = "fr-FR";
    recognition.continuous = true;
    recognition.interimResults = true;

    const startBtn = document.getElementById("stt-startBtn");
    const stopBtn = document.getElementById("stt-stopBtn");
    const resultDiv = document.getElementById("stt-result");

    let finalTranscript = "";

    recognition.onresult = (event) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += `${event.results[i][0].transcript} `;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      resultDiv.innerHTML = `<span>${finalTranscript}</span><span style="color: #999;">${interimTranscript}</span>`;
      resultDiv.scrollTop = resultDiv.scrollHeight;
    };

    recognition.onerror = (event) => {
      console.error("Error: ", event.error);
      stopRecognition();
    };

    startBtn.addEventListener("click", startRecognition);
    stopBtn.addEventListener("click", stopRecognition);

    recognition.onend = () => {
      if (startBtn.disabled) {
        recognition.start();
      }
    };
  }
});
