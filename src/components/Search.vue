<script>
import { defineComponent } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    SearchOutlined,
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
  },
  emits: [
    'update:modelValue'
  ],
  setup(props, ctx) {
    
    const updateModelValue = (e) => {
      ctx.emit('update:modelValue', e.target.value)
    }

    return {
      updateModelValue
    }
  },
})
</script>

<template>
  <div class="search">
    <SearchOutlined />
    <a-input
      :value="modelValue"
      placeholder="Search for a keyword"
      @input="updateModelValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 300px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #C4C4C4;
  background-color: #fff;

  span {
    position: absolute;
    top: 0;
    left: 1em;
    height: 100%;
    display: inline-flex;
    align-items: center;
    z-index: 1;
  }

  input {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 8px;
    padding-left: 3em;
  }
}

@media (max-width: 576px) {
  .search {
    width: 100%;
    border: none;
    background-color: transparent;
    color: #787878;
    border-bottom: 1px solid #787878;
    border-radius: 0;

    span {
      left: auto;
      right: 1em;
    }

    input {
      border-radius: 0;
      padding-left: 1em;
      padding-right: 3em;
      background-color: transparent;
    }
  }
}
</style>
