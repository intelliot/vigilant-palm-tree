<template>
  <!--Footer-->
  <footer class="bg-xblack">
    <section class="md:py-8">
      <div class="pr-4 md:pr-24 md:mx-20 flex flex-wrap pt-4 md:pb-12">
        <div class="w-full md:w-1/3 md:p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 text-white">
              <h4 class="w-full xbold text-3xl px-6">
                {{ $t('home.bottom.content.first.title') }}
              </h4>
              <p class="mt-4 px-6 mb-3" v-html="$t('home.bottom.content.first.text')"></p>
          </div>
          <div class="flex-none text-white pl-6">
            <img src="/img/xrpl_labs_logo.svg" class="mt-4" alt="Logo: XRPL Labs" title="Logo XRPL Labs">
            <img src="/img/ripplex_logo.svg" class="mt-9" alt="Logo: RippleX" title="Logo RippleX">
          </div>
        </div>
        <div class="w-full md:w-1/3 md:p-6 mt-10 md:mt-0 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 text-white">
            <label for="email" class="w-full xbold text-3xl px-6 block">
              {{ $t('home.bottom.content.second.title') }}
            </label>
            <div class="p-6 mt-4">
              <div id="hubspotForm" v-once></div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 md:p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1">
            <h4 class="w-full xbold text-3xl px-6">
              {{ $t('home.bottom.content.third.title') }}
            </h4>

            <p class="mt-4 px-6 mb-3">
              <a href="mailto:info@xrplgrants.org">
                <img src="/img/envelope.svg" class="inline-block pt-2 mr-3" alt="Email" title="Email">info@xrplgrants.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="mx-auto px-8">
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

<script>
  export default {
    mounted() {
    const script = document.createElement("script");
    script.src="https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "8186536",
          formId: "b61423e5-1949-4ebc-965d-63c1c7fb723e",
          target: "#hubspotForm"
        })
      }
    })
  }
}
</script>
