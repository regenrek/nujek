<template>
  <div class="index">
    <Blok class="blok" :blok="story.content" />
  </div>
</template>

<script>
import { story } from './../../__mocks__/story_debug'
export default {
  data () {
    return {
      story
    }
  }
}
</script>
