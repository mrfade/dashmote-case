<script>
import { defineComponent } from 'vue'

const categoryColors = {
  'C': {
    color: '#00CC74',
    colorSecondary: '#CCF5E3',
  },
  'D': {
    color: '#1990FF',
    colorSecondary: '#D1E9FF',
  },
  'F': {
    color: '#B37FEB',
    colorSecondary: '#F0E5FB',
  }
}

export default defineComponent({
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
    initLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'update:modelValue',
    'itemDelete',
  ],
  setup() {
    return {
      categoryColors
    }
  },
})
</script>

<template>
  <a-list
    class="projects-list"
    :loading="initLoading"
    item-layout="horizontal"
    :data-source="dataSource"
  >
    <template #renderItem="{ item }">
      <a-list-item
        class="item"
        :style="`--category-color: ${categoryColors[item.category].color}; --category-color-secondary: ${categoryColors[item.category].colorSecondary}`"
      >
        <template #actions>
          <a-popconfirm
            title="Are you sure delete this task?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="$emit('itemDelete', item)"
          >
            <a
              key="list-loadmore-delete"
              class="action-delete"
            >
              Delete
            </a>
          </a-popconfirm>
        </template>

        <a-space
          v-if="!!item.loading"
          style="margin-left: 15px"
        >
          <a-skeleton-avatar
            active
            shape="circle"
          />

          <a-skeleton-button
            active
            size="small"
            block
          />
        </a-space>

        <div class="content">
          <a-avatar class="avatar">{{ item.category }}</a-avatar>
          <div class="name">{{ item.name }}</div>
          <div class="users">{{ item.users }} users</div>
          <div class="dashboards">{{ item.dashboards }} dashboards</div>
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>

<style lang="scss">
.projects-list {
  height: 450px;
  overflow-y: scroll;
  padding-right: 15px;

  &::-webkit-scrollbar-track
  {
    border-radius: 4px;
    background-color: #F1F1F1;
  }

  &::-webkit-scrollbar
  {
    margin-left: 15px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 4px;
    background-color: #c4c4c4;
  }

  .item {
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 0px 20px;
    height: 70px;
    margin-bottom: 8px;
    box-shadow: 0px 4px 20px rgba(120, 120, 120, 0.15);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background-color: var(--category-color);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      z-index: 1;
    }

    .content {
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 100%;

      .avatar {
        width: 28px;
        height: 28px;
        margin-left: 1em;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--category-color);
        background-color: var(--category-color-secondary);
      }

      .name {
        flex-grow: 1;
        flex-shrink: 0;
        margin-left: 3em;
        font-weight: 500;
      }

      .users {
        margin-right: 3em;
        color: #52594D;
      }

      .dashboards {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 16px;
        background-color: #CCF5E3;
        border: 1px solid #00CC74;
        box-sizing: border-box;
        border-radius: 4px;
        color: #00CC74;
      }
    }

    .action-delete {
      color: #DD1155;

      &:hover {
        color: #DD1155;
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 576px) {
  .projects-list {
    height: auto;
    overflow-y: initial;
    padding-right: 0;

    .content {
      .users {
        display: none;
      }

      .dashboards {
        display: none !important;
      }
    }

    .ant-list-item-action {
      display: none;
    } 
  }
}
</style>
