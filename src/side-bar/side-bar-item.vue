<template>
  <div :class="rootClassName" @click="onClick">
    <div v-if="isActive">
      <div :class="`${name}__line`"></div>
      <div :class="`${name}__prefix`"></div>
      <div :class="`${name}__suffix`"></div>
    </div>
    <div v-if="iconNode" :class="`${name}__icon`">
      <t-node :content="iconNode"></t-node>
    </div>
    <t-badge v-if="badgeProps" v-bind="badgeProps" :content="label"> </t-badge>
    <div v-else>{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ComponentPublicInstance, computed, inject, onUnmounted } from 'vue';
import TBadge from '../badge';
import { renderTNode, TNode } from '../shared';
import SideBarItemProps from './side-bar-item-props';
import { TdSideBarItemProps } from './type';

import config from '../config';

const { prefix } = config;
const name = `${prefix}-side-bar-item`;

export default defineComponent({
  name,
  components: { TNode, TBadge },
  props: SideBarItemProps,
  setup(props) {
    const internalInstance = getCurrentInstance();
    const proxy = internalInstance.proxy as ComponentPublicInstance<TdSideBarItemProps>;
    const sideBarProvide: any = inject('sideBarProvide', undefined);
    sideBarProvide.relation(proxy);

    const iconNode = computed(() => renderTNode(internalInstance, 'icon'));
    const isActive = computed(() => proxy.value === sideBarProvide.currentValue.value);

    const rootClassName = computed(() => [
      name,
      { [`${name}--active`]: isActive.value },
      { [`${name}--disabled`]: props.disabled },
    ]);

    const onClick = (e: MouseEvent) => {
      sideBarProvide.onClickItem(proxy.value, props.label);
    };

    onUnmounted(() => {
      sideBarProvide.removeRelation(proxy);
    });

    return {
      name,
      rootClassName,
      isActive,
      iconNode,
      onClick,
    };
  },
});
</script>
