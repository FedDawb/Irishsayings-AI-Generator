function displayNewText(response) {
    new Typewriter('#newtext', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    }); 
    
}


function generateForm(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "35b0bf31b34b9e454tb8c221d0a92o09";
    let prompt = `User instructions: Generate an Irish Limerick about ${instructionInput.value}`
    let context = "You are an Irish traditions experet and like to write short funny, cheeky and naughty limericks to make people laugh. Your mission is to make people laugh by generating a short four line limerick in basic HTML. Please follow user instructions and generate a different limerick each time. Do not include a title please. Sign off the Limerick with a <br/> of three lines between limerick and the following text which should be reduced to 12px and the same colour as the submit button 'The gift of a smile from Dawn with the help of SheCodes AI' at the end of the Limerick";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    //make all using axios

    let newTextElement = document.querySelector("#newtext");
    newTextElement.classList.remove("hidden");
    newTextElement.innerHTML = `<div class ="generating"> Tiny little Leprechauns building Limerick's about ${instructionInput.value}.....</div>`

    console.log("Generating....");
    console.log(`Prompt: ${prompt}`);
     console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayNewText);
    //display generated information

  
}


let generateFormElement = document.querySelector("#generate-form");
generateFormElement.addEventListener('submit', generateForm);
