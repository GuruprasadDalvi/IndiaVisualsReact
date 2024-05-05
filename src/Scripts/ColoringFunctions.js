// import { useEffect } from "react";
import {csv} from "d3";
import cyber from "../Datasets/cyber_crimes.csv";
import lokSabha from "../Datasets/loksabha_seats_statewise.csv";

let maxMemberCount = 0
let maxCyberCrimes = new Map([
    ["2016",new Map()],
    ["2017",new Map()],
    ["2018",new Map()],]
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
    csv(cyber).then((data)=>{
        data.forEach((element)=>{
            var stateName = element["State/UT"]
            var sixtenCrimes = Number.parseInt(element["2016"])
            var seventeenCrimes = Number.parseInt(element["2017"])
            var eighteenCrimes = Number.parseInt(element["2018"])
            var nineTeenCrimes = Number.parseInt(element["2019"])
            var twentyCrimes = Number.parseInt(element["2020"])
            var twentyOneCrimes = Number.parseInt(element["2021"])
            var twentyTwoCrimes = Number.parseInt(element["2022"])
            var twentyThreeCrimes = Number.parseInt(element["2023"])

            maxCyberCrimes.set("2016",maxCyberCrimes.get("2016")>sixtenCrimes? maxCyberCrimes.get("2016"):sixtenCrimes)
            maxCyberCrimes.set("2017",maxCyberCrimes.get("2017")>seventeenCrimes? maxCyberCrimes.get("2017"):seventeenCrimes)
            maxCyberCrimes.set("2018",maxCyberCrimes.get("2018")>eighteenCrimes? maxCyberCrimes.get("2018"):eighteenCrimes)
            maxCyberCrimes.set("2019",maxCyberCrimes.get("2019")>nineTeenCrimes? maxCyberCrimes.get("2019"):nineTeenCrimes)
            maxCyberCrimes.set("2020",maxCyberCrimes.get("2020")>twentyCrimes? maxCyberCrimes.get("2020"):twentyCrimes)
            maxCyberCrimes.set("2021",maxCyberCrimes.get("2021")>twentyOneCrimes? maxCyberCrimes.get("2021"):twentyOneCrimes)
            maxCyberCrimes.set("2022",maxCyberCrimes.get("2022")>twentyTwoCrimes? maxCyberCrimes.get("2022"):twentyTwoCrimes)
            maxCyberCrimes.set("2023",maxCyberCrimes.get("2023")>twentyThreeCrimes? maxCyberCrimes.get("2023"):twentyThreeCrimes)

            cybercrimeMap.set(
              stateName,
              new Map([
                ["2016", sixtenCrimes],
                ["2017", seventeenCrimes],
                ["2018", eighteenCrimes],
                ["2019", nineTeenCrimes],
                ["2020", twentyCrimes],
                ["2021", twentyOneCrimes],
                ["2022", twentyTwoCrimes],
                ["2023", twentyThreeCrimes]
              ])
            );
        })
    })
}


export function populatedLoksabhaMap(){
    csv(lokSabha).then((d)=>{
        d.forEach(element=>{
            const stateName = element.State;
            const stateCode = stateHashMap.get(stateName) 
            const partyName = element["Party Name"]

            var stateMap = lokSambhamap.has(stateName)? lokSambhamap.get(stateName):new Map(Object.entries({name: stateName, code: stateCode, count: 0, details: new Map()}))
            // var stateCount = stateMap.get("count");
            stateMap.set("count", stateMap.get("count")+1)
            var partyMap = stateMap.get("details");
            partyMap.has(partyName)? partyMap.set(partyName,partyMap.get(partyName)+1):partyMap.set(partyName,1);
            lokSambhamap.set(stateName, stateMap)

            //setting maxCount 
            if (stateMap.get("count")>maxMemberCount) {
                maxMemberCount = stateMap.get("count");
            }


        })
    })
}


//Coloring Function
export function getInitialColors(params) {
    let state_id = params[0]
    if(stateCodeHashMap.has(state_id)){
        let val = getColor(0.4)
        let colors=[val,val,val]
        return [colors,`<b style= "text-transform: uppercase">${stateCodeHashMap.get(state_id)}`]
    }
    return [[70,60,80],""]
}

//Coloring Function
export function getLokSabhaMembersColors(params){
    let state_id = params[0]
    let stateName = stateCodeHashMap.get(state_id)
    if (lokSambhamap.has(stateName)) {
        let stateData = lokSambhamap.get(stateName)
        // let stateData = new Map()
        let totalCount = stateData.get("count")
        let val = getColor(totalCount/maxMemberCount)
        let color = [val,val,val]
        let text = `<b style= "text-transform: uppercase">${stateName}</b><hr/>TOTAL MEMBERS: ${totalCount/2}`
        stateData.get("details").forEach((value,key)=>{
            text = text+`<br>${key.toLowerCase()}: ${value}`
        })
        return [color,text]
    }
    return [[70,60,80],""]
    
}

//Coloring Function
export function getCyberCrimeColors(params){
    let state_id = params[0]
    let year = params[1]
    let color = [getColor(0.4),getColor(0.4), getColor(0.4)]
    let stateName = ""
    let text = ``
    let val = false
    if (stateCodeHashMap.has(state_id)) {
        stateName = stateCodeHashMap.get(state_id)
        let stateData = cybercrimeMap.get(stateName)
        let max = maxCyberCrimes.get(year) | 2639 
        val = stateData.get(year)
        let threshold = getColor(val/max)
        text = text+`<b style= "text-transform: uppercase">${stateName}</b><hr/>TOTAL CYBER CRIMES: `+val
        if(threshold)
            color = [threshold,threshold,threshold]
    }
    if(!val){
        text = "move slider to update map"
    }
    return [color,text];
}

/**
 * This function will convert given value of 0 to 1 range into 10,200 range
 * @param {double} value 
 */
function getColor(value){

   return Math.round((1-value)*100)
}