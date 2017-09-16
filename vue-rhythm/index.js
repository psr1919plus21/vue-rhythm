/* global Vue */

Vue.component('vue-rhythm', {
  template: '<div v-show="isVisible" class="vue-rhythm" :style="[basicStyles, gridStyles]"></div>',
  props: ['settings'],
  data: function() {
    return {
      isVisible: false,
      options: {
        bgColor: 'rgba(255, 0, 0, .2)',
        gridColor: 'rgba(0, 0, 0, .9)',
        lineHeight: 28,
        verticalOffset: 15
      },
      basicStyles: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '10000px',
        'z-index': 9999999
      },
      gridStyles: {}
    }
  },
  methods: {
    toggle(e) {
      if (e.ctrlKey && e.keyCode === 186) {
        this.isVisible = !this.isVisible;
      }
    },
    initStyles() {
      this.options = Object.assign({}, this.options, this.settings);

      this.gridStyles = {
        'background': `linear-gradient(to bottom, ${this.options.bgColor}, ${this.options.bgColor} calc(100% - 1px), ${this.options.gridColor} 1px, ${this.options.gridColor})`,
        'background-size': `100% ${this.options.lineHeight}px`,
        'background-position-y': `${this.options.verticalOffset}px`
      }
    }
  },
  mounted() {
    window.addEventListener('keyup', this.toggle);
    this.initStyles();
  }
});
