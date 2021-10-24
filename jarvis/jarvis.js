const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    ' Im good , I hope you are also good home boy, you lazy home boy why are you not working at your home, teach your ridiculous brother and sister something',
    'why are you talking to me always',
    "Hey do  your work,don't talk me"
];

const weather = [
    "last time I will tell you weather is fine,don't ask me again",
    "Please do your work Don't ask me"
];

const hello = [
    "hello Saksham lulllll",
    "why are you saying ok",
    "now enough",
    "stop saying ok",
    "well",
    "yeah ok"

];

const ok = [
    "hello lazy, I can't help you, So, Don't expect that I will help you , Ok",
    "Hello little boy ,why are you talking me agian and again",
    "yeah really you are so boring",
    "Now I don't want to listen any word"




];



const time = [
    "it's , 09:30 , pm O'clock"
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated, you can use your microphone');


};
recognition.onresult = function(event) {
    // console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to button

btn.addEventListener('click', () => {
    recognition.start();
});



function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();


    speech.text = "Hey im Jarvis, are you Anurag, if you are anurag then, I'm not interested to talk you,and If you are not Anurag, then I think your are a ridiculous person";

    if (message.includes('how are you')) {
        const finalText =
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    }

    if (message.includes("what's about weather")) {
        const finalText =
            weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }