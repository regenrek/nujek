<template>
  <div style="max-width: 980px" class="w-full">
    <div
      class="flex bg-blue-50 p-5 justify-center border border-blue-100 text-xs my-5 w-full"
    >
      <div class="max-w-3xl">
        <pre>
      <strong>Storyblok Response</strong>

      <strong>Attrs:</strong>

      {{ $attrs }}

      <strong>Props:</strong>

      {{ $props }}


      </pre>
        <small
          ><strong>HowTo Implement:</strong> Create a Storyblok Wrapper
          component in bloks/Blok&lt;Name&gt;.js. Then Import and use your
          custom designed component from ~/components dir</small
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlokDebug'
}
</script>
