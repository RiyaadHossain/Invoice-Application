
/* =============== Get All Global Variables =============== */
// Input 
const buyer_Details = document.getElementById("buyer-details-input");
const item_Name = document.getElementById("item-name-input")
const item_Price = document.getElementById("item-price-input")
const item_Quantity = document.getElementById("item-quantity-input")

// Display
const date = document.getElementById("show-date")
const buyer_Info = document.getElementById("buyer-info")
const table_Body = document.getElementById("info-table")

// Calculation Display 
const sub_Total = document.getElementById('sub-total')
const tax = document.getElementById('tax')
const grand_Total = document.getElementById('grand-total')
const grand_Total2 = document.getElementById('grand-total-2')

/* =============== Common Function =============== */
// To Create Element 
const createElem = (para) => document.createElement(para);


/* <<<<<< Submit Button >>>>>> */
document.getElementById("detail-btn").addEventListener("click", () => {
    buyer_Info.innerText = buyer_Details.value
    date.innerText = new Date().toLocaleString()

    buyer_Details.value = ''
});

/* <<<<<< Add Button >>>>>> */
document.getElementById("add-btn").addEventListener("click", () => {
    /* Create Table Row & it's Data */
    const tr = createElem('tr')
    const td1 = createElem('td')
    const td2 = createElem('td')
    const td3 = createElem('td')
    const td4 = createElem('td')

    td4.classList.add('price')

    /* Display In UI */
    td1.innerText = item_Name.value
    td2.innerText = item_Price.value
    td3.innerText = item_Quantity.value
    const total = parseInt(item_Price.value) * parseInt(item_Quantity.value)
    td4.innerText = total

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    table_Body.appendChild(tr)

    item_Name.value = ''
    item_Price.value = ''
    item_Quantity.value = ''

    totalCalc()
});


/* Function for Mathematical Calculation */
const totalCalc = () => {
    let count = 0;
    const price_Total = document.getElementsByClassName('price')
    
    for (let i = 0; i < price_Total.length; i++){
        let element = price_Total[i].innerText;
        count += parseFloat(element)
    }
    sub_Total.innerText = count

    tax.innerText = (count * 0.2).toFixed(2)
    grand_Total.innerText = count + parseFloat(tax.innerText)
    grand_Total2.innerText = count + parseFloat(tax.innerText)
}
