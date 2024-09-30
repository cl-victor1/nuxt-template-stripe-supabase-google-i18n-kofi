<template>
  <section class="min-h-screen  py-16">
    <div class="max-w-4xl mx-auto px-4">
      <div class="mb-12 sm:mb-16 md:mb-20 text-center">
        <h2 class="max-w-xl mx-auto text-4xl sm:text-5xl font-bold mb-4 text-gray-800">Your service name</h2>
        <p class="max-w-screen-sm mx-auto text-lg text-gray-600">Need help with your order? We're here to assist you.</p>
      </div>
      <div class="bg-white border border-zinc-100 rounded-lg shadow-lg p-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div class="p-6 bg-teal-500 text-white rounded-md w-full sm:w-60 md:w-72">
          <h3 class="text-xl font-bold mb-4">Contact Information</h3>
          <p class="text-base opacity-90 mb-8">Our team is ready to help you with any inquiries.</p>
          <ul class="text-base grid grid-cols-2 sm:grid-cols-1 gap-6">
            <li>
              <h4 class="font-semibold text-teal-50 mb-1">Email us</h4>
              <p>xxx@gmail.com</p>
            </li>
            <li>
              <h4 class="font-semibold text-teal-50 mb-1">Operating Hours</h4>
              <p>Mon-Fri: 9AM - 5PM PST</p>
            </li>
          </ul>
        </div>
        <div class="flex-1 min-w-0">
          <form class="flex flex-col gap-4 p-4 sm:p-6 md:p-8">
            <div class="flex flex-col sm:flex-row items-start gap-4">
              <div class="w-full sm:w-1/2">
                <label for="name" class="text-sm font-medium text-gray-700 mb-1 block">Your Name</label>
                <input type="text" id="name" class="w-full h-10 border border-solid border-gray-300 rounded-md px-3 outline-teal-500 text-base">
              </div>
              <div class="w-full sm:w-1/2">
                <label for="email" class="text-sm font-medium text-gray-700 mb-1 block">Your Email</label>
                <input type="email" id="email" class="w-full h-10 border border-solid border-gray-300 rounded-md px-3 outline-teal-500 text-base">
              </div>
            </div>
            <div>
              <label for="subject" class="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
              <input type="text" id="subject" class="w-full h-10 border border-solid border-gray-300 rounded-md px-3 outline-teal-500 text-base">
            </div>
            <div>
              <label for="message" class="text-sm font-medium text-gray-700 mb-1 block">Message</label>
              <textarea id="message" class="w-full h-32 border border-solid border-gray-300 rounded-md px-3 py-2 outline-teal-500 text-base"></textarea>
            </div>
            <div class="mt-6">
              <button class="px-6 text-base h-12 bg-teal-500 hover:bg-teal-600 active:bg-teal-600 active:scale-95 transition-all text-white rounded-md font-semibold">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-12 text-center">
        <NuxtLink :to="localePath('index')" class="text-blue-500 hover:underline">Back to Home</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
useHead({
  title: 'your product name',
  meta: [
    { name: 'description', content: 'your product description' },
   ],
})
</script>