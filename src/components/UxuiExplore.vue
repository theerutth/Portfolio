<template>
  <div class="min-h-screen bg-black p-6">
    <h1 class="text-2xl font-bold mb-6 text-white font-montserrat">UX/UI Works</h1>

    <!-- Filter Categories -->
    <div class="mb-6 flex gap-4">
      <button v-for="category in uniqueCategories" :key="category" @click="filterByCategory(category)"
        :class="{ 'bg-white text-gray-500 hover:bg-white hover:text-black font-semibold': selectedCategory === category, '': selectedCategory !== category }"
        class="text-sm px-4 py-2 rounded-full border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
        {{ category }}
      </button>
      <!-- <button @click="resetFilter"
        class="px-4 py-2 rounded-full bg-gray-400 text-white text-sm font-medium transition-all duration-300">Clear
        Filter</button> -->
    </div>

    <!-- Card container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div v-for="(work, index) in filteredWorks" :key="index"
        class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 max-w-xs mx-auto"
        @click="openModal(index)">
        <!-- Image Gallery Section inside Card -->
        <div class="w-full h-64 overflow-hidden">
          <img :src="work.images[0]" :alt="work.description" class="w-full h-full object-cover rounded-t-lg" />
        </div>

        <!-- Work details -->
        <div class="p-6 space-y-4">
          <h2 class="text-3xl font-montserrat text-black mb-2 hover:text-primary transition-colors">{{ work.name }}</h2>
          <p class="text-gray-600 text-sm">{{ work.date }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="(tag, tagIndex) in work.category" :key="tagIndex"
              class="text-xs bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
              {{ tag }}
            </span>
          </div>
          <p class="text-gray-700 text-base">{{ truncateDescription(work.description) }}</p>
        </div>
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-white flex flex-col justify-center items-center z-50 p-6">
      <button @click="closeModal"
        class="absolute top-6 right-6 text-black text-4xl hover:text-gray-400">&times;</button>

      <!-- Horizontal Scrollable Image Gallery -->
      <div class="w-full h-3/4 flex overflow-x-auto space-x-4 px-10 modal-gallery">
        <div v-for="(img, imgIndex) in selectedWork.images" :key="imgIndex" class="flex-shrink-0 w-full h-full">
          <img :src="img" :alt="selectedWork.description" class="w-full h-full object-contain" />
        </div>
      </div>

      <!-- Work Details -->
      <div class="bg-black bg-opacity-90 p-6 rounded-lg text-white mt-4 max-w-2xl">
        <h2 class="text-2xl font-montserrat mb-2">{{ selectedWork.name }}</h2>
        <p class="text-gray-400 text-sm mb-3">{{ selectedWork.date }}</p>

        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="(tag, tagIndex) in selectedWork.category" :key="tagIndex"
            class="text-xs bg-gray-600 text-white py-1 px-3 rounded-full">
            {{ tag }}
          </span>
        </div>
        <p class="text-gray-300 font-montserrat text-base">{{ selectedWork.description }}</p>
      </div>

    </div>

    <!-- Go Back Button -->
    <router-link to="/">
      <div class="flex justify-center mt-12">
        <button
          class="text-white font-medium text-lg p-4 px-8 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
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
        { name: 'Capstone Project', date: '2024-06-10', description: 'Designed the complete User Interface, including the system’s organization and functionality.', images: [cp1, cp2, cp3, cp4], category: ['Web Design'] },
        { name: 'KS Global Invest [Internship]', date: '2023-01-06', description: 'Responsible for the design of the User Interface, including the website’s structure and functionality.', images: [ks1, ks2, ks3], category: ['Web Design'] },
        { name: 'ERC [Internship]', date: '2023-02-08', description: 'Led the end-to-end design of the User Interface, collaborating with stakeholders, conducting user research, and ensuring system functionality aligned with project goals.', images: [er1, er2, er3], category: ['Mobile', 'UI Design'] },
        { name: 'ProactiveGuard', date: '2023-10-01', description: 'Redesigned a security services website to enhance UX, focusing on intuitive navigation and a professional visual layout.', images: [pa1, pa2, pa3, pa4], category: ['Web Design'] },
        { name: 'Plan Trip Application', date: '2024-06-17', description: 'Designed a travel planning app, focusing on user research, user flows, and creating a seamless UX across devices.', images: [pt1, pt2, pt3], category: ['Mobile', 'UI Design'] },
        { name: 'Menu Preview Design', date: '2023-12-23', description: 'Designed a user-friendly, visually appealing menu for a food ordering service with an emphasis on mobile responsiveness.', images: [uxui1, uxui2], category: ['Mobile', 'UI Design'] }
      ],

      isModalOpen: false,
      selectedWork: {},
      selectedCategory: null, // Filter state
      scrollPosition: 0, // Store scroll position
    };
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.works.flatMap(work => work.category))];
    },
    filteredWorks() {
      return this.selectedCategory
        ? this.works.filter(work => work.category.includes(this.selectedCategory))
        : this.works;
    },
  },
  methods: {
    openModal(workIndex) {
      this.selectedWork = this.filteredWorks[workIndex];
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling

      // Store the current scroll position
      this.scrollPosition = window.scrollY;
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = ''; // Re-enable scrolling

      // Restore the scroll position
      window.scrollTo(0, this.scrollPosition);
    },
    truncateDescription(description) {
      return description.length > 100 ? `${description.substring(0, 100)}...` : description;
    },
    filterByCategory(category) {
      this.selectedCategory = this.selectedCategory === category ? null : category;
    },
    resetFilter() {
      this.selectedCategory = null;
    },
  },
};
</script>

<style scoped>
.modal-gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 100%;
  align-items: center;
}

.modal-gallery::-webkit-scrollbar {
  display: none;
}

.modal-gallery img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.modal-gallery div {
  scroll-snap-align: start;
}
</style>
