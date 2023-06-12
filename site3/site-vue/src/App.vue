<template>
  <HeaderCont attr="header__wrap bg-blue nanumneo"/>
  <router-view />
  <FooterCont attr="footer__wrap section bg-blue nanumneo"/>
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@/components/FooterCont.vue'

export default ({
  components: {
    HeaderCont,
    FooterCont
  }
})
</script>

<style lang="scss">
@import 'index.scss'
</style>
