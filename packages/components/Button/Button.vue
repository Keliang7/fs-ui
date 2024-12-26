<script setup lang="tsx">
import { ref, computed } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
// import FsIcon from "../Icon/Icon.vue";

defineOptions({
  name: "FsButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  round: true,
  throttleDuration: 500,
});
const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>
<template>
  <component
    class="fs-button"
    :ref="_ref"
    :is="tag"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`fs-button--${type}`]: type,
      [`fs-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e:MouseEvent)=>useThrottle?handleBtnClickThrottle(e):handleBtnClick(e)">
    <template v-if="loading">
      <slot name="loading">
        <!-- <FsIcon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          spin /> -->
      </slot>
    </template>
    <!-- <FsIcon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x" /> -->
    <slot></slot>
  </component>
</template>
<style scoped>
@import "./style.css";
</style>
