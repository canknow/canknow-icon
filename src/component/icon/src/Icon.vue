<template>
  <span class="icon" :classes="classes" @click="onClick">
    <svg>
      <use :xlink:href="iconName"></use>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: 'outlined'
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {

      };
    },
    iconName () {
      const postfix = this.theme === 'outlined' ? '' : `-${this.theme}`;
      return `#icon-${this.name}${postfix}`;
    }
  },
  methods: {
    onClick () {
      this.$emit('click');
    }
  }
};
</script>

