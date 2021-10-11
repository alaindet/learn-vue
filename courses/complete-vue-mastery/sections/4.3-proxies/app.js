// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const data = {
  name: 'Alain',
};

const dataProxied = new Proxy(data, {

  set(target, key, value) {

    // Perform logic here...
    console.log(
      'Setting new data: key = :key; value = :value'
        .replace(':key', key)
        .replace(':value', value)
    );

    target[key] = value;
  },

  get(target, key) {

    // Perform logic here...
    console.log(
      'Getting data: key = :key'
        .replace(':key', key)
    );

    return target[key];
  }

});

// Try to set
dataProxied.name = 'John';

// Try to get
const foo = dataProxied.name;
