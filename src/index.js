function generateForm(event) {
    event.preventDefault();

   new Typewriter('#newtext', {
        strings: ['Top of the morning to ya!'],
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


let generateFormElement = document.querySelector("#generate-form");
generateFormElement.addEventListener('submit', generateForm);
