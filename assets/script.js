// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Rasaki Solebo" // HINT: Replace this with your own name!


// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')
// selecting the element with an id of add-gb
const sugarPlusBtn = document.querySelector('#add-sugar')
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the element with an id of add-cc
const ccMinusBtn = document.querySelector('#minus-cc')
// selecting the element with an id of add-gb
const sugarMinusBtn = document.querySelector('#minus-sugar')
// selecting the element with an id of qty-total
const totalQty=document.getElementById('qty-total')  

// Code to update name display
credit.textContent = `Created by ${yourName}`
//document.querySelector('#credit').textContent = "Created by Rasaki Solebo"

// update total quantity
function updateTotal() {
//   let totalQty = document.querySelector('#qty-total')
   let total = gb+cc+sugar
   console.log(total)
   totalQty.textContent=total 
}
// update gb quantity
function updategb(displayQuantity) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayQuantity 
}
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    updategb(`${gb}`)
    updateTotal()
// HINT: You can delete this console.log after you no longer need it!
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {
    if(gb > 0){
    gb--
    }
    updategb(`${gb}`)
    updateTotal()
})
// TODO: Hook up event listeners for the rest of the buttons
// update cc quantity
function updatecc(displayQuantity) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayQuantity 
}
// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    cc++
    updatecc(`${cc}`)
    updateTotal()
})
// Event listener for clicks on the "-" button for Gingerbread cookies
ccMinusBtn.addEventListener('click', function() {
    if(cc > 0){
    cc--
    }
    updatecc(`${cc}`)
    updateTotal()
})
// update sugar quantity
function updatesugar(displayQuantity) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displayQuantity 
}
// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    updatesugar(`${sugar}`)
    updateTotal()
})
// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
sugarMinusBtn.addEventListener('click', function() {
    if(sugar > 0){
    sugar--
    }
    updatesugar(`${sugar}`)
    updateTotal()
})
