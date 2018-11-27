import { observable, computed, decorate } from "mobx"

class UserStore {
  constructor() {
    this.currentUser = {
      email: 'cody@cody.com'
    };
    this.users = {};
  }

  get isLoggedIn() {
    return this.currentUser !== null;
  }
}

decorate(UserStore, {
  currentUser: observable,
  users: observable, 
  isLoggedIn: computed
});

export default new UserStore();