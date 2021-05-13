<template>
  <div class="bg-xblack">
    <section class="pt-24 xHeroBg">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="leading-normal text-2xl mb-8">
            {{ $t('home.hero.text') }}
          </p>
          <button class="text-xl mx-auto lg:mx-0 hover:underline bg-xgreen text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out">
            {{ $t('home.hero.action') }}
          </button>
        </div>
        <!--Right Col-->
      </div>
    </section>
    <section class="bg-xblack">
      <div class="container w-full mx-auto m-8">
        <div class="md:flex">
          <div class="p-6 md:max-w-md">
            <h3 class="text-4xl text-white font-bold leading-none mb-3">
              {{ $t('home.main.content.first.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-6 md:flex">
            <div class="md:w-1/2 px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.first.textLeft')"></p>
            </div>
            <div class="md:w-1/2 px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.first.textRight')"></p>
            </div>
          </div>
        </div>
        <div class="md:flex">
          <div class="p-6 md:max-w-md">
            <h3 class="text-4xl text-white font-bold leading-none mb-3">
              {{ $t('home.main.content.second.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-6 md:flex">
            <div class="md:w-1/2 px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.second.textLeft')"></p>
            </div>
            <div class="md:w-1/2 px-10">
              <p class="mb-8 text-md" v-html="$t('home.main.content.second.textRight')"></p>
            </div>
          </div>
        </div>
        <div class="md:flex">
          <div class="p-6 md:max-w-md">
            <h3 class="text-4xl text-white font-bold leading-none mb-3">
              {{ $t('home.main.content.third.title') }}
            </h3>
          </div>
          <div class="w-full p-6">
            <div class="w-full px-10">
              <div class="mb-8 text-md">
                <ol>
                  <li class="align-top inline-block pr-6 mb-12 md:w-1/3" v-for="(item, index) in stepsContent" :key="index">
                    <h4 class="text-xgreen uppercase">{{ item.title }}</h4>
                    <p class="mt-2">{{ item.text }}</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-20 xBg">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <h3 class="w-1/2 mx-auto my-2 text-3xl font-bold leading-tight text-center text-white" v-html="$t('home.box_1.title')"></h3>
      </div>
    </section>
    <section class="py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 text-white">
              <h4 class="w-full font-bold text-2xl px-6">
                {{ $t('home.more.content.first.title') }}
              </h4>
              <p class="w-full px-6 mt-4">
                {{ $t('home.more.content.first.subtitle') }}
              </p>
              <p class="mt-4 px-6 mb-3" v-html="$t('home.more.content.first.text')"></p>
          </div>
          <div class="flex-none text-white p-6">
            <a :href="$t('home.more.content.first.link')" target="_blank" class="font-bold">
              {{ $t('home.more.content.first.action') }} <img class="inline align-middle ml-2" :alt="$t('home.more.content.first.action')" :title="$t('home.more.content.first.action')" src="/img/right_arrow.svg">
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 text-white">
            <h4 class="w-full font-bold text-2xl px-6">
              {{ $t('home.more.content.second.title') }}
            </h4>
            <p class="w-full mt-4 px-6">
              {{ $t('home.more.content.second.subtitle') }}
            </p>
            <p class="mt-4 px-6 mb-3" v-html="$t('home.more.content.second.text')"></p>
          </div>
          <div class="flex-none text-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <a :href="$t('home.more.content.second.link')" target="_blank" class="font-bold">
                {{ $t('home.more.content.second.action') }} <img class="inline align-middle ml-2" :alt="$t('home.more.content.second.action')" :title="$t('home.more.content.second.action')" src="/img/right_arrow.svg">
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1">
            <h4 class="w-full font-bold text-2xl px-6">
              {{ $t('home.more.content.third.title') }}
            </h4>
            <p class="w-full mt-4 px-6">
              {{ $t('home.more.content.third.subtitle') }}
            </p>
            <p class="mt-4 px-6 mb-3" v-html="$t('home.more.content.third.text')"></p>
          </div>
          <div class="flex-none text-white p-6">
              <a :href="$t('home.more.content.third.link')" target="_blank" class="font-bold">
                {{ $t('home.more.content.third.action') }} <img class="inline align-middle ml-2" :alt="$t('home.more.content.third.action')" :title="$t('home.more.content.third.action')" src="/img/right_arrow.svg">
              </a>
          </div>
        </div>
      </div>
    </section>
    <section class="xBg2 bg-xgreen">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h3 class="my-4 text-4xl text-xblack font-bold leading-tight">
            {{ $t('home.apply.title') }}
          </h3>
          <button class="text-xl mx-auto lg:mx-0 hover:underline bg-xblack text-white font-bold rounded my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out">
            {{ $t('home.apply.action') }}
          </button>
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
    //
  }
}
</script>
