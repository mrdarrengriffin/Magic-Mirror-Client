<template>
<div class="weather-component">
    <div class="sunrise-sunset"><img width="32" src="@/assets/weather-icons/windy.png" style="margin-bottom:-6px;margin-right:0rem"> {{ weather.wind.speed }} | {{ weather.sys.sunset | moment('HH:mm') }}</div>
    <div class="information">
        <span class="temperature">{{ (weather.main.temp).toFixed(1) }}&deg;</span>
    </div>
    <div class="icon">
        <img width="100" :src='"@/assets/weather-icons/"+ iconMappings[weather.weather[0].icon] +".png"'>
    </div>
    <div class="forecast">
        <ul>
            <li class="forecast-day" v-for="day in forecast.list" :key="day.dt">
               <span class="forecast-dayname">{{ day.dt | moment('dddd') }}</span>
               <span class="forecast-icon"><img width="32" :src='"@/assets/weather-icons/"+ iconMappings[day.weather[0].icon] +".png"'></span>
               <span class="forecast-temperature">{{ day.main.temp.toFixed(1) }}&deg;</span>
            </li>
            </ul>
    </div>
</div>
</template> 
<script>
import axios from 'axios'
export default {
    name: 'Weather',
    data(){
        return {
            apiKey: '84a560a74d63b2d135ebe21120a6fe22',
            cityId: '2645456',
            responseStatus:null,
            weather:{"coord":{"lon":0.4,"lat":52.75},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":13.86,"pressure":1016,"humidity":87,"temp_min":13,"temp_max":15},"visibility":10000,"wind":{"speed":2.1,"deg":30},"clouds":{"all":40},"dt":1528574220,"sys":{"type":1,"id":5152,"message":0.0196,"country":"GB","sunrise":1528515290,"sunset":1528575673},"id":2645456,"name":"Kings Lynn","cod":200},
            forecast:{},
            iconMappings:{'01d':'sunny','02d':'sunny_s_cloudy','03d':'partly_cloudy','04d':'cloudy','09d':'rain_heavy','10d':'rain','11d':'thunderstorms','13d':'snow','50d':'fog'}
        }
    },
    methods:{
        getWeather:function(){
            axios.get('http://api.openweathermap.org/data/2.5/weather?id='+this.cityId+'&appid='+this.apiKey+'&units=metric').then((resp) => {
                this.weather = resp;
            });
        },
        getForecast:function(){
            axios.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.cityId+'&appid='+this.apiKey+'&units=metric').then((resp) => {
                var tmpList = Array();
                for(var i in resp.data.list){
                    var day = resp.data.list[i];
                    if(day.dt_txt.split(" ")[1] == "12:00:00"){
                        tmpList.push(day);
                    }
                }
                resp.data.list = tmpList;
                this.forecast = resp.data;
            });
        }
    },
    created(){
        //this.getWeather();
        this.getForecast();
        setInterval(this.getWeather,60*1000)
        setInterval(this.getForecast,15*60*1000)
    }
}
</script>
<style scoped>
    .weather-component{
        float:right;
        font-size:20pt;
    }
    .information{
        display:table-cell;
        vertical-align:top;
        color:#ffffff;
    }
    .icon{
        display:table-cell;
        vertical-align:middle;
    }
    .information .temperature{
        display:block;
        font-size:74pt;
        font-weight:300;
        margin-right:-4px;
    }
    .sunrise-sunset{
        height:32px;
        margin-bottom:.5rem;
        text-align:right;
        font-size:20pt;
        color:#ffffff;
        opacity:0.5;
    }
    .forecast{
        display:table;
        float:right;
        color:#ffffff;
    }
    .forecast-day{
        display:table-row;
        vertical-align:middle;
        opacity:0.75;
    }
    .forecast-dayname{
        font-size:14pt;
        text-align:right;
        display:table-cell;
        vertical-align:middle;
        text-align:right;
    }
    .forecast-temperature{
        font-size:14pt;
        text-align:left;
        display:table-cell;
        vertical-align:middle;
        padding-left:.5rem;
    }
    .forecast-icon{
        display:table-cell;
        vertical-align:middle;
        font-size:14pt;
        padding-left:.5rem;
        text-align:right;
    }
    .icon img{
        margin-right:-.5rem;
    }
</style>
