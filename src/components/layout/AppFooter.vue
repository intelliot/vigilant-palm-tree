<template>
  <!--Footer-->
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 text-black">
          <a class="text-pink-600 no-underline hover:no-underline text-xl lg:text-2xl" href="/">
            <img src="/img/xrp-symbol-black.svg" width="45" />
          </a>
          <div class="text-gray-900 ml-1 mt-8">xrpl.app v{{ version }}</div>
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
