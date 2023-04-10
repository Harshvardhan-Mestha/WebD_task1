



let cards = document.querySelectorAll(".card")
console.log(cards)
cards.forEach((card) => {
    if(card.innerHTML == "CP"){card.style.backgroundColor = "orange"}
    if(card.innerHTML == "M2"){card.style.backgroundColor = "crimson"}
    if(card.innerHTML == "ES"){card.style.backgroundColor = "blue"}
    if(card.innerHTML == "MOW"){card.style.backgroundColor = "dodgerblue"}
    if(card.innerHTML == "THERMO"){card.style.backgroundColor = "lightblue"}
    if(card.innerHTML == "BIO LAB"){card.style.backgroundColor = "lime"}
    if(card.innerHTML == "WS"){card.style.backgroundColor = "purple"}


})