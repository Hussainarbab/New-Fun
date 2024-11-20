
function add() {
    let inputs = document.getElementById("inputs");
    let inputes = inputs.value;

   
       
        document.getElementById("show").innerHTML += `
            <div>
                ${inputes}
                <button onclick="this.parentElement.remove()">Delete</button>
                <button onclick="editItem(this)">Edit</button>
            </div>
        `;

        inputs.value = "";
    
}

function editItem(button) {
    let inputs = document.getElementById("inputs");
    let item = button.parentElement;

    inputs.value = item.firstChild.textContent.trim();

   
    item.remove();
}

