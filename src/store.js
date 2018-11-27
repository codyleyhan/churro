import firebase from './Firebase';

class Store {
  constructor(firebase) {
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();

    // Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });
    this.db = db.collection('groups');
    this.group = null;
  }

  fetchGroup(id) {
    return this.db.doc(id).get().then((doc) => {
      if (!doc.exists) {
        console.log('No group with id of ' + id);
        return;
      }

      this.group = doc.data();
      this.group.id = id;
      console.log(this.group);
      return this.group;
    });
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

  addGroup(group) {
    return this.db.add(group).then(doc => {
      group.id = doc.id;
      console.log(group);
      return group;
    });
  }
}
const store = new Store(firebase);


const users = {
  'martin@martin.com': {
    name: 'Martin Kong',
    color: 'tomato'
  },
  'mihir@mihir.com': {
    name: 'Mihir Mathur',
    color: 'teal'
  },
  'hao@hao.com': {
    name: 'Hao Nguyen',
    color: 'turquoise'
  },
  'cody@cody.com': {
    name: 'Cody Ley-Han',
    color: 'forestGreen'
  }
}

const tasks = [
  {
    id: '3124lk1234',
    name: 'Take out trash',
    schedule: 'As needed',
    description: 'Take out the trash and make sure that you put a new bag in the thing, also don\'t throw recyclables in the trash',
    currentQueue: [
      'martin@martin.com',
      'mihir@mihir.com',
      'hao@hao.com',
      'cody@cody.com',
    ],
    currentPosition: 0,
    completed: false,
    confirmed: false
  },
  {
    id: '432jadffia0d9f',
    name: 'Get the mail',
    schedule: 'Daily',
    description: 'Just grab the mail and put it on the table when you get it',
    currentQueue: [
      'cody@cody.com',
      'mihir@mihir.com',
      'hao@hao.com',
      'martin@martin.com',
    ],
    currentPosition: 0,
    completed: false,
    confirmed: false
  },
  {
    id: 'fasdf89sadf8',
    name: 'Sweep the kitchen',
    description: 'Make sure to do a good job so it doesn\'t get all nasty',
    schedule: 'Monthly',
    currentQueue: [
      'hao@hao.com',
      'cody@cody.com',
      'martin@martin.com',
      'mihir@mihir.com',
    ],
    currentPosition: 0,
    completed: false,
    confirmed: false
  },
  {
    id: 'a90f8sad9fas',
    name: 'Maintanence Request',
    description: 'The forms are in the closet if we need something done, hopefully not.  This also includes being there when someone comes',
    schedule: 'As needed',
    currentQueue: [
      'cody@cody.com',
      'martin@martin.com',
      'mihir@mihir.com',
      'hao@hao.com',
    ],
    currentPosition: 0,
    completed: false,
    confirmed: false
  },
  {
    id: 'dsf9sdaf0asd89f9asdf',
    name: 'Vaccum carpet',
    schedule: 'Biweekly',
    description: 'Pretty easy just make sure to clean out the thing after you\re done',
    currentQueue: [
      'cody@cody.com',
      'martin@martin.com',
      'mihir@mihir.com',
      'hao@hao.com',
    ],
    currentPosition: 0,
    completed: false,
    confirmed: false
  },
  {
    id: 'jkll2k5j4l3k5',
    name: 'Clean counters',
    description: 'Use the chlorox wipes under the sink',
    schedule: 'Daily',
    currentQueue: [
      'cody@cody.com',
      'martin@martin.com',
      'mihir@mihir.com',
      'hao@hao.com',
    ],
    currentPosition: 0,
    completed: false,
    confirmed: false
  },
  {
    id: 'h8439582435',
    name: 'Put trash out',
    schedule: 'Weekly',
    description: 'Has to be put out every week by 5AM Monday morning',
    currentQueue: [
      'cody@cody.com',
      'martin@martin.com',
      'mihir@mihir.com',
      'hao@hao.com',
    ],
    currentPosition: 0,
    completed: false,
    confirmed: false
  }
]


export default {
  users,
  tasks,
  store
}