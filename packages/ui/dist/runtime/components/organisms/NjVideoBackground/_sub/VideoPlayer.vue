<template>
  <transition name="fade">
    <div v-show="showVideo" class="video-wrapper">
      <video
        ref="video"
        autoplay
        playsinline
        :muted="muted"
        :loop="loop"
        :preload="preload"
        :style="styleObject"
      >
        <source :src="src" :type="getMediaType(src)">
      </video>
    </div>
  </transition>
</template>

<script>

import props from '../core/playerProps'

export default {
  props,
  data () {
    return {
      showVideo: false
    }
  },
  computed: {
    styleObject () {
      if (!this.objectFit) {
        return {}
      }
      return {
        objectFit: this.objectFit
      }
    }
  },
  watch: {
    src () {
      this.load()
    }
  },
  mounted () {
    if (this.videoCanPlay()) {
      this.$refs.video[`on${this.playsWhen}`] = this.videoReady
      this.$refs.video.onerror = this.videoError
      this.$refs.video.onended = this.videoEnded
    }
  },
  methods: {
    pause () {
      if (this.$refs.video) {
        this.$refs.video.pause()
      }
    },
    load () {
      this.hide()
      // ugly, but we want to give hide 1 sec pause until we load the next video
      setTimeout(() => {
        this.$refs.video.load()
        this.$emit('loading')
      }, 1000)
    },
    play () {
      this.setPlaybackRate()
      this.$refs.video.play()
      this.show()
      this.$emit('playing')
    },
    show () {
      this.showVideo = true
    },
    hide () {
      this.showVideo = false
    },
    getMediaType (src) {
      return `video/${src.split('.').pop().split(/[?#]/)[0]}`
    },
    videoCanPlay () {
      return !!this.$refs.video.canPlayType
    },
    videoReady () {
      // Unfortunately we have the iOS bug, that we need to set autoplay always to true.
      // That means we need to first pause the video,
      // and later check if we want to autoplay or not
      this.pause()
      this.$emit('ready')
    },
    videoError () {
      this.$emit('error')
    },
    videoEnded () {
      this.$emit('ended')
    },
    setPlaybackRate () {
      this.$refs.video.playbackRate = this.playbackRate
      this.$refs.video.defaultPlaybackRate = this.playbackRate
    }
  }
}
</script>
