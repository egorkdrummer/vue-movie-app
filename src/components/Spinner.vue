<template lang="pug">
transition(name="fade")
	.overlay(
		v-if="isLoading"
		:class="{ 'overlay--active' : isLoading, 'overlay--relative': isRelative }"
		@click="isLoading = !isLoading")
		.spinner
			span(v-for="(item, index) in items" :class="item" :style="{'background-color': $props.color }")
</template>

<script>
export default {
  name: "spinner",
  props: {
    isLoading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#636e72"
    },
    isRelative: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    items: ["one", "two", "three"]
  })
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.overlay {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-content: center;

  &--relative {
    position: relative;
    height: 100px;
    margin-top: -100px;
  }

  &:before {
    background-color: #fff;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: inherit;
    transition-delay: 150ms;
    width: 100%;
  }

  &--active {
    pointer-events: auto;
    touch-action: none;

    &:before {
      //opacity: 0.46;
      opacity: 1;
    }
  }
}

.spinner {
  text-align: center;
  font-size: 26px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 5px;
    animation: bouncedelay 1.4s infinite ease-in-out both;

    &.one {
      animation-delay: -0.32s;
    }
    &.two {
      animation-delay: -0.16s;
    }
  }
}

@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}
</style>
