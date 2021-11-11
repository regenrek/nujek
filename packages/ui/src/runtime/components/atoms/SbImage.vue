<template>
  <CustomNjImage :src="image" v-bind="{ ...$props, ...$attrs }" />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    src: {
      type: Object,
      default: null,
    },
    srcSets: {
      type: Array,
      default() {
        return [720, 1440, 2160];
      },
    },
    quality: {
      type: String,
      default: "70",
    },
    resize: {
      type: Object,
      default() {
        return {
          width: "1440",
          height: "0",
        };
      },
    },
    facialDetection: {
      type: Boolean,
      default: false,
    },
    fitIn: {
      type: Boolean,
      default: false,
    },
    filters: {
      type: Array,
      default: () => [],
    },
    useLegacyImgService: {
      type: Boolean,
      default: false,
    },
    imagePosition: {
      type: String,
      default: "",
    },
  },
  computed: {
    getFilterString() {
      let filterString = "filters";
      if (this.filters.length) {
        this.filters.forEach(function (filter) {
          if (filter.name && filter.value) {
            filterString = `${filterString}:${filter.name}(${filter.value})`;
          }
        });
      }
      return filterString !== "filters" ? filterString : "";
    },
    getHeightWidth() {
      return `${this.resize.width}x${this.resize.height}`;
    },
    image() {
      const filename = this.src?.filename || null;
      if (this.useLegacyImgService) {
        return filename
          ? {
              alt: this.src.alt,
              opt: this.transformImage(
                filename,
                `${this.fitInC}${this.resize.width}x${this.resize.height}/${this.facial}filters:quality(${this.quality})`
              ),
              lowsrc: this.transformImage(
                filename,
                `200x0/${this.facial}filters:quality(1)`
              ),
              webp: this.transformImage(
                filename,
                `${this.fitInC}${this.resize.width}x${this.resize.height}/${this.facial}filters:quality(${this.quality}):format(webp)`
              ),
              srcset: this.srcSets
                .map((width, index) => {
                  let size = "";
                  if (index > 0) {
                    size = ` ${index + 1}x`;
                  }
                  return (
                    this.transformImage(
                      filename,
                      `${this.fitInC}${width}x0/${this.facial}filters:quality(${this.quality})`
                    ) + size
                  );
                })
                .join(", "),
            }
          : null;
      } else {
        return filename && this.filters?.length !== 0
          ? `${filename}/m/${this.getHeightWidth}/${this.getFilterString}`
          : filename
          ? `${filename}/m/${this.getHeightWidth}`
          : "";
      }
    },
    facial() {
      return (this.facialDetection && "smart/") || "";
    },
    fitInC() {
      return (this.fitIn && "fit-in/") || "";
    },
  },
  methods: {
    transformImage(image, option) {
      if (!image) {
        return "";
      }
      if (!option) {
        return "";
      }

      const imageService = "//img2.storyblok.com/";
      const path = image
        .replace(/^https?:/i, "")
        .replace("//a.storyblok.com", "");
      return imageService + option + path;
    },
  },
};
</script>
