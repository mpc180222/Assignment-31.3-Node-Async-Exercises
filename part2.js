// Question 1


async function shuffleDeckAndGetDeckId(){
let response = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
return response.data.deck_id;
}

async function drawSingleCard(deckId){
let response = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
let card = response['data']['cards'][0];
console.log(`${card['value']} of ${card['suit']}`);
}


// Question 2

async function drawTwoCards(id){

let card1 = await axios.get(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
let card2 = await axios.get(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);

console.log(`${card1['data']['cards'][0]['value']} of ${card1['data']['cards'][0]['suit']} `);
console.log(`${card2['data']['cards'][0]['value']} of ${card2['data']['cards'][0]['suit']} `);
}

shuffleDeckAndGetDeckId()
.then(deckId => drawTwoCards(deckId) )

//part 3

let table = document.getElementById('drawn-cards');

async function createNewDeckAndGetDeckId(){
  let response = await axios.get('http://deckofcardsapi.com/api/deck/new/');
  return response.data.deck_id;
  }

  async function drawSingleCardAndPlaceOnPage(e){
    try{
    let deckId = e.target.getAttribute("data-deck-id");
    let response = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let cardData = response['data']['cards'][0];
    let newCard = document.createElement('li');
    newCard.innerText = `${cardData['value']} of ${cardData['suit']}`;
    table.append(newCard);}
    catch(e){
      alert('deck is empty');
    }

    }

function createGameMarkup(id){
  let div = document.getElementById('button-space');
  let btn = document.createElement('button');
  btn.innerText = 'Draw the card';
  btn.setAttribute('data-deck-id', id);
  btn.setAttribute('id', 'play');
  div.append(btn);
  btn.addEventListener('click', drawSingleCardAndPlaceOnPage);
}

createNewDeckAndGetDeckId()
.then(deckId => createGameMarkup(deckId));





