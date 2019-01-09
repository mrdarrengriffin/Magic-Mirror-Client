<template>
    <div class="home-component">
        <div class="top left">
            <Clock/>
        </div>
        <div class="top right">
            <Weather/>
        </div>
        <div class="bottom left">
            <CalendarEvents/>
        </div>
        <div class="bottom right">
            <SteamPlaying/>
            <SpotifyPlayer/>
        </div>
    </div>
</template>

<script>
import CalendarEvents from "@/components/CalendarEvents";
import Weather from "@/components/Weather";
import Messages from "@/components/Messages";
import Clock from "@/components/Clock";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import SteamPlaying from "@/components/SteamPlaying";
export default {
  name: "Home",
  components: { Weather, Messages, Clock, CalendarEvents, SpotifyPlayer, SteamPlaying }
};
</script>
<style scoped>
body {
  font-family: "Roboto", sans-serif;
  background: #000000;
  overflow: hidden;
}
  /* 
  Overscan for Mirror

  Top: 1.4rem
  Bottom: 2.2rem
  Left: 0rem
  Right: 2.3rem

  */

.home-component{
  position:absolute;
  padding:2.5rem;
  top:2rem;
  bottom:2rem;
  left:2rem;
  right:2rem;
}

.top,.bottom {
  position: absolute;
}

.top{
  top:1.4rem;
}
.bottom{
  bottom:2.2rem;
}
.left{
  left:0rem
}
.right{
  right:2.3rem
}
</style>