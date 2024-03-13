<template>
  <Suspense>
    <SessionDisplay />
  </Suspense>
</template>

<script>
import SessionDisplay from './components/SessionDisplay.vue'

export default {
  name: 'App',
  components: {
    SessionDisplay
  }
}
</script>
