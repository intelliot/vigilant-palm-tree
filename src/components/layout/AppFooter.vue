<template>
  <!--Footer-->
  <footer class="bg-xblack">
    <section class="py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 text-white">
              <h4 class="w-full font-bold text-3xl px-6">
                {{ $t('home.bottom.content.first.title') }}
              </h4>
              <p class="mt-4 px-6 mb-3" v-html="$t('home.bottom.content.first.text')"></p>
          </div>
          <div class="flex-none text-white pl-6">
            <img src="/img/xrpl_labs_logo.svg" alt="Logo: XRPL Labs" title="Logo XRPL Labs">
            <img src="/img/ripplex_logo.svg" class="mt-2" alt="Logo: RippleX" title="Logo RippleX">
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 text-white">
            <label for="email" class="w-full font-bold text-3xl px-6 block">
              {{ $t('home.bottom.content.second.title') }}
            </label>
            <div class="p-6 mt-4">
              <input class="mb-6 appearance-none bg-xgray rounded w-full py-3 px-3 text-xgray leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" :placeholder="$t('home.bottom.content.second.placeholder')">
              <button class="mt-4 text-md mx-auto lg:mx-0 hover:underline bg-xgreen text-black font-bold rounded my-4 py-3 px-6 focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out">
                {{ $t('home.bottom.content.second.action') }}
              </button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1">
            <h4 class="w-full font-bold text-3xl px-6">
              {{ $t('home.bottom.content.third.title') }}
            </h4>

            <p class="mt-4 px-6 mb-3">
              <img src="/img/envelope.svg" class="inline-block pt-2 mr-3" alt="Email" title="Email">
              grants@xrpl.org
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <div class="text-gray-600 ml-1 mt-8">v{{ version }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppFooter',
  components: {
  }
})
export default class AppFooter extends Vue {
  version = require('../../../lib/version')
  created () {
    //
  }
}
</script>
