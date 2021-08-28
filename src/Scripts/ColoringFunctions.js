import { useEffect } from "react";
import lokSabahData from "../Datasets/loksabha_seats_statewise.csv";
import cyberCrimeData from "../Datasets/cyber_crimes.csv";
import {csv} from "d3";

let maxMemberCount = 0
let maxCyberCrimes = new Map([
    ["2016",0],
    ["2017",0],
    ["2018",0],]
);

const stateCodeHashMap= new Map([
    ["IN-AN","Andaman and Nicobar Islands"],
    ["IN-AP","Andhra Pradesh"],
    ["IN-AR","Arunachal Pradesh"],
    ["IN-AS","Assam"],
    ["IN-BR","Bihar"],
    ["IN-CH","Chandigarh"],
    ["IN-CT","Chhattisgarh"],
    ["IN-DD","Daman and Diu"],
    ["IN-DL","Delhi"],
    ["IN-DN","Dadra and Nagar Haveli"],
    ["IN-GA","Goa"],
    ["IN-GJ","Gujarat"],
    ["IN-HP","Himachal Pradesh"],
    ["IN-HR","Haryana"],
    ["IN-JH","Jharkhand"],
    ["IN-JK","Jammu and Kashmir"],
    ["IN-KA","Karnataka"],
    ["IN-KL","Kerala"],
    ["IN-LD","Lakshadweep"],
    ["IN-MH","Maharashtra"],
    ["IN-ML","Meghalaya"],
    ["IN-MN","Manipur"],
    ["IN-MP","Madhya Pradesh"],
    ["IN-MZ","Mizoram"],
    ["IN-NL","Nagaland"],
    ["IN-OR","Odisha"],
    ["IN-PB","Punjab"],
    ["IN-PY","Puducherry"],
    ["IN-RJ","Rajasthan"],
    ["IN-SK","Sikkim"],
    ["IN-TG","Telangana"],
    ["IN-TN","Tamil Nadu"],
    ["IN-TR","Tripura"],
    ["IN-UP","Uttar Pradesh"],
    ["IN-UT","Uttarakhand"],
    ["IN-WB","West Bengal"],
])

const stateHashMap= new Map([
    ["Andaman and Nicobar Islands","IN-AN"],
    ["Andhra Pradesh","IN-AP"],
    ["Arunachal Pradesh","IN-AR"],
    ["Assam","IN-AS"],
    ["Bihar","IN-BR"],
    ["Chandigarh","IN-CH"],
    ["Chhattisgarh","IN-CT"],
    ["Daman and Diu","IN-DD"],
    ["Delhi","IN-DL"],
    ["Dadra and Nagar Haveli","IN-DN"],
    ["Goa","IN-GA"],
    ["Gujarat","IN-GJ"],
    ["Himachal Pradesh","IN-HP"],
    ["Haryana","IN-HR"],
    ["Jharkhand","IN-JH"],
    ["Jammu and Kashmir","IN-JK"],
    ["Karnataka","IN-KA"],
    ["Kerala","IN-KL"],
    ["Lakshadweep","IN-LD"],
    ["Maharashtra","IN-MH"],
    ["Meghalaya","IN-ML"],
    ["Manipur","IN-MN"],
    ["Madhya Pradesh","IN-MP"],
    ["Mizoram","IN-MZ"],
    ["Nagaland","IN-NL"],
    ["Odisha","IN-OR"],
    ["Punjab","IN-PB"],
    ["Puducherry","IN-PY"],
    ["Rajasthan","IN-RJ"],
    ["Sikkim","IN-SK"],
    ["Telangana","IN-TG"],
    ["Tamil Nadu","IN-TN"],
    ["Tripura","IN-TR"],
    ["Uttar Pradesh","IN-UP"],
    ["Uttarakhand","IN-UT"],
    ["West Bengal","IN-WB"],
])

let lokSambhamap = new Map();
let cybercrimeMap = new Map();






//Poupulating Functions
export function populateCybercrimeMap(){
    csv(cyberCrimeData).then((data)=>{
        data.forEach((element)=>{
            console.log(element)
            var stateName = element["State/UT"]
            var sixtenCrimes = Number.parseInt(element["2016"])
            var seventeenCrimes = Number.parseInt(element["2017"])
            var eighteenCrimes = Number.parseInt(element["2018"])
            maxCyberCrimes.set("2016",maxCyberCrimes.get("2016")>sixtenCrimes? maxCyberCrimes.get("2016"):sixtenCrimes)
            maxCyberCrimes.set("2017",maxCyberCrimes.get("2017")>seventeenCrimes? maxCyberCrimes.get("2017"):seventeenCrimes)
            maxCyberCrimes.set("2018",maxCyberCrimes.get("2018")>eighteenCrimes? maxCyberCrimes.get("2018"):eighteenCrimes)
            cybercrimeMap.set(stateName,new Map([["2016",sixtenCrimes],["2017",seventeenCrimes],["2018",eighteenCrimes]]))
        })
    })
}


export function populatedLoksabhaMap(){
    csv(lokSabahData).then((d)=>{
        stateCodeHashMap.forEach(stateName => {
            var memberCount = 0
            var partyMap = new Map()
            d.forEach(element => {
              if(element.State == stateName){
                memberCount++;
                if (partyMap.has(element["Party Name"])){
                    partyMap.set(element["Party Name"], partyMap.get(element["Party Name"])+1)
                }
                else{
                    partyMap.set(element["Party Name"], 1)
                }
              } 
            });
            lokSambhamap.set(stateName,{memberCount: memberCount, partyMap:partyMap})
            if (memberCount>maxMemberCount) {
                maxMemberCount = memberCount;
            }
        });
    })
}



//Coloring Functions
export function LokSabhaMembersStateWise(params){
    let idOfState = params[0]
    if (stateCodeHashMap.has(idOfState)) {
        let stateName = stateCodeHashMap.get(idOfState)
        let stateDate = lokSambhamap.get(stateName)
        console.log(maxMemberCount)
        let color = [150,0,Math.round((stateDate.memberCount/maxMemberCount)*255)]
        console.log("State: "+stateName+"\nColor: "+color)
        return color
    }
    return [70,60,80]
    
}


export function firstTestFunction(params) {
    let idOfState = params[0]
    if(stateCodeHashMap.has(idOfState)){
        let colors=[Math.round((150/200)*255),Math.round((56/100)*255),200]
        return colors
    }
    return [0,0,0]
}

export function cybercrimeColors(params){
    let idOfState = params[0]
    let year = params[1]
    if (stateCodeHashMap.has(idOfState)) {
        let stateName = stateCodeHashMap.get(idOfState)
        let stateData = cybercrimeMap.get(stateName)
        let max = maxCyberCrimes.get(year)
        let val = stateData.get(year)
        let color = [150,0,Math.round((val/max)*255)]
        console.log("State: "+stateName+"\nColor: "+color)
        return color
    }
    return [0,0,0]
}