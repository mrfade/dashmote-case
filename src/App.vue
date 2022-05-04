<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <a-layout class="layout">
    <Header />

    <a-layout-content class="container layout-content">
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>

<style>
.layout-content {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>

<style lang="scss">
@import '@/assets/base.scss';
</style>
