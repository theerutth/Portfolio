<template>
  <div class="min-h-screen bg-black p-6">
    <h1 class="text-3xl font-bold mb-8 text-white font-montserrat text-center">UX/UI WORKS</h1>

    <!-- Card container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto">
      <div v-for="(work, index) in works" :key="index"
        class="bg-white shadow-lg overflow-hidden flex flex-col rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 ease-in-out"
        @click="openModal(index)">
        <!-- Image Gallery Section inside Card -->
        <div class="w-full h-64 overflow-hidden">
          <img :src="work.images[0]" :alt="work.description"
            class="w-full h-full object-cover transition-all duration-300 rounded-t-lg" />
        </div>

        <!-- Work details -->
        <div class="p-6 flex flex-col space-y-4">
          <h2 class="text-3xl font-semibold text-black font-montserrat mb-2 hover:text-primary transition-colors">
            {{ work.name }}
          </h2>
          <p class="text-gray-600 text-sm mb-3">{{ work.date }}</p>
          <p class="text-gray-700 text-base leading-relaxed">{{ work.description }}</p>
        </div>

        <!-- Optional footer for actions -->
        <div class="px-6 pb-6 mt-auto">
          <button
            class="w-full py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-200">
            View More
          </button>
        </div>
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-white flex flex-col justify-center items-center z-50 p-6">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-6 right-6 text-black text-4xl hover:text-gray-400 transition-all"
        aria-label="Close Modal">
        &times;
      </button>

      <!-- Horizontal Scrollable Image Gallery -->
      <div class="w-full h-3/4 flex overflow-x-auto space-x-4 px-10 modal-gallery">
        <div v-for="(img, imgIndex) in selectedWork.images" :key="imgIndex" class="flex-shrink-0 w-full h-full">
          <img :src="img" :alt="selectedWork.description" class="w-full h-full object-contain" />
        </div>
      </div>

      <!-- Work Details -->
      <div class="bg-gray-900 bg-opacity-90 p-6 rounded-lg text-white text-center mt-4 max-w-2xl">
        <h2 class="text-2xl font-semibold font-montserrat mb-2 tracking-wide">{{ selectedWork.name }}</h2>
        <p class="text-gray-400 text-sm mb-3">{{ selectedWork.date }}</p>
        <p class="text-gray-300 text-base leading-normal">{{ selectedWork.description }}</p>
      </div>
    </div>

    <!-- Go Back Button -->
    <router-link to="/">
      <div class="flex justify-center mt-12">
        <button
          class="text-white font-montserrat font-medium text-lg md:text-xl p-4 px-8 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          HOME
        </button>
      </div>
    </router-link>
  </div>
</template>


<script>
import cp1 from '@/assets/uxui/cp1.png';
import cp2 from '@/assets/uxui/cp2.png';
import cp3 from '@/assets/uxui/cp3.png';
import cp4 from '@/assets/uxui/cp4.png';

import ks1 from '@/assets/uxui/ks1.png';
import ks2 from '@/assets/uxui/ks2.png';
import ks3 from '@/assets/uxui/ks3.png';

import er1 from '@/assets/uxui/er1.png';
import er2 from '@/assets/uxui/er2.png';
import er3 from '@/assets/uxui/er3.png';

import pa1 from '@/assets/uxui/pa1.png';
import pa2 from '@/assets/uxui/pa2.png';
import pa3 from '@/assets/uxui/pa3.png';
import pa4 from '@/assets/uxui/pa4.png';

import pt1 from '@/assets/uxui/pt1.png';
import pt2 from '@/assets/uxui/pt2.png';
import pt3 from '@/assets/uxui/pt3.png';

import uxui1 from '@/assets/uxui/uxui1.png';
import uxui2 from '@/assets/uxui/uxui2.png';

export default {
  name: 'GraphicExplore',
  data() {
    return {
      works: [
        {
          name: 'Capstone Project',
          date: '2024-06-10',
          description: 'A modern, responsive web design for a tech company.',
          images: [cp1, cp2, cp3, cp4],
        },
        {
          name: 'KS Global Invest [Internship]',
          date: '2023-01-06',
          description: 'A modern, responsive web design for a tech company.',
          images: [ks1, ks2, ks3],
        },
        {
          name: 'ERC [Internship]',
          date: '2023-02-08',
          description: 'A modern, responsive web design for a tech company.',
          images: [er1, er2, er3],
        },
        {
          name: 'ProactiveGuard',
          date: '2023-10-01',
          description: 'A modern, responsive web design for a tech company.',
          images: [pa1, pa2, pa3, pa4],
        },
        {
          name: 'Plan Trip Application',
          date: '2024-06-17',
          description: 'A modern, responsive web design for a tech company.',
          images: [pt1, pt2, pt3],
        },
        {
          name: 'Menu Preview Design',
          date: '2023-12-23',
          description: 'A modern, responsive web design for a tech company.',
          images: [uxui1, uxui2],
        },
      ],
      isModalOpen: false,
      selectedWork: {},
    };
  },
  methods: {
    openModal(workIndex) {
      this.selectedWork = this.works[workIndex];
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = ''; // Re-enable scrolling
    },
  },
};
</script>
<style scoped>
/* Modal Image Gallery */
.modal-gallery {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 100%;
  align-items: center;
}

/* Hide scrollbar */
.modal-gallery::-webkit-scrollbar {
  display: none;
}

/* Ensure images fit the screen */
.modal-gallery img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Optional styling for modal content */
.modal-gallery div {
  scroll-snap-align: start;
}
</style>
