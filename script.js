//DOM
//------------------------------------------------------------------
let form = document.querySelector("form");
console.log(form);
let inputName = document.getElementById("username");
console.log(inputName);
let spanTimer = document.querySelector("#timer");
console.log(spanTimer);
let divShowCase = document.querySelector("#showCase");
console.log(divShowCase);
let divTable = document.querySelector("#table");
console.log(divTable);
//-------------------------------------------------------------------------
//LOCAL STORAGE
// let resultArr = [];


//---------------------------------------------------------------------

//Niz slika
//----------------------------------------------------------------------
// Niz 10 x 10
let myArr10 = ["001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "015.png", "016.png", "017.png", "018.png", "019.png", "020.png", "021.png", "022.png", "023.png", "024.png", "025.png", "026.png", "027.png", "028.png", "029.png", "030.png", "031.png", "032.png", "033.png", "034.png", "035.png", "036.png", "037.png", "038.png", "039.png", "040.png", "041.png", "042.png", "043.png", "044.png", "045.png", "046.png", "047.png", "048.png", "049.png", "050.png", "001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "015.png", "016.png", "017.png", "018.png", "019.png", "020.png", "021.png", "022.png", "023.png", "024.png", "025.png", "026.png", "027.png", "028.png", "029.png", "030.png", "031.png", "032.png", "033.png", "034.png", "035.png", "036.png", "037.png", "038.png", "039.png", "040.png", "041.png", "042.png", "043.png", "044.png", "045.png", "046.png", "047.png", "048.png", "049.png", "050.png"];

//Niz 8 x 8 
let myArr8 = ["001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "015.png", "016.png", "017.png", "018.png", "019.png", "020.png", "021.png", "022.png", "023.png", "024.png", "025.png", "026.png", "027.png", "028.png", "029.png", "030.png", "031.png", "032.png", "001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "015.png", "016.png", "017.png", "018.png", "019.png", "020.png", "021.png", "022.png", "023.png", "024.png", "025.png", "026.png", "027.png", "028.png", "029.png", "030.png", "031.png", "032.png"];

//Niz 6x6
let myArr6 = ["001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "015.png", "016.png", "017.png", "018.png", "001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "015.png", "016.png", "017.png", "018.png"];

//Niz 4x4
let myArr4 = ["001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png"];
//----------------------------------------------------------------------------


//Korisnicko ime i radio button
//----------------------------------------------------------------------------
// inputName.addEventListener('keyup', event => {
//     event.preventDefault();
//     if(event.keyCode == 13){
//         let username = inputName.value;
//         if(username == "" || username == null){
//             alert("Morate uneti korisnicko ime");
//         } else {
//             localStorage.setItem("Korisnicko ime", username);
//             // resultTable.push(username);
//             // localStorage.setItem("resultTable", JSON.stringify(resultTable));
//             let inputRadio = document.querySelector("input[name=category]:checked");
//             if(inputRadio.value == "4"){
//                 createTable(myArr4, "case4x4");
//             } else if(inputRadio.value == "6"){
//                 createTable(myArr6, "case6x6");
//             } else if(inputRadio.value == "8"){
//                 createTable(myArr8, "case8x8");
//             } else {
//                 createTable(myArr10, "case10x10");
//             }
//         }
//     }
// });

//Napravi funkciju startGame koja ce da ide iz forme, klikom na enter
form.addEventListener('submit', event => {
    event.preventDefault();
    let username = inputName.value;
    if(username == "" && username == null){
        alert("Morate da unesete korisnicko ime, sa najmanje jednim karakterom");
    } else {
        let inputRadio = document.querySelector("input[name=category]:checked");
        let checkedBtn = inputRadio.id;
        if(checkedBtn == "easy"){
            createTable(myArr4, "case4x4");
        } else if(checkedBtn == "middle"){
            createTable(myArr6, "case6x6");
        } else if(checkedBtn == "hard"){
            createTable(myArr8, "case8x8");
        } else {
            createTable(myArr10, "case10x10");
        }
    }
});

//----------------------------------------------------------------------

//------------------------------------------------------------------------------

//TABELA REZULTATA
function resultTable() {    
    resultArr = JSON.parse(localStorage.getItem("Result"));
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
    divTable.appendChild(table); 
}















//------------------------------------------------------------------------------


//----------------------------------------------------------------------------

//Sad pronadji da se slicice okrece na klik i ako su dve iste da ostanu okrenute,a ako nisu onda da se vrate na prvobitni polozaj

//Napravi da je dozvoljeno samo dva klika odjednom

//Kada se igra zavrsi onda da se timer zaustavi da se vreme belezi u Local Storeg -- u Objektu koji ce da cuva i korisnicko ime i vreme korisnika i kasnije da ih prikazuje u tabeli


//POCETAK ODBROJAVANJA
//----------------------------------------------------------------------------
let clock = null;
function timerStart(){
    let counter = 0;
    if(clock == null){
        clock = setInterval(() => {
            spanTimer.innerHTML = counter++;
        },1000);
    }
}
//------------------------------------------------------------------------------
//KRAJ ODBROJAVANJA
function timerEnd() {
    clearInterval(clock);
        clock = null;
}
//----------------------------------------------------------------------------


//RADNOM NIZ
//----------------------------------------------------------------------------
let radnomCard = arr => {
    arr.sort(() => 0.5 - Math.random());
}
//----------------------------------------------------------------------------

//NIZOVI
//Niz slika
let cardsArray = [];
//Niz id-ijeva slika 
let cardsArrayId = [];
//Brojac
let counter = 0;


//FUNKCIJA NOVE IGRE
//----------------------------------------------------------------------------
function newGame(arr, div) {
    if(counter == arr.length){
        //Uvodim f-ju za zavrsetak vremena, ako su sve kartice otvorene
        timerEnd();
//--------------------------------------------------------------------------
//LOCAL STORAGE
        let inputName = document.querySelector("#username");
        let username = inputName.value;
        let spanTimer = document.querySelector("#timer");
        let timer = spanTimer.innerHTML;
        timer = Number(timer);
        let inputRadio = document.querySelector("input[name=category]:checked");
        let checkedBtn = inputRadio.id;

        let resultObj = {
            name: username,
            time: timer,
            category: checkedBtn
        };
        let resultArr = [];
        console.log(resultObj);
        //Funkcija po kojoj cu da sortiram igrace po vremenu od najnizeg do najveceg
        function sorting(a,b) {
            let comp = 0;
            if(a.time > b.time){
                comp = 1;
            } else {
                comp = -1;
            }
            return comp;
        }
    
        if(JSON.parse(localStorage.getItem("Result")) == null){
            resultArr.push(resultObj);
            // resultArr.splice(3,1);
            localStorage.setItem("Result", JSON.stringify(resultArr));
        } else {
            resultArr = JSON.parse(localStorage.getItem("Result"));
            resultArr.push(resultObj);
            //Sortitam po vremenu od najmanjeg do najveceg
            resultArr.sort(sorting);
            //Zatim uvek isecem poslednji elem niza
            resultArr.splice(5,1);
            localStorage.setItem("Result", JSON.stringify(resultArr));
        }
        
//-----------------------------------------------------------------------------

        let text = "Uspesno ste zavrsili igru, da li zelite da igrate opet?";
        if(confirm(text) == true){
            let divOldGame = document.getElementById(div);
            divShowCase.removeChild(divOldGame);
            //Uvodim f-ju za ponovno kreiranje tabele i pocetak igre

            //Ovde uvedi posle fu-ju starGame()
            createTable(arr, div); 
            //Uvodim f-ju pocetak merenja vremena za novu igru
            timerStart();
        } else {
            //Ovde stavi tabelu rezultata
            alert("Vas rezultat je");
            resultTable();
        }
        counter = 0;
    }
}
//----------------------------------------------------------------------------

//FUNKCIJA OKRETANJE KARTE
//---------------------------------------------------------------------------
function cardsFliping(arr, card, i, div) {
    card.addEventListener('click', event => {
        //Ukoliko je niz slika strogo manji od 2 - omogucava mi okretanje samo dve kartice
        if(cardsArray.length < 2) {
            card.setAttribute("src", `images/${arr[i]}`);
            console.log(event);
            console.log(card);
            console.log("Uslov 1")
            // Ukoliko je niz slika jendak 0, sto je uvek na pocetku - dodaj sliku u niz slika, i id u niz id-ja
            if(cardsArray.length == 0){
                cardsArray.push(arr[i]);
                cardsArrayId.push(i);    
                console.log(cardsArray, cardsArrayId);
                console.log("Uslov 2");
            //Za drugi klik nece biti ispunjen prvi uslov vec drugi jer ce niz slika da bude jendak sa 1
            //Tu mi dodaj jos po jedan element u moja dva niza
            } else if(cardsArray.length == 1){
                cardsArray.push(arr[i]);
                cardsArrayId.push(i);    
                console.log(cardsArray, cardsArrayId);
                console.log("Uslov 3");
                //Ako je prvi elem niza slika jednak drugom, povecavaj mi brojilac za 2, posto su dve slike okrenute, i isprazni mi oba niza 
                if(cardsArray[0] == cardsArray[1]){
                    counter += 2;
                    console.log(counter);
                    cardsArray = [];
                    cardsArrayId = [];
                    console.log("Uslov 4");
                    //Uvodim f-ju za novu  igru, ukoliko igrac zeli novu igru sve se formira opet
                    newGame(arr, div);
                // U suprotnom ako kartice nisu jednake, podesavam vreme za koje ce se kartice vratiti u prvobitni polozaj, i opet praznim niz kako bi mogle i druge kartice da se otvaraju
                } else {
                    setTimeout( () => {
                        let firstCard = document.getElementById(`${cardsArrayId[0]}`);
                        let secondCard = document.getElementById(`${cardsArrayId[1]}`);
                        console.log(firstCard);
                        console.log(secondCard);
                        console.log("Uslov 5");
                        firstCard.setAttribute("src", "images/gym.png");
                        secondCard.setAttribute("src", "images/gym.png");
                        cardsArray = [];
                        cardsArrayId = [];
                    } , 2000);
                }
            }
        }
    });
}
//---------------------------------------------------------------------------

// FUNCKIJA KREIRANJE TABLE
//---------------------------------------------------------------------------
//Funkcija ima dva parametra: prvi je niz slika, a drugi je div-ov id, koji ce da se menja u zavisnosti od toga koja se tezina igre izabere
function createTable(arr, div) {
    //Pravim div, koji ce u zavisnosti od tezine igre da menja svoj stil
    let divCase = document.createElement("div");
    for(let i = 0; i < arr.length; i++){
        let card = document.createElement("img");
        card.setAttribute("src", `images/gym.png`);
        card.setAttribute("id", i);
        //Uvodim f-ju radnom rasporeda karata, pre samog pocetka okretanja
        // radnomCard(arr);
        //Uvodim f-ju okretanje karata
        cardsFliping(arr, card, i, div);
        //Uvodim f-ju za pocetak merenja vremena
        timerStart();
        //Podesavam divu id, koji ce da ima naziv, parametra fukncije, a kasnije se f-ji prosledjuje parametar, kao naziv id-ja div-a, u zavisnosti od tezine igre
        divCase.setAttribute("id", div);
        divCase.appendChild(card);
    }
    divShowCase.appendChild(divCase);
}

// createTable(myArr4, "case4x4");
//----------------------------------------------------------------------------


// resultArr = JSON.parse(localStorage.getItem("Result"));
// console.log(resultArr);
// let table = document.createElement("table");
// let rowHed = document.createElement("tr");
// let hed1 = document.createElement("th");
// let hed2 = document.createElement("th");
// let hed3 = document.createElement("th");
// hed1.innerHTML = "Mesto";
// hed2.innerHTML = "Korisnicko ime";
// hed3.innerHTML = "Vreme";
// rowHed.appendChild(hed1);
// rowHed.appendChild(hed2);
// rowHed.appendChild(hed3);
// table.appendChild(rowHed);
// resultArr.forEach((elem, i) => {
//     let row = document.createElement("tr");
//     let cell1 = document.createElement("td"); 
//     let cell2 = document.createElement("td"); 
//     let cell3 = document.createElement("td"); 
//     cell1.innerHTML = i + 1 + ".";
//     cell2.innerHTML = elem.name;
//     cell3.innerHTML = elem.time;
//     row.appendChild(cell1);
//     row.appendChild(cell2);
//     row.appendChild(cell3);
//     table.appendChild(row);
// });    
// divTable.appendChild(table); 

//---------------------------------------------------------------------------
//Radnom redjanje niza
// let niz = ["Mladen", "jovic", "Tijana", "Bojan", "Jasmina", "Strahinja"];
// console.log("Drugo");

// for(let i = niz.length - 1; i >= niz.length + 1 - niz.length; i-- ){ 
//     console.log(niz[i]);
// }
