


let turn ="X";


const boxes = document.querySelectorAll(".box");


boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        console.log("it clicked");
      if (turn ==="X"){
        boxes.innerText ="X";
       let newtrun = turn ==="O";
      } 
      
else {
    newtrun;
    box.innerText ="O";
    turn ==="X";
}
      
    });
});