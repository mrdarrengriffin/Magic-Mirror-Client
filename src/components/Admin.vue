
<template>
    <div>
        <button v-on:click="setLayout('/layout-a')">Set Layout A</button>
        <button v-on:click="setLayout('/layout-b')">Set Layout B</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeB",
  methods: {
    setLayout: function(option) {
      axios.post("http://ubuntu-server:8002/settings/route",{route:option}).then(resp => {
          return
      });
    }
  },
  created() {
    
  }
};
</script>