import { observable, decorate, action } from 'mobx'

import groupStore from './groups';
import errorStore from './errors';

const USER_COLORS = [
  'tomato',
  'plum',
  'teal',
  'turquoise',
  'forestGreen',
  'fireBrick',
  'MediumVioletRed',
  'DarkOrange',
  'gold',
  'SlateBlue',
  'CadetBlue',
  'Navy',
  'DarkSlateGray',
  'LightSlateGray'
]


class NewGroupStore {
  name = '';
  users = {};
  tasks = [];

  addUser(name, email) {
    const user = {
      id: Date.now(),
      name,
      email,
      color: USER_COLORS[Object.keys(this.users).length%USER_COLORS.length]
    }

    this.users[email] = user;
  }

  addTask(name, description, schedule) {
    const task = {
      id: Date.now(),
      name,
      schedule,
      description,
      currentQueue: this.shuffle(Object.keys(this.users))
    }

    this.tasks.push(task);
  }

  clear() {
    this.name = '';
    this.users = {};
    this.tasks = [];
  }

  save() {
    const group = {
      name: this.name,
      users: this.users,
      tasks: this.tasks,
      user_emails: Object.keys(this.users)
    }

    return groupStore.add(group).then(res => {
      console.log(res);
      return res;
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

decorate(NewGroupStore, {
  name: observable,
  users: observable,
  tasks: observable,
  addUser: action,
  addTask: action,
  clear: action,
});

export default new NewGroupStore();