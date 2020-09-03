//DOM
//------------------------------------------------------------------
let form = document.querySelector("form");
let inputName = document.getElementById("username");
let spanTimer = document.querySelector("#timer");
let divShowCase = document.querySelector("#showCase");
let divTable = document.querySelector("#table");
let btnE = document.getElementById("e");
let btnM = document.getElementById("m");
let btnH = document.getElementById("h");
let btnExp = document.getElementById("exp");
let btnStartGame = document.getElementById("btnStartGame");

let radioButtons = document.querySelectorAll("input[name=category]");
console.log(radioButtons);

//-------------------------------------------------------------------------
//NIZOVI
//Niz slika
let cardsArray = [];
//Niz id-ijeva slika 
let cardsArrayId = [];
//Brojac
let counter = 0;
let disabledCommand = true;

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
inputName.addEventListener('keyup', event => {
    event.preventDefault();
    if(event.keyCode == 13){
        let username = inputName.value;
        if(username == "" || username == null){
            alert("Morate uneti korisnicko ime!!!");
        } else {
            // timerEnd();
            alert("Da bi ste poceli sa igrom izaberite kategoriju, i kliknite na 'Pocni igru'");
            localStorage.setItem("Korisnicko ime", username);
            btnStartGame.addEventListener('click', () => {
                timerEnd();
                startGame();
                timerStart();
                disabled();
            });
        }
    }
});

//DISABLE
function disabled() {
    disabledCommand = false;
}

//POCETAK IGRE
function startGame() {
    if(disabledCommand === true) {
        let inputRadio = document.querySelector("input[name=category]:checked");
        if(inputRadio.value == "4"){
            createTable(myArr4, "case4x4");
            showOneTableOfCards("case4x4");
        } else if(inputRadio.value == "6"){
            createTable(myArr6, "case6x6");
            showOneTableOfCards("case6x6");
        } else if(inputRadio.value == "8"){
            createTable(myArr8, "case8x8");
            showOneTableOfCards("case8x8");
        } else {
            createTable(myArr10, "case10x10");
            showOneTableOfCards("case10x10");
        }
    }
}

//----------------------------------------------------------------------
//FUNKCIJA KATEGORIJE ZA SMESTANJE U LOCAL STORAGE
function category() {
    let inputRadio = document.querySelector("input[name=category]:checked");
    let checkedBtn = inputRadio.id;
    if(checkedBtn == "easy"){
        keepingLocalStorage(resultArrEasy, "Easy", "easy");
    } else if(checkedBtn == "middle"){
        keepingLocalStorage(resultArrMiddle, "Middle", "middle");
    } else if(checkedBtn == "hard"){
        keepingLocalStorage(resultArrHard, "Hard", "hard");
    } else {
        keepingLocalStorage(resultArrExpert, "Expert", "expert");
    }
}
//----------------------------------------------------------------------------
//FUNKCIJA ZA PRIKAZIVANJE TABELA
//imam jedan parametar sa kojim cu da hvatam napravljanje divove kada kliknem ma dugme
function showOneResultTable(div) {
    //svakoj tabeli postavljam predhodno u f-ji resultTable() klasu na content, zatim prolazim kroz svaki element klase "content" i postavljam joj display na none, kako se ne bi prikazivala
    let content = document.querySelectorAll(".content");
    content.forEach(elem => {
        elem.style.display = "none";
    });

    //hvatam svaki element sa id tokom klika na dugme i pravljenja tabele, tako da kada kliknem na dugme odredjena tabela kojoj sam dohvatio div dobija dipslay block, a predhodna tabela postaje display none.
    document.getElementById(div).style.display = "block";
}

//--------------------------------------------------------------------------
//DUGMAD SA EVENT LISTENEROM
btnE.addEventListener('click', () => {
    resultTable(resultArrEasy, "Easy", "eee");
    showOneResultTable("eee");
});
btnM.addEventListener('click', () => {
    resultTable(resultArrMiddle, "Middle", "mmm");
    showOneResultTable("mmm");
});
btnH.addEventListener('click', () => {
    resultTable(resultArrHard, "Hard", "hhh");
    showOneResultTable("hhh");
});
btnExp.addEventListener('click', () => {
    resultTable(resultArrExpert, "Expert", "ex");
    showOneResultTable("ex");
});

//----------------------------------------------------------------------------
//POCETAK ODBROJAVANJA
let clock = null;
function timerStart(){
    if(disabledCommand === true){
        let counter = 0;
        if(clock == null){
            clock = setInterval(() => {
                spanTimer.innerHTML = counter++;
            },1000);
        }
    }
}
//------------------------------------------------------------------------------
//KRAJ ODBROJAVANJA
function timerEnd() {
    if(disabledCommand === true){
        clearInterval(clock);
        clock = null;
    }
}
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
//RADNOM NIZ
let radnomCard = arr => {
    arr.sort(() => 0.5 - Math.random());
}
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
//FUNKCIJA NOVE IGRE
function newGame(arr, div) {
    if(counter == arr.length){
        //Uvodim f-ju za zavrsetak vremena, ako su sve kartice otvorene
        disabledCommand = true;
        timerEnd();
//--------------------------------------------------------------------------
//CUVANJE SVAKE KATEGORIJE U NIZU OBJEKATA UNUTAR LOCAL STORAGE-A
        category();
        
//-----------------------------------------------------------------------------
        let text = "Uspesno ste zavrsili igru, da li zelite da igrate opet?";
        if(confirm(text) == true){
            //Praznim predhodni div -> tzv. OldDiv
            let divOldGame = document.getElementById(div);
            divShowCase.removeChild(divOldGame);
           
            //Klikom na dugme pocni igru pocinjem ponovno igru
            btnStartGame.addEventListener('click', () => {
                timerStart();
                let inputRadio = document.querySelector("input[name=category]:checked");
                if(inputRadio.value == "4"){
                    createTable(myArr4, "case4x4");
                    showOneTableOfCards("case4x4");
                } else if(inputRadio.value == "6"){
                    createTable(myArr6, "case6x6");
                    showOneTableOfCards("case6x6");
                } else if(inputRadio.value == "8"){
                    createTable(myArr8, "case8x8");
                    showOneTableOfCards("case8x8");
                } else {
                    createTable(myArr10, "case10x10");
                    showOneTableOfCards("case10x10");
                }
            });
        } else {
            //Ovde stavi tabelu rezultata
            alert("Vas rezultat mozete pogledati klikom na polje kategorije koju ste igrali");
            //Nakon 30 sekundi restartujem igricu na pocetak
            setTimeout(() => {
                let divOldGame = document.getElementById(div);
                divShowCase.removeChild(divOldGame);
                inputName.value = "";
                spanTimer.innerHTML = 0;
            } , 1000 * 30);
        }
        counter = 0;
    }
}
//----------------------------------------------------------------------------

//---------------------------------------------------------------------------
//FUNKCIJA OKRETANJE KARTE
function cardsFliping(arr, card,  i, div) {
    card.addEventListener('click', function hendler(event) {
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
                if(cardsArray[0] === cardsArray[1]){
                    let card1 = document.getElementById(`${cardsArrayId[0]}`);
                    let card2 = document.getElementById(`${cardsArrayId[1]}`);
                    card1.removeEventListener('click', hendler);
                    card2.removeEventListener('click', hendler);
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
                    } , 1000);
                }
                
            }
        }
    });
}

//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
// FUNCKIJA KREIRANJE TABLE
//Funkcija ima dva parametra: prvi je niz slika, a drugi je div-ov id, koji ce da se menja u zavisnosti od toga koja se tezina igre izabere
function createTable(arr, div) {
    //Pravim div, koji ce u zavisnosti od tezine igre da menja svoj stil
    let divCase = document.createElement("div");
    for(let i = 0; i < arr.length; i++){
        let card = document.createElement("img");
        card.setAttribute("src", `images/gym.png`);
        card.setAttribute("id", i);
        //Uvodim f-ju radnom rasporeda karata, pre samog pocetka okretanja
        radnomCard(arr);
        //Uvodim f-ju okretanje karata
        cardsFliping(arr, card, i, div);
        //Uvodim f-ju za pocetak merenja vremena
        // timerStart();
        //Podesavam divu id, koji ce da ima naziv, parametra fukncije, a kasnije se f-ji prosledjuje parametar, kao naziv id-ja div-a, u zavisnosti od tezine igre
        divCase.setAttribute("id", div);
        divCase.appendChild(card);
        //Svakom tabelo pored id, dodajem i class="cards"
        divCase.classList.add("cards");
    }
    divShowCase.appendChild(divCase);
//--------------------------------------------------------------------
}
// createTable(myArr4, "case4x4");
//----------------------------------------------------------------------------

//FUNKCIJA PRIKAZIVANJA JEDNE OD TABLE SA KARTICAMA
function showOneTableOfCards(div) {
    let cards = document.querySelectorAll(".cards");
    cards.forEach(card => {
        card.style.display = "none";
    });

    document.getElementById(div).style.display = "block";
}
//--------------------------------------------------------------------------------





































