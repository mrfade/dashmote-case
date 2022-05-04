<script>
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const initLoading = ref(false)

    const data = ref([
      {
        name: 'Project A',
        users: 3,
        dashboards: 3,
        category: 'C',
      },
      {
        name: 'Project B',
        users: 1,
        dashboards: 3,
        category: 'F',
      },
      {
        name: 'Project C',
        users: 2,
        dashboards: 4,
        category: 'D',
      },
      {
        name: 'Project D',
        users: 4,
        dashboards: 3,
        category: 'C',
      },
      {
        name: 'Project E',
        users: 3,
        dashboards: 3,
        category: 'C',
      },
      {
        name: 'Project F',
        users: 1,
        dashboards: 3,
        category: 'F',
      },
      {
        name: 'Project G',
        users: 2,
        dashboards: 4,
        category: 'D',
      },
      {
        name: 'Project H',
        users: 4,
        dashboards: 3,
        category: 'C',
      }
    ])

    const list = ref([])
    const searchText = ref('')

    onMounted(() => {
      list.value = data.value
    })

    const confirmDelete = item => {
      data.value = data.value.filter(i => i.name !== item.name)
      list.value = data.value
    }

    watch(searchText, (val) => {
      if (val) {
        list.value = data.value.filter(item => item.name.includes(val))
      }
      else {
        list.value = data.value
      }
    })

    return {
      initLoading,
      data,
      list,
      searchText,
      confirmDelete,
    }
  }
})
</script>

<template>
  <div class="search-container">
    <Search v-model="searchText" />
  </div>
  
  <ProjectsList
    :init-loading="initLoading"
    :data-source="list"
    @item-delete="confirmDelete"
  />
</template>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 25px 0;
}
</style>