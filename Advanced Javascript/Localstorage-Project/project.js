//  The document.getElementById('carBrand').value //gets the user input. These values are then passed to the car object and stored in local storage using the setItem method.

function store(){ //stores items in the localStorage
   let brand = document.getElementById('carBrand').value;
   let price = document.getElementById('carPrice').value;
   let key = document.getElementById('key').value; //gets the key from the user

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
    //converting object to string
}
//the retrieveButton will invoke the retrieveRecords function when clicked. This method fetches items from the localStorage using the getItem function.
function retrieveRecords(){ //retrieves items in the localStorage
    console.log("retrieve records");
     let key = document.getElementById('retrieveKey').value;
    let records = window.localStorage.getItem(key);
    let paragraph = document.createElement("p");
    let infor = document.createTextNode(records); //helps create the text that will be displayed to the user.
    paragraph.appendChild(infor);
    let element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

// This method will delete a value from the local storage using the removeItem function.
function removeItem(){  //deletes item from localStorage
    let key = document.getElementById('removeKey').value;
    localStorage.removeItem(key)
    console.log("remove items");
}


//The clear() method is used to remove all values in the local storage.

function clearStorage(){ 
    //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

//the onClick property of all the buttons when the webpage loads.
window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}

