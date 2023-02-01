// this is our javascript file.
const USER = "Your name"

// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
    <li class="text-center list-group-item list-group-item-action" aria-current="true">
        <p>Author: USERNAME HERE</p>
        <div class="row h-100">
            <div class="col-sm">
                <img src="CHEEP GIF HERE" class="rounded float-start" alt="CHEEP GIF HERE">    
            </div>
            <div class="col-sm h-100">
                <h5 class="mb-1">CHEEP TEXT HERE</5>
            </div>
        </div>
    </li>
*/

//validation for forms

let cheepForm = document.querySelector("#cheep-form")

cheepForm.addEventListener("submit", (event)=> {
    event.preventDefault()

    //elements
    let cheepElement = event.target.elements["cheep-text"]
    let gifMenuElement = event.target.elements["cheep-gif"]

    //values
    let cheepText = cheepElement.value
    let gifMenu = gifMenuElement.value

    let isFormValid

    //cheep text validation
    let isCheepValid = emptyText(cheepText)
    console.log(cheepText.value)
    console.log(gifMenu.value)
    if(!isCheepValid){
        cheepElement.classList.add("is-invalid")
        isFormValid = false
    } else {
        cheepElement.classList.remove("is-invalid")
    }

    //cheep text validation
    let isGifValid = emptySelection(gifMenu)
    console.log(isGifValid)
    if(!isGifValid){
        gifMenuElement.classList.add("is-invalid")
        isFormValid = false
    } else {
        gifMenuElement.classList.remove("is-invalid")
    }

    if (!isFormValid) {
        console.log("form is not valid")
    }

    //reset values
    cheepElement.value = ""
    gifMenuElement.value =""
})


//validation functions

const emptyText = (value) => {
    if (value !== "" || value !== "cheep this") { 
        return false
    } else {
        return true
    }
}

const emptySelection = (value) => {
    if (value !== "Select a gif") { 
        return false
    } else {
        return true
    }
}
