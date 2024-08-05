const unitType = document.getElementById("unit-type")
const unitFrom = document.getElementById("unit-from")
const unitTo = document.getElementById("unit-to")
const valueFrom = document.getElementById("value-from")
const valueTo = document.getElementById("value-to")
const convertBtn = document.getElementById("convert-btn")

const units = [
    {
        name : "length" ,
        units : [ "Meter" , "Kilometer"]
    },
    {
        name : "mass" ,
        units : ["Gram" , "KiloGram"] 
    },
    {
        name : "time" ,
        units : [ "Minute" , " Hour"]
    },
    {
        name : "volume" ,
        units :["Milliliter" , "Liter"]
    }
]

unitType.addEventListener('change' ,  function(){
    for (let i = 0 ; i < units.length ; i++){
    let unitsName = units[i].name
    let unitsArray = units[i].units
    if(unitsName === unitType.value){
        let option1 = ` <option value="selectUnit" disabled selected >Select Unit</option> `
        let option2 = ` <option value="selectUnit" disabled selected >Select Unit</option> `
        for(let j = 0 ; j < unitsArray.length ; j++ ){
            option1 += ` 
                <option id = '${unitsArray[j]}1' value = '${unitsArray[j]}' > 
                     ${unitsArray[j]} 
                </option>
                 `
                 option2 += ` 
                <option id = '${unitsArray[j]}2' value = '${unitsArray[j]}' > 
                     ${unitsArray[j]} 
                </option>
                 `
        }
        unitFrom.innerHTML = option1 
        unitTo.innerHTML = option2
    }   
}
}) 

convertBtn.addEventListener('click' ,function(){
    if(unitType.value !== "selectUnitType"){
        if(unitFrom.value !== "selectUnit" && unitTo.value !== "selectUnit"){
            if( valueFrom.value !== ""){
                length()
                mass()
                time()
                volume()
               }
               else{
                alert("please give input")
               }
           }
           else{
            alert("please select the Unit")
           }
      }
      else{
        alert("please selecy unit type")
      }
    
})


unitFrom.addEventListener('change' , function(){
    if(unitFrom.value === "Meter"){
        var m = document.getElementById("Meter2");
        m.disabled  = true ;        
    }
    else if(unitFrom.value === "Kilometer"){
        var km = document.getElementById("Kilometer2");
        km.disabled  = true ;
        m.disabled  = false ;
    }
    else if(unitFrom.value === "Milliliter"){
        var ml = document.getElementById("Milliliter2");
        ml.disabled  = true ;               
    }
    else if(unitFrom.value === "Liter"){
        var l = document.getElementById("Liter2");
        l.disabled  = true ;
        ml.disabled  = false ;
    }
    else if(unitFrom.value === "Gram"){
    var gm = document.getElementById("Gram2");
        gm.disabled  = true ;                
    }
    else if(unitFrom.value === "Kilogram"){
        let kl = document.getElementById("Kilogram2");
        kl.disabled  = true ;
        gm.disabled  = false ;
    }
    else if(unitFrom.value === "Minute"){
        let min = document.getElementById("Minute2");
        min.disabled  = true ;        
        hr.disabled  = false ;        
    }
    else if(unitFrom.value === "Hour"){
        let hr = document.getElementById("Hour2");
        hr.disabled  = true ;
        min.disabled  = false ;
    }
})

function length(){
    if(unitFrom.value === "Meter" && unitTo.value === "Kilometer"){
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue / 1000
        console.log(result);
        valueTo.value = result ; 
    }
    else if(unitFrom.value === "Kilometer" && unitTo.value === "Meter") {
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue * 1000 ;
        console.log(result);
        valueTo.value = result ;
    }
}

function mass(){
    if(unitFrom.value === "Gram" && unitTo.value === "Kilogram"){
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue / 1000
        console.log(result);
        valueTo.value = result ; 
    }
    else if(unitFrom.value === "Kilogram" && unitTo.value === "Gram") {
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue * 1000 ;
        console.log(result);
        valueTo.value = result ;
    }
}

function time(){
    if(unitFrom.value === "Minute" && unitTo.value === "Hour"){
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue / 60
        console.log(result);
        valueTo.value = result ; 
    }
    else if(unitFrom.value === "Hour" && unitTo.value === "Minnute") {
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue * 60 ;
        console.log(result);
        valueTo.value = result ;
    }
    else{
        console.log("nothing wwork");
        
    }
}

function volume(){
    if(unitFrom.value === "Milliliter" && unitTo.value === "Liter"){
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue / 1000
        console.log(result);
        valueTo.value = result ; 
    }
    else if(unitFrom.value === "Liter" && unitTo.value === "Milliliter") {
        let inputvalue = Number(valueFrom.value)
        let result = inputvalue * 1000 ;
        console.log(result);
        valueTo.value = result ;
    }
}





