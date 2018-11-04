const users = {
  '345345dafasdf': {
    name: 'Martin Kong',
    color: 'tomato'
  },
  'adf89dsaf980809df': {
    name: 'Mihir Mathur',
    color: 'teal'
  },
  'gfg09h8dfs0g98df09g': {
    name: 'Hao Nguyen',
    color: 'turquoise'
  },
  '908fdsg09dfg809': {
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
      '345345dafasdf',
      'adf89dsaf980809df',
      'gfg09h8dfs0g98df09g',
      '908fdsg09dfg809',
    ]
  },
  {
    id: '432jadffia0d9f',
    name: 'Get mail',
    schedule: 'Daily',
    description: 'Just grab the mail and put it on the table when you get it',
    currentQueue: [
      '908fdsg09dfg809',
      'adf89dsaf980809df',
      'gfg09h8dfs0g98df09g',
      '345345dafasdf',
    ]
  },
  {
    id: 'fasdf89sadf8',
    name: 'Sweep the kitchen',
    description: 'Make sure to do a good job so it doesn\'t get all nasty',
    schedule: 'Monthly',
    currentQueue: [
      'gfg09h8dfs0g98df09g',
      '908fdsg09dfg809',
      '345345dafasdf',
      'adf89dsaf980809df',
    ]
  },
  {
    id: 'a90f8sad9fas',
    name: 'Maintanence Request',
    description: 'The forms are in the closet if we need something done, hopefully not.  This also includes being there when someone comes',
    schedule: 'As needed',
    currentQueue: [
      '908fdsg09dfg809',
      '345345dafasdf',
      'adf89dsaf980809df',
      'gfg09h8dfs0g98df09g',
    ]
  },
  {
    id: 'a90f8sad9fas',
    name: 'Vaccum carpet',
    schedule: 'Biweekly',
    description: 'Pretty easy just make sure to clean out the thing after you\re done',
    currentQueue: [
      '908fdsg09dfg809',
      '345345dafasdf',
      'adf89dsaf980809df',
      'gfg09h8dfs0g98df09g',
    ]
  },
  {
    id: 'jkll2k5j4l3k5',
    name: 'Clean counters',
    description: 'Use the chlorox wipes under the sink',
    schedule: 'Daily',
    currentQueue: [
      '908fdsg09dfg809',
      '345345dafasdf',
      'adf89dsaf980809df',
      'gfg09h8dfs0g98df09g',
    ]
  },
  {
    id: 'h8439582435',
    name: 'Put trash out',
    schedule: 'Weekly',
    description: 'Has to be put out every week by 5AM Monday morning',
    currentQueue: [
      '908fdsg09dfg809',
      '345345dafasdf',
      'adf89dsaf980809df',
      'gfg09h8dfs0g98df09g',
    ]
  }
]


export default {
  users,
  tasks
}