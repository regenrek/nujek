<template>
  <div class="video-overlay" />
</template>

<script>
export default {
  props: {
    overlay: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.video-overlay {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-image: linear-gradient(
    to left top,
    #3a7294,
    #306687,
    #26597a,
    #1c4e6d,
    #114260,
    #0b3b59,
    #053552,
    #002e4b,
    #002a47,
    #002743,
    #00233f,
    #00203b
  );
  opacity: 0.78;
}
</style>
