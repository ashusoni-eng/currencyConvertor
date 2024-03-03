const dropdowns= document.querySelectorAll("select");
const convertBtn= document.querySelector(".convertBtn");
const amt= document.querySelector(".amt");
const fromFlag=document.querySelector(".fromSelector img");
const toFlag=document.querySelector(".toSelector img");
let result= document.querySelector(".result h6");
let fromOption=document.querySelector(".fromSelector select");
let toOption=document.querySelector(".toSelector select");
const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

// console.log(dropdowns);

for(let select of dropdowns){
	for(crCode in countryList){
		let option= document.createElement("option");
		option.value=countryList[crCode];
		option.innerText=crCode;
		select.appendChild(option);
	}
	select.addEventListener('change',()=>{		
			fromFlag.src=`https://flagsapi.com/${fromOption.value}/flat/64.png`;		
			toFlag.src=`https://flagsapi.com/${toOption.value}/flat/64.png`;		
	});
}

convertBtn.addEventListener('click',()=>{	
	let amount =amt.value;
	let amt1= amount=="" ? 1 : amount;
	let fromOptionValue=fromOption.options[fromOption.selectedIndex].text.toLowerCase();
	let toOptionValue=toOption.options[toOption.selectedIndex].text.toLowerCase();
	let myUrl=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromOptionValue}.json`;
	(async ()=>{
		let rawResponse= await fetch(myUrl);
		let response= await rawResponse.json();
		// let test=response[toOptionValue][fromOptionValue];
		let msg=`${amt1} ${fromOptionValue.toUpperCase()} = ${response[fromOptionValue][toOptionValue]*amt1} ${toOptionValue.toUpperCase()}`;
		result.innerText=msg;
		
	})();	
});



