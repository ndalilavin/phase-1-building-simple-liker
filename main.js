// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hide = document.querySelector('#modal')
hide.setAttribute('Class', 'hidden')

function hideError (){
  hide.className = "hidden";
}

let heart = document.querySelectorAll('span')

heart.forEach( like =>{
  like.addEventListener('click', ()=>{
    fillHeart(like)
    mimicServerCall()
    .then(res => {
      if(res === "Pretend remote server notified of action!") {
        fillHeart()
      }
    })
    .catch(error => {
      if(error === "Random server error. Try again."){
        hide.className = "";
        hide.innerHTML = error;
      setTimeout(visibleModal, 3000)


      }
    })
  })
})

function fillHeart (like){
  if(like.className === 'like-glyph'){
    like.innerHTML = FULL_HEART
    like.className = 'like-glyph activated-heart'
  } 
  else if (like.className === 'like-glyph activated-heart'){
    like.innerHTML = EMPTY_HEART
    like.className = 'like-glyph'
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
