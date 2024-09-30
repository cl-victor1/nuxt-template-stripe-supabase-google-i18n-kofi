<template>
  <div class="language-switcher" ref="languageSwitcherRef">
    <button
      @click="toggleDropdown"
      class="select-button"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
    >
      {{ getFullLanguageName($i18n.locale) }}
      <span class="arrow" :class="{ 'arrow-up': isOpen }">▼</span>
    </button>
    <ul
      v-if="isOpen"
      class="dropdown-menu"
      role="listbox"
    >
      <li
        v-for="locale in $i18n.locales"
        :key="locale.code"
        @click="selectLanguage(locale.code)"
        class="dropdown-item"
        role="option"
        :aria-selected="locale.code === $i18n.locale"
      >
        {{ getFullLanguageName(locale.code) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useEventListener } from '@vueuse/core'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const isOpen = ref(false)
const languageSwitcherRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (code: string) => {
  locale.value = code
  router.push(switchLocalePath(code))
  isOpen.value = false
}

const getFullLanguageName = (code: string) => {
  const languageNames: Record<string, string> = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    de: 'Deutsch',
    // Add more languages as needed
  }
  return languageNames[code] || code
}

const closeDropdown = (event: MouseEvent) => {
  if (languageSwitcherRef.value && !languageSwitcherRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

useEventListener(document, 'click', closeDropdown)
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.select-button {
  appearance: none;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #374151;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  transition: all 0.15s ease-in-out;
  width: auto;
  min-width: 80px;
  text-align: left;
  position: relative;
  white-space: nowrap;
}

.select-button:hover {
  background-color: #e5e7eb;
}

.select-button:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

.arrow {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.15s ease-in-out;
  font-size: 0.75rem;
}

.arrow-up {
  transform: translateY(-50%) rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  min-width: 100%;
  margin-top: 0.25rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-item {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}
</style>