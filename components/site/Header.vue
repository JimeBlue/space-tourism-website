<template>
  <div>
    <nav class="flex items-center justify-between">
      <!-- logo -->
      <nuxt-link to="/">
        <IconsLogo />
      </nuxt-link>
      <!-- mobile menu -->
      <div>
        <button
          aria-label="open"
          @click="toggleNav()"
          class="md:hidden focus:outline-none absolute top-4 right-5"
        >
          <IconsHamburger />
        </button>

        <transition name="slide">
          <nav
            v-if="navOpen"
            class="md:hidden w-[80%] h-screen fixed top-0 right-0 bg-black z-50"
          >
            <div class="relative py-4 flex flex-col">
              <button
                aria-label="close"
                class="focus:outline-none z-20 absolute top-4 right-6"
                @click="toggleNav()"
              >
                <IconsClose />
              </button>
              <ul>
                <NuxtLink
                  v-for="entry in navigationEntries"
                  :key="entry.label"
                  :to="entry.to"
                  class="block py-2 px-4 text-sm text-white"
                >
                  {{ entry.label }}
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
            class="py-5 px-3"
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
  { to: '/', label: '00 HOME' },
  { to: '/destination', label: '01 DESTINATION' },
  { to: '/crew', label: '02 CREW' },
  { to: '/technology', label: '03 TECHNOLOGY' },
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
