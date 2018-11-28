import { observable, computed, decorate, action } from 'mobx'

class NotifcationsStore {
  notifcations = [];
  timeoutFn = null;

  waitAndClear() {
    if (this.timeoutFn !== null) {
      clearTimeout(this.timeoutFn);
    }
    this.timeoutFn = setTimeout(() => {
     this.notifcations = []; 
     this.timeoutFn = null;
    }, 3000);
  }

  clear() {
    this.notifcationss = [];
  }

  addNotifcations(err) {
    this.notifcations.push(err);
    this.waitAndClear();
  }

  get hasNotifcationss() {
    return 0 < this.notifcations.length;
  }
}

decorate(NotifcationsStore, {
  notifcations: observable,
  addNotifcations: action,
  hasNotifcations: computed
});

export default new NotifcationsStore();