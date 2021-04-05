<template>
  <layout-grid>
    <template v-slot:header>
      <the-header>
        <common-nav />
      </the-header>
    </template>
    <ui-page-pad>
      <ui-page-body>
        <div class="l-patterns">
          <div class="l-patterns__nav">
            <ul>
              <li v-for="(page, index) in pages" :key="index">
                <ui-link :to="`/patterns/${page.href}`">
                  {{ page.title }}
                </ui-link>
              </li>
            </ul>
          </div>
          <div class="l-patterns__body">
            <Nuxt />
          </div>
        </div>
      </ui-page-body>
    </ui-page-pad>
    <template v-slot:footer>
      <the-footer />
    </template>
  </layout-grid>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          title: 'Colors',
          href: 'colors',
        },
        {
          title: 'Button',
          href: 'button',
        },
        {
          title: 'Form',
          href: 'form',
        },
        {
          title: 'Nav',
          href: 'nav',
        },
        {
          title: 'Showing',
          href: 'showing',
        },
        {
          title: 'Tabs',
          href: 'tabs',
        },
        {
          title: 'Link',
          href: 'link',
        },
        {
          title: 'Icon',
          href: 'icon',
        },
        {
          title: 'Page',
          href: 'page',
        },
      ],
    }
  },
}
</script>
<style scoped>
.l-patterns {
  display: flex;
  width: 100%;
}
.l-patterns__nav {
  flex: 10rem 0 0;
}
.l-patterns__body {
  flex: 1;
}
</style>
