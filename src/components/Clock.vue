<template>
<div class="clock-component">
    <div class="clock">
        <div class="date">{{ this.$parent.$parent.date || 0 | moment('dddd Do MMMM YYYY') }}</div>
        <div class="time">{{ this.$parent.$parent.date || 0 | moment('HH:mm') }}<span class="time-seconds">{{ this.$parent.$parent.date | moment('ss') }}</span></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Clock'
}
</script>
<style scoped>
.clock-component{
    margin-bottom:1rem;
}
.clock{
    color:#ffffff;
    display:inline-block;
}
.clock .date{
    height:32px;
    font-size:20pt;
    color:rgba(255,255,255,0.75);
    margin-bottom:.5rem;
}
.clock .time{
    font-size:74pt;
    font-weight:300;
}
.clock .time-seconds{
    vertical-align:top;
    display:inline-block;
    margin-top:.5rem;
    margin-left:.3rem;
    font-size:28pt;
    font-weight:300;
    color:#ffffff;
    opacity:0.5;
}
</style>