window.onload = () => {
    let formNames = [
        'cust-name',
        'cust-email',
        'topping',
        'deliver-opt',
        'tip',
        'address'
    ];
    let formNamesObj = {
        'cust-name': 'Customer Name',
        'cust-email': 'Customer Email',
        'topping': 'Toppings Selected',
        'deliver-opt': 'Delivery Option',
        'tip': 'Tip',
        'address': 'Customer Address'
    }
    let toppings = ['Extra Cheese', 'Pepperoni', 'Olives', 'Tomatoes', 'Bacon', 'Mushrooms'];
    let deliverOpts = ['Delivery', 'Pickup'];
    
    let pizzaForm = document.getElementById('pizza-form');
    pizzaForm.addEventListener('submit', validateForm);

    let summary = document.getElementById('summary');
    summary.addEventListener('click', showSummary);
    
    function validateForm(event) {
        event.preventDefault();
        let form = new FormData(document.getElementById('pizza-form'));
        let formEntries = Array.from(form.entries());
        console.log(formEntries);
        let i = 0, j = 0;
        let toppingCount = 0;
        while (i < formNames.length) {
            if ((formNames[i] !== formEntries[j][0]) || (formEntries[j][1] === '')) {
                document.getElementById('error-msg').innerHTML = `${formNamesObj[formNames[i]]} is missing, please fill it`;
                return;
            }
            j++;
            if (formEntries[j] && (formEntries[j][0] === 'topping')) {
                toppingCount++;
            } else {
                toppingCount = 0;
            }
            if (toppingCount <= 1) {
                i++;
            }
        }
        document.getElementById('error-msg').innerHTML = "";
    }
    
    function showSummary() {
        let form = new FormData(document.getElementById('pizza-form'));
        let formEntries = Array.from(form.entries());
        console.log(formEntries);
        let table = document.getElementById('summary-table');
        let result = '<p>Order Summary<p>';
        let toppingCount = 0;
        let tipAmount = 0;
        let deliverFee = 0;
        let toppingsStr = '';
        let i=0, j = 0;
        table.innerHTML = '';
        while(i < formEntries.length) {
            let item = formEntries[i][1];
            if (formEntries[i][0] === 'topping') {
                while(formEntries[i][0] === 'topping') {
                    item = formEntries[i][1];
                    toppingsStr += toppings[Number(item)-1] + ', ';
                    toppingCount++;
                    i++;
                }
                i--;
                item = toppingsStr;
            } else if (formEntries[i][0] === 'deliver-opt') {
                if(item === '1') {
                    deliverFee = 5;
                }
                item = deliverOpts[Number(item)-1];
            } else if (formEntries[i][0] === 'tip') {
                tipAmount = (Number(item))/100;
                item = item + '%';
            }
            let row = table.insertRow(j);
            let col = row.insertCell(0);
            col.innerHTML = formNamesObj[formEntries[i][0]];
            col = row.insertCell(1);
            col.innerHTML = item;
            i++;
            j++;
        }
        let totalPrice = (10 + (1.5*toppingCount) + deliverFee) * (1 + tipAmount);
        result += `Total price: $${totalPrice.toFixed(2)}`;
        let row = table.insertRow(j);
        let col = row.insertCell(0);
        col.innerHTML = 'Total Price';
        col = row.insertCell(1);
        col.innerHTML = '$' + totalPrice.toFixed(2);
        console.log(result);
    }
}
