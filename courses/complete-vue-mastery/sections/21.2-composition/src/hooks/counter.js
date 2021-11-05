import { ref, computed } from 'vue';

export const useCounter = () => {
  const counter = ref(42);
  const incrementCounter = () => counter.value++;
  const doubleCounter = computed(() => counter.value * 2);

  return {
    counter,
    incrementCounter,
    doubleCounter,
  };
};
