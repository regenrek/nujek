<template>
  <section ref="vidbg" class="nj-video-background">
    <video-poster
      v-if="current.poster || poster"
      :poster="current.poster || poster"
    />

    <video-player
      ref="player"
      :src="current.src"
      :muted="muted"
      :loop="loop"
      :preload="preload"
      :plays-when="playsWhen"
      :playback-rate="playbackRate"
      @ready="playVideo"
      @playing="$emit('playing')"
      @error="$emit('error')"
      @loading="$emit('loading')"
      @ended="$emit('ended')"
    />

    <video-overlay />

    <div class="videobg-content">
      <slot />
    </div>
  </section>
</template>

<script>

import props from './core/props'
import VideoPlayer from './_sub/VideoPlayer.vue'
import VideoPoster from './_sub/VideoPoster.vue'
import VideoOverlay from './_sub/VideoOverlay.vue'

import resize from './core/resize'

export default {
  name: 'NjVideoBackground',
  components: {
    VideoPlayer,
    VideoPoster,
    VideoOverlay
  },
  mixins: [resize],
  props,
  computed: {
    player () {
      return this.$refs.player
    }
  },
  methods: {
    playVideo () {
      this.$emit('ready')
      if (!this.current.autoplay) { return }
      this.player.play()
    }
  }
}
</script>
