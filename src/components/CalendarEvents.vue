<template>
<div class="calendar-component">
    <div class="title">{{ calendar.summary }}</div>
    <ul>
        <li class="calendar-event" v-for="event in this.calendar.items" :key="event.id" :class="{started:event.started,finished:event.finished,ongoing:(event.started && !event.finished)}">
            <div class="calendar-event-summary">{{ event.summary }}</div>
            <div class="calendar-event-timeuntil">{{ (event.started ? 'started' : 'starts') }} {{ event.start.dateTime | moment("from") || event.start.date | moment("from") }}</div>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'CalendarEvents',
    data(){
        return{
            calendar:{}
        }
    },
    methods:{
        getCalendarEvents: function(){
            axios.get('http://ubuntu-server:8002/google/calendar/events').then((resp) => {
                this.calendar = resp.data.google_calendar
            });
        }
    },
    created(){
        this.getCalendarEvents();
        setInterval(this.getCalendarEvents,10*1000);
    }
}
</script>
<style scoped>
.title{
    font-size:20pt;
    color:rgba(255,255,255,1.75);
    margin-bottom:1rem;
}

.calendar-event{
    color:#ffffff;
    padding:.4rem 0;
    opacity:0.75;
}
.calendar-event.started{
    opacity:1;
}
.calendar-event.started .calendar-event-timeuntil{
    font-size:10pt;
}
.calendar-event.started .calendar-event-summary{
    font-size:16pt;
}

.calendar-event-timeuntil{
    
    font-size:11pt;
    text-align:right;
    display:inline-block;
    color:#ffffff;
    opacity:0.75;
}
.calendar-event-summary{
    display:inline-block;
    font-size:13pt;
}
.calendar-event-location{
    font-size:12pt;
}
</style>
