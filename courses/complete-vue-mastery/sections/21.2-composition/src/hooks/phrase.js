import { ref, watch } from 'vue';

export const usePhrase = (initialPhrase = '') => {
  const phrase = ref(initialPhrase);
  const reversedPhrase = ref('');

  watch([phrase], (newValue, oldValue) => {
    if (newValue !== oldValue) {
      reversedPhrase.value = phrase.value.split('').reverse().join('');
    }
  }, { immediate: true });

  return {
    phrase,
    reversedPhrase,
  };
};
