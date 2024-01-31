<template>
  <div
    class="bg-black bg-cover bg-no-repeat text-white py-10 min-h-screen w-screen lg:flex lg:items-center"
  >
    <section class="container-home">
      <section class="">
        <p
          class="text-lg lg:text-2xl uppercase tracking-[4.75px] text-primary text-center md:text-left"
        >
          So, you want to travel to
        </p>
        <h1 class="heading--h1 text-center md:text-left">space</h1>
        <p
          class="text-base md:text-lg text-primary tracking-wide sm:max-w-md sm:mx-auto md:mx-0 text-center lg:text-left"
        >
          Let´s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section
        class="flex justify-center items-center lg:items-end lg:justify-end 2xl:justify-center"
      >
        <NuxtLink to="/destination" class="explore-circle">
          <p class="text-black text-xl md:text-3xl font-headline uppercase">
            explore
          </p>
        </NuxtLink>
      </section>
    </section>
  </div>

  <!-- <section class="container-home">
      <section class="space-y-16 md:space-y-20 text-center md:mt-20">
        <h1
          class="text-lg uppercase tracking-[4.75px] md:text-left text-primary"
        >
          So, you want to travel to
          <span class="heading--h1 block mt-16 md:mt-24">space</span>
        </h1>
        <p
          class="text-base md:text-lg text-primary tracking-wide max-w-md mx-auto"
        >
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
    </section> -->
</template>
<style scoped>
/* .bg-image {
  background-image: url('images/background-home-mobile.jpg');
} */

/* @media only screen and (min-width: 768px) {
  .bg-image {
    background-image: url('images/background-home-tablet.jpg');
  }
} */

/* @media only screen and (min-width: 1024px) {
  .bg-image {
    background-image: url('images/background-home-desktop.jpg');
  }
} */
</style>
