<template>
  <div class="bg-image bg-cover bg-no-repeat min-h-screen">hola que tal</div>
</template>
<style scoped>
.bg-image {
  background-image: url('images/background-home-mobile.jpg');
}

@media only screen and (min-width: 768px) {
  .bg-image {
    background-image: url('images/background-home-tablet.jpg');
  }
}

@media only screen and (min-width: 1024px) {
  .bg-image {
    background-image: url('images/background-home-desktop.jpg');
  }
}
</style>
