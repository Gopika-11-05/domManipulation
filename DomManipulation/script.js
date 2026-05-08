let nameInput = document.createElement("input");
let ageInput = document.createElement("input");
let mailInput =  document.createElement("input");
let printBtn = document.createElement("button");
let cancelBtn = document.createElement("button");

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    btn.style.display="block";
    btn.style.marginBottom = "20px";

// Name Input 
let parent = document.createElement("div")
parent.setAttribute("class","parentDiv")
    let nameLabel = document.createElement("label");
    nameLabel.textContent="Name:";
    nameLabel.setAttribute("for","namel");
    nameInput.type = "text";
    nameInput.setAttribute("id","namel");
    nameInput.style.display = "block";
    nameInput.style.marginBottom = "20px"
   
   
// Age Input
    let ageLabel = document.createElement("label");
    ageLabel.textContent = "Age:";
    ageLabel.setAttribute("for","agel");
    ageInput.type="number";
    ageInput.setAttribute("id","agel");
    ageInput.style.display = "block"
    ageInput.style.marginBottom = "20px"
   

// Mail Input
    // let div3 = document.createElement("div");
    let mailLabel = document.createElement("label");
    mailLabel.textContent = "Mail:";
    mailLabel.setAttribute("for","maill");
    mailInput.type = "email";
    mailInput.setAttribute("id","maill");
     mailInput.style.display = "block";
    mailInput.style.marginBottom = "20px"
   
    // div3.style.display = "block";
    // btn.append(div1,div2,div3)

printBtn.innerText="Print";
printBtn.style.marginRight = "60px";


   
cancelBtn.innerText = "Cancel";
cancelBtn.style.marginBottom = "20px";


document.body.append(nameLabel,nameInput,ageLabel,ageInput,mailLabel,mailInput,printBtn,   
cancelBtn);
});

printBtn.addEventListener("click",()=>{
 
 if(nameInput.value.trim()===""){
        alert ("enter your name")
    };
 
 if(ageInput.value.trim()===""){
        alert ("enter your age")
    };
 
 if(mailInput.value.trim()===""){
        alert ("enter your mail")
    };


    let div = document.createElement("div")
    div .innerHTML = `Entered Name: ${nameInput.value}<br> Entered Age: ${ageInput.value} <br>Entered Mail :${mailInput.value}`
     
     document.body.append(div);
})
cancelBtn.addEventListener("click",()=>{
    cancelBtn.parentElement.innerHTML="";

})
