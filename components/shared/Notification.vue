<template lang="pug">
  .container.has-text-centered
    .columns
      .column.is-4.is-offset-4
        .notification(:class="tipo")
          slot(name="body") {{ $t('errorNotif') }}
</template>
<script>
export default {
  props: {
    tipo: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
