<template>
  <div class="bg-image bg-black bg-cover bg-no-repeat min-h-screen">
    <div class="container-destination">
      <section class="text-white lg:mt-20">
        <h1 class="flex justify-center md:justify-start space-x-2 heading--h5">
          <span class="opacity-70">01</span> <span>Pick your destination</span>
        </h1>

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
              class="h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px] mx-auto md:my-14 lg:my-0"
            />
          </article>
          <!-- Tabs component from Nuxt UI -->
          <article
            class="mt-6 max-w-md md:max-w-xl lg:max-w-none mx-auto lg:px-8"
          >
            <UTabs :items="items" :ui="uiSettings" @change="onChange">
              <!-- Slot for tabs -->
              <template #default="{ item, selected }">
                <div>
                  <span
                    class="truncate tab-idle transition-all duration-300 ease-out delay-1000"
                    :class="
                      selected
                        ? 'text-white underline hover:decoration-white underline-offset-8 decoration-[3px]'
                        : 'text-indigo-200 hover:underline hover:decoration-gray-300 hover:underline-offset-8 hover:decoration-[3px]'
                    "
                  >
                    {{ item.label }}</span
                  >
                </div>
              </template>
              <!-- Slot for Tabs content -->
              <template #item="{ item }" class="">
                <div class="lg:grid lg:grid-cols-2 lg:gap-x-20">
                  <img
                    :src="item.image"
                    :alt="item.label"
                    class="hidden lg:block"
                  />
                  <article class="">
                    <header class="md:my-10">
                      <h2 class="heading--h2 text-center lg:text-left">
                        {{ item.label }}
                      </h2>
                      <p
                        class="text-indigo-200 font-light leading-7 tracking-wide text-center lg:text-left"
                      >
                        {{ item.content }}
                      </p>
                    </header>
                    <hr class="h-px my-8 bg-slate-700 border-0" />
                    <ul
                      class="space-y-6 md:space-y-0 text-center lg:text-left md:flex md:justify-center lg:justify-start md:space-x-16 lg:space-x-6 xl:space-x-10 2xl:space-x-16"
                    >
                      <li class="space-y-2">
                        <span class="subheading-2 heading-primary">{{
                          item.distanceLabel
                        }}</span>
                        <p class="subheading-1">{{ item.distance }}</p>
                      </li>
                      <li class="space-y-2">
                        <span class="subheading-2 heading-primary">{{
                          item.travelLabel
                        }}</span>
                        <p class="subheading-1">{{ item.travelTime }}</p>
                      </li>
                    </ul>
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
  travelLabel: planet.travelLabel,
  distance: planet.distance,
  distanceLabel: planet.distanceLabel,
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
    strategy: 'override',
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
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-all duration-300 ease-out delay-1000',
      background: '',
      active: ' tracking-widest',
      inactive: 'tracking-widest',
      height: 'h-8',
      padding: 'px-3',
      size: 'text-sm',
      font: 'font-light',
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

@media only screen and (min-width: 700px) {
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
