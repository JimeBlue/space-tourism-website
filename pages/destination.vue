<template>
  <div class="bg-image bg-cover bg-no-repeat min-h-screen w-screen">
    <div class="w-11/12 lg:w-full mx-auto max-w-[1250px] py-20">
      <section class="text-white">
        <p class="flex justify-center space-x-2 uppercase tracking-widest">
          <span class="opacity-70">01</span> <span>Pick your destination</span>
        </p>

        <div class="mt-6">
          <!-- Planet images only shown up to screen size lg -->
          <article
            v-for="(item, index) in items"
            :key="item.label"
            class="lg:hidden"
          >
            <img
              :src="item.image"
              :alt="item.label"
              v-if="index === selectedTabIndex"
              class="h-[170px] w-[170px] mx-auto"
            />
          </article>
          <!-- Tabs component from Nuxt UI -->
          <article class="mt-6">
            <UTabs :items="items" :ui="uiSettings" @change="onChange">
              <template #item="{ item }" class="">
                <div class="lg:flex">
                  <img
                    :src="item.image"
                    :alt="item.label"
                    class="hidden lg:block"
                  />
                  <article>
                    <h2>{{ item.label }}</h2>
                    <p>{{ item.content }}</p>
                    <p>{{ item.distance }}</p>
                    <p>{{ item.travelTime }}</p>
                  </article>
                </div>
              </template>
            </UTabs>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
const { planets } = usePlanet()

// Data for the tabs
const items = planets.map((planet) => ({
  label: planet.name,
  index: planet.name,
  content: planet.description,
  travelTime: planet.travelTime,
  distance: planet.distance,
  image: planet.image,
}))

// Changes the planet image shown up to lg according to the tab that is selected
const selectedTabIndex = ref(0)
const onChange = (index) => {
  selectedTabIndex.value = index
}

// Sets classes for the tab's bar
const uiSettings = {
  list: {
    base: 'relative lg:w-1/2 lg:ml-[50%]',
    background: '',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-1',
    height: 'h-10',
    width: 'w-full',
    marker: {
      wrapper:
        'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: '',
      rounded: 'rounded-md',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-white tracking-widest underline decoration-8',
      inactive: 'text-indigo-200 tracking-widest',
      height: 'h-8',
      padding: 'px-3',
      size: 'text-sm',
      font: 'font-medium',
      rounded: 'rounded-md',
      shadow: '',
    },
  },
}
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
