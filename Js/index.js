let selectCity = document.getElementById("selectPlace");
let email      = document.getElementById("email");
let phone      = document.getElementById("phone");
let emailInput      = document.getElementById("emailInput");
let phoneInput      = document.getElementById("phoneInput");
let plusNumberSelect = document.getElementById("plusSelected");
//////////////////////////////////////////////////////////////////////
let cities = ["Cairo","Alex","Kfs","Sohaag","Fayoum","Aswan","Maniaa","Giza"];
for( let x = 0 ; x < cities.length ; x++ ) {
    if(x == 0)
    {
        let optEmpty = document.createElement("option");
        optEmpty.value = "";
        optEmpty.innerHTML = "--- Please Choose Your Countery ---";
        selectCity.appendChild(optEmpty);
        let opt = document.createElement("option");
    opt.value = cities[x];
    opt.innerHTML = cities[x];
    selectCity.appendChild(opt);
    }
    else{
    let opt = document.createElement("option");
    opt.value = cities[x];
    opt.innerHTML = cities[x];
    selectCity.appendChild(opt);
    }
}
/////////////////////////////////////////////////////////////
let numberPluses = ["+92","+652","+185","+33","+485","+142","+785","+157"];
for( let y = 0 ; y < numberPluses.length ; y++ ) {
    let opt = document.createElement("option");
    opt.value = numberPluses[y];
    opt.innerHTML = numberPluses[y];
    plusNumberSelect.appendChild(opt);

}
/////////////////////////////////////////////////////////////////////
phone.onclick  = function (){
    emailInput.type = "number";
    emailInput.style.cssText =`width:285px; height: 40px;border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding-bottom: 3%;
    margin-right: 5%;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;`;
    emailInput.placeholder = "Phone...";
    plusNumberSelect.removeAttribute("disabled");
    plusNumberSelect.style.cssText=`background-color:white;color:black`;
}
email.onclick = function (){
    emailInput.type = "email";
    emailInput.placeholder = "Email...";
    plusNumberSelect.setAttribute("disabled","true");
    plusNumberSelect.style.cssText=`color: white;
    background-color: rgba(0,0,0,0.3)`;
}
