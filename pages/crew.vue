<template>
  <div class="crew-background bg-black min-h-screen border border-transparent">
    <div class="container-crew">
      <section class="text-white mt-24">
        <h1
          class="flex justify-center md:justify-start space-x-2 heading--h5 lg:mt-40"
        >
          <span class="opacity-70">02</span> <span>Meet your crew</span>
        </h1>
        <div
          class="mt-8 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24 lg:h-screen overflow-x-hidden"
        >
          <article class="lg:order-2 lg:self-end">
            <!-- Crew Member image shown only in mobile and desktop-->
            <div
              v-for="(item, index) in items"
              :key="item.key"
              class="md:hidden lg:inline-block"
            >
              <img
                v-if="index === selectedTabIndex"
                :src="item.image"
                :alt="item.label"
                class="h-[327px] w-[223px] lg:w-full lg:h-full object-contain lg:object-contain mx-auto lg:mx-0"
                :class="{ 'slide-in-animation': index === selectedTabIndex }"
              />
            </div>
            <!-- Crew Member information shown only in tablet -->
            <div
              v-for="(item, index) in items"
              :key="item.key"
              class="hidden md:block lg:hidden mt-14"
            >
              <div
                v-if="index === selectedTabIndex"
                class="text-center w-1/2 mx-auto"
              >
                <h2 class="heading--h4 tracking-wider text-white/40 mb-2">
                  {{ item.position }}
                </h2>
                <h3 class="heading--h3">{{ item.name }}</h3>
                <p
                  class="text-base lg:text-xl text-indigo-200 font-light text-center leading-7 mt-4"
                >
                  {{ item.content }}
                </p>
              </div>
            </div>
          </article>
          <!-- Tabs component from Nuxt UI -->
          <article
            class="max-w-md lg:max-w-none mx-auto mt-8 lg:mt-0 lg:mb-24 lg:order-1 lg:flex lg:flex-col lg:justify-end"
          >
            <UTabs :items="items" :ui="uiSettings" @change="onChange">
              <!-- Slot for tabs -->
              <template #default="{ item, selected }">
                <span
                  class="w-4 h-4 rounded-full"
                  :class="selected ? 'bg-white' : 'bg-white/40 '"
                ></span>
              </template>
              <!-- Slot for Tabs content -->
              <template #item="{ item, selected }">
                <div class="mt-8 lg:mt-0 lg:mb-24">
                  <img
                    :src="item.image"
                    :alt="item.label"
                    class="hidden md:block lg:hidden w-[456px] h-[572px] object-contain"
                    :class="{
                      'slide-in-animation': selected,
                    }"
                  />

                  <article class="text-center lg:text-left md:hidden lg:block">
                    <h2
                      class="heading--h4 tracking-wider text-white/40 mb-1 lg:mb-6"
                    >
                      {{ item.position }}
                    </h2>
                    <h3 class="heading--h3 lg:mt-0 lg:mb-8">
                      {{ item.name }}
                    </h3>
                    <p
                      class="text-base lg:text-xl text-indigo-200 font-light mt-2 lg:mt-0"
                    >
                      {{ item.content }}
                    </p>
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
  wrapper: 'relative space-y-2 lg:flex lg:flex-col',
  container: 'relative w-full',
  base: 'focus:outline-none',
  list: {
    base: 'relative md:inset-x-28 lg:inset-x-0 lg:order-last lg:-ml-5',
    background: 'bg-transparent',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-1',
    height: 'h-10',
    width: 'w-full md:w-1/2',
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
/* Mobile Styles */
.crew-background {
  background-image: url('/images/background-crew-mobile.jpg');
  background-size: cover;
  background-position: center;
}

/* Tablet Styles */
@media (min-width: 768px) {
  .crew-background {
    background-image: url('/images/background-crew-tablet.jpg');
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .crew-background {
    background-image: url('/images/background-crew-desktop.jpg');
  }
}
/* .bg-image {
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
} */

/* Animates crew memeber image in mobile */

@media (max-width: 1024px) {
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .slide-in-animation {
    animation: slideInFromRight 0.5s ease-out forwards;
  }
}
</style>
