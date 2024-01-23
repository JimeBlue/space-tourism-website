<template>
  <div class="bg-image bg-cover bg-no-repeat min-h-screen text-white py-10">
    <section class="container-home">
      <section class="space-y-16 text-center">
        <h1 class="text-lg uppercase tracking-[4.75px] text-primary">
          So, you want to travel to
          <span class="heading--h1 block mt-16">space</span>
        </h1>
        <p class="text-base text-primary tracking-wide max-w-md mx-auto">
          Let´s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section>
        <NuxtLink to="/destination" class="explore-circle">
          <p class="text-black text-xl font-headline uppercase">explore</p>
        </NuxtLink>
      </section>
    </section>
  </div>
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
