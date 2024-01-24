<template>
  <div class="bg-black">
    <nav class="flex items-center justify-between py-4 w-11/12 mx-auto">
      <!-- logo -->
      <nuxt-link to="/">
        <IconsLogo />
      </nuxt-link>
      <!-- mobile menu -->
      <div>
        <button
          aria-label="open"
          @click="toggleNav()"
          class="md:hidden focus:outline-none w-16 h-16 flex items-end justify-end absolute top-4 right-5"
        >
          <IconsHamburger class="w-10 h-10" />
        </button>

        <transition name="slide">
          <nav
            v-if="navOpen"
            class="md:hidden w-[80%] h-screen fixed top-0 right-0 bg-opacity-10 bg-white backdrop-blur-lg z-50"
          >
            <div class="relative py-4 flex flex-col">
              <button
                aria-label="close"
                class="focus:outline-none z-20 w-16 h-16 flex items-end justify-end absolute top-4 right-5"
                @click="toggleNav()"
              >
                <IconsClose class="w-10 h-10" />
              </button>
              <ul class="mt-28 px-12">
                <NuxtLink
                  v-for="entry in navigationEntries"
                  :key="entry.label"
                  :to="entry.to"
                  class="flex space-x-2 py-2 text-base text-white"
                >
                  <span class="font-bold">{{ entry.label_number }}</span
                  ><span class="tracking-[2.75px]">{{ entry.label_text }}</span>
                </NuxtLink>
              </ul>
            </div>
          </nav>
        </transition>
      </div>
      <!-- desktop menu -->
      <ul class="hidden md:flex">
        <li>
          <NuxtLink
            v-for="entry in navigationEntries"
            :key="entry.label"
            :to="entry.to"
            class="py-5 px-3 text-white"
          >
            {{ entry.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
// For mobile menu button
const navOpen = ref(false)
const toggleNav = () => {
  navOpen.value = !navOpen.value
}

// Nav links
const navigationEntries = [
  { to: '/', label_number: '00', label_text: 'HOME' },
  { to: '/destination', label_number: '01', label_text: 'DESTINATION' },
  { to: '/crew', label_number: '02', label_text: 'CREW' },
  { to: '/technology', label_number: '03', label_text: 'TECHNOLOGY' },
]
</script>
<style scoped>
/* Slide in from right to left */
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Slide out from left to right */
.slide-leave-active {
  animation: slide-out 0.3s ease-in forwards;
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
