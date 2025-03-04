<template>
  <div class="min-h-screen bg-black p-6">
    <h1 class="text-2xl font-bold mb-6 text-white font-montserrat">Graphic Design Works</h1>

    <!-- Card container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Each card representing a work -->
      <div v-for="(work, index) in works" :key="index" class="bg-white shadow-lg overflow-hidden">
        <img :src="work.image" :alt="work.description"
          class="w-full h-full object-cover grayscale transition-all duration-300 hover:grayscale-0" />
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
// Import the images you want to use
import illus1 from '@/assets/illus/illus1.png';
import illus2 from '@/assets/illus/illus2.png';
import illus3 from '@/assets/illus/illus3.png';
import illus4 from '@/assets/illus/illus4.png';
import illus5 from '@/assets/illus/illus5.png';
import illus6 from '@/assets/illus/illus6.png';
import illus7 from '@/assets/illus/illus7.png';
import illus10 from '@/assets/illus/illus10.png';
import illus11 from '@/assets/illus/illus11.png';
import illus12 from '@/assets/illus/illus12.png';



export default {
  name: 'GraphicExplore',
  data() {
    return {
      // Sample works data to display in cards
      works: [
        { description: 'Description of Work 1', image: illus1 },
        { description: 'Description of Work 2', image: illus2 },
        { description: 'Description of Work 3', image: illus3 },
        { description: 'Description of Work 4', image: illus4 },
        { description: 'Description of Work 5', image: illus5 },
        { description: 'Description of Work 6', image: illus6 },
        { description: 'Description of Work 7', image: illus7 },
        { description: 'Description of Work 10', image: illus10 },
        { description: 'Description of Work 11', image: illus11 },
        { description: 'Description of Work 12', image: illus12 },
      ]
    }
  }
}
</script>

<style scoped>
/* No additional custom styles needed since Tailwind CSS is used */
</style>
