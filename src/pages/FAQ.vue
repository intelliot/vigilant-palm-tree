<template>
  <div class="bg-xblack">
    <section class="md:pt-24 xHeroBg">
      <div class="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="md:ml-12 mt-10 text-5xl pt-10 font-bold leading-tight">
            {{ $t('faq.title') }}
          </h1>
        </div>
      </div>
    </section>
    <section class="md:py-6">
      <div class="mx-auto px-4 md:px-12">
        <div class="md:my-5">
          <button @click="expandAll" class="bg-transparent focus:outline-none hover:underline py-2 link">
            {{ $t('faq.expand') }}
          </button>
          <span class="mx-3 text-white">|</span>
          <button @click="collapseAll" class="bg-transparent focus:outline-none hover:underline py-2 link">
            {{ $t('faq.collapse') }}
          </button>
        </div>
        <div class="faq w-full">
          <div v-for="(item, index) in faqContent" :key="item.q">
            <div class="rounded mb-2" @click="showFaq(index)">
              <label class="rounded">
                <p class="faq-heading break-all">{{ item.q }}</p>
                <div class="faq-arrow"></div>
              </label>
              <p :ref="`faq-${index}`" class="faq-text text-white" :class="showAll ? '' : 'hidden'" v-html="item.a"></p>
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
  name: 'FAQ',
  components: {
  }
})

export default class FAQ extends Vue {
  showAll: boolean = false
  faqContent: any = i18n.t('faq.content')

  created () {
    this.$root.$on('locale-changed', (value: string) => {
      this.faqContent = i18n.t('faq.content')
    })
  }

  showFaq (index: number) {
    const element: any = this.$refs[`faq-${index}`]
    element[0].classList.toggle('hidden')
  }

  expandAll () {
    this.showAll = true
  }

  collapseAll () {
    this.showAll = false
  }
}
</script>
