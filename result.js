console.log("Zdravo svete!!!");

//-----------------------------------------------------------------------
//Nizovi
let resultArrEasy = [];
let resultArrMiddle = [];
let resultArrHard = [];
let resultArrExpert = [];
//-----------------------------------------------------------------------

// let divShowTable = document.createElement("div");

//TABELA REZULTATA 
//f-ja sa parametrom resultArr, koji cu kasnije da pozovem kao callback fu-ju
function resultTable(resultArr, key, div) {    
    let divShowTable = document.createElement("div");
    divShowTable.setAttribute("id", div);
    divShowTable.classList.add("content");

    resultArr = JSON.parse(localStorage.getItem(key));
    console.log(resultArr);
    let table = document.createElement("table");
    let rowHed = document.createElement("tr");
    let hed1 = document.createElement("th");
    let hed2 = document.createElement("th");
    let hed3 = document.createElement("th");
    hed1.innerHTML = "Mesto";
    hed2.innerHTML = "Korisnicko ime";
    hed3.innerHTML = "Vreme";
    rowHed.appendChild(hed1);
    rowHed.appendChild(hed2);
    rowHed.appendChild(hed3);
    table.appendChild(rowHed);
    resultArr.forEach((elem, i) => {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td"); 
        let cell2 = document.createElement("td"); 
        let cell3 = document.createElement("td"); 
        cell1.innerHTML = i + 1 + ".";
        cell2.innerHTML = elem.name;
        cell3.innerHTML = elem.time;
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    });    
    divShowTable.appendChild(table);
    divTable.appendChild(divShowTable); 
}

//FUNKCIJA LOCALSTORAGE LAKA KATEGORIJA
function keepingLocalStorage(myArr, key, id) {
    let username = inputName.value;
    let timer = spanTimer.innerHTML;
    timer = Number(timer);
    let inputRadio = document.querySelector("input[name=category]:checked");
    let checkedBtn = inputRadio.id;

    let resultObj = {
        name: username,
        time: timer,
        category: checkedBtn,
        sorting: function(a,b) {
            let comp = 0;
            if(a.time > b.time) {
                comp = 1;
            } else {
                comp = -1;
            }
            return comp;
        }
    };

    console.log(resultObj);

    if(JSON.parse(localStorage.getItem(key)) == null){ 
        if(resultObj.category === id){
            myArr.push(resultObj);
            localStorage.setItem(key , JSON.stringify(myArr));
        } else {
            console.log("Druga je kategorija");
        }
    } else {
        myArr = JSON.parse(localStorage.getItem(key));
        myArr.push(resultObj);
        //Sortitam po vremenu od najmanjeg do najveceg
        myArr.sort(resultObj.sorting);
        //Zatim uvek isecem poslednji elem niza
        myArr.splice(5,1);
        localStorage.setItem(key , JSON.stringify(myArr));
    }
}

// let divProba = document.getElementById("proba");