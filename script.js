let btn = document.getElementById('click')
btn.addEventListener("click", (e)=>{
  e.preventDefault();
   
  
  let inputEl = document.getElementById('input').value;
  
  
  reverseString(inputEl)
})

function reverseString(word){
  let words = word.toLowerCase();
  console.log(words)
  let resultEl = document.getElementById('result');
  let newWord = '';
  
  
    for (let i = word.length - 1; i>=0; i--){
      newWord += word[i]
    }
  let newWords =newWord.toLowerCase();
  console.log(newWords)
  if(word == ""){
    console.log('enter the word')
    resultEl.innerText = `Please enter word!`;
  }
    

  else if (words == newWords){
    console.log("It's a  palidrome")
    resultEl.innerText = `${word} is a palidrome.`;
    // let para = document.createElement('p')
    // let text = document.createTextNode(`${word} is palidrome`)
    // para.append(text)
    // document.body.appendChild(para)
    
  }
  else{
    
    console.log("It's not palidrome")
    resultEl.innerHTML = `${word} is not a palidrome.`
    // let para = document.createElement('p')
    // let text = document.createTextNode(`${word} not palidrome`)
    // para.append(text)
    // document.body.appendChild(para)
  }
}








