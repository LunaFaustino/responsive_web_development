let speech = new SpeechSynthesisUtterance();

let voices = [];

let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voices = voices[0];

    voices.forEach((voice,i) => (voicesSelect.options[i] = new Option(voice.name,i)))
        
}


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})

