<template>
  <div class="min-h-screen bg-black p-6">
    <h1 class="text-2xl font-bold mb-6 text-white font-montserrat">UX/UI WORKS</h1>

    <!-- Card container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div v-for="(work, index) in works" :key="index"
        class="bg-white shadow-xl overflow-hidden flex flex-col rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 max-w-xl mx-auto">

        <!-- Image Gallery Section inside Card -->
        <div class="w-full h-40 overflow-x-auto flex">
          <!-- Three clickable images inside each card -->
          <div v-for="(img, imgIndex) in work.images" :key="imgIndex" class="w-1/3 h-full flex-shrink-0">
            <img :src="img" :alt="work.description"
              class="w-full h-full object-cover transition-all duration-300 cursor-pointer"
              @click="openModal(index, imgIndex)" />
          </div>
        </div>

        <!-- Work details on the bottom -->
        <div class="p-6 flex flex-col">
          <h2 class="text-xl font-bold text-black font-montserrat mb-3">{{ work.name }}</h2>
          <p class="text-gray-500 text-sm mb-3">{{ work.date }}</p>
          <p class="text-gray-600 text-base">{{ work.description }}</p>
        </div>
      </div>
    </div>

    <!-- Fullscreen Modal for Image -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      @click.self="closeModal">
      <div class="relative w-full md:w-2/3 lg:w-1/2 h-full flex justify-center items-center">
        <!-- Image Section -->
        <div class="w-full h-full">
          <img :src="works[currentImageIndex].images[currentImgIndex]" :alt="works[currentImageIndex].description"
            class="w-full h-full object-contain" />
        </div>

        <!-- Close Button -->
        <button @click="closeModal" class="absolute top-4 right-4 text-white text-3xl p-2 hover:text-gray-400">
          &times;
        </button>

        <!-- Next Button -->
        <button v-if="currentImgIndex < works[currentImageIndex].images.length - 1" @click="goToNextImage"
          class="absolute top-1/2 right-4 text-white text-3xl p-2 hover:text-gray-400">
          &rarr;
        </button>

        <!-- Previous Button -->
        <button v-if="currentImgIndex > 0" @click="goToPreviousImage"
          class="absolute top-1/2 left-4 text-white text-3xl p-2 hover:text-gray-400">
          &larr;
        </button>
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
  </div>
</template>

<script>
// Import the images you want to use for each card
import illus1 from '@/assets/illus/illus1.png';
import illus2 from '@/assets/illus/illus2.png';
import illus3 from '@/assets/illus/illus3.png';
import illus4 from '@/assets/illus/illus4.png';
import illus5 from '@/assets/illus/illus5.png';
import illus6 from '@/assets/illus/illus6.png';
import illus7 from '@/assets/illus/illus7.png';
import illus10 from '@/assets/illus/illus10.png';
import illus11 from '@/assets/illus/illus11.png';

export default {
  name: 'GraphicExplore',
  data() {
    return {
      // Assign images as an array in each work card
      works: [
        { name: 'Creative Web Design', date: '2025-01-01', description: 'A modern, responsive web design for a tech company.', images: [illus1, illus2, illus3] },
        { name: 'Brand Identity Design', date: '2025-02-01', description: 'A full rebranding of a local coffee shop, including logo and packaging.', images: [illus4, illus5, illus6] },
        { name: 'Mobile App Design', date: '2025-03-01', description: 'A sleek and user-friendly mobile app for fitness tracking.', images: [illus7, illus10, illus11] },
        { name: 'E-Commerce Redesign', date: '2025-04-01', description: 'Revamping the user experience for an online store to increase conversions.', images: [illus1, illus2, illus3] },
        { name: 'Social Media Campaign', date: '2025-05-01', description: 'A highly engaging social media campaign for a global brand.', images: [illus4, illus5, illus6] },
      ],
      isModalOpen: false,
      currentImageIndex: 0,
      currentImgIndex: 0,
    };
  },
  methods: {
    openModal(workIndex, imgIndex) {
      this.currentImageIndex = workIndex;
      this.currentImgIndex = imgIndex; // Set the specific image index for the modal
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false; // Close the modal
    },
    goToNextImage() {
      if (this.currentImgIndex < this.works[this.currentImageIndex].images.length - 1) {
        this.currentImgIndex++;
      }
    },
    goToPreviousImage() {
      if (this.currentImgIndex > 0) {
        this.currentImgIndex--;
      }
    }
  }
}
</script>

<style scoped>
/* Custom styles for the scrolling image container */
.w-full {
  max-width: 100%;
}

h1,
h2,
p {
  font-family: 'Montserrat', sans-serif;
}

img {
  object-fit: cover;
}
</style>
