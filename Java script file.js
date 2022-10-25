const p = document.querySelector("p")
const textarea = document.querySelector("textarea"),
awake = document.querySelector("lable1"),
washroom = document.querySelector("lable2"),
breakfast = document.querySelector("lable3"),
lunch = document.querySelector("lable4"),
Dinner = document.querySelector("lable5"),
Sleep = document.querySelector("lable6"),
other = document.querySelector("button")
convert_speech = document.querySelector("button")


function textToSpeech(text){
    let utterrance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterrance)
}

awake.addEventListener("click", e=>{
    e.preventDefault();
    if(p.value !== ""){
        textToSpeech("I am awake");
        textToSpeech("I am awake");
    }
});


breakfast.addEventListener("click", e=>{
    e.preventDefault();
    if(p.value !== ""){
        textToSpeech("Can I get breakfast ");
        textToSpeech("Can I get breakfast ");
    }
});

washroom.addEventListener("click", e=>{
    e.preventDefault();
    if(p.value !== ""){
        textToSpeech("I want to go to washroom");
        textToSpeech("I want to go to washroom");
    }
});

lunch.addEventListener("click", e=>{
    e.preventDefault();
    if(p.value !== ""){
        textToSpeech("Can I get lunch");
        textToSpeech("Can I get lunch");
    }
});

Dinner.addEventListener("click", e=>{
    e.preventDefault();
    if(p.value !== ""){
        textToSpeech("Can I get dinner");
        textToSpeech("Can I get dinner");
    }
});

Sleep.addEventListener("click", e=>{
    e.preventDefault();
    if(p.value !== ""){
        textToSpeech("I want to sleep");
        textToSpeech("I want to sleep");
    }
});


convert_speech.addEventListener("click", e=>{
    e.preventDefault();
    if(p.value !== ""){
        textToSpeech(textarea.value);
        textToSpeech(textarea.value);
    }
});
