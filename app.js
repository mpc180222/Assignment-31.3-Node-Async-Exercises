// Part 1.1



async function getFavoriteNumberFact(num){

let getRandomFactUrl = `http://numbersapi.com/${num}/trivia?json`
let result = await axios.get(getRandomFactUrl);
console.log(result.data.text);

}

// Part 1.2

let questionTwoList = document.getElementById('question2');

async function getMultipleNumberFacts(...nums){
let result = await axios.get(`http://numbersapi.com/${nums}/`);
return result.data;
}

function appendFactsToPage(facts, el){
for(fact in facts){
    let li = document.createElement('li');
     li.innerText = facts[fact];
     el.append(li);
}
}

getMultipleNumberFacts(1,3,5,7)
.then( facts => appendFactsToPage(facts, questionTwoList))


//Part 1.3


let questionThreeList = document.getElementById('question3');
async function getFourFacts(){
    let f1 = await axios.get(`http://numbersapi.com/3/trivia?json`);
    let f2 = await axios.get(`http://numbersapi.com/3/trivia?json`);
    let f3 = await axios.get(`http://numbersapi.com/3/trivia?json`);
    let f4 = await axios.get(`http://numbersapi.com/3/trivia?json`);
    return {
        "f1": f1.data.text,
        "f2": f2.data.text,
        "f3": f3.data.text,
        "f4": f4.data.text
    }
}
getFourFacts()
.then( facts => appendFactsToPage(facts, questionThreeList));
    

    
