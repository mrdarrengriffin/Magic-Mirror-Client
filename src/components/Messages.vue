<template>
<div class="messages-component">
    <div class="message">{{ this.messages[this.currentIndex] }}</div>
</div>
</template>
<script>
export default {
    name: 'Messages',
    data(){
        return{
            currentIndex: 0,
            messages:['I held up my clock to a mirror. It was time for reflection.','What does a cheese say to itself in a mirror? Halloumi.','Think I would enjoy working as a mirror cleaner. It’s just something I could really see myself doing.','My mirror ball and my smoke machine aren’t working.  I’ll have to call a disco tech to fix them.','The rear view mirror fell out of my car a couple of months ago and I have never replaced it. Haven’t looked back since.','Lots of tabloid news stories about vampires recently. Can’t see them in The Mirror though.','Spotted Santa’s assistant taking a photo in a mirror. Think it was an elfie.','Got asked to leave a hall of mirrors the other week.  I said “Don’t worry, I’ll see myself out”.','When The Queen takes a photo in the mirror, is it a onesie?','On reflection, vampires aren’t that scary.','If vampires have no reflection, how do they do their hair?']
        }
    },
    methods:{
        nextMessage: function(){
            this.currentIndex++;
            if(this.currentIndex == this.messages.length){this.currentIndex = 0}
        },
        previousMessage: function(){
            if(this.currentIndex == 0){this.currentIndex = this.messages.length}
            this.currentIndex--;
        },
        randomMessage: function(){
            if(this.messages.length == 1){currentIndex = 0;return;}
            var newIndex = Math.floor(Math.random() * this.messages.length-1) + 1
            if(newIndex == this.currentIndex){
                this.randomMessage()
                }else{
                this.currentIndex = newIndex;
            }
        }
    },
    created(){
        this.randomMessage();
        setInterval(this.randomMessage,60*1000);
    }
}
</script>
<style scoped>
    .message{
        color:#ffffff;
        width:75%;
        margin:0 auto;
        line-height:32pt;
    }
</style>