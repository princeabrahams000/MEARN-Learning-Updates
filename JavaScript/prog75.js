weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}



// 1) create output object
wd = {}

// 2) access each item from the WeatherData array
for (data of weatherData){
    district = data.district
    currTemp = data.weather

    // 3) check district is there in the output object
    if(district in wd){
        oddTemp = wd[district]
        //4) compare the temperature
        if(oddTemp>currTemp){
            wd[district]=oddTemp
        }
        else{ //if new value is greater than old value
            wd[district] = currTemp
        }
    }
    else{ //if district not present in output object
        wd[district] = currTemp
    }
}

console.log(wd);