(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{560:function(e,t,r){var content=r(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("48d4c87e",content,!0,{sourceMap:!1})},576:function(e,t,r){"use strict";r(560)},577:function(e,t,r){(t=r(62)(!1)).push([e.i,".codesandbox[data-v-6696224f],.codesandbox iframe[data-v-6696224f]{width:100%;border-radius:.375rem;overflow:hidden;height:16rem;height:500px}",""]),e.exports=t},601:function(e,t,r){"use strict";r.r(t);var o={props:{src:{type:String,required:!0}},data:function(){return{isIntersecting:!1}},mounted:function(){var e=this;window.IntersectionObserver?(this.__observer=new window.IntersectionObserver((function(t){t.forEach((function(t){var r=t.intersectionRatio;t.target;r>0&&(e.isIntersecting=!0,e.__observer.disconnect(),delete e.__observer)}))})),this.__observer.observe(this.$el)):this.isIntersecting=!0},beforeDestroy:function(){this.__observer&&(this.__observer.disconnect(),delete this.__observer)}},n=(r(576),r(2)),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"codesandbox w-full mb-6 mx-auto bg-black text-white text-3xl text-center flex items-center justify-center overflow-hidden rounded-md"},[this.isIntersecting&&this.src?t("iframe",{staticClass:"w-full overflow-hidden",attrs:{src:this.src,title:"CodeSandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}):t("span",[this._v("Loading CodeSandbox...")])])}),[],!1,null,"6696224f",null);t.default=component.exports}}]);