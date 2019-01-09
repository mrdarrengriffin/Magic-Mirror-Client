<template>
<div class="weather-component">
    <div class="icon">
        <img width="100" :src='"@/assets/weather-icons/"+ weather.weather[0].icon +".png"'>
    </div>
    <div class="information">
        <span class="temperature">{{ (weather.main.temp).toFixed(1) }}&deg;</span>
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
            weather:{"coord":{"lon":0,"lat":0},"weather":[{"id":0,"main":"None","description":"No Data","icon":"10d"}],"base":"stations","main":{"temp":0.0,"pressure":0,"humidity":0,"temp_min":0,"temp_max":0},"visibility":0,"wind":{"speed":0,"deg":0},"clouds":{"all":0},"dt":0,"sys":{"type":0,"id":0,"message":0,"country":"GB","sunrise":0,"sunset":0},"id":0,"name":"Kings Lynn","cod":0},
            forecast:{"cod":"200","message":0.0227,"cnt":40,"list":[{"dt":1528848000,"main":{"temp":8.69,"temp_min":8.69,"temp_max":10.03,"pressure":1029.88,"sea_level":1032.62,"grnd_level":1029.88,"humidity":94,"temp_kf":-1.34},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.46,"deg":340.005},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-13 00:00:00"},{"dt":1528858800,"main":{"temp":7.9,"temp_min":7.9,"temp_max":8.79,"pressure":1029.51,"sea_level":1032.25,"grnd_level":1029.51,"humidity":97,"temp_kf":-0.89},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.46,"deg":262.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-13 03:00:00"},{"dt":1528869600,"main":{"temp":11.25,"temp_min":11.25,"temp_max":11.7,"pressure":1029.45,"sea_level":1032.22,"grnd_level":1029.45,"humidity":90,"temp_kf":-0.45},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":2.26,"deg":254.002},"sys":{"pod":"d"},"dt_txt":"2018-06-13 06:00:00"},{"dt":1528880400,"main":{"temp":16.26,"temp_min":16.26,"temp_max":16.26,"pressure":1029,"sea_level":1031.65,"grnd_level":1029,"humidity":94,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.32,"deg":234.503},"sys":{"pod":"d"},"dt_txt":"2018-06-13 09:00:00"},{"dt":1528891200,"main":{"temp":19.2,"temp_min":19.2,"temp_max":19.2,"pressure":1027.62,"sea_level":1030.31,"grnd_level":1027.62,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":4.36,"deg":231.001},"sys":{"pod":"d"},"dt_txt":"2018-06-13 12:00:00"},{"dt":1528902000,"main":{"temp":20.24,"temp_min":20.24,"temp_max":20.24,"pressure":1025.96,"sea_level":1028.63,"grnd_level":1025.96,"humidity":76,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":5.46,"deg":230.001},"sys":{"pod":"d"},"dt_txt":"2018-06-13 15:00:00"},{"dt":1528912800,"main":{"temp":19.58,"temp_min":19.58,"temp_max":19.58,"pressure":1024.67,"sea_level":1027.35,"grnd_level":1024.67,"humidity":70,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":56},"wind":{"speed":5.41,"deg":229.001},"sys":{"pod":"d"},"dt_txt":"2018-06-13 18:00:00"},{"dt":1528923600,"main":{"temp":17.3,"temp_min":17.3,"temp_max":17.3,"pressure":1024.08,"sea_level":1026.65,"grnd_level":1024.08,"humidity":81,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":6.57,"deg":212.002},"rain":{"3h":0.205},"sys":{"pod":"n"},"dt_txt":"2018-06-13 21:00:00"},{"dt":1528934400,"main":{"temp":16.55,"temp_min":16.55,"temp_max":16.55,"pressure":1022.05,"sea_level":1024.73,"grnd_level":1022.05,"humidity":79,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":80},"wind":{"speed":6.81,"deg":213.007},"rain":{"3h":0.08},"sys":{"pod":"n"},"dt_txt":"2018-06-14 00:00:00"},{"dt":1528945200,"main":{"temp":15.51,"temp_min":15.51,"temp_max":15.51,"pressure":1020.04,"sea_level":1022.74,"grnd_level":1020.04,"humidity":82,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":64},"wind":{"speed":7.47,"deg":205.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-14 03:00:00"},{"dt":1528956000,"main":{"temp":15.54,"temp_min":15.54,"temp_max":15.54,"pressure":1017.91,"sea_level":1020.48,"grnd_level":1017.91,"humidity":80,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":9.27,"deg":207.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-14 06:00:00"},{"dt":1528966800,"main":{"temp":17.04,"temp_min":17.04,"temp_max":17.04,"pressure":1016.54,"sea_level":1019.17,"grnd_level":1016.54,"humidity":81,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":11.11,"deg":216.002},"rain":{"3h":0.03},"sys":{"pod":"d"},"dt_txt":"2018-06-14 09:00:00"},{"dt":1528977600,"main":{"temp":18.32,"temp_min":18.32,"temp_max":18.32,"pressure":1017.13,"sea_level":1019.8,"grnd_level":1017.13,"humidity":79,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":11.07,"deg":241.5},"rain":{"3h":0.18},"sys":{"pod":"d"},"dt_txt":"2018-06-14 12:00:00"},{"dt":1528988400,"main":{"temp":19.7,"temp_min":19.7,"temp_max":19.7,"pressure":1019.43,"sea_level":1022.13,"grnd_level":1019.43,"humidity":74,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":7.36,"deg":277.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-14 15:00:00"},{"dt":1528999200,"main":{"temp":18.39,"temp_min":18.39,"temp_max":18.39,"pressure":1021.89,"sea_level":1024.49,"grnd_level":1021.89,"humidity":68,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.96,"deg":291.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-14 18:00:00"},{"dt":1529010000,"main":{"temp":14.9,"temp_min":14.9,"temp_max":14.9,"pressure":1023.77,"sea_level":1026.4,"grnd_level":1023.77,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.1,"deg":288.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-14 21:00:00"},{"dt":1529020800,"main":{"temp":12,"temp_min":12,"temp_max":12,"pressure":1024.32,"sea_level":1027.06,"grnd_level":1024.32,"humidity":84,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":1.26,"deg":258.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-15 00:00:00"},{"dt":1529031600,"main":{"temp":12.05,"temp_min":12.05,"temp_max":12.05,"pressure":1024.27,"sea_level":1027,"grnd_level":1024.27,"humidity":83,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":1.42,"deg":183},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-15 03:00:00"},{"dt":1529042400,"main":{"temp":13.84,"temp_min":13.84,"temp_max":13.84,"pressure":1024.46,"sea_level":1027.13,"grnd_level":1024.46,"humidity":84,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":2.87,"deg":242.504},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-15 06:00:00"},{"dt":1529053200,"main":{"temp":16.25,"temp_min":16.25,"temp_max":16.25,"pressure":1025.07,"sea_level":1027.72,"grnd_level":1025.07,"humidity":83,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":3.42,"deg":261.503},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-15 09:00:00"},{"dt":1529064000,"main":{"temp":16.64,"temp_min":16.64,"temp_max":16.64,"pressure":1025.08,"sea_level":1027.84,"grnd_level":1025.08,"humidity":76,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":4.15,"deg":247.505},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-15 12:00:00"},{"dt":1529074800,"main":{"temp":18.1,"temp_min":18.1,"temp_max":18.1,"pressure":1024.68,"sea_level":1027.27,"grnd_level":1024.68,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.77,"deg":243.003},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-15 15:00:00"},{"dt":1529085600,"main":{"temp":17.08,"temp_min":17.08,"temp_max":17.08,"pressure":1024.56,"sea_level":1027.24,"grnd_level":1024.56,"humidity":68,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":4.26,"deg":255.504},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-15 18:00:00"},{"dt":1529096400,"main":{"temp":15.65,"temp_min":15.65,"temp_max":15.65,"pressure":1024.94,"sea_level":1027.83,"grnd_level":1024.94,"humidity":67,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":88},"wind":{"speed":1.81,"deg":263.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-15 21:00:00"},{"dt":1529107200,"main":{"temp":14.28,"temp_min":14.28,"temp_max":14.28,"pressure":1024.91,"sea_level":1027.7,"grnd_level":1024.91,"humidity":75,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":1.17,"deg":233.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-16 00:00:00"},{"dt":1529118000,"main":{"temp":13.28,"temp_min":13.28,"temp_max":13.28,"pressure":1024.91,"sea_level":1027.63,"grnd_level":1024.91,"humidity":81,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":1.26,"deg":207},"rain":{"3h":0.01},"sys":{"pod":"n"},"dt_txt":"2018-06-16 03:00:00"},{"dt":1529128800,"main":{"temp":12.81,"temp_min":12.81,"temp_max":12.81,"pressure":1025.48,"sea_level":1028.24,"grnd_level":1025.48,"humidity":93,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":1.42,"deg":288.501},"rain":{"3h":0.55},"sys":{"pod":"d"},"dt_txt":"2018-06-16 06:00:00"},{"dt":1529139600,"main":{"temp":13.19,"temp_min":13.19,"temp_max":13.19,"pressure":1026.45,"sea_level":1029.18,"grnd_level":1026.45,"humidity":100,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":0.86,"deg":166.504},"rain":{"3h":0.8},"sys":{"pod":"d"},"dt_txt":"2018-06-16 09:00:00"},{"dt":1529150400,"main":{"temp":14.75,"temp_min":14.75,"temp_max":14.75,"pressure":1026.73,"sea_level":1029.44,"grnd_level":1026.73,"humidity":100,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":1.06,"deg":301.5},"rain":{"3h":0.05},"sys":{"pod":"d"},"dt_txt":"2018-06-16 12:00:00"},{"dt":1529161200,"main":{"temp":15.27,"temp_min":15.27,"temp_max":15.27,"pressure":1026.96,"sea_level":1029.82,"grnd_level":1026.96,"humidity":92,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":2.02,"deg":12.5009},"rain":{"3h":0.01},"sys":{"pod":"d"},"dt_txt":"2018-06-16 15:00:00"},{"dt":1529172000,"main":{"temp":13.77,"temp_min":13.77,"temp_max":13.77,"pressure":1027.75,"sea_level":1030.49,"grnd_level":1027.75,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.22,"deg":12.0001},"rain":{"3h":1.67},"sys":{"pod":"d"},"dt_txt":"2018-06-16 18:00:00"},{"dt":1529182800,"main":{"temp":12.46,"temp_min":12.46,"temp_max":12.46,"pressure":1028.96,"sea_level":1031.65,"grnd_level":1028.96,"humidity":99,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":1.58,"deg":15.0046},"rain":{"3h":2.09},"sys":{"pod":"n"},"dt_txt":"2018-06-16 21:00:00"},{"dt":1529193600,"main":{"temp":11.59,"temp_min":11.59,"temp_max":11.59,"pressure":1029.85,"sea_level":1032.52,"grnd_level":1029.85,"humidity":100,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":1.93,"deg":5.50171},"rain":{"3h":2.77},"sys":{"pod":"n"},"dt_txt":"2018-06-17 00:00:00"},{"dt":1529204400,"main":{"temp":11.73,"temp_min":11.73,"temp_max":11.73,"pressure":1030.53,"sea_level":1033.17,"grnd_level":1030.53,"humidity":100,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":3.21,"deg":4.00104},"rain":{"3h":3.05},"sys":{"pod":"n"},"dt_txt":"2018-06-17 03:00:00"},{"dt":1529215200,"main":{"temp":12.88,"temp_min":12.88,"temp_max":12.88,"pressure":1031.76,"sea_level":1034.44,"grnd_level":1031.76,"humidity":99,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":36},"wind":{"speed":4.67,"deg":355.002},"rain":{"3h":0.11},"sys":{"pod":"d"},"dt_txt":"2018-06-17 06:00:00"},{"dt":1529226000,"main":{"temp":14.05,"temp_min":14.05,"temp_max":14.05,"pressure":1032.96,"sea_level":1035.82,"grnd_level":1032.96,"humidity":100,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":5.11,"deg":4.00003},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-17 09:00:00"},{"dt":1529236800,"main":{"temp":15.01,"temp_min":15.01,"temp_max":15.01,"pressure":1033.7,"sea_level":1036.51,"grnd_level":1033.7,"humidity":100,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":4.91,"deg":6.00024},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-17 12:00:00"},{"dt":1529247600,"main":{"temp":15.66,"temp_min":15.66,"temp_max":15.66,"pressure":1033.97,"sea_level":1036.76,"grnd_level":1033.97,"humidity":97,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":4.35,"deg":13.0005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-17 15:00:00"},{"dt":1529258400,"main":{"temp":14.91,"temp_min":14.91,"temp_max":14.91,"pressure":1034.58,"sea_level":1037.2,"grnd_level":1034.58,"humidity":87,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.17,"deg":5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-06-17 18:00:00"},{"dt":1529269200,"main":{"temp":11.91,"temp_min":11.91,"temp_max":11.91,"pressure":1034.87,"sea_level":1037.6,"grnd_level":1034.87,"humidity":85,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.35,"deg":3.50348},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-06-17 21:00:00"}],"city":{"id":2645456,"name":"Kings Lynn","coord":{"lat":52.7517,"lon":0.3952},"country":"GB"}},
            iconMappings:{'01':'sunny','02':'sunny_s_cloudy','03':'partly_cloudy','04':'sunny_s_cloudy','09':'rain_heavy','10':'rain','11':'thunderstorms','13':'snow','50':'fog'}
        }
    },
    methods:{
        getWeather:function(){
            axios.get('https://api.openweathermap.org/data/2.5/weather?id='+this.cityId+'&appid='+this.apiKey+'&units=metric').then((resp) => {
                this.weather = resp.data;
                this.weather.weather[0].icon = this.weather.weather[0].icon
            });
        },
        getForecast:function(){
            axios.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.cityId+'&appid='+this.apiKey+'&units=metric').then((resp) => {
                var tmpList = Array();
                for(var i in resp.data.list){
                    var day = resp.data.list[i];
                    day.weather[0].icon = day.weather[0].icon
                    if(day.dt_txt.split(" ")[1] == "12:00:00"){
                        tmpList.push(day);
                    }
                }
                resp.data.list = tmpList;
                this.forecast = resp.data;
                console.log(resp.data)
            });
        }
    },
    created(){
        this.getWeather();
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
        font-size:48pt;
        
        font-weight:300;
        margin-right:-4px;
    }
    .sunrise-sunset{
        height:32px;
        margin-bottom:.5rem;
        text-align:right;
        font-size:20pt;
        color:#ffffff;
        opacity:0.75;
    }
    .forecast{
        display:table;
        float:right;
        color:#ffffff;
    }
    .forecast-day{
        display:table-row;
        vertical-align:middle;
        opacity:1;
        height:40px;        
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
        display:table-cell;
        text-align:left;
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
        margin-right:0rem;
    }
</style>
