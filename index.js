
const people = [
  {
    name: `Alice`,
    occupation: `Writer`,
    startingPrice: 30
  },
  {
    name: `Bob`,
    occupation: `Teacher`,
    startingPrice: 50
  },
  {
    name: `Carol`,
    occupation: `Programmer`,
    startingPrice: 70
  }
];



function addPerson() {
  const names = [`Joe`, `Christie`, `Ari`, `Jon`, `Lebanese`, `Monty`, `RuPaul`];
  const occupations = [`tape looper`, `milk-drinker`, `salary counter`, `clam boy`, `the spiller`];
  const rates = [12, 400, 44, 53, 60, 77];
  const nm = names[Math.floor(Math.random() * names.length)];
  const occ = occupations[Math.floor(Math.random() * occupations.length)];
  const rts = rates[Math.floor(Math.random() * rates.length)]
  people.push({
    name: nm,
    occupation: occ,
    startingPrice: rts
  });
  renderPeople();
  }
  
const renderPeople = () => {
  document.querySelector(`tbody`).innerHTML = ``;
  people.forEach((person) => {
    const nameTD = document.createElement(`td`);
    nameTD.innerHTML = `${person.name}`;
    const occupationTD = document.createElement(`td`);
    occupationTD.innerHTML = `${person.occupation}`;
    const startingPriceTD = document.createElement(`td`);
    startingPriceTD.innerHTML = `${person.startingPrice}`;
    const personTR = document.createElement(`tr`);
    personTR.appendChild(nameTD)
    personTR.appendChild(occupationTD)
    personTR.appendChild(startingPriceTD)
    const peopleTable = document.querySelector(`tbody`);
    peopleTable.appendChild(personTR);
    const averageBlock = document.querySelector(`#averageBlock`)
    averageBlock.replaceChildren(`$ ${makeAverage(people)}`);
  });

}

const makeAverage = (anArrofObj) => {
  let sum = 0
  for (let i = 0; i < anArrofObj.length; i++) {
    let curRate = people[i].startingPrice;
    sum += curRate;
  }
  let average = sum / anArrofObj.length;
  return average.toFixed(2); 
}
 
// const renderAverage = (average) => {
//   const averageBlock = document.querySelector(`#averageBlock`);
//   averageBlock.innerHTML(`${average}`)
//   a




// const personList = (person) => {
//   for(let i = 0; i < people.length; i++) {
//     let curPerson = person[i]
//     console.log(curPerson)
    
    
    
    
    
    
    // const row = document.createElement(`tr`);
    // const name = document.createElement(`td`)
    // name.innerText = `${curPerson.name}`;
    // name.appendChild(td)
    // name.appendChild(curPerson)
    
    // row.innerText = `${person.name}`
    // console.log(name);
 
    
    // console.log(row)
//   }
  
// }



function render() {
  renderPeople();
  setInterval(addPerson, 2000);

  // makeAverage

}
render();

// render();
// function render() {
//   const averageBlock = document.querySelector(`#averageBlock`)
//   const nameLineOne = document.querySelector(`.name`);
//   const nameLineTwo = document.querySelector(`.name2`);
//   const nameLineThree = document.querySelector(`.name3`);
//   const posLineOne = document.querySelector(`.position`);
//   const posLineTwo = document.querySelector(`.position2`);
//   const posLineThree = document.querySelector(`.position3`);
//   const rateLineOne = document.querySelector(`.rate`);
//   const rateLineTwo = document.querySelector(`.rate2`);
//   const rateLineThree = document.querySelector(`.rate3`);
//   const nameLineFour = document.querySelector(`.name4`);
//   const posLineFour = document.querySelector(`.position4`);
//   const rateLineFour = document.querySelector(`.rate4`)
//   averageBlock.replaceChildren(`$ ${makeAverage(people)}`);
//   nameLineOne.replaceChildren(people[0].name);
//   nameLineTwo.replaceChildren(people[1].name);
//   nameLineThree.replaceChildren(people[2].name);
//   posLineOne.replaceChildren(people[0].occupation);
//   posLineTwo.replaceChildren(people[1].occupation);
//   posLineThree.replaceChildren(people[2].occupation);
//   rateLineOne.replaceChildren(people[0].startingPrice);
//   rateLineTwo.replaceChildren(people[1].startingPrice);
//   rateLineThree.replaceChildren(people[2].startingPrice);


//   nameLineFour.replaceChildren(people[3].name), 1000);
//   posLineFour.replaceChildren(people[3].occupation), 2000);
//   rateLineFour.replaceChildren(people[3].startingPrice);
// }
// render();


