<template>
  <div class="flex pt-2">
    <nav
      id="header"
      class="fixed w-full z-30 top-0 text-white"
      :class="
        windowTop > 10 || currentRouteName !== 'home' ? 'bg-dark-gray' : ''
      "
    >
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <div class="pl-4 pt-2 flex items-center">
          <router-link
            class="toggleColour text-white no-underline hover:no-underline text-xl lg:text-2xl"
            to="/"
          >
            <img
              src="/img/xrp-symbol-white.svg"
              class="float-left"
              width="35"
            />
            <span class="ml-3">XRPL App Grants</span>
          </router-link>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center p-1 text-green-100 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
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
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-green-600 lg:bg-transparent text-black p-4 lg:p-0 z-20 rounded-md"
          id="nav-content"
        >
          <ul class="text-lg list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <router-link
                class="inline-block text-white no-underline py-2 px-4"
                :class="currentRouteName === 'xrpledger' ? 'font-bold' : ''"
                to="/xrp-ledger"
                >The XRP Ledger</router-link
              >
            </li>
            <li class="mr-3">
              <router-link
                class="inline-block text-white no-underline py-2 px-4"
                :class="currentRouteName === 'developers' ? 'font-bold' : ''"
                to="/developers"
                >Developers</router-link
              >
            </li>
            <li class="mr-3">
              <router-link
                class="inline-block text-white no-underline py-2 px-4"
                :class="currentRouteName === 'faq' ? 'font-bold' : ''"
                to="/faq"
                >FAQ</router-link
              >
            </li>
          </ul>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppHeader',
  components: {}
})
export default class AppHeader extends Vue {
  windowTop: number = 0
  created () {
    //
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

  get currentRouteName () {
    return this.$route.name
  }
}
</script>
