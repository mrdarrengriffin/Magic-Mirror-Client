<template>
<div class="spotify-player-component">
    <transition name="fade">
        <div class="track" v-if="this.player.is_playing == true">
            <div class="track-image">
                <img :src="this.player.item.album.images[0].url">
            </div>
            <div class="track-detail">
                <div class="track-title">{{ this.player.item.name }}</div>
                <div class="track-artist">{{ this.player.item.artists[0].name }}</div>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SpotifyPlayer',
    data(){
        return{
            player:{}
        }
    },
    methods:{
        getCurrentlyPlaying: function(){
            axios.get('http://ubuntu-server:8002/spotify/playing').then((resp) => {
                this.player = resp.data
                
            });
        }
    },
    created(){
        this.getCurrentlyPlaying();
        setInterval(this.getCurrentlyPlaying,5*1000);
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



.track-detail{

    vertical-align:middle;
}
.track-image{
    margin: 0 auto;
    width:512px;
}
.track-image img{
    width:100%
}

.track-playing-status{
    opacity:0.5;
    font-size:10pt;
}
.track-playing-status span{
    text-transform:uppercase;
}

.track-artist{
    opacity:0.5;
    margin-top:2rem;
    font-size:24pt;
}

.track-title{
    margin-top:3rem;
    font-size:30pt;
    
    line-height:1.5rem;
    padding-bottom:.5rem;
}
</style>
