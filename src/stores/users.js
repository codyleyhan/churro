import { observable, computed, decorate, action } from 'mobx'

import groupStore from './groups';

class UserStore {
  currentUser = '';
  usersGroups = [];
  fetching = false;

  get isLoggedIn() {
    return this.currentUser !== '';
  }

  logout() {
    this.currentUser = '';
    this.usersGroups = [];
  }

  setCurrentUser(user) {
    this.currentUser = user;
    console.log('Set current user to ' + this.currentUser);
  }

  fetchCurrentUsersGroups() {
    if (!this.isLoggedIn) {
      return;
    }
    this.fetching = true;
    groupStore.getUsersGroups(this.currentUser)
      .then(groups => {
        console.log(groups);
        this.usersGroups = groups.map(group => { 
          return {
            id: group.id, 
            name: group.name
          }
        });
        this.fetching = false;
      }).catch(err => {
        console.log(err);
        this.fetching = false;
      });
  }
}

decorate(UserStore, {
  currentUser: observable,
  usersGroups: observable, 
  users: observable, 
  fetching: observable, 
  isLoggedIn: computed,
  setCurrentUser: action,
  getCurrentUsersGroups: action,
});

export default new UserStore();