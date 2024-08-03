import{
    getBierenFles,
    getBierenVat,
    getAlcoholVrijBier,
    getSnacks,
    getWijnen,
    getSterkeDrank,
    getWarmeDranken,
    getFrisdrank
}from "./data.js";

let bierenVat;
let bierenFles;
let alcoholVrijBier;
let wijnen;
let snacks;
let sterkeDranken;
let warmedranken;
let frisdranken;

init();

function init(){
    bierenVat = JSON.parse(getBierenVat());
    bierenFles = JSON.parse(getBierenFles());
    alcoholVrijBier = JSON.parse(getAlcoholVrijBier());
    wijnen = JSON.parse(getWijnen());
    snacks = JSON.parse(getSnacks());
    sterkeDranken = JSON.parse(getSterkeDrank());
    warmedranken = JSON.parse(getWarmeDranken());
    frisdranken = JSON.parse(getFrisdrank());

    // console.log(bierenVat);
    // console.log(bierenFles);
    // console.log(alcoholVrijBier);
    // console.log(wijnen);
    // console.log(snacks);
    // console.log(sterkeDranken);
    // console.log(warmedranken)
    // console.log(frisdranken);

    renderBierenVat();
    renderBierenfles();
    renderAlcoholVrijBier();
    renderWijnen();
    renderSnacks();
    renderSterkeDranken();
    renderWarmeDranken();
    renderFrisDranken();
}

function renderBierenVat(){
    let htmlString = "";
    const containerBierVat = document.querySelector('#bieren-vat');

    bierenVat.forEach(function(bierVat){
        htmlString += `
            <div class="article">
                <p>${bierVat.name}</p>
                <p>${bierVat.price}</p>
            </div>
        `
        // console.log(bierVat);
    });
    containerBierVat.innerHTML += htmlString;   
}

function renderBierenfles(){
    let htmlString = "";
    const containerBierFles = document.querySelector('#bieren-fles');

    bierenFles.forEach(function(bierFles){
        htmlString += `
        <div class="article">
            <p>${bierFles.name}</p>
            <p>${bierFles.price}</p>
        </div>
        `
        // console.log(bierFles);
    });
    containerBierFles.innerHTML += htmlString;   
}

function renderAlcoholVrijBier(){
    let htmlString = "";
    const containerAlcoholVrijBier = document.querySelector('#bieren-alcoholVrij');

    alcoholVrijBier.forEach(function(bierNA){
        htmlString = `
            <div class="article">
                <p>${bierNA.name}</p>
                <p>${bierNA.price}</p>
            </div>
        `
        // console.log(bierNA);
    });

    containerAlcoholVrijBier.innerHTML += htmlString;
}

function renderWijnen(){
    let htmlString = "";
    const containerWijnen = document.querySelector('#wijnen');

    wijnen.forEach(function(wijn){
        htmlString += `
        <div class="article">
            <p>${wijn.name}</p>
            <p>${wijn.price}</p>
        </div>
        `
        // console.log(wijnen);
    });
    containerWijnen.innerHTML += htmlString;   
}

function renderSnacks(){
    let htmlString = "";
    const containerSnacks = document.querySelector('#snacks');

    snacks.forEach(function(snack){
        htmlString += `
        <div class="article">
            <p>${snack.name}</p>
            <p>${snack.price}</p>
        </div>
        `
        // console.log(snack);
    });
    containerSnacks.innerHTML += htmlString;   
}

function renderSterkeDranken(){
    let htmlString = "";
    const containerSterkeDranken = document.querySelector('#sterkedrank');

    sterkeDranken.forEach(function(sterkeDrank){
        htmlString += `
        <div class="article">
            <p>${sterkeDrank.name}</p>
            <p>${sterkeDrank.price}</p>
        </div>
        `
        // console.log(sterkeDrank);
    });
    containerSterkeDranken.innerHTML += htmlString;   
}

function renderWarmeDranken(){
    let htmlString = "";
    const containerWarmeDranken = document.querySelector('#warmedrank');

    warmedranken.forEach(function(warmedrank){
        htmlString += `
        <div class="article">
            <p>${warmedrank.name}</p>
            <p>${warmedrank.price}</p>
        </div>
        `
        // console.log(warmedrank);
    });
    containerWarmeDranken.innerHTML += htmlString;   
}

function renderFrisDranken(){
    let htmlString = "";
    const containerFrisDranken = document.querySelector('#frisdrank');

    frisdranken.forEach(function(frisdrank){
        htmlString += `
        <div class="article">
            <p>${frisdrank.name}</p>
            <p>${frisdrank.price}</p>
        </div>
        `
        // console.log(frisdrank);
    });
    containerFrisDranken.innerHTML += htmlString;   
}
