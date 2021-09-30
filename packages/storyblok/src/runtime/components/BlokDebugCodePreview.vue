<template>
  <div class="mt-6">
    <pre class="bg-gray-800 rounded-lg p-4"><code class="text-xs text-white font-mono"><span class="text-gray-500">// components/{{ componentName }}.vue</span>

<span class="text-yellow-300">&lt;template&gt;</span>
    <span class="text-gray-500">&lt;!-- content here ... --&gt;</span>
<span class="text-yellow-300">&lt;/template&gt;</span>
<span class="text-yellow-300">&lt;script&gt;</span>
    <span class="text-yellow-600">export default</span> {
        blok: {
            type: <span class="text-yellow-600">Object</span>,
            default: () <span class="text-indigo-500">=></span> {}
        }
    }
<span class="text-yellow-300">&lt;/script&gt;</span>
</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    componentName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
