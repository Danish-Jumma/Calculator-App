const start = ()=>{
 let box = document.getElementById("box");
 let startBtn = document.getElementById("btn");
 box.classList.remove("inactive");
 startBtn.classList.add("inactive");
}
const btnAll = (btn)=>{
    let input = document.getElementById("input");
    input.value += btn;
}

const result = ()=>{
    try
    {
    let input = document.getElementById("input");
    input.value = eval(input.value);
    }
    catch(err){
        alert("Enter the valid Input.");
    }
}
function Clear(){
    let input = document.getElementById("input");
    input.value = input.value.slice(0,0);
}
const del = ()=>{
    let input = document.getElementById("input");
    input.value = input.value.slice(0,-1)
}