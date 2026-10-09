class counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  get value() {
    return this.count;
  }
}

export default counter;