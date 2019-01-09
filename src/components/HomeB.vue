
<template>
    <div class="homeb-component">
      <div class="middle">
        <div class="bottom-gap">
            <Clock2/>
            </div>

            <SpotifyPlayer2/>
      </div>
      </div>

</template>

<script>
import CalendarEvents from "@/components/CalendarEvents";
import Weather2 from "@/components/Weather2";
import Messages from "@/components/Messages";
import Clock2 from "@/components/Clock2";
import SpotifyPlayer2 from "@/components/SpotifyPlayer2";
import SteamPlaying from "@/components/SteamPlaying";
export default {
  name: "HomeB",
  components: { Weather2, Clock2, SpotifyPlayer2}
};
</script>
<style scoped>
body,html {
 height:100%;
}
.bottom-gap{
  margin-bottom:15rem;
}
  /* 
  Overscan for Mirror

  Top: 1.4rem
  Bottom: 2.2rem
  Left: 0rem
  Right: 2.3rem

  */

.homeb-component{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  text-align:center;
}
.middle{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

</style>