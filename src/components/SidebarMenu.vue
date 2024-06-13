<template>
  <sidebar-menu :menu="menu" :hide-toggle="true" :width="'80px'">
    <template v-slot:toggle-icon>DevEco</template>
  </sidebar-menu>
</template>

<script lang="ts">
import { h } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const separator = h('hr', {
  style: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: '20px'
  }
})

const faIcon = (props: any) => {
  return {
    element: h('div', [h(FontAwesomeIcon, { size: 'lg', ...props })])
  }
}

export default {
  data() {
    return {
      menu: [
        {
          header: 'DevEco',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          icon: faIcon({ icon: 'fa-solid fa-chart-simple' })
        },
        {
          href: '/ressourcen',
          icon: faIcon({ icon: 'fa-solid fa-database' })
        },
        {
          href: '/pipelines',
          icon: faIcon({ icon: 'fa-solid fa-code-fork' })
        },
        {
          href: '/code',
          icon: faIcon({ icon: 'fa-solid fa-code' })
        },
        {
          href: '/organisatorisch',
          icon: faIcon({ icon: 'fa-solid fa-building' })
        }
      ]
    }
  }
}
</script>

<style>
.v-sidebar-menu {
  --vsm-primary-color: #4285f4;
  --vsm-base-bg: #ebebeb;
  --vsm-item-color: #fff;
  --vsm-item-active-line-color: var(--vsm-primary-color);
  --vsm-item-open-color: #fff;
  --vsm-item-open-bg: var(--vsm-primary-color);
  --vsm-item-hover-bg: #dfedd6;
  --vsm-icon-color: var(--vsm-item-color);
  --vsm-icon-bg: #fff;
  --vsm-mobile-item-color: #fff;
  --vsm-mobile-item-bg: var(--vsm-primary-color);
  --vsm-mobile-icon-color: var(--vsm-mobile-item-color);
  --vsm-mobile-icon-bg: transparent;
  --vsm-dropdown-bg: #36363b;
  --vsm-header-item-color: rgba(255, 255, 255, 0.7);
  --vsm-toggle-btn-color: #fff;
  --vsm-toggle-btn-bg: #1e1e21;
  --vsm-item-font-size: 16px;
  --vsm-item-line-height: 35px;
  --vsm-item-padding: 10px 15px;
  --vsm-icon-height: 35px;
  --vsm-icon-width: 35px;
}
</style>
