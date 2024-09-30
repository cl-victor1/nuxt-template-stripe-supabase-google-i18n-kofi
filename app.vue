<template>
    <header class="container mx-auto px-4 py-6 flex justify-between items-center">
   <NuxtLink to="/" class="flex items-center mb-4 md:mb-0">
    <img alt="Your service logo" class="w-10 h-10 rounded-lg mr-2" height="40" src="assets/favicon.ico" width="40"/>
    <span class="text-xl font-semibold">
     Your service name
    </span>
   </NuxtLink>
   <nav class="hidden md:block flex-grow">
     <ul class="flex justify-center space-x-4 md:space-x-6">
       <li>
         <NuxtLink :to="localePath('index')" class="text-gray-600 hover:text-gray-900">
          {{ $t('home') }}
         </NuxtLink>
       </li>
       <li>
         <NuxtLink :to="localePath('price')" class="text-gray-600 hover:text-gray-900">
          {{ $t('pricing') }}
         </NuxtLink>
       </li>
       <li>
         <NuxtLink :to="localePath('blog')" class="text-gray-600 hover:text-gray-900">
          {{ $t('blog') }}
         </NuxtLink>
       </li>
       <li>
         <NuxtLink :to="localePath('contact')" class="text-gray-600 hover:text-gray-900">
          {{ $t('contact') }}
         </NuxtLink>
       </li>
     </ul>
   </nav>
   <div class="flex items-center space-x-4">
      <!-- Google sign in or User info -->
      <div v-if="isGoogleScriptLoaded">
        <div v-if="!user" id="googleSignInButton">
          <div id="g_id_onload"
               :data-client_id="googleClientId"
               data-callback="handleCredentialResponse">
          </div>
          <div class="g_id_signin" data-type="standard"></div>
        </div>
        <div v-else class="flex items-center space-x-2">
          <img :src="user.picture_url" alt="User avatar" class="w-8 h-8 rounded-full">
          <span class="text-sm font-medium">{{ user.name }}</span>
          <span class="text-sm font-medium text-gray-600">Credits: {{ userState.credits }}</span>
          <button @click="signOut" class="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Sign Out
          </button>
        </div>
      </div>
      <LanguageSwitcher />
      <!-- Product Hunt badge -->
       <!-- Change to your own product -->
      <div class="flex items-center">
      <a href="https://www.producthunt.com/posts/free-ai-headshot-generator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-free&#0045;ai&#0045;headshot&#0045;generator" target="_blank">
        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=481576&theme=light" alt="Free&#0032;AI&#0032;Headshot&#0032;Generator - Versatile&#0032;Headshots&#0032;&#0124;&#0032;HeadshotGenerator&#0046;net | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
      </a>
      </div>
    </div>
   <button @click="toggleMenu" class="md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    
  </header>
  <nav :class="{'hidden': !isMenuOpen}" class="md:hidden">
    <ul class="flex flex-col items-center py-4 space-y-2 bg-white">
      <li>
        <NuxtLink @click="closeMenu" to="/" class="text-gray-600 hover:text-gray-900">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink @click="closeMenu" to="/price" class="text-gray-600 hover:text-gray-900">
          Pricing
        </NuxtLink>
      </li>
      <li>
        <NuxtLink @click="closeMenu" to="/blog" class="text-gray-600 hover:text-gray-900">
          Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink @click="closeMenu" to="/contact" class="text-gray-600 hover:text-gray-900">
          Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink @click="closeMenu" to="/links" class="text-gray-600 hover:text-gray-900">
          Resource Hub
        </NuxtLink>
      </li>
    </ul>
  </nav>
  <div>
    <NuxtPage />
  </div>
  <footer class="mt-16 py-8">
    <div class="container mx-auto px-4">
      <!-- Centered content -->
      <div class="text-center mb-6">
        <div class="flex items-center justify-center mb-4">
          <img alt="AI Headshot Generator logo" class="w-8 h-8 rounded-lg mr-2" src="assets/favicon.ico"/>
          <span class="text-lg font-semibold">
            Your service name
          </span>
        </div>
        <nav class="mb-4">
          <ul class="flex flex-wrap justify-center space-x-4">
            <li><NuxtLink to="/terms" class="text-sm text-gray-600 hover:text-gray-900">Terms of Service</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/refund" class="text-sm text-gray-600 hover:text-gray-900">Refund Policy</NuxtLink></li>
          </ul>
        </nav>
        <p class="text-gray-600 text-sm">
          © 2024 Your service name. All Rights Reserved.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref, nextTick, watch, reactive, provide } from 'vue'
const { locale, setLocale,t } = useI18n()
const localePath = useLocalePath()
const googleClientId = useRuntimeConfig().public.GOOGLE_CLIENT_ID
const isMenuOpen = ref(false)
const isGoogleScriptLoaded = ref(false)
const user = ref(null)

const userState = reactive({
  isLoggedIn: false,
  credits: 3,
  userId: null
})

provide('userState', userState)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// New functions for local storage
function saveUserState() {
  localStorage.setItem('userState', JSON.stringify(userState))
}

function loadUserState() {
  const savedState = localStorage.getItem('userState')
  if (savedState) {
    const parsedState = JSON.parse(savedState)
    Object.assign(userState, parsedState)
    return true
  }
  return false
}

function clearUserState() {
  localStorage.removeItem('userState')
}

useHead({
  script: [
    {// google sign in
      src: 'https://accounts.google.com/gsi/client',
      async: true,
      defer: true,
    },
    {// supabase
      src: 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
      onload: () => { window.dispatchEvent(new Event('supabase-loaded')); }
    },
  ],
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0',
  title: t('title'),
  meta: [
    { name: 'description', content: t('description') },
    { property: 'og:url', content: 'https://your-service-url' }, // Change to your own service url
    { property: 'og:title', content: t('title') },
    { property: 'og:description', content: t('description') },
    { property: 'og:image', content: 'assets/extension_icon@64px.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@your_twitter_handle' }, // Change to your own twitter handle
    { name: 'twitter:creator', content: '@your_twitter_handle' }, // Change to your own twitter handle
    { name: 'twitter:title', content: t('title') },
    { name: 'twitter:description', content: t('description') },
    { name: 'twitter:image', content: 'assets/your_image.jpg' }, // Change to your own image
  ],
  link: [
    { rel: 'canonical', href: 'https://your-service-url' }, // Change to your own service url
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
    { rel: 'icon', href: '/favicon.ico' }, //root here is /public 
  ]
})

// Update the handleCredentialResponse function
async function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  try {
    const res = await fetch('/api/supabase_update_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential: response.credential }),
    });
    const data = await res.json();
    if (data.success) {
      user.value = data.user;
      userState.isLoggedIn = true;
      userState.credits = data.user.credits || 3;
      userState.userId = data.user.id;
      saveUserState(); // Save state after successful login
      console.log('User logged in:', user.value);
    } else {
      console.error('Failed to log in:', data.error);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
}

// Update the signOut function
function signOut() {
  google.accounts.id.disableAutoSelect()
  google.accounts.id.revoke(user.value.email, () => {
    user.value = null
    userState.isLoggedIn = false
    userState.credits = 0
    userState.userId = null
    clearUserState(); // Clear state after sign out
    console.log('User signed out from Google')
    nextTick(() => {
      renderGoogleSignInButton()
    })
  })
}

function renderGoogleSignInButton() {
  if (window.google && window.google.accounts && window.google.accounts.id) {
    google.accounts.id.initialize({
      client_id: googleClientId,
      callback: handleCredentialResponse
    })
    google.accounts.id.renderButton(
      document.getElementById('googleSignInButton'),
      { theme: 'outline', size: 'large' }
    )
    isGoogleScriptLoaded.value = true
  } else {
    console.warn('Google Sign-In script not fully loaded yet')
  }
}

// New function to fetch user data
async function fetchUserData() {
  try {
    const res = await fetch('/api/get_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userState.userId }),
    });
    const data = await res.json();
    if (data.success) {
      user.value = data.user;
      userState.credits = data.user.credits;
      console.log('User data fetched:', user.value);
    } else {
      console.error('Failed to fetch user data:', data.error);
      clearUserState(); // Clear state if fetching user data fails
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    clearUserState(); // Clear state if fetching user data fails
  }
}

onMounted(() => {
  // Load user state from local storage
  if (loadUserState()) {
    // If user state was loaded, fetch user data from the server
    fetchUserData();
  }

  // Make the callback function available globally
  window.handleCredentialResponse = handleCredentialResponse;

  // Check for Google Sign-In script load
  const checkGoogleScriptLoaded = setInterval(() => {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      clearInterval(checkGoogleScriptLoaded)
      renderGoogleSignInButton()
    }
  }, 100)

  // Load Google Analytics Script
  const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXXX' // Change to your own Google Analytics ID
  document.body.appendChild(gaScript)

  gaScript.onload = () => {
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXXXXXXXX') // Change to your own Google Analytics ID
  }

  // Load Ko-fi script
  // Change to your own Ko-fi link
  const kofiScript = document.createElement('script');
  kofiScript.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
  kofiScript.onload = () => {
    // Initialize Ko-fi widget after script is loaded
    window.kofiWidgetOverlay.draw('buy_victor_a_coffee', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#00b9fe',
      'floating-chat.donateButton.text-color': '#fff'
    });
  };
  document.body.appendChild(kofiScript);

  renderGoogleSignInButton()
})

// Add a watcher for isGoogleScriptLoaded
watch(isGoogleScriptLoaded, (newValue) => {
  if (newValue) {
    renderGoogleSignInButton()
  }
})
</script>