<template>
  <main class="container mx-auto px-4 mt-8 md:mt-16">
   <div class="flex flex-col md:flex-row justify-between items-center">
    <div class="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
     <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      Your service name
     </h1>
     <p class="text-lg md:text-xl text-gray-600 mb-8">
        Your service description
     </p>
     
    </div>
    <div class="w-full md:w-1/2 flex flex-wrap justify-center">
      <div class="w-1/2 p-2">
        <img alt="asian girl" class="w-full h-auto object-cover rounded-lg" src="assets/extension_icon@64px.png"/>
      </div>
      <div class="w-1/2 p-2">
        <img alt="black scholar" class="w-full h-auto object-cover rounded-lg" src="assets/extension_icon@64px.png"/>
      </div>
      <div class="w-1/2 p-2">
        <img alt="latin farmer" class="w-full h-auto object-cover rounded-lg" src="assets/extension_icon@64px.png"/>
      </div>
      <div class="w-1/2 p-2">
        <img alt="white athlete" class="w-full h-auto object-cover rounded-lg" src="assets/extension_icon@64px.png"/>
      </div>
    </div>
   </div>
   

   <div class="mt-16 text-center">
     <h2 class="text-3xl font-bold mb-6">Your service name</h2>
     <p class="text-lg text-gray-600 mb-8">
       Your service description
     </p>
     <NuxtLink to="/price" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
       Your service name
     </NuxtLink>
   </div>

   <div class="max-w-6xl mx-auto mt-20 mb-20 bg-gray-100 py-16 px-4 rounded-lg">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
     Over 1000+ People Trust Us
    </h2>
    <p class="text-xl text-gray-600 text-center mb-12">
     Your service description
    </p>
    
   </div>
  </main>
</template>

<script setup>
const { t } = useI18n()
import { ref, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const userState = inject('userState')

useHead({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0',
  title: 'Your service name',
  meta: [
    { name: 'description', content: 'Your service description' },
    { property: 'og:url', content: 'https://your-service-url' }, // change this to your website url
    { property: 'og:title', content: 'Your service name' },
    { property: 'og:description', content: 'Your service description' },
    { property: 'og:image', content: 'assets/extension_icon@64px.png' }, // change this to your service image
    { name: 'twitter:card', content: 'summary_large_image' },   // change this to your twitter card type
    { name: 'twitter:site', content: '@your-twitter-handle' }, // change this to your twitter handle
    { name: 'twitter:creator', content: '@your-twitter-handle' }, // change this to your twitter handle
    { name: 'twitter:title', content: 'Your service name' },
    { name: 'twitter:description', content: 'Your service description' },
    { name: 'twitter:image', content: 'assets/extension_icon@64px.png' }, // change this to your service image
  ],
  link: [
    { rel: 'canonical', href: 'https://your-service-url' }, // change this to your website url
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
    { rel: 'icon', href: '/extension_icon@64px.png' }, //change this to your service icon
  ]
})

const promptInput = ref('');
const isLoading = ref(false);
const generatedHeadshotUrl = ref('');
const showResult = ref(false);


async function updateUserCredits(credits) {
  try {
    const response = await fetch('/api/update-credits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userState.userId, credits: credits }),
    });

    const data = await response.json();
    if (data.success) {
      console.log('Credits updated successfully');
    } else {
      console.error('Failed to update credits:', data.error);
    }
  } catch (error) {
    console.error('Error updating credits:', error);
  }
}


</script>
