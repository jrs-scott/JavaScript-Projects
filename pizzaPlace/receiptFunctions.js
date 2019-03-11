function getReceipt() { 
    var text1 = "";
    var text2 = "";
    var runningTotal = 0;

    function updateTotal (addTotal) {
        runningTotal = (runningTotal + addTotal);
        document.getElementById("selections").innerHTML = text1;
        document.getElementById("subtotals").innerHTML = text2;
        document.getElementById("totalPrice").innerHTML = "</h3><strong>Total: $" + runningTotal + ".00" + "</strong></h3>";
    }

    // Adding meat to the total
    function getMeat() {
        var meatTotal = 0;
        var selectedMeat = [];
        var meatPrice = 0;
        var meatArray = document.getElementsByClassName("meats");
        for (var j = 0; j < meatArray.length; j++) {
            if (meatArray[j].checked) {
                selectedMeat.push(meatArray[j].value);
                meatPrice = selectedMeat.length > 1 ? 1 : 0;
                text1 = text1 + meatArray[j].value + "<br>";
                text2 = text2 + "$" + meatPrice + ".00<br>";
            }
        }
    
        var meatCount = selectedMeat.length;
        if (meatCount > 1) {
            meatTotal = (meatCount - 1);
        } else {
            meatTotal = 0;
        }
        updateTotal(meatTotal);
    }

    // Adding veggies to the total
    function getVeggies() {
        var veggiesTotal = 0;
        var selectedVeggies = [];
        var veggiePrice = 0;
        var veggiesArray = document.getElementsByClassName("veggies");
        for (var v = 0; v < veggiesArray.length; v++) {
            if (veggiesArray[v].checked) {
                selectedVeggies.push(veggiesArray[v].value);
                veggiePrice = selectedVeggies.length > 1 ? 1 : 0;
                text1 = text1 + veggiesArray[v].value + "<br>";
                text2 = text2 + "$" + veggiePrice + ".00<br>";
            }
        }
        
        var veggiesCount = selectedVeggies.length;
        if (veggiesCount > 1) {
            veggiesTotal = (veggiesCount - 1);
        } else {
            veggiesTotal = 0;
        }
        updateTotal(veggiesTotal);
    }

    //Crust option added to total
    function getCrust() {
        var crustTotal = 0;
        var crustArray = document.getElementsByClassName("crust");
        for (var k = 0; k < crustArray.length; k++) {
            if (crustArray[k].checked) {
                var selectedCrust = crustArray[k].value;
                text1 = text1 + selectedCrust + "<br>";
            }
        }
        
        if (selectedCrust == "Plain") {
            crustTotal = 0;
            text2 = text2 + "$" + crustTotal + ".00<br>";
        } else if (selectedCrust === "Spicy") {
            crustTotal = 0;
            text2 = text2 + "$" + crustTotal + ".00<br>";
        } else if (selectedCrust === "Garlic Butter") {
            crustTotal = 0;
            text2 = text2 + "$" + crustTotal + ".00<br>";
        } else if (selectedCrust === "Cheese Stuffed") {
            crustTotal = 3;
            text2 = text2 + "$" + crustTotal + ".00<br>";
        } else if (selectedCrust === "House Special") {
            crustTotal = 0;
            text2 = text2 + "$" + crustTotal + ".00<br>";
        }
        updateTotal(crustTotal);
    }

    //Cheese option added to total
    function getCheese() {
        var cheeseTotal = 0;
        var cheeseArray = document.getElementsByClassName("cheese");
        for (var c = 0; c < cheeseArray.length; c++) {
            if (cheeseArray[c].checked) {
                var selectedCheese = cheeseArray[c].value;
                text1 = text1 + selectedCheese + "<br>";
            }
        }
        
        if (selectedCheese == "No Cheese") {
            cheeseTotal = 0;
            text2 = text2 + "$" + cheeseTotal + ".00<br>";
        } else if (selectedCheese === "Regular Cheese") {
            cheeseTotal = 0;
            text2 = text2 + "$" + cheeseTotal + ".00<br>";
        } else if (selectedCheese === "Extra Cheese") {
            cheeseTotal = 3;
            text2 = text2 + "$" + cheeseTotal + ".00<br>";
        }
        updateTotal(cheeseTotal);
    }

    //Sauce option added to total
    function getSauce() {
        var sauceTotal = 0;
        var sauceArray = document.getElementsByClassName("sauce");
        for (var s = 0; s < sauceArray.length; s++) {
            if (sauceArray[s].checked) {
                var selectedSauce = sauceArray[s].value;
                text1 = text1 + selectedSauce + "<br>";
                text2 = text2 + "$" + sauceTotal + ".00<br>";
            }
        }
        updateTotal(sauceTotal);
    }

    //Size option added to total
    function getSize() {
        var sizeTotal = 0;
        var sizeArray = document.getElementsByClassName("size");
        for (var i = 0; i < sizeArray.length; i++) {
            if (sizeArray[i].checked) {
                var selectedSize = sizeArray[i].value;
                text1 = text1 + selectedSize + "<br>";
            }
        }
        
        if (selectedSize === "Personal Pizza") {
            sizeTotal = 6;
        } else if (selectedSize === "Medium Pizza") {
            sizeTotal = 10;
        } else if (selectedSize === "Large Pizza") {
            sizeTotal = 14;
        } else if (selectedSize === "Extra Large Pizza") {
            sizeTotal = 16;
        }
        updateTotal(sizeTotal);
        text2 = text2 + "$" + sizeTotal + ".00<br>";
    }

    getSize();
	getCrust();
    getSauce();
    getCheese();
    getMeat(); 
    getVeggies();
    
    $("#extraControls").removeClass("hidden");
}

//Resets the form, and hides the receipt if applicable
function clearForm() {
    document.getElementById('orderItems').reset();
    $("#extraControls").addClass("hidden");
    total = 0;
}