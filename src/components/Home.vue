<template>
    <div class="home-component">
        <b-row>
            <b-col>
                <Clock/>
            </b-col>
            <b-col>
                <Weather/>
            </b-col>
            <div class="bottom-middle">
                <Messages/>
            </div>
        </b-row>
    </div>
</template>

<script>
import Weather from '@/components/Weather'
import Messages from '@/components/Messages'
import Clock from '@/components/Clock'
export default {
    name: 'Home',
    components:{Weather,Messages,Clock}
}
</script>
<style scoped>
    .bottom-middle{
        position:absolute;
        text-align:center;
        bottom:6rem;
        left:0;
        right:0;
        font-size:24pt;
        font-weight:300;
    }
</style>