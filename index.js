const factArea = document.querySelector(".fact-area")
const button = document.querySelector(".btn")


async function displayFact() {
    //FETCHES THE API AND TRANSLATES JSON INTO JS LANGUAGE
    const factPromise = await fetch("https://catfact.ninja/fact");

    //RUNS THIS CODE IF FACTPROMISE HAS NO ERRORS (EX. TYPOS)
    if(factPromise.ok) {
        const randomFact = await factPromise.json();
        //USES FACT AREA TO ENTER A RANDOM FACT FROM THE GIVEN API
        factArea.innerHTML = randomFact.fact
    }

    //RUNS THIS CODE IF THERE ARE ERRORS IN API
    else {
        factArea.innerHTML = `Oops! Something went wrong with the database. Your error code is: ${factPromise.status}.`
    }
}
displayFact()

//CONTINUES FETCHING API WITH EACH CLICK
button.addEventListener("click", () => {
    displayFact()
})





