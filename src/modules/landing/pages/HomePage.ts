import {
  onMounted,
  defineComponent,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  ref,
} from 'vue';

// https://vuejs.org/api/composition-api-lifecycle.html

export default defineComponent({
  setup: () => {
    console.log('Setup Home Page');

    const counter = ref(0);

    onMounted(() => {
      console.log('onMounted Home Page');
    });

    onUpdated(() => {
      console.log('onUpdated Home Page');
    });

    onUnmounted(() => {
      console.log('onUnmounted Home Page');
    });

    onBeforeMount(() => {
      console.log('onBeforeMount Home Page');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate Home Page');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount Home Page');
    });

    onErrorCaptured(() => {
      console.log('onErrorCaptured Home Page');
    });

    onRenderTracked(() => {
      console.log('onRenderTracked Home Page');
    });

    onRenderTriggered(() => {
      console.log('onRenderTriggered Home Page');
    });

    onActivated(() => {
      console.log('onActivated Home Page');
    });

    onDeactivated(() => {
      console.log('onDeactivated Home Page');
    });

    return {
      counter,
    };
  },
});
