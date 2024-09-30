<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Terms of Service</h1>
      
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
  title: 'Terms of Service - Free AI Headshot Generator',
  meta: [
    { name: 'description', content: 'Terms of Service for Free AI Headshot Generator' },
  ],
})
</script>