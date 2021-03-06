<template>
  <div class="flex pt-2">
    <nav
      id="header"
      class="fixed w-full z-30 top-0 text-white bg-xblack"
      :class="
        windowTop > 10 || currentRouteName !== 'home' ? 'bg-dark-gray' : ''
      "
    >
      <div class="w-full pl-4 md:pl-30 mx-auto flex flex-wrap items-center justify-between mt-0">
        <div class="flex items-center">
          <router-link
            class="toggleColour text-white no-underline hover:no-underline text-xl lg:text-2xl"
            to="/"
          >
            <span class="xbold">{{ $t('header.title') }}</span>
          </router-link>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out xmenu"
          >
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full lg:flex lg:w-auto hidden mt-2 lg:mt-0 sm:bg-xgray lg:bg-transparent text-black md:p-4 lg:p-0 z-20 rounded-md"
          id="nav-content"
        >
          <ul class="md:absolute md:left-74 md:pt-2 text-lg list-reset md:flex md:justify-end md:flex-1 md:items-center">
            <li>
              <router-link
                class="inline-block text-white no-underline py-2 md:px-4"
                :class="currentRouteName === 'about' ? 'xbold underline text-xgreen' : ''"
                to="/about"
                >{{ $t('header.about') }}</router-link
              >
            <li class="md:ml-4">
              <router-link
                class="inline-block text-white no-underline py-2 md:px-4"
                :class="currentRouteName === 'faq' ? 'xbold underline text-xgreen' : ''"
                to="/faq"
                >{{ $t('header.faq') }}</router-link
              >
            </li>
          </ul>
          <a :href="$t('home.apply.link')">
            <button
              class="my-2 md:ml-3 bg-xgreen xbold py-2 px-4 rounded mr-30"
            >
              {{ $t('header.apply') }}
            </button>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '../../i18n'
import store from '../../store'

@Component({
  name: 'AppHeader',
  components: {}
})
export default class AppHeader extends Vue {
  windowTop: number = 0
  langMenuDisplayed: boolean = false
  currentLocale = this.$store.getters.localStorageLocale || i18n.locale
  created () {
    i18n.locale = this.currentLocale
  }

  setLocale (locale: string) {
    this.currentLocale = locale
    store.commit('saveLocale', locale)
    i18n.locale = locale
    this.$root.$emit('locale-changed', `${locale}`)
    this.langMenuDisplayed = false
  }

  mounted () {
    window.addEventListener('scroll', this.onScroll)
  }

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll () {
    this.windowTop = window.top.scrollY
  }

  showLangMenu () {
    this.langMenuDisplayed = !this.langMenuDisplayed
  }

  get currentRouteName () {
    return this.$route.name
  }
}
</script>
