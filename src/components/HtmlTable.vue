<script lang="ts" setup>
import { computed, onMounted, onUnmounted, reactive, ref, shallowRef } from "vue";
import { categories, items, type HtmlItem } from "../tags";

const config = reactive({
  rows: 9,
  cols: 18,
  size: 64,
  mdnUrlPrefix: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/",
});

const calcGridArea = (order: number) => {
  let row = Math.floor(order / config.cols);
  let col = order % config.cols;
  if (col === 0) {
    col = config.cols;
  } else {
    row += 1;
  }
  return `${row} / ${col}`;
};

for (const item of items) {
  for (const category of categories) {
    if (!category.ids.includes(item.id)) {
      continue;
    }
    item.class ??= [];
    item.class.push("html-item");
    item.color = category.color;
  }
  item.mdn = `${config.mdnUrlPrefix}${item.tag}`;
  item.style ??= {};
  item.style.backgroundColor = item.color;
  item.style.gridArea = calcGridArea(item.id);
}

const useTooltip = () => {
  const current = shallowRef<HtmlItem | null>(null);
  const pos = ref({ x: 0, y: 0 });
  const visible = ref(false);
  const style = computed(() => {
    return {
      display: visible.value ? "block" : "none",
      left: pos.value.x + "px",
      top: pos.value.y + "px",
    };
  });
  const onClick = async (item: HtmlItem, e: PointerEvent) => {
    if (!item.tag) {
      return;
    }
    if (current.value === item) {
      current.value = null;
      visible.value = false;
      return;
    }
    const el = e.target as HTMLDivElement;
    const { x, y } = el.getBoundingClientRect();
    pos.value.x = x;
    pos.value.y = Math.max(y - 216, 4);
    current.value = item;
    visible.value = true;
  };
  const onClickOutside = (e: Event) => {
    const el = e.target as HTMLElement;
    if (el.classList.contains("html-item")) {
      return;
    }
    visible.value = false;
  };
  onMounted(() => {
    document.addEventListener("click", onClickOutside);
  });
  onUnmounted(() => {
    document.removeEventListener("click", onClickOutside);
  });
  return {
    current,
    style,
    onClick,
  };
};

const pop = useTooltip();
</script>
<template>
  <div class="html-list">
    <div
      v-for="item in items"
      :key="item.id"
      :class="item.class"
      :style="item.style"
      @click="pop.onClick(item, $event)"
    >
      {{ item.color ? item.tag : "" }}
      <!-- <span class="html-pos">{{ item.id }}</span> -->
    </div>
  </div>
  <teleport to="body">
    <div class="popover" v-show="pop.current.value" :style="pop.style.value" @click.stop>
      <a :href="pop.current.value?.mdn" target="_blank" class="popover-link">
        {{ pop.current.value?.tag }}
      </a>
      <p class="popover-description">{{ pop.current.value?.description }}</p>
      <code class="code">{{ pop.current.value?.example }}</code>
    </div>
  </teleport>
</template>

<style scoped>
.html-list {
  display: grid;
  grid: repeat(9, 64px) / repeat(18, 64px);
  gap: 2px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-family: Consolas;
}

.html-item {
  position: relative;
  line-height: 64px;
  padding: 0 6px;
  text-align: center;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
}

.html-item:hover {
  opacity: 0.8;
}

.html-pos {
  position: absolute;
  right: 4px;
  bottom: 2px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  /* background: rgba(255, 255, 255, 0.1); */
}

.popover {
  position: fixed;
  width: 340px;
  height: 206px;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.popover::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 16px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: rgb(226, 232, 240);
}

.popover::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 18px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-top-color: #fff;
}

.popover-description {
  padding: 8px 0;
  margin: 0;
  height: 56px;
  font-size: 14px;
  color: rgb(51, 65, 85);
}

.popover-link {
  text-decoration: none;
  color: #333;
}

.popover-link:hover {
  color: #07f;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.code {
  background: #e2e8f0;
  padding: 8px 16px;
  border-radius: 4px;
  color: rgb(51, 65, 85);
  font-family: Consolas;
  font-size: 14px;
  display: block;
  min-height: 108px;
}
</style>
