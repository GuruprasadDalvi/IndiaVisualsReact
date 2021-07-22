const stateHashMap= new Map([
    ["StateCode","StateName"],
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

let counter=0

export function firstTestFunction(idOfState,counter,total) {
    if(stateHashMap.has(idOfState)){
        let colors=[Math.round((counter/total)*255),Math.round((counter/total)*255),200]
        console.log('Satate: '+stateHashMap.get(idOfState)+"\nColor: "+colors)
        return colors
    }
    return [0,0,0]
}

function readFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}



export function lokSabhaMembersStateWise(idOfState){
    
}