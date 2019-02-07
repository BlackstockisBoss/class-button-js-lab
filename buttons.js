let popbutton = document.querySelector("#popbutton")

let target = document.querySelector("#target")

popbutton.addEventListener('click' , e => {
  if(target.classList.contains("pop")){
    target.classList.remove("pop")
  } else {
    target.classList.add("pop")
  }
})

let bigbutton = document.querySelector("#bigbutton")

bigbutton.addEventListener("click", e => {
  if(target.classList.contains("big")){
    target.classList.remove("big")
  } else {
    target.classList.add("big")
  }
})

let fancybutton = document.querySelector("#fancybutton")

fancybutton.addEventListener("click", e => {
  if(target.classList.contains("fancy")){
    target.classList.remove("fancy")
  } else {
    target.classList.add("fancy")
  }
})

let negativebutton = document.querySelector("#negativebutton")

negativebutton.addEventListener("click", e => {
  if(target.classList.contains("negative")){
    target.classList.remove("negative")
  } else {
    target.classList.add("negative")
  }
})

let custombutton = document.querySelector("#custombutton")

custombutton.addEventListener("click", e => {
  if(target.classList.contains("custom")){
    target.classList.remove("custom")
  } else {
    target.classList.add("custom")
  }
})