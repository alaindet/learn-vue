export default {
  beforeMount(el, binding) {
    let cssClass = `fa fa-${binding.value.icon} text-xl`;

    if (binding.value.full) {
      cssClass = binding.value;
    }

    if (binding.value.right) {
      cssClass += ' float-right';
    }

    if (binding.value.green) {
      cssClass += ' text-green-400';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${cssClass}"></i>`;
  },
};
