<template>
  <div class="bg-image min-h-screen w-screen">
    <div class="container-crew">
      <section class="text-white">
        <h1 class="flex justify-center md:justify-start space-x-2 heading--h5">
          <span class="opacity-70">02</span> <span>Meet your crew</span>
        </h1>
        <div>
          <!-- article to insert the image shown only in mobile -->
          <article></article>
          <!-- Tabs component from Nuxt UI -->
          <article></article>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
const { crew } = useCrew()

// Data for the tabs showing each crew members
const crewMembers = crew.map((member) => ({
  index: member.key,
  label: member.name,
  position: member.position,
  content: member.description,
  image: member.image,
}))
</script>
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
