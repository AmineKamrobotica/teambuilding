<template>
  <h1>explore</h1>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({}),
  created() {
    axios.get("http://localhost:5000/building/").then((res) => {
      console.log(res.data);
    });
  },
};
</script>
