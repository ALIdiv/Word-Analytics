<template>
  <div class="flex justify-center items-center bg-gradient-to-r
   from-blue-300 to-purple-300 w-full h-100">
    <h1 class="text-6xl md:text-8xl"><b>Word Analytics</b></h1>
  </div>
  <div class="absolute left-1/2 -translate-x-1/2 top-96 w-[80%]
   h-auto rounded-xl bg-white shadow-2xl text-white z-10">
  <div>
    <label class="text-black gap-4 flex justify-center mt-4" for="text_Input">
  <textarea
    class="w-[80%] text-xl h-60 p-4 text-left border border-gray-300 rounded-lg resize-none"
     id="text_input" placeholder="Enter Your Text">
  </textarea>
  </label>
  </div>
  <div class="flex gap-10 xl:gap-32 lg:gap-20 justify-center pt-5 md:pt-10 pb-10 w-full h-auto ">
    <div class="flex xl:gap-32 lg:gap-20 md:gap-10  justify-center pt-5
      w-full h-auto border-t-2 border-gray-200 ">
      <div class="gap-4 text-lg md:text-xl
      bg-white text-gray-500
      flex  justify-center text-center rounded-xl flex-col
      w-24 xl:w-36 h-24 xl:h-32">
      <p class="text-lg md:text-xl ">Character</p>
      <section id="text_counter">0</section>
    </div>
    <div class="gap-4 text-lg md:text-xl
      bg-white text-gray-500
      flex  justify-center text-center rounded-xl flex-col
      w-24 xl:w-36 h-24 xl:h-32">
      <p class="text-lg md:text-xl">Word</p>
      <section id="word_counter">0</section>
  </div>
  <div class="gap-4 text-lg md:text-xl
      bg-white text-gray-500
      flex  justify-center text-center rounded-xl flex-col
      w-24 xl:w-36 h-24 xl:h-32">
      <p class="text-lg md:text-xl">X</p>
    <section id="x_counter">280</section>
  </div>
  <div class="gap-4 text-lg md:text-xl
      bg-white text-gray-500
      flex  justify-center text-center rounded-xl flex-col
      w-24 xl:w-36 h-24 xl:h-32">
      <p class="text-lg md:text-xl">Facebook</p>
    <section id="facebook_counter">2200</section>
  </div>
    </div>
  </div>
</div>
</template>
<script>
import './assets/tailwind.css';

export default {
  name: 'App',
  mounted() {
    const textinput = document.getElementById('text_input');
    const textcounter = document.getElementById('text_counter');
    const wordcounter = document.getElementById('word_counter');
    const xcounter = document.getElementById('x_counter');
    const facebookcounter = document.getElementById('facebook_counter');

    function numberOftheTexts() {
      const textInputValue = textinput.value.length;
      let wordCharacter = textinput.value.split(' ').length;
      if (textinput.value.length === 0) {
        wordCharacter = 0;
      }
      let xCounter = 280 - textInputValue;
      if (xCounter < 0) {
        xCounter = 0;
        xcounter.style.color = 'red';
      } else {
        xcounter.style.color = 'gray';
      }
      let facebookCounterEL = 2200 - textInputValue;
      if (facebookCounterEL < 0) {
        facebookCounterEL = 0;
        facebookcounter.style.color = 'red';
      } else {
        facebookcounter.style.color = 'gray';
      }
      textcounter.textContent = textInputValue;
      wordcounter.textContent = wordCharacter;
      xcounter.textContent = xCounter;
      facebookcounter.textContent = facebookCounterEL;
    }

    textinput.addEventListener('input', numberOftheTexts);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
