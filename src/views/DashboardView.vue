<template>
  <a-typography-title
    class="welcome-title"
    :level="1"
  >
    Hello Sarah!
  </a-typography-title>
  <a-typography-text>Here you can find your projects and dashboards.</a-typography-text>

  <Projects />
</template>

<style lang="scss" scoped>
.welcome-title {
  margin-bottom: 25px;
  font-weight: 700;
}
</style>
