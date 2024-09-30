<template>
  <div class="min-h-screen flex items-center justify-center ">
    <div class="container mx-auto px-4 py-8 text-center">
      <h1 class="text-3xl font-bold mb-4 text-green-600">Order Successful</h1>
      <div class="bg-white bg-opacity-80 rounded-lg p-6 shadow-md">
        <p class="mb-4">
          Thank you for your order!
        </p>
       
      </div>
      <div class="mt-12 text-center">
        <NuxtLink :to="localePath('index')" class="text-blue-500 hover:underline">{{ $t('back_to_home') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'Your order is successful',
  meta: [
    { name: 'description', content: 'Order Successful ' },
  ],
})
</script>