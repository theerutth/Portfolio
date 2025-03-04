<template>
  <nav ref="navbar" class="text-black bg-white shadow-md sticky top-0 z-50 transition-transform duration-300">
    <div class="container mx-auto flex flex-wrap justify-around items-center py-4 px-6">
      <ul class="flex flex-wrap space-x-6 md:space-x-96 text-lg md:text-xl">
        <li>
          <a href="#about" class="transition-colors duration-300 hover:text-gray-400">ABOUT</a>
        </li>
        <li>
          <a href="#works" class="transition-colors duration-300 hover:text-gray-400">WORKS</a>
        </li>
        <li>
          <a href="#contact" class="transition-colors duration-300 hover:text-gray-400">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>

  <div>
    <!-- Header Section -->
    <div class="welcome-page min-h-screen flex justify-center items-center px-4 bg-white relative overflow-hidden">
      <div class="text-center">
        <h1 class="text-4xl md:text-8xl text-black font-montserrat animate-fadeInUp tracking-widest">
          PORT<br class="hidden md:block"> FOLIO
        </h1>
        <p class="text-lg font-montserrat md:text-2xl text-gray-700 mt-4 animate-slideIn text-opacity-90">
          Welcome to my creative space!
        </p>
      </div>
    </div>

    <!-- About Section -->
    <div id="about"
      class="about-section bg-black text-white p-10 min-h-screen flex flex-col justify-center items-center text-center space-y-6 md:space-y-8">
      <h1 class="text-4xl md:text-5xl font-montserrat font-semibold mb-6 text-white">
        ABOUT (ME)
      </h1>
      <p class="text-lg font-montserrat md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide text-white">
        "Hello, I'm Theerut, a skilled designer with expertise in graphic design and front-end development. I focus on
        creating intuitive, user-friendly solutions to complex challenges. Feel free to explore my work and connect with
        me."
      </p>
      <div class="mt-8">
        <a href="#contact"
          class="text-white font-montserrat font-medium text-lg md:text-xl p-3 px-6 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out active:scale-90">
          Let's Connect
        </a>
      </div>
    </div>

    <!-- Works Section -->
    <div id="works" class="min-h-screen bg-white items-center justify-center">
      <div class="p-10 md:pr-10 bg-white font-montserrat text-black text-5xl md:text-8xl text-right group">
        <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-100">W</span>
        <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-200">O</span>
        <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-300">R</span>
        <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-400">K</span>
        <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-500">S</span>
        <span class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-600">.</span>
      </div>
      <div class="works-section bg-white text-black p-10 md:p-10 flex flex-col justify-center">
        <a href="#graphic"
          class="border-2 text-2xl md:text-4xl text-left p-6 md:p-10 hover:bg-black hover:text-white hover:font-bold transition-all duration-300 ease-in-out transform hover:scale-105">
          <button class="flex items-center justify-between w-full">
            GRAPHIC DESIGN
            <span class="ml-2">→</span>
          </button>
        </a>
        <a href="#uxui"
          class="border-2 text-2xl md:text-4xl text-left p-6 md:p-10 hover:bg-black hover:text-white hover:font-bold transition-all duration-300 ease-in-out transform hover:scale-105">
          <button class="flex items-center justify-between w-full">
            UX/UI DESIGN
            <span class="ml-2">→</span>
          </button>
        </a>
        <a href="#hobby"
          class="border-2 text-2xl md:text-4xl text-left p-6 md:p-10 hover:bg-black hover:text-white hover:font-bold transition-all duration-300 ease-in-out transform hover:scale-105">
          <button class="flex items-center justify-between w-full">
            OTHERS WORKS
            <span class="ml-2">→</span>
          </button>
        </a>
      </div>


    </div>

    <!-- Card Preview Section -->
    <div id="graphic">
      <div class="card-preview-section bg-black p-10">
        <!-- Header Section -->
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-left font-montserrat text-3xl md:text-4xl font-bold text-white">GRAPHIC DESIGN</h2>
          <RouterLink to="/graphic-works">
            <button
              class="text-white font-montserrat font-medium text-lg md:text-xl p-3 px-6 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out active:scale-90">
              EXPLORE
            </button>
          </RouterLink>

        </div>
        <!-- Cards Section -->
        <div class="overflow-x-auto whitespace-nowrap space-x-6 flex py-4 px-2">
          <!-- Card 1 -->
          <div
            class="card bg-white h-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 inline-block min-w-[400px]">
            <img src="../assets/illus/illus1.png" alt="Project 1" class="w-full h-full object-cover">
          </div>
          <!-- Card 2 -->
          <div
            class="card bg-white h-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 inline-block min-w-[400px]">
            <img src="../assets/illus/illus2.png" alt="Project 1" class="w-full h-full object-cover">
          </div>
          <!-- Card 3 -->
          <div
            class="card bg-white h-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 inline-block min-w-[400px]">
            <img src="../assets/illus/illus3.png" alt="Project 1" class="w-full h-full object-cover">
          </div>

          <!-- Card 4 -->
          <div
            class="card bg-white h-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 inline-block min-w-[400px]">
            <img src="../assets/illus/illus4.png" alt="Project 1" class="w-full h-full object-cover">
          </div>
          <!-- Card 5 -->
          <div
            class="card bg-white h-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 inline-block min-w-[400px]">
            <img src="../assets/illus/illus7.png" alt="Project 1" class="w-full h-full object-cover">
          </div>
          <!-- Card 6 -->
          <div
            class="card bg-white h-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 inline-block min-w-[400px]">
            <img src="../assets/illus/illus11.png" alt="Project 1" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>

    <div id="uxui" class="relative">
      <div class="card-preview-section bg-black p-10 h-screen flex flex-col justify-center items-center">
        <!-- Sliding Container -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div class="flex w-full h-full transition-all duration-1000 ease-in-out" :style="slideStyle">
            <!-- Card 1 -->
            <div class="card bg-white h-full w-full shadow-lg overflow-hidden relative flex-shrink-0">
              <div class="absolute inset-0 bg-black bg-opacity-70"></div>
              <img src="../assets/uxui/cp23login.png" alt="Project 1" class="w-full h-full object-cover">
            </div>

            <!-- Card 2 -->
            <div class="card bg-white h-full w-full shadow-lg overflow-hidden relative flex-shrink-0">
              <div class="absolute inset-0 bg-black bg-opacity-70"></div>
              <img src="../assets/uxui/proactive.png" alt="Project 1" class="w-full h-full object-cover">
            </div>

            <!-- Card 3 -->
            <div class="card bg-white h-full w-full shadow-lg overflow-hidden relative flex-shrink-0">
              <div class="absolute inset-0 bg-black bg-opacity-70"></div>
              <img src="../assets/uxui/ks.png" alt="Project 1" class="w-full h-full object-cover">
            </div>
          </div>
        </div>

        <!-- Header Section -->
        <div class="relative text-center z-10 mb-8">
          <h2 class="font-montserrat text-4xl font-bold text-white">UX/UI DESIGN</h2>
          <RouterLink to="/uxui-works">
            <button
              class="text-white font-montserrat font-medium text-lg md:text-xl m-4 p-3 px-6 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out active:scale-90">
              EXPLORE
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div id="hobby" class="min-h-screen bg-black p-10 flex flex-col">
      <!-- Content Wrapper -->
      <div class="flex flex-col md:flex-row w-full h-full items-center">
        <!-- Title Section (Left) -->
        <div class="w-full md:w-2/5 md:pr-10 flex flex-col justify-center">
          <h2 class="font-montserrat text-4xl md:text-5xl font-extrabold text-white md:text-left text-center">
            OTHERS WORKS
          </h2>
          <p
            class="font-montserrat text-lg md:text-lg font-light text-gray-300 md:text-left text-center mt-4 leading-relaxed">
            "In my free time, I explore creative hobbies that inspire me. From digital illustrations to photography and
            experimental designs, this section showcases my passion-driven works. These hobbies fuel my creativity and
            help me grow as a designer."
          </p>

          <!-- Explore Button -->
          <div class="flex md:justify-start justify-center mt-6">
            <RouterLink to="/hobby-works">
              <button class="text-white font-montserrat font-medium text-lg md:text-xl py-3 px-8 border-2 border-white rounded-full 
          hover:bg-white hover:text-black transition-all duration-300 ease-in-out active:scale-95 shadow-lg">
                EXPLORE
              </button>
            </RouterLink>
          </div>
        </div>

        <!-- Card Grid Section (Right) -->
        <div
          class="w-full md:w-3/5 h-[600px] overflow-y-auto scrollbar-hide p-4 bg-black bg-opacity-40 rounded-xl shadow-xl flex-grow">
          <div class="flex flex-col gap-6">
            <!-- Card 1 -->
            <div
              class="min-h-[400px] card bg-gray-100 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="../assets/hobby/hobby1.png" alt="Hobby 1"
                class="w-full h-full object-cover filter grayscale hover:filter-none transition duration-300">
            </div>
            <!-- Card 2 -->
            <div
              class="min-h-[400px] card bg-gray-100 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="../assets/hobby/hobby5.png" alt="Hobby 2"
                class="w-full h-full object-cover filter grayscale hover:filter-none transition duration-300">
            </div>
            <!-- Card 3 -->
            <div
              class="min-h-[400px] card bg-gray-100 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="../assets/hobby/hobby9.png" alt="Hobby 3"
                class="w-full h-full object-cover filter grayscale hover:filter-none transition duration-300">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="min-h-screen bg-white flex flex-col justify-center items-center py-16 px-6 md:px-12">
      <!-- Section Heading -->
      <div class="pr-4 md:pr-10 bg-white font-montserrat text-black text-5xl md:text-8xl text-right group">
        <div class="flex space-x-1">
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-100">C</span>
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-200">O</span>
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-300">N</span>
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-400">T</span>
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-500">A</span>
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-500">C</span>
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-500">T</span>
          <span
            class="transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-hover:delay-600">.</span>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center text-black space-y-6 mb-12">
        <p class="font-montserrat text-lg text-gray-800 text-center leading-relaxed mt-4">
          "Let’s connect! If you’re looking for a designer, developer, or creative collaborator, I’d love to explore how
          we can work together. I'm open to new opportunities and excited to create something impactful and innovative."
        </p>
      </div>

      <!-- Contact List -->
      <div class="w-full max-w-2xl">
        <ul class="space-y-4">
          <!-- Email Input -->
          <li class="relative w-full">
            <div>
              <!-- Email Button (Default) -->
              <transition name="fade">
                <div v-if="!isEditing" class="w-full">
                  <button @click="isEditing = true"
                    class="w-full flex items-center gap-3 py-6 px-8 bg-white text-black text-xl hover:bg-black hover:text-white border-2 border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    Email: theerut.than@gmail.com
                  </button>
                </div>
              </transition>

              <!-- Message Input & Send Button -->
              <transition name="fade">
                <div v-if="isEditing" class="flex flex-col gap-3 bg-black p-4 backdrop-blur-md">
                  <label class="text-white font-medium py-4">Your Message</label>
                  <!-- Increased padding for more height -->
                  <input v-model="message" type="text" placeholder="Type your message..."
                    class="w-full py-3 px-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black" />
                  <button @click="sendMessage"
                    class="py-3 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-600 hover:text-white transition-all shadow-md">
                    Send Message
                  </button>
                  <button @click="isEditing = false" class="text-gray-400 text-sm hover:text-gray-300 transition-all">
                    Cancel
                  </button>
                </div>
              </transition>

            </div>
          </li>

          <!-- Phone -->
          <li>
            <a href="tel:+66 899006538">
              <button
                class="w-full flex items-center gap-3 py-6 px-8 bg-white text-black text-xl hover:bg-black hover:text-white border-2 border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Tel: +66 899006538
              </button>
            </a>
          </li>

          <!-- Behance -->
          <li>
            <a href="https://behance.net/theerutthankan" target="_blank">
              <button
                class="w-full flex items-center gap-3 py-6 px-8 bg-white text-black text-xl hover:bg-black hover:text-white border-2 border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Behance: theerutthankan
              </button>
            </a>
          </li>

          <!-- Instagram -->
          <li>
            <a href="https://www.instagram.com/trashpr0ject" target="_blank">
              <button
                class="w-full flex items-center gap-3 py-6 px-8 bg-white text-black text-xl hover:bg-black hover:text-white border-2 border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Instagram: @trashpr0ject
              </button>
            </a>
          </li>
        </ul>
      </div>

    </div>


    <!-- Footer Section -->
    <footer class="bg-black text-white py-4 md:py-6">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="text-sm text-center md:text-left">
          <p>&copy; 2025 THEERUT THANKAN. ALL RIGHTS RESERVED.</p>
        </div>
        <div class="text-center md:text-right">
          <p>DESIGN AND DEVELOPED BY THEERUT</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      lastScrollPosition: 0,
      isScrollingDown: false,
      isEditing: false,
      message: "",
      currentIndex: 0,
      slideStyle: {}
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.autoSlide();

  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {

    autoSlide() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % 3;  // Assuming 3 cards
        this.slideStyle = {
          transform: `translateX(-${this.currentIndex * 100}%)`
        };
      }, 3000);  // Change slide every 3 seconds
    },
    handleScroll() {
      const currentScrollPosition = window.scrollY;
      const navbar = this.$refs.navbar;

      if (!navbar) return;

      if (currentScrollPosition > this.lastScrollPosition) {
        this.isScrollingDown = true;
      } else {
        this.isScrollingDown = false;
      }

      navbar.style.transform = this.isScrollingDown ? "translateY(-100%)" : "translateY(0)";
      navbar.style.transition = "transform 0.3s ease-in-out";

      this.lastScrollPosition = currentScrollPosition;
    },
    sendMessage() {
      if (this.message.trim() !== "") {
        window.location.href = `mailto:theerut.than@gmail.com?subject=Contact&body=${encodeURIComponent(this.message)}`;
        this.isEditing = false;
        this.message = ""; // Reset input
      } else {
        alert("Please enter a message before sending.");
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

html {
  scroll-behavior: smooth;
}

.welcome-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-preview-section {
  overflow-x: auto;
  -ms-overflow-style: none;
  /* Hide scrollbar for IE and Edge */
  scrollbar-width: none;
  /* Hide scrollbar for Firefox */
}

.card-preview-section::-webkit-scrollbar {
  display: none;
  /* Hide scrollbar for Chrome, Safari, and Opera */
}
</style>
