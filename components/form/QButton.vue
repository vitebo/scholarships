<template>
  <button :class="qButtonClass" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: [String, Boolean],
      default: false
    },
    size: {
      type: [String, Boolean],
      default: false
    }
  },
  computed: {
    qButtonClass() {
      const className = 'q-button'
      const modifier = {}
      modifier[`${className}--${this.variant}`] = this.variant
      modifier[`${className}--${this.size}`] = this.size

      return [className, modifier]
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss">
.q-button {
  background-color: $secondary-color;
  border: 1px solid $secondary-color-dark;
  border-radius: $space-xs;
  color: $neutral-color-black;
  cursor: pointer;
  font-size: rem(16);
  font-weight: $font-weight-bold;
  height: 48px;
  padding: 0 $space-st;
  text-align: center;
  transition: background-color $transition;
  white-space: nowrap;

  &:hover,
  &:focus,
  &:active {
    background-color: $secondary-color-dark;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active,
  &:disabled:focus {
    background-color: $neutral-color-gray-light;
    border-color: $neutral-color-gray-pure;
    color: $neutral-color-gray-dark;
    cursor: not-allowed;
  }
}

.q-button--secondary {
  background-color: $neutral-color-white;
  border-color: $primary-color-dark;
  color: $primary-color-dark;

  &:hover,
  &:active,
  &:focus {
    background-color: $neutral-color-gray-lighter;
  }
}

.q-button--small {
  font-size: $font-size-small;
  height: 32px;
  padding: 0 $space-m;
}
</style>
