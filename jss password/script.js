let inp = document.getElementById("pass");
let btn = document.getElementById("btn");
let spn = document.getElementById("spn");
spn.style.display="none"
// console.log(btn.className);



function show(){
    if(inp.type == 'password'){
        inp.type = 'text';
        ico.className="bi bi-eye-slash-fill";  
    }else{
        inp.type = 'password';
        ico.className="bi bi-eye-fill";
    }
}
function isle(){
    if(inp.value.length<=4){
        spn.textContent="zeif"
        spn.className="badge bg-danger mt-3"
        spn.style.display="block"
    }
    else if(inp.value.length<=9){
        spn.textContent="normal"
        spn.className="badge bg-warning mt-3"
        spn.style.display="block"
    }
    else{
        spn.textContent="yaxsi"
        spn.className="badge bg-info mt-3"
        spn.style.display="block"
    }

}





// let inp2 = document.getElementById("test");

// function test(){
//     alert(inp2.value);
// }
