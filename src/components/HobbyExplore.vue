<template>
  <div class="min-h-screen bg-black p-6">
    <h1 class="text-2xl font-bold mb-6 text-white font-montserrat">Others Works</h1>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button v-for="cat in uniqueCategories" :key="cat" @click="filterByCategory(cat)"
        class="text-sm px-4 py-2 rounded-full border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
        :class="{ 'bg-white text-gray-500 font-semibold': selectedCategory === cat, 'text-black': selectedCategory !== cat }">
        {{ cat }}
      </button>
    </div>


    <!-- Card Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div v-for="(work, index) in filteredWorks" :key="index"
        class="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">

        <img :src="work.image" :alt="work.category"
          class="w-full h-64 object-cover rounded-t-lg cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out"
          @click="openModal(work.image)" />

        <!-- Category Badge -->
        <div class="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
          {{ work.category }}
        </div>
      </div>
    </div>

    <!-- Go Back Button -->
    <router-link to="/">
      <div class="flex justify-center mt-12">
        <button
          class="text-white font-montserrat font-medium text-lg md:text-xl p-3 px-6 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          HOME
        </button>
      </div>
    </router-link>

    <!-- Modal for Displaying Image in Full Screen -->
    <div v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out"
      @click="closeModal">
      <div class="relative max-w-full max-h-full flex justify-center items-center">
        <img :src="modalImage" class="max-w-full max-h-screen object-contain rounded-lg shadow-2xl shadow-indigo-600" />
        <button @click="closeModal"
          class="absolute top-4 right-4 text-white text-4xl font-semibold bg-transparent hover:text-gray-300 transition-all duration-300 ease-in-out">
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import hobby1 from '@/assets/hobby/hobby1.png';
import hobby2 from '@/assets/hobby/hobby2.png';
import hobby3 from '@/assets/hobby/hobby3.png';
import hobby4 from '@/assets/hobby/hobby4.png';
import hobby5 from '@/assets/hobby/hobby5.png';
import hobby7 from '@/assets/hobby/hobby7.png';
import hobby8 from '@/assets/hobby/hobby8.png';
import hobby9 from '@/assets/hobby/hobby9.png';
import hobby10 from '@/assets/hobby/hobby10.png';
import hobby11 from '@/assets/hobby/hobby11.png';

export default {
  name: 'GraphicExplore',
  data() {
    return {
      works: [
        { image: hobby1, category: 'Drawing' },
        { image: hobby2, category: 'Drawing' },
        { image: hobby3, category: 'Drawing' },
        { image: hobby4, category: 'Drawing' },
        { image: hobby5, category: 'Illustration' },
        { image: hobby7, category: 'Drawing' },
        { image: hobby8, category: 'Drawing' },
        { image: hobby9, category: 'Drawing' },
        { image: hobby10, category: 'Poster' },
        { image: hobby11, category: 'Illustration' },
      ],
      isModalOpen: false,
      modalImage: null,
      selectedCategory: null,
    };
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.works.map(work => work.category))];
    },
    filteredWorks() {
      return this.selectedCategory
        ? this.works.filter(work => work.category === this.selectedCategory)
        : this.works;
    },
  },
  methods: {
    openModal(image) {
      this.modalImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    filterByCategory(category) {
      // Toggle category selection
      this.selectedCategory = this.selectedCategory === category ? null : category;
    },
    resetFilter() {
      this.selectedCategory = null;
    },
  },
};
</script>
