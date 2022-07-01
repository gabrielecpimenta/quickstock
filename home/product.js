const form = document.querySelector("#form");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

const products = [];
let rowIndex;

function createItem() {
    const name = document.querySelector("#name").value;
    const quantity = document.querySelector("#quantity").value;
    const price = document.querySelector("#price").value;
    const totalPrice = document.querySelector("#total_price").value;

    const product = {
        name, 
        quantity,
        price,
        totalPrice
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    addTable(product);
    //window.alert("Item have been created");
}

let priceElement = document.querySelector("#price");
let quantityElement = document.querySelector("#quantity");

priceElement.oninput = onInputHabdlerr;
quantityElement.oninput = onInputHabdlerr;

function onInputHabdlerr(e) {
    let quantity = document.querySelector("#quantity").value;
    let price = priceElement.value;
    let totalAmount = parseInt(quantity) * parseInt(price) || 0;

    let totalPriceElement = document.querySelector("#total_price");
    totalPriceElement.value = totalAmount;
}

function addTable(product) {
    let objectValues = Object.values(product);
    let row = document.createElement("tr");
    for (let values of objectValues) {
        let cell = document.createElement("td");
        cell.innerText = values;
        row.appendChild(cell);
    }
    tbody.appendChild(row);
    table.appendChild(tbody);
}

table.onclick = () => {
    let row = table.rows;
    for (let i =0; i< row.length; i++)
    {
        row[i].addEventListener("click", activateItem);
    }
}

function activateItem() {
    rowIndex = this.rowIndex;
    
    const name = document.querySelector("#name");
    const quantity = document.querySelector("#quantity");
    const price = document.querySelector("#price");
    const totalPrice = document.querySelector("#total_price");

    name.value = this.cells[0].innerText;
    quantity.value = this.cells[1].innerText;
    price.value = this.cells[2].innerText;
    totalPrice.value = this.cells[3].innerText;
}
