<template>
  <button class="border p-2 m-1 my-2.5">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: { type: String, required: false, default: null },
  },
}
</script>
