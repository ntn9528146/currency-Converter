

 

const inputText = document.querySelector('.inputText')
const dropdown = document.querySelectorAll('.dropdown select')
// const toCountry = document.querySelector('.toCountry')
const msg = document.querySelector('.msg')
const btn = document.querySelector('.btn')
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
 


for(let select of dropdown){
    for( code in countryList){
        // console.log(code);
        let option = document.createElement('option')
        option.innerHTML = code;
        // console.log(option);
        select.append(option);
        if(select.name == "from" && code == "USD"){
            option.selected = "selected";
        }else if (select.name == "to" && code == "INR"){
            option.selected = "selected";

        }


        select.addEventListener('change',(e)=>{
            updateFlag(e.target);
            
        })
    }
        
    }

    const updateFlag = (el)=>{
        let currCode = el.value;
       
        let countryCode = countryList[currCode];
        // console.log(countryCode);
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = el.parentElement.querySelector('img');
        img.src =newSrc;


        

    }

btn.addEventListener('click', async (e)=>{
    e.preventDefault();
    try{
    let inputText = document.querySelector('.inputText');
    let amount = inputText.value;
    if(amount === "" || amount < 1){
        amount = 1;
        inputText.value = "1";  
    }
    else{
        inputText.value = amount;  
    }
    


const url1 = `https://api.currencyapi.com/v3/latest?apikey=cur_live_dgi8Y6LmbmcN0fEmynAoaVYscYa5tP8gUEEjQgGU&base_currency=${fromCurr.value}`;

let response = await fetch(url1);

let info = await response.json();
let coversionRate = info.data[toCurr.value];

let finalValue = amount * coversionRate.value;

msg.innerHTML = `${amount} ${fromCurr.value} = ${finalValue} ${toCurr.value}`;
console.log(finalValue);
} 
catch{
    console.error("some error"); 
}
})
    
    

