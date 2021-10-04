<template>
  <Blok :blok="story.content" />
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
