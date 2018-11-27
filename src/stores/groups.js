import { observable, decorate, action } from 'mobx'

import firebase from '../Firebase';
import errorStore from './errors';

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
      this.isFetching = false;
      console.log(this.group);
      return this.group;
    }).catch(err => {
      this.isFetching = false;
      errorStore.addError(err);
    })
  }

  getUsersGroups(email) {
    console.log(email);
    return this.db.where('user_emails', 'array-contains', email).get().then((docs) => {
      if (docs.empty) {
        console.log('User has no groups with email ' + email);
        return;
      }

      let groups = [];
      docs.forEach(doc => {
        const group = doc.data();
        let item =  {
          id: doc.id,
          name: group.name
        }
        groups.push(item);
      });
      return groups;
    }).catch(err => {
      this.isFetching = false;
      errorStore.addError(err);
    });
  }

  add(group) {
    return this.db.add(group).then(doc => {
      group.id = doc.id;
      console.log(group);
      return group;
    }).catch(err => {
      this.isFetching = false;
      errorStore.addError(err);
    });
  }
}

decorate(GroupStore, {
  group: observable,
  isFetching: observable,
  get: action,
  getUsersGroups: action,
  add: action,
})


export default new GroupStore(firebase);