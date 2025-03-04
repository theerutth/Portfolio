<template>
  <div class="min-h-screen bg-black p-6">
    <h1 class="text-2xl font-bold mb-6 text-white font-montserrat">Others Works</h1>

    <!-- Card container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <!-- Each card representing a work -->
      <div v-for="(work, index) in works" :key="index"
        class="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img :src="work.image" :alt="work.description"
          class="w-full h-64 object-cover rounded-t-lg cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out"
          @click="openModal(work.image)" />
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

    <!-- Modal for displaying image in full screen -->
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
// Import the images you want to use
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
      // Sample works data to display in cards
      works: [
        { image: hobby1 },
        { image: hobby2 },
        { image: hobby3 },
        { image: hobby4 },
        { image: hobby5 },
        { image: hobby7 },
        { image: hobby8 },
        { image: hobby9 },
        { image: hobby10 },
        { image: hobby11 },
      ],
      isModalOpen: false,
      modalImage: null
    };
  },
  methods: {
    openModal(image) {
      this.modalImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
/* Additional custom styles for the modal */
@media (max-width: 640px) {

  /* Mobile adjustments */
  h1 {
    font-size: 1.25rem;
    /* Adjust font size */
  }

  .group img {
    height: 16rem;
    /* Adjust image height for smaller screens */
  }

  .modal img {
    max-height: 80%;
    /* Adjust image size in modal for small screens */
  }
}

@media (min-width: 640px) and (max-width: 1024px) {

  /* Tablet adjustments */
  h1 {
    font-size: 1.5rem;
  }

  .group img {
    height: 18rem;
    /* Adjust image height for tablets */
  }
}
</style>
