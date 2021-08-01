const quoteGenerateButton = document.querySelector("#new-quote");
const apiEndpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const spinner = document.querySelector("#js-spinner");

const displayQuote = (quote) => {
    const quoteText = document.querySelector("#quote-text");
    quoteText.textContent = quote;
}
const generateQuote = async () => {
    spinner.classList.remove("hidden");
    quoteGenerateButton.classList.add("disabled");
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.message);
    }
    catch (err) {
        console.log(err);
        alert('Failed to execute.')
    }
    finally {
        quoteGenerateButton.classList.remove("disabled");
        spinner.classList.add("hidden");    
    }
}
quoteGenerateButton.addEventListener('click', generateQuote);
