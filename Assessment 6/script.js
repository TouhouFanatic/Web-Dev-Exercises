/**
 * Function to calculate the total cost of petrol based on user input.
 */
function calculateTotal() {
    // Get the value of the cost per liter and liters purchased
    const costPerLiter = parseFloat(document.getElementById('cost-per-liter').value);
    const litersPurchased = parseFloat(document.getElementById('liters-purchased').value);
    
    // Calculate the total cost
    const totalCost = costPerLiter * litersPurchased;
    
    // Update the result display
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
}
