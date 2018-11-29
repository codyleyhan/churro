import { observable, decorate, action, autorun } from 'mobx';
import shortid from 'shortid';

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
    autorun(() => this.updateGroup(), { delay: 300 });
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
      return this.group;
    }).catch(err => {
      this.isFetching = false;
      errorStore.addError(err);
    })
  }

  getUsersGroups(email) {
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

  addTask(name, description, schedule) {
    const task = {
      id: Date.now(),
      name,
      schedule,
      description,
      currentQueue: this.shuffle(Object.keys(this.group.user_emails))
    }

    this.group.tasks.push(task);
  }

  add(group) {
    group.id = shortid.generate();
    return this.db.doc(group.id).set(group).then(doc => {
      console.log(group);
      return group;
    }).catch(err => {
      errorStore.addError(err);
    });
  }

  updateGroup() {
    if (this.group === null) {
      return;
    }
    this.db.doc(this.group.id).set(this.group).then(res => {
      console.log('Successfully updated group');
    }).catch(err => {
      errorStore.addError(err);
    })
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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