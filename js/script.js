let display = document.querySelector("#inputValue");
let button = document.querySelectorAll("button");

let buttonArray = Array.from(button);
// console.log(buttonArray);

let str = " ";

buttonArray.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener("click",function(e){
        // console.log(e.target.innerHTML);
        
        if(e.target.innerHTML == "DEL"){
            str = str.substring(0, str.length-1);
            display.value = str;
        }

        else if (e.target.innerHTML == "AC"){
            str = " ";
            display.value = str;
        }

        else if(e.target.innerHTML == "="){
            str = eval(str);
            display.value = str;
        }
        
        else{
            str += e.target.innerHTML;
        display.value = str;
        }
    })
});

// console.log(button);
// console.log(buttonArray);
