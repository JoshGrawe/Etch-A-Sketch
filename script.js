const container = document.querySelector(".container")
const newGridButton = document.querySelector(".new-grid")
const eraseButton = document.querySelector(".erase-button").addEventListener("click",eraseFunction)
var erase = false
var backgroundColor = "red"




function createGrid (squaresPerSide){
    for (i =0 ; i<squaresPerSide;i++){
       
        var newdiv = document.createElement("div")
        newdiv.style.backgroundColor = "white"
        newdiv.style.width = "20px"
        newdiv.style.height = "20px"
        newdiv.style.borderStyle = "solid"
        newdiv.style.borderColor = "black"
        newdiv.style.borderWidth = "0.2px"
        newdiv.className = "grid-item"

        newdiv.addEventListener("mouseover", (e) => {
            
       
        newdivcss = e.target
        newdivcss.style.backgroundColor = backgroundColor
          
           
       
           
          
            
        })
       
     
        container.appendChild(newdiv)
        
       
    }


}


function eraseFunction(){
    
    erase =! erase  
    console.log(erase)  
 
    if (erase === true){
        backgroundColor = "white"
       

              
               
           
               
              
                
          
       
    }else{
      
            
        backgroundColor = "red"

        

    }
}

function regular(){

}

function random(){

}

function reset () {
    const gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach(node => {
        console.log(node)
        node.remove()
    })  
}
newGridButton.addEventListener("click" , () => {
    const squaresPerSide = prompt("Enter amount of squares per grid")
    if (squaresPerSide > 100){
        alert("100 Max Input")
    }
    reset()
    newheight =  22 * squaresPerSide
    newWidth = 22 * squaresPerSide
    container.style.height = `${newheight}px`
    container.style.width = `${newWidth}px`

    createGrid(squaresPerSide*squaresPerSide)

})

createGrid(256)



//if input is 7 then grid is 49 squares with a width of 22px each
// the width needs to extend