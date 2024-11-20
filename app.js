// function add(){
// let inputs =document.getElementById("inputs");

// let inputes=inputs.value;


// document.getElementById("show").innerHTML +=inputes+`<button onclick=this.parentElement.remove()> delete<button/> ` + <button onclick="editItem(this)">Edit</button>;

// inputs.value=""


// }



function add() {
    let inputs = document.getElementById("inputs");
    let inputes = inputs.value;

    if (inputes !== "") {
        // Add a new item with delete and edit buttons
        document.getElementById("show").innerHTML += `
            <div>
                ${inputes}
                <button onclick="this.parentElement.remove()">Delete</button>
                <button onclick="editItem(this)">Edit</button>
            </div>
        `;

        // Clear the input field
        inputs.value = "";
    }
}

function editItem(button) {
    let inputs = document.getElementById("inputs");
    let item = button.parentElement;

    // Populate the input field with the current item's text
    inputs.value = item.firstChild.textContent.trim();

    // Remove the current item
    item.remove();
}

