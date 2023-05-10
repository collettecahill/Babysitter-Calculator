
//Capture the value for age entry inputs  

function genAgeValue() {
    let childrenInput = document.getElementById("X")
    let noOfElements = childrenInput.value
    console.log(noOfElements)
    if (noOfElements >= 2) {
        let newElement = document.getElementById("input-age-of-children")
        newElement.insertAdjacentHTML("afterend", "<p>test</p>")
    }
}

//Create age entry input for 'age of children' 

function createNewElement() {
    let addLabel = document.createElement("label")
    addLabel.for="age-of-children"
    addLabel.textContent="Age of Children"
    let addInput = document.createElement("input")
    addInput.type = "number"
    addInput.idName = "age-of-children" 
    addInput.required

    document.getElementById("age-of-children").appendChild(addLabel, addInput)
    
}


//Create multiple age entry inputs based on value



//Calculate hourly rate

function calcPrice() {
    const childrenInput = document.getElementById("number-of-children")
    const totalPrice = document.getElementById("total-price")
    totalPrice.textContent = "£" + (childrenInput.value*10).toFixed(2)
}