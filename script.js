function genAgeValue() {
    const childrenInput = document.getElementById("number-of-children");
    const noOfElements = childrenInput.value;
    console.log("No of Elements", noOfElements);
    }

function createNewElement() {
    /*const addLabel = document.createElement("label");
    addLabel.for="age-of-children";
    addLabel.textContent="Age of Children";
    const addInput = document.createElement("input");
    addInput.type = "number";
    addInput.idName = "age-of-children"; 
    addInput.name = "age-of-children";
    addInput.required;
    document.getElementById("age-of-children").appendChild(addLabel, addInput);
    ;  // entered value for number of children*/

    /*USE A FOR LOOP TO CREATE MULTIPLE ELEMENTS*/

    const paraMsg = document.getElementById("age-of-children");
    paraMsg.insertAdjacentHTML ("afterend", "<p>Hi Again!</p>"); 
}
function repeatElementTimesValue() {

}
/*function calcPrice() {
    const childrenInput = document.getElementById("number-of-children");
    const totalPrice = document.getElementById("total-price");
    totalPrice.textContent = "£" + (childrenInput.value*10).toFixed(2);}*/
       