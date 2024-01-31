<template>
  <div class="bg-image min-h-screen w-screen">
    <div class="container-crew">
      <section class="text-white">
        <h1 class="flex justify-center md:justify-start space-x-2 heading--h5">
          <span class="opacity-70">02</span> <span>Meet your crew</span>
        </h1>
        <div class="mt-8">
          <!-- Member image shown only in mobile -->
          <article
            v-for="(item, index) in items"
            :key="item.key"
            class="lg:hidden"
          >
            <img
              :src="item.image"
              :alt="item.label"
              class="w-1/2 mx-auto"
              v-if="index === selectedTabIndex"
            />
          </article>
          <!-- Tabs component from Nuxt UI -->
          <article>
            <UTabs :items="items" :ui="uiSettings" @change="onChange">
              <!-- Slot for tabs -->
              <template #default="{ item, selected }">
                <span
                  class="w-4 h-4 rounded-full"
                  :class="selected ? 'bg-white' : 'bg-white/40 '"
                ></span>
              </template>
              <!-- Slot for Tabs content -->
              <template #item="{ item }">
                <div>
                  <img
                    :src="item.image"
                    :alt="item.label"
                    class="hidden lg:block"
                  />
                  <article>
                    <p>{{ item.position }}</p>
                    <p>{{ item.name }}</p>
                    <p>{{ item.content }}</p>
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
const { crew } = useCrew()
const { planets } = usePlanet()

// Data for the tabs showing each crew members
const items = crew.map((member) => ({
  key: member.key,
  label: member.name,
  name: member.name,
  position: member.position,
  content: member.description,
  image: member.image,
}))

// Changes the image of a crew member shown up to lg according to the tab that is selected
const selectedTabIndex = ref(0)
const onChange = (index) => {
  selectedTabIndex.value = index
}

// Sets classes for the tab's bar
const uiSettings = {
  strategy: 'override',
  wrapper: 'relative space-y-2',
  container: 'relative w-full',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-transparent',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-1',
    height: 'h-10',
    width: 'w-full',
    marker: {
      wrapper:
        'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: 'bg-transparent',
      rounded: 'rounded-md',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-gray-900 dark:text-white',
      inactive: 'text-gray-500 dark:text-gray-400',
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
