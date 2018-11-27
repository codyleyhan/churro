import firebase from '../Firebase';
import { observable, decorate } from "mobx"

import userStore from './users';

class GroupStore {
  group = null;
  isFetching = true;

  constructor(firebase) {
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();

    // Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });
    this.db = db.collection('groups');
  }

  get(id) {
    if (this.group !== null && this.group.id === id) {
      return;
    }

    this.isFetching = true;
    return this.db.doc(id).get().then((doc) => {
      if (!doc.exists) {
        console.log('No group with id of ' + id);
        return;
      }

      this.group = doc.data();
      this.group.id = id;
      userStore.users = this.group.users;
      this.isFetching = false;
      return this.group;
    }).catch(err => {
      this.isFetching = false;
      console.log(err);
    })
  }

  getUsersGroups(email) {
    return this.db.where('users', 'array-contains', email).get().then((doc) => {
      if (!doc.exists) {
        console.log('User has no groups with email ' + email);
        return;
      }
      return doc.data();
    });
  }

  add(group) {
    return this.db.add(group).then(doc => {
      group.id = doc.id;
      console.log(group);
      return group;
    });
  }
}

decorate(GroupStore, {
  group: observable,
  isFetching: observable,
})


export default new GroupStore(firebase);