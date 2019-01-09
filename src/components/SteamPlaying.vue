<template>
<div class="steam-playing-component">

    <transition name="fade">

        <div class="game" v-if="this.steam.gameid != undefined">
            <div class="game-wrapper">
                <div class="game-text">
                    <span>{{this.steam.gameextrainfo}}</span>
                </div>
                <img :src="'https://steamcdn-a.akamaihd.net/steam/apps/'+this.steam.gameid+'/header.jpg'">
            </div>
        </div>
    </transition>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SteamGame',
    data(){
        return{
            steam:{}
        }
    },
    methods:{
        getSteamData: function(){
            axios.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=1882011A41962A15ECB79A711B123E8C&steamids=76561198060487699').then((resp) => {
                this.steam = resp.data.response.players[0]
            });
        }
    },
    created(){
        this.getSteamData();
        setInterval(this.getSteamData,5*1000);
    }
}
</script>
<style scoped>
*{
    color:#ffffff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 20s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.game{
    
}

img{
    height:100px;
}

.game-wrapper{
    padding:0;
    margin:0;
}

.game-text span{
    position: relative;
  top: 45%;
  transform: translateY(-50%);
}

.game-text{
    text-align:center;
    background:rgba(0,0,0,0.5);
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
}


</style>