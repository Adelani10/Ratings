

const subBtn = document.querySelector(".sub-btn")
const pickText = document.querySelector(".pick-text")
const content = document.querySelector(".content")

const qxt = document.querySelectorAll(".btns")

const numArray = ["1", "2", "3", "4", "5"]
for (let i = 0; i<numArray.length; i++){
  
}


qxt.forEach(function(hello){
    hello.addEventListener("click", function() {
        qxt.forEach(function(item) {
            if (item !== hello){
                item.classList.remove("show-color")
            }
        })
  
    pickText.textContent = `You selected ${myText()} out of 5`

  function myText(){
  if (hello.classList.contains("btn-1")){
    return numArray[0]
  } 
  else  if (hello.classList.contains("btn-2")){
    return numArray[1]
  }
  else  if (hello.classList.contains("btn-3")){
    return numArray[2]
  } 
  else  if (hello.classList.contains("btn-4")){
    return numArray[3]
  } 
  else {
    return numArray[4]
  }
  
}
        hello.classList.toggle("show-color")
    })
})


subBtn.addEventListener("click", function(){
  content.classList.add("show-typage")
})
