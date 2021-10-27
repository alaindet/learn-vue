/**
 * Ex.:
 * <div v-app-icon-suffix:full.modOne.modTwo="'hello-there'">...</div>
 * binding.value = 'hello-there'
 * binding.arg = 'full' // Only one arg at a time can exist
 * binding.modifiers.modOne = true
 * binding.modifiers.modTwo = true
 */
export default {
  beforeMount(el, binding) {
    let cssClass = `fa fa-${binding.value} text-xl`;

    if (binding.arg === 'full') {
      cssClass = binding.value;
    }

    if (binding.modifiers.right) {
      cssClass += ' float-right';
    }

    if (binding.modifiers.green) {
      cssClass += ' text-green-400';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${cssClass}"></i>`;
  },
};
