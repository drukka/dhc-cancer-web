const observers = [];

const Observables = {

  // Find index in observers array
  findIndex: (name) => observers.findIndex(observer => observer.name === name),

  // Find observable object in observers array
  find: (name) => observers.find(observer => observer.name === name),

  // Register new observable eventListener
  register: (name, callback = () => {
  }) => {
    if (Observables.findIndex(name)) {
      window.debug.log('Observable registered', {name: name, callback: callback});
      return observers.push({
        name: name,
        callback: callback
      });
    }
    return false;
  },

  // Remove an observable from observers array
  remove: (name) => {
    const findByName = Observables.findIndex(name);
    if (findByName)
      return observers.slice(findByName, 1);

    return false;
  },

  // Call the observable
  call: (name, data) => {
    const observable = Observables.find(name);
    if (observable) {
      window.debug.log('Observable called', {name: name, data: data});
      return observable.callback(data);
    }
    return false;
  }
};

export default Observables;
