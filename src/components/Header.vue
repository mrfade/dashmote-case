<script>
import { ref } from 'vue'
import { BellOutlined, MenuOutlined } from '@ant-design/icons-vue'
import { useWindowSize } from 'vue-window-size'

export default {
  components: {
    BellOutlined,
    MenuOutlined,
  },
  setup() {
    const { width, height } = useWindowSize()

    const collapsed = ref(true)

    const toggleCollapse = () => {
      console.log('toggleCollapse')
      collapsed.value =!collapsed.value
    }

    return {
      collapsed,
      toggleCollapse,
      windowWidth: width,
      windowHeight: height,
    }
  }
}
</script>

<template>
  <a-layout-header
    class="header"
    :class="{ active: !collapsed }"
  >
    <a-button
      class="collapse-button"
      type="text"
      @click="toggleCollapse"
    >
      <template #icon>
        <MenuOutlined />
      </template>
    </a-button>

    <div class="logo">
      Dashmote
    </div>

    <a-menu
      class="menu"
      :mode="windowWidth > 576 ? 'horizontal' : 'inline'"
    >
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu>

    <a-space
      class="right-menu"
      direction="horizontal"
      align="end"
    >
      <a-badge
        class="notification-badge"
        dot
      >
        <BellOutlined />
      </a-badge>

      <div class="user-name">
        Sarah Green
      </div>

      <a-avatar
        :size="24"
        src="https://joeschmoe.io/api/v1/random"
      />
    </a-space>
  </a-layout-header>
</template>

<style lang="scss">
.header {
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;

  .collapse-button {
    display: none;
    margin-right: 1em;
  }

  .logo {
    width: 120px;
    font-weight: 700;
  }

  .menu {
    flex-grow: 1;
  }

  .right-menu {
    align-items: center;
    
    .ant-space-item {
      line-height: normal;
    }

    .notification-badge {
      margin-right: 2em;
    }

    .user-name {
      font-weight: 500;
      margin-right: 1em;
    }
  }
}

@media (max-width: 576px) {
  .header {
    padding: 0 1em;

    .collapse-button {
      display: block;
    }

    .logo {
      flex-grow: 1;
    }

    .menu {
      order: 9;
      display: none;
    }

    &.active {
      flex-wrap: wrap;

      .menu {
        width: 100%;
        display: initial;
        background-color: #f5f5f5;
        z-index: 1;
      }
    } 
  }
}
</style>
