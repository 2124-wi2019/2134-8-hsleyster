window.addEventListener('load', () => {
    
startClock();
    //YOUR CODE SHOULD START BELOW THIS LINE

navigator.geolocation.getCurrentPosition(youAreHere);
    
function youAreHere(position){
   console.log(`Latitude: `+ position.coords.latitude `, Longitude: `+ 
   position.coords.longitude +`.`);
}

const buttons = document.getElementsByTagName('button');

for(const button of buttons){
    const dataId = button.dataset.id;
button.addEventListener('click', () => {
    if(dataId == 'getCurrentWX'){
        getCurrentWX();
    }
    else if(dataId == 'getFiveDay') {
            getFiveDay();
        }
    })
}

function getCurrentWX() {
    console.log(`getCurrentWX() invoked`);
    let url1 = `api.openweathermap.org/data/2.5/weather?` + `lat=` + position.coords.latitude +
    `& lon= ` + position.coords.longitude + `appid=71dfc23ce6545882e51d790f8d5fc7e`;

    fetch (url1)
        .then(response => response.json() )
            .then( (location => {

            let currentWxHolder = document.getElementById('currentWxHolder');
            let h2 = document.createElement('h2');
            h2.innerHTML = location.name;
            currentWxHolder.appendChild(h2);

            let div1 = document.createElement('div');
            div1.innerHTML = `Current Temp: ` + location.main.temp(imperial);
            currentWxHolder.appendChild(div1);
            
            let div2 = document.createElement('div');
            div2.innerHTML = `Max Temp: `+ location.main.temp_max(imperial);
            currentWxHolder.appendChild(div2);

            let div3 = document.createElement('div');
            div3.innerHTML = `Min Temp: `+ location.main.temp_min(imperial);
            currentWxHolder.appendChild(div3);

}))
}


function getFiveDay() {
    console.log(`getFiveDay() invoked`);
    let url2 = `api.openweathermap.org/data/2.5/forcast?lat=` + position.coords.latitude + 
    `&lon=`+ position.coords.latitude + `&appid=71dfc23ce6545882e51d790f8d5fc7e`;

    fetch(url2)
        .then( response => response.json())
            .then( (list => {

        let fiveDayInfoHolder = document.getElementById('fiveDayInfoHolder');
        let h2 = document.createElement('h2');
        h2.innerHTML = city.name;
        fiveDayInfoHolder.appendChild(h2);

        let div1 = document.createElement('div');
        div1.innerHTML = '3 Hour Forcast';
        fiveDayInfoHolder.appendChild(div1);

        let div2 = document.createElement('div');
        div2.innerHTML = `Forcast Time UTC: ` + list.dt_txt;
        fiveDayInfoHolder.appendChild(div2);

        let div3 = document.createElement('div');
        div3.innerHTML = `Temperature: ` + list.main.temp(imperial);
        fiveDayInfoHolder.appendChild(div3);

        let div4 = document.createElement('div');
        div4.innerHTML = `Max Temperature: ` + list.main.temp_max(imperial);
        fiveDayInfoHolder.appendChild(div4);

        let div5 = document.createElement('div');
        div5.innerHTML = `Min Temperature: ` + list.main.temp_min(imperial);
        fiveDayInfoHolder.appendChild(div5);

            }))
                
}

});
class WeatherForcast {
    constructor(date, temp, minTemp, maxTemp){
        this.date = date;
        this.temp = temp;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
    }
    getDate(){
        return this.date;
    }
    getTemp(){
        return this.temp;
    }
    getMaxTemp(){
        return this.maxTemp;
    }
    getMinTemp(){
        return this.minTemp;
    }
    getDayString(){
        let dy = new Date();
        dy.getDay.toString();
        let m = new Date();
        m.getMonth();
        let dt = new Date();
        dt.getDate();
        this.date = `${dy} , ${m} , ${dx}`;
        this.dayString = this.date;
        return this.dayString;
    }
}