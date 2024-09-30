<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Blog</h1>
      
    </div>
  </div>
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