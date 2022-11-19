const searchButton = document.querySelector(".search-button");


searchButton.onclick = () => {
    document.querySelector(".search-box").classList.add("active")
}

let createButton = document.querySelector(".create-button");

let createBox = document.querySelector(".create-box");
createButton.addEventListener("click", () => {
    createBox.classList.add("active");
})

// ** ===========making selling items ========= 


let doneBtn = document.getElementById("doneBtn");

let itemInput = document.getElementById("itemInput");

let priceInput = document.getElementById("priceInput");
let sellingItemsList = document.querySelector(".selling-items-list");
let itemsArray = [];
if (localStorage.getItem("items")) {
    itemsArray = JSON.parse(localStorage.getItem("items"))
}

getDataFromLocalStorage();





// console.log(searchData("ahmde"))

doneBtn.addEventListener("click", () => {
    let itemInputText = itemInput.value;
    let priceInputText = priceInput.value;
    createBox.classList.remove("active");
    addDataToArray(itemInputText, priceInputText)
})
function addDataToArray(itemInputText, priceInputText) {
    let itemData = {
        text: itemInputText,
        price: priceInputText,
    };
    itemsArray.push(itemData);
    addItemToPage(itemsArray);
    addDataToLocalStorage(itemsArray);
}
function addItemToPage(itemsArray) {
    sellingItemsList.innerHTML = ""
    itemsArray.forEach(item => {
        let discount = parseInt(item.price) - (5 / 100) * parseInt(item.price);
        let sellingItemHtml = `

            <div class="item">
                <h3>${item.text}</h3>
            </div>

            <div class="price">
                <h3>${item.price}</h3>
            </div>
            <div class="discount">
                <h3>${discount}</h3>
            </div>

    `;
        let sellingItem = document.createElement("div");
        sellingItem.setAttribute("class", "selling-item");
        sellingItem.innerHTML = sellingItemHtml;
        sellingItemsList.append(sellingItem);
    });

}
function addDataToLocalStorage(arr) {
    localStorage.setItem("items", JSON.stringify(arr));
}

function getDataFromLocalStorage() {
    let data = localStorage.getItem("items");
    if (data) {
        let tasks = JSON.parse(data);
        addItemToPage(tasks)
    }
}



