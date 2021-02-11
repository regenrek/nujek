import NjBurger from '@nujek/ui/components/atoms/NjBurger';
import '~/assets/css/components/burger-demo.css';

export default {
  title: 'NjBurger',
  component: NjBurger,
};

export const Burger = (arg, { argTypes }) => ({
  components: { NjBurger },
  data() {
    return {
      isOpenBurger: false,
    };
  },
  template: '<NjBurger :open.sync="isOpenBurger" v-bind="$props" />',
});

export const CustomBurger = (arg, { argTypes }) => ({
  components: { NjBurger },
  // props: Object.keys(argTypes),
  data() {
    return {
      isOpenBurger: false,
    };
  },
  template: `
    <div class="bg-gray-800 w-full min-h-screen">
      <NjBurger :open.sync="isOpenBurger">
        <ul class="buns">
          <li class="bun"></li>
          <li class="bun"></li>
        </ul>
      </NjBurger>
    </div>
  `,
});

export const CustomBurger2 = (arg, { argTypes }) => ({
  components: { NjBurger },
  // props: Object.keys(argTypes),
  data() {
    return {
      isOpenBurger: false,
    };
  },
  template: `
    <div class="bg-blue-800 w-full min-h-screen">
      <NjBurger :open.sync="isOpenBurger" v-bind="$props">
        <div class="plate plate5">
          <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
            <path class="line line1" d="M 30,35 H 70 " />
            <path class="line line2" d="M 50,50 H 30 L 34,32" />
            <path class="line line3" d="M 50,50 H 70 L 66,68" />
            <path class="line line4" d="M 30,65 H 70 " />
          </svg>
          <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
            <path class="line" d="M 34,32 L 66,68" />
            <path class="line" d="M 66,32 L 34,68" />
          </svg>  
        </div> 
      </NjBurger>
    </div>
  `,
});
