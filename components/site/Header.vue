<template>
  <div>
    <nav class="bg-gray-800 text-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- logo  -->
          <div class="flex space-x-4">
            <a
              href="#"
              class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <IconsLogo />
            </a>
          </div>
          <!-- mobile menu button -->
          <button
            @click="isOpen = !isOpen"
            class="p-4 focus:outline-none md:hidden"
          >
            <IconsHamburger />
          </button>

          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1 ml-auto">
            <NuxtLink
              v-for="entry in navigationEntries"
              :key="entry.label"
              :to="entry.to"
              class="py-5 px-3"
            >
              {{ entry.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- mobile menu -->
      <div v-show="isOpen" class="mobile-menu md:hidden">
        <NuxtLink
          v-for="entry in navigationEntries"
          :key="entry.label"
          :to="entry.to"
          class="block py-2 px-4 text-sm hover:bg-gray-700"
        >
          {{ entry.label }}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
<script setup>
// For mobile menu button
const isOpen = ref(false)

// Nav links
const navigationEntries = [
  { to: '/', label: '00 HOME' },
  { to: '/destination', label: '01 DESTINATION' },
  { to: '/crew', label: '02 CREW' },
  { to: '/technology', label: '03 TECHNOLOGY' },
]
</script>
