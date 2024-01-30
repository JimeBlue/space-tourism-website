<template>
  <div class="bg-image min-h-screen w-screen">
    <p>crew page</p>
  </div>
</template>
<style scoped>
.bg-image {
  background: url('images/background-crew-mobile.jpg') no-repeat center center
    fixed;
  background-size: cover;
}

@media only screen and (min-width: 700px) {
  .bg-image {
    background-image: url('images/background-crew-tablet.jpg');
    background-size: cover;
  }
}

@media only screen and (min-width: 1024px) {
  .bg-image {
    background-image: url('images/background-crew-desktop.jpg');
    background-size: cover;
  }
}
</style>
