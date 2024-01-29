<template>
  <div class="bg-image bg-cover bg-no-repeat min-h-screen w-screen">
    <div class="w-11/12 lg:w-full mx-auto max-w-[1250px] py-20">
      <section class="text-white">
        <p>01 Pick your destination</p>
        <!-- Tabs component from Nuxt UI -->
        <div class="mt-24">
          <UTabs
            :items="items"
            :ui="{
              list: {
                base: 'relative lg:w-1/2 lg:ml-[50%]',
                background: 'bg-gray-100 dark:bg-gray-800',
                rounded: 'rounded-lg',
                shadow: '',
                padding: 'p-1',
                height: 'h-10',
                width: 'w-full',
              },
            }"
          >
            <template #item="{ item }" class="border border-yellow-300">
              <div class="lg:flex">
                <img :src="item.image" alt="" />
                <article>
                  <h2>{{ item.label }}</h2>
                  <p>{{ item.content }}</p>
                  <p>{{ item.distance }}</p>
                  <p>{{ item.travelTime }}</p>
                </article>
              </div>
            </template>
          </UTabs>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
const { planets } = usePlanet()

const items = planets.map((planet) => ({
  label: planet.name,
  index: planet.name,
  content: planet.description,
  travelTime: planet.travelTime,
  distance: planet.distance,
  image: planet.image,
  // Add more properties here if needed, like distance and travelTime
}))
</script>
<style scoped>
.bg-image {
  background-image: url('images/background-destination-mobile.jpg');
}

@media only screen and (min-width: 768px) {
  .bg-image {
    background-image: url('images/background-destination-tablet.jpg');
  }
}

@media only screen and (min-width: 1024px) {
  .bg-image {
    background-image: url('images/background-destination-desktop.jpg');
  }
}
</style>
