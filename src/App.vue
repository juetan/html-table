<script setup lang="ts">
import HtmlTable from "./components/HtmlTable.vue";
import { items } from "./tags";
</script>

<template>
  <div class="header">
    <h1 class="title">HTML元素周期表</h1>
    <p class="subtitle">一个包含 {{ items.length }} 个 HTML(超文本标记语言) 标签的元素周期表。</p>
  </div>
  <div class="content">
    <HtmlTable />
  </div>
  <p class="footer">Copyright &copy; <a href="https://juetan.cn" target="_blank" class="link">juetan</a> 2025</p>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.header {
  padding-top: 32px;
}
.title {
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
}
.subtitle {
  color: #666;
  font-size: 16px;
  margin-top: 8px;
}
.content {
  position: relative;
  padding: 8px 10px;
  margin-top: 48px;
  border: 1px dashed #bbc;
  border-radius: 6px;
}
.footer {
  margin: 0;
  padding: 24px 0 24px;
  font-size: 14px;
  color: #677;
}
.link {
  color: inherit;
  text-decoration: none;
}
.link:hover {
  color: #08f;
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
