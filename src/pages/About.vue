<template>
  <div class="bg-xblack pl-4">
    <section class="md:pt-24 xHeroBg">
      <div class="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="md:ml-24 mt-10 text-5xl pt-10 xbold leading-tight">
            {{ $t('about.title') }}
          </h1>
        </div>
      </div>
    </section>
    <section class="bg-xblack md:ml-24 md:mt-16">
      <div class="w-full mx-auto">
        <div class="md:flex">
          <div class="p-2 md:max-w-md md:w-1/3">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('about.content.first.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-2 md:flex">
            <div class="md:w-1/2 md:px-10">
              <p class="mb-8 text-md" v-html="$t('about.content.first.textLeft')"></p>
            </div>
            <div class="md:w-1/2 md:px-10">
              <p class="mb-8 text-md" v-html="$t('about.content.first.textRight')"></p>
            </div>
          </div>
        </div>
        <div class="md:flex md:mt-16">
          <div class="p-2 md:max-w-md md:w-1/3">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('about.content.second.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-2 md:flex">
            <div class="md:w-1/2 md:px-10">
              <img src="/img/xrpl_labs_logo.svg" alt="Logo: XRPL Labs" title="Logo XRPL Labs">
              <p class="mb-8 text-md mt-4" v-html="$t('about.content.second.textLeft')"></p>
            </div>
            <div class="md:w-1/2 md:px-10">
              <img src="/img/ripplex_logo.svg" class="mt-2" alt="Logo: RippleX" title="Logo RippleX">
              <p class="mb-8 text-md mt-4" v-html="$t('about.content.second.textRight')"></p>
            </div>
          </div>
        </div>
        <div class="md:flex md:mt-16">
          <div class="p-2 md:max-w-md md:w-1/3 sm:w-full">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('about.content.third.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 p-2">
            <div class="w-full md:px-10">
              <div class="mb-8 text-md">
                <ul>
                  <li class="align-top inline-block pr-6 mb-12 md:w-1/3" v-for="(item, index) in membersContent" :key="index">
                    <img class="inline object-cover w-32 h-32 mr-2 rounded" :src="'/img/' + item.image" :alt="item.name" :title="item.name">
                    <h4 class="text-xgreen mt-3">{{ item.name }}</h4>
                    <p class="mt-2">{{ item.title }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '@/i18n'

@Component({
  name: 'About',
  components: {
  }
})
export default class About extends Vue {
  membersContent: any = i18n.t('about.content.third.members')
  created () {
    //
  }
}
</script>
