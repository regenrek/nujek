<template>
  <Blok :blok="story.content" />
</template>

<script>
import { story } from './../../__mocks__/story'
export default {
  data () {
    return {
      story
    }
  }
}
</script>
