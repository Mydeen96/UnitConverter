const inputBox  = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")
const lengthValue = document.getElementById("length")
const volumeValue = document.getElementById("volume")
const massValue = document.getElementById("mass")

convertBtn.addEventListener('click' , function(){
    
    let inputVal =inputBox.value ;

    const UnitValues = {
        Length :{
             m2f : (inputVal * 3.281).toFixed(3),
             f2m : (inputVal * 3.281).toFixed(3)
        },
        Volume :{
            l2g : (inputVal * 3.785).toFixed(3),
            g2l : (inputVal / 3.785).toFixed(3)
        },
        Mass :{
            k2p :( inputVal * 2.205).toFixed(3) ,
            p2k : (inputVal / 2.205).toFixed(3) 
        }
    
    }

    let validate = /\D/.test(inputVal)
 
    if(inputVal !== 0 && validate === false){
    // Length
        lengthValue.innerHTML = `${inputVal} meters = ${UnitValues.Length.m2f} feet | ${inputVal} feet = ${UnitValues.Length.f2m} meters`
    // Volunem
        volumeValue.innerHTML = `${inputVal} liters = ${UnitValues.Volume.l2g} gallons | ${inputVal} gallons = ${UnitValues.Volume.g2l} liters`
    // Mass
        massValue.innerHTML = `${inputVal} kilo = ${UnitValues.Mass.k2p} pound | ${inputVal} pound = ${UnitValues.Mass.p2k} kilo`
    }
    else{
        lengthValue.textContent = "NaN"
        massValue.textContent = "NaN"
        volumeValue.textContent = "NaN"
    }
     
})