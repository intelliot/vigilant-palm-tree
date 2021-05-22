<template>
  <div class="bg-xblack">
    <section class="pt-4 md:pt-24 xHeroBg xHeroBgMobile">
      <div class="md:pr-24 mx-30 flex flex-wrap flex-col md:flex-row items-center pHero">
        <div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-6xl xbold leading-tight preLine">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="leading-normal text-md md:mb-8 preLine">
            {{ $t('home.hero.text') }}
          </p>
          <a :href="$t('home.apply.link')">
            <button class="text-xl mx-auto lg:mx-0 bg-xgreen text-gray-800 xbold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline">{{ $t('home.hero.action') }}</button>
          </a>
        </div>
      </div>
    </section>
    <section class="bg-xblack">
      <div class="pr-4 md:pr-24 w-full mx-4 md:mx-30">
        <div class="md:flex md:mt-26">
          <div class="p-2 md:max-w-md md:w-1/3">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('home.main.content.first.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-2 md:flex">
            <div class="md:w-1/2 md:px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.first.textLeft')"></p>
            </div>
            <div class="md:w-1/2 md:px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.first.textRight')"></p>
            </div>
          </div>
        </div>
        <div class="md:flex md:mt-26">
          <div class="p-2 md:max-w-md md:w-1/3">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('home.main.content.second.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-2 md:flex">
            <div class="md:w-1/2 md:px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.second.textLeft')"></p>
            </div>
            <div class="md:w-1/2 md:px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.second.textRight')"></p>
            </div>
          </div>
        </div>
        <div class="md:flex md:mt-26">
          <div class="p-2 md:max-w-md md:w-1/3">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('home.main.content.third.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-2 md:flex">
            <div class="w-full md:px-10">
              <div class="mb-14 text-md">
                <ol>
                  <li class="align-top inline-block pr-6 mb-12 md:w-1/3" v-for="(item, index) in stepsContent" :key="index">
                    <h4 class="text-xgreen uppercase xbold">{{ item.title }}</h4>
                    <p class="mt-2">{{ item.text }}</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="xl:pt-20 bg-no-repeat bg-contain xl:bg-cover xBg">
      <div class="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <h3 class="w-1/2 mx-auto my-2 text-3xl xbold leading-tight text-center text-white" v-html="$t('home.box_1.title')"></h3>
      </div>
    </section>
    <section class="md:py-8">
      <div class="pr-4 md:pr-24 md:mx-20 flex flex-wrap pt-4 md:pb-12">
        <div class="w-full md:w-1/3 md:p-6 flex flex-col">
          <div class="flex-1 text-white">
              <h4 class="w-full xbold text-2xl px-6">
                {{ $t('home.more.content.first.title') }}
              </h4>
              <p class="w-full px-6 mt-4">
                {{ $t('home.more.content.first.subtitle') }}
              </p>
              <p class="mt-4 px-6 mb-3" v-html="$t('home.more.content.first.text')"></p>
          </div>
          <div class="flex-none text-white p-6">
            <a :href="$t('home.more.content.first.link')" target="_blank" class="xbold">
              {{ $t('home.more.content.first.action') }} <img class="inline align-middle ml-2" :alt="$t('home.more.content.first.action')" :title="$t('home.more.content.first.action')" src="/img/right_arrow.svg">
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 md:p-6 flex flex-col">
          <div class="flex-1 text-white">
            <h4 class="w-full xbold text-2xl px-6">
              {{ $t('home.more.content.second.title') }}
            </h4>
            <p class="w-full mt-4 px-6">
              {{ $t('home.more.content.second.subtitle') }}
            </p>
            <p class="mt-4 px-6 mb-3" v-html="$t('home.more.content.second.text')"></p>
          </div>
          <div class="flex-none text-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <a :href="$t('home.more.content.second.link')" target="_blank" class="xbold">
                {{ $t('home.more.content.second.action') }} <img class="inline align-middle ml-2" :alt="$t('home.more.content.second.action')" :title="$t('home.more.content.second.action')" src="/img/right_arrow.svg">
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col">
          <div class="flex-1">
            <h4 class="w-full xbold text-2xl md:px-6">
              {{ $t('home.more.content.third.title') }}
            </h4>
            <p class="w-full mt-4 md:px-6">
              {{ $t('home.more.content.third.subtitle') }}
            </p>
            <p class="mt-4 md:px-6 mb-3" v-html="$t('home.more.content.third.text')"></p>
          </div>
          <div class="flex-none text-white md:p-6">
              <a :href="$t('home.more.content.third.link')" target="_blank" class="xbold">
                {{ $t('home.more.content.third.action') }} <img class="inline align-middle ml-2" :alt="$t('home.more.content.third.action')" :title="$t('home.more.content.third.action')" src="/img/right_arrow.svg">
              </a>
          </div>
        </div>
      </div>
    </section>
    <section class="xBg2 bg-xgreen-default">
      <div class="md:pl-30 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h3 class="mt-12 text-4xl text-xblack xbold leading-tight">
            {{ $t('home.apply.title') }}
          </h3>
          <a :href="$t('home.apply.link')">
            <button class="text-xl mx-auto lg:mx-0 bg-xblack-hover-active text-white-hover-active xbold rounded my-6 py-4 px-8 focus:outline-none focus:shadow-outline">{{ $t('home.apply.action') }}</button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '@/i18n'

@Component({
  name: 'Home',
  components: {
  }
})
export default class Home extends Vue {
  stepsContent: any = i18n.t('home.main.content.third.steps')
  created () {
    this.$root.$on('locale-changed', (value: string) => {
      this.stepsContent = i18n.t('home.main.content.third.steps')
    })
  }
}
</script>
