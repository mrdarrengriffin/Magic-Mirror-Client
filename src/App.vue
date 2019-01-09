<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      date: new Date(),
    };
  },
  created() {
    setInterval(this.doClockTick, 1000);
    setInterval(this.getSettings, 5000);
  },
  methods: {
    doClockTick: function() {
      this.date = new Date();
    },
    getSettings: function() {
      axios.get("http://ubuntu-server:8002/settings").then(resp => {
        if(this.$route.path != "/admin"){
          if(resp.data.route != this.$route.path){
            this.$router.push({path:resp.data.route})
          }
        }
        
      });
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
@import url("https://afeld.github.io/emoji-css/emoji.css");

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: "Roboto", sans-serif;
  background: #000000;
  overflow: hidden;
}

#app {
}

.text-center {
  text-align: center;
}
</style>
