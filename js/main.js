// this is our javascript file.
const USER = "Mihiri Kamiss"

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



let cheepList = document.querySelector(".cheep-list")
let cheepForm = document.querySelector("#cheep-form")
let cheepTextBox = document.querySelector("#cheep-input")
let gifMenuBox = document.querySelector("#cheep-select-gif")

//focus on cheep text box
cheepTextBox.focus()

//validation for forms
cheepForm.addEventListener("submit", (event)=> {
    event.preventDefault()

    //elements
    let cheepElement = event.target.elements["cheep-text"]
    let gifMenuElement = event.target.elements["cheep-gif"]

    //values
    let cheepText = cheepElement.value
    let gifMenu = gifMenuElement.value

    let isFormValid = true

    //cheep text validation
    let isCheepValid = (isValueNotEmpty(cheepText) && !isValueOverLimit(cheepText))
    if(!isCheepValid){
        cheepElement.classList.add("is-invalid")
        isFormValid = false
    } else {
        cheepElement.classList.remove("is-invalid")
    }

    //cheep text validation
    let isGifValid = emptySelection(gifMenu)
    if(!isGifValid){
        gifMenuElement.classList.add("is-invalid")
        isFormValid = false
    } else {
        gifMenuElement.classList.remove("is-invalid")
    }

    if (!isFormValid) {
        return
    }

    addCheep(cheepText, gifMenu)


    //refocus
    cheepTextBox.focus()

    //reset values
    cheepElement.value = ""
    gifMenuElement.value =""
})


//validation functions

const isValueNotEmpty = (value) => {
    if (value !== "") {
        return true
    }
    return false
}

const isValueOverLimit = (value) => {
    if (value.length > 50) {
        return true
    }
    return false
}

const emptySelection = (value) => {
    if (value !== "") { 
        return true
    } else {
        return false
    }
}

//add cheep to page function

const addCheep = (cheepText, gif) => {
    let newCheep = `<li class="text-center list-group-item list-group-item-action" aria-current="true">
        <p>Author: ${USER}</p>
        <div class="row h-100">
            <div class="col-sm">
                <img src="./img/${gif}" class="rounded float-start" alt="${gif}">    
            </div>
            <div class="col-sm h-100">
                <h5 class="mb-1">${cheepText}</5>
            </div>
        </div>
    </li>`

    cheepList.innerHTML = newCheep + cheepList.innerHTML 
}


//bonus

//remove invalid text message when user starts typing



cheepTextBox.addEventListener("keydown", (event) => {

    event.target.classList.remove("is-invalid")

})

gifMenuBox.addEventListener("click", (event) => {

    let selection = gifMenuBox.value

    if(emptySelection(selection)){
        event.target.classList.remove("is-invalid")
    }
})

