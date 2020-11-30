<template>
  <div class="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: -1px -3px 1px rgba(100, 100, 100, .18);
}
</style>
