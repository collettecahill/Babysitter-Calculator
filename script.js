
//Capture the value for age entry inputs  


//Create age entry input for 'age of children' 

function createNewElement() {
    let addLabel = document.createElement("label")
    addLabel.for="age-of-children"
    addLabel.textContent="Age of Children"
    let addInput = document.createElement("input")
    addInput.type = "number"
    addInput.idName = "age-of-children" 
    addInput.required
    console.log(addLabel)

    // document.getElementById("age-of-children").appendChild(addLabel, addInput)
    
}


//Create multiple age entry inputs based on value



//Calculate hourly rate

function calcPrice() {
    const childrenInput = document.getElementById("number-of-children")
    const totalPrice = document.getElementById("total-price")
    totalPrice.textContent = "£" + (childrenInput.value*10).toFixed(2)
}

const myButton = document.querySelector("#number-of-children + button");
console.log(myButton)
myButton.addEventListener("click", () => {
    let childrenInput = document.getElementById("number-of-children")
    let noOfElements = childrenInput.value
    if (noOfElements >= 2) {
        let newElement = document.getElementById("age-of-children")
        const createNew = createNewElement()
        newElement.insertAdjacentHTML("afterend", createNew)
    }
})