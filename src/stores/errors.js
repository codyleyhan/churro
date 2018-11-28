import { observable, computed, decorate, action } from 'mobx'

class ErrorStore {
  errors = [];
  timeoutFn = null;

  waitAndClear() {
    if (this.timeoutFn !== null) {
      clearTimeout(this.timeoutFn);
    }
    this.timeoutFn = setTimeout(() => {
     this.errors = []; 
     this.timeoutFn = null;
    }, 5000);
  }

  clear() {
    this.errors = [];
  }

  addError(err) {
    this.errors.push(err);
    this.waitAndClear();
  }

  get hasErrors() {
    return 0 < this.errors.length;
  }
}

decorate(ErrorStore, {
  errors: observable,
  addError: action,
  hasErrors: computed
});

export default new ErrorStore();