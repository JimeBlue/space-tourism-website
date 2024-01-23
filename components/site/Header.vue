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
            <a href="#" class="py-5 px-3">00 HOME</a>
            <a href="#" class="py-5 px-3">01 DESTINATION</a>
            <a href="#" class="py-5 px-3">02 CREW</a>
            <a href="#" class="py-5 px-3">03 TECHNOLOGY</a>
          </div>
        </div>
      </div>

      <!-- mobile menu -->
      <div v-show="isOpen" class="mobile-menu md:hidden">
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700"
          >00 HOME</a
        >
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700"
          >01 DESTINATION</a
        >
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700"
          >02 CREW</a
        >
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-700"
          >03 TECHNOLOGY</a
        >
      </div>
    </nav>
  </div>
</template>
<script setup>
const isOpen = ref(false)
</script>
