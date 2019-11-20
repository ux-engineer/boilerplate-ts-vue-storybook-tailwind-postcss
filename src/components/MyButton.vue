<template>
  <button
    class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api';

export default createComponent({
  name: 'my-button',
  setup: (props: any, context: SetupContext) => {
    const onClick = () => {
      console.log('clicked!');
      context.emit('click');
    };

    return {
      onClick
    };
  }
});
</script>

<style lang="scss" scoped>
button {
  @apply bg-red-500 text-white;
}

button:hover {
  @apply bg-red-700;
}
</style>
