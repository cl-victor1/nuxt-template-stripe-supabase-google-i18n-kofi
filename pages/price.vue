<template>
  <section class="min-h-screen py-16">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-16">
      <div class="mb-8 md:mb-12">
        <h2 class="max-w-xl text-center mx-auto text-5xl font-bold mb-4">Price</h2>
        <p class="max-w-screen-sm text-center text-base mx-auto text-zinc-500 mb-8">Your service description</p>
      </div>
      <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 items-center">
        <!-- Basic Plan -->
        <div class="bg-white rounded-lg p-2 border border-solid border-zinc-100 md:data-[primary=true]:-mx-4 md:data-[primary=true]:z-[100] shadow-xl">
          <div class="bg-zinc-100 rounded-md p-6 text-blue-900 from-blue-400 to-blue-600 data-[primary=true]:bg-gradient-to-bl data-[primary=true]:text-white data-[primary=true]:py-10">
            <h3 class="text-sm font-medium mb-1">Basic</h3>
            <div class="flex items-end"><span class="text-3xl font-bold leading-none">$9.9</span><span class="opacity-50 text-xs ml-2 select-none leading-5">/ month</span></div>
            <div class="mt-6"><button @click="() => handleCheckout('price_xxxx')" id="checkout-button-basic" class="h-10 text-sm font-medium rounded text-blue-900 text-center w-full bg-white active:scale-95 transition-transform">Choose this plan</button></div>
          <!-- change the price id to your price id --> 
          </div>
          <ul class="flex flex-col gap-4 p-6 py-6">
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 1</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 2</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 3</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 4</p>
            </li>
          </ul>
        </div>
        
        <!-- Pro Plan -->
        <div class="bg-white rounded-lg p-2 border border-solid border-zinc-100 md:data-[primary=true]:-mx-4 md:data-[primary=true]:z-[100] shadow-xl" data-primary="true">
          <div class="bg-zinc-100 rounded-md p-6 text-blue-900 from-blue-400 to-blue-600 data-[primary=true]:bg-gradient-to-bl data-[primary=true]:text-white data-[primary=true]:py-10" data-primary="true">
            <h3 class="text-sm font-medium mb-1">Pro</h3>
            <div class="flex items-end"><span class="text-3xl font-bold leading-none">$19</span><span class="opacity-50 text-xs ml-2 select-none leading-5">/ month</span></div>
            <div class="mt-6">
              <button @click="() => handleCheckout('price_xxxx')" id="checkout-button-pro" class="h-10 text-sm font-medium rounded text-blue-900 text-center w-full bg-white active:scale-95 transition-transform">Choose this plan</button>
            <!-- change the price id to your price id --> 
            </div>
          </div>
          <ul class="flex flex-col gap-4 p-6 py-6">
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 1</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 2</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 3</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 4</p>
            </li>
          </ul>
        </div>
        
       <!-- Enterprise Plan -->
       <div class="bg-white rounded-lg p-2 border border-solid border-zinc-100 md:data-[primary=true]:-mx-4 md:data-[primary=true]:z-[100] shadow-xl">
          <div class="bg-zinc-100 rounded-md p-6 text-blue-900 from-blue-400 to-blue-600 data-[primary=true]:bg-gradient-to-bl data-[primary=true]:text-white data-[primary=true]:py-10">
            <h3 class="text-sm font-medium mb-1">Enterprise</h3>
            <div class="flex items-end"><span class="text-3xl font-bold leading-none">$9.9</span><span class="opacity-50 text-xs ml-2 select-none leading-5">/ month</span></div>
            <div class="mt-6"><button @click="() => handleCheckout('price_xxxx')" id="checkout-button-basic" class="h-10 text-sm font-medium rounded text-blue-900 text-center w-full bg-white active:scale-95 transition-transform">Choose this plan</button></div>
          <!-- change the price id to your price id --> 
          </div>
          <ul class="flex flex-col gap-4 p-6 py-6">
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 1</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 2</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 3</p>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-4 h-4 p-0.5 bg-zinc-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="#3b67e4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg></div>
              <p>Your service feature 4</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-12 text-center">
      <NuxtLink :to="localePath('index')" class="text-blue-500 hover:underline">Back to Home</NuxtLink>
    </div>
  </section>
  
</template>

<script setup>
const localePath = useLocalePath()
const { t } = useI18n()
useHead({
  title: 'Pricing - AI Headshot Generator',
  meta: [
    { name: 'description', content: 'Pricing for Free AI Headshot Generator' },
  ],
})

async function handleCheckout(priceId) {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: priceId
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const { url } = await response.json()
    
    if (url) {
      window.location.href = url
    } else {
      throw new Error('No URL returned from checkout session creation')
    }
  } catch (error) {
    console.error('Error:', error)
    // Handle error (e.g., show error message to user)
    alert('An error occurred while processing your request. Please try again.')
  }
}
</script>