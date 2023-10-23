"use strict";

const $ = selector => document.querySelector(selector);

//Create function to calculate sales tax and total 
function calculateSalesTax(){
    var subtotalElement = document.getElementById("subtotal");
    var taxRateElement = document.getElementById("tax_rate");
    var salesTaxElement = document.getElementById("sales_tax");
    var totalElement = document.getElementById("total");
    
    // get user input 
    var subtotal = parseFloat(subtotalElement.value);
    var tax_rate = parseFloat(taxRateElement.value);
    
    //Validate the data received from user
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
      alert("Subtotal must be > 0 and < 10000");
      return;
    }
    if (isNaN(tax_rate) || tax_rate <= 0 || tax_rate >= 12) {
      alert("Tax Rate must be > 0 and < 12");
      return;
    }
    // Calculate sales tax and total
    var sales_tax = subtotal * (tax_rate / 100);
    var total = subtotal + sales_tax;
  
    // Display the results
    salesTaxElement.value = sales_tax.toFixed(2);
    totalElement.value = total.toFixed(2);
}
 // Function to move the cursor to the Subtotal field
  function moveCursorToSubtotal() {
    var subtotalElement = document.getElementById("subtotal");
    subtotalElement.focus();
  }
  
  // Function to clear all text boxes and move cursor to Subtotal field
  function clearFields() {
    var subtotalElement = document.getElementById("subtotal");
    var taxRateElement = document.getElementById("tax_rate");
    var salesTaxElement = document.getElementById("sales_tax");
    var totalElement = document.getElementById("total");
  
    subtotalElement.value = "";
    taxRateElement.value = "";
    salesTaxElement.value = "";
    totalElement.value = "";
  
    moveCursorToSubtotal();
  }
  
  // Function to clear data from text boxes
  function clearTextBoxData(event) {
    event.target.value = "";
  }
  
  // Attach event handlers
  window.onload = function() {
    var calculateButton = document.getElementById("calculate");
    var clearButton = document.getElementById("clear");
    var subtotalElement = document.getElementById("subtotal");
    var taxRateElement = document.getElementById("tax_rate");
  
    calculateButton.onclick = function() {
      calculateSalesTax();
      moveCursorToSubtotal();
    };
  
    clearButton.onclick = clearFields;
  
    subtotalElement.onclick = clearTextBoxData;
    taxRateElement.onclick = clearTextBoxData;
  
    moveCursorToSubtotal();
  };
  