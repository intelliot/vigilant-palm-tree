<template>
  <div class="bg-xblack">
    <section class="pt-24 xHeroBg">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-10 text-5xl pt-10 font-bold leading-tight">
            {{ $t('faq.title') }}
          </h1>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container mx-auto px-4">
        <div class="my-5">
          <button @click="expandAll" class="bg-transparent focus:outline-none hover:underline text-white py-2">
            {{ $t('faq.expand') }}
          </button>
          <span class="mx-3 text-white">|</span>
          <button @click="collapseAll" class="bg-transparent focus:outline-none hover:underline text-white py-2">
            {{ $t('faq.collapse') }}
          </button>
        </div>
        <div class="faq w-full">
          <div v-for="(item, index) in faqContent" :key="item.q">
            <input :id="`faq-${index}`" type="checkbox" :checked="checkAll">
            <label :for="`faq-${index}`" class="rounded">
              <p class="faq-heading break-all">{{ item.q }}</p>
              <div class="faq-arrow"></div>
              <p class="faq-text text-white" v-html="item.a"></p>
            </label>
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
  checkAll: boolean = false
  faqContent: any = i18n.t('faq.content')

  created () {
    this.$root.$on('locale-changed', (value: string) => {
      this.faqContent = i18n.t('faq.content')
    })
  }

  expandAll () {
    this.checkAll = true
  }

  collapseAll () {
    this.checkAll = false
  }
}
</script>
