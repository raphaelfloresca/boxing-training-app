print("Seeding the collection 'users' in the 'boxing-db' db");

db.users.insert([
  {
    "_id": "user01",
    "name": "John Doe",
    "logs": ["log01", "log02"]
  },
  {
    "_id": "user02",
    "name": "Jane Smith",
    "logs": ["log03", "log04"]
  },
  {
    "_id": "user03",
    "name": "Mike Johnson",
    "logs": ["log05"]
  }
]);

db.logs.insert([
  {
    "_id": "log01",
    "userId": "user01",
    "date": { "$date": "2024-06-25T00:00:00Z" },
    "workouts": ["wo01", "wo02"]
  },
  {
    "_id": "log02",
    "userId": "user01",
    "date": { "$date": "2024-06-26T00:00:00Z" },
    "workouts": ["wo03"]
  },
  {
    "_id": "log03",
    "userId": "user02",
    "date": { "$date": "2024-06-25T00:00:00Z" },
    "workouts": ["wo04"]
  },
  {
    "_id": "log04",
    "userId": "user02",
    "date": { "$date": "2024-06-27T00:00:00Z" },
    "workouts": ["wo05", "wo06"]
  },
  {
    "_id": "log05",
    "userId": "user03",
    "date": { "$date": "2024-06-28T00:00:00Z" },
    "workouts": ["wo07"]
  }
])

db.workouts.insert([
  {
    "_id": "wo01",
    "logId": "log01",
    "question": {
      "timeAvailable": 30,
      "intensityLevel": "mid"
    },
    "activities": {
      "skipping": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      },
      "sandbag": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      },
      "shadowBoxing": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      }
    }
  },
  {
    "_id": "wo02",
    "logId": "log01",
    "question": {
      "timeAvailable": 45,
      "intensityLevel": "high"
    },
    "activities": {
      "skipping": {
        "roundsCompleted": 0,
        "totalRounds": 4,
        "totalTime": 720
      },
      "sandbag": {
        "roundsCompleted": 0,
        "totalRounds": 4,
        "totalTime": 720
      },
      "shadowBoxing": {
        "roundsCompleted": 0,
        "totalRounds": 4,
        "totalTime": 720
      }
    }
  },
  {
    "_id": "wo03",
    "logId": "log02",
    "question": {
      "timeAvailable": 60,
      "intensityLevel": "low"
    },
    "activities": {
      "skipping": {
        "roundsCompleted": 0,
        "totalRounds": 2,
        "totalTime": 360
      },
      "sandbag": {
        "roundsCompleted": 0,
        "totalRounds": 2,
        "totalTime": 360
      },
      "shadowBoxing": {
        "roundsCompleted": 0,
        "totalRounds": 2,
        "totalTime": 360
      }
    }
  },
  {
    "_id": "wo04",
    "logId": "log03",
    "question": {
      "timeAvailable": 40,
      "intensityLevel": "mid"
    },
    "activities": {
      "skipping": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      },
      "sandbag": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      },
      "shadowBoxing": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      }
    }
  },
  {
    "_id": "wo05",
    "logId": "log04",
    "question": {
      "timeAvailable": 50,
      "intensityLevel": "high"
    },
    "activities": {
      "skipping": {
        "roundsCompleted": 0,
        "totalRounds": 5,
        "totalTime": 900
      },
      "sandbag": {
        "roundsCompleted": 0,
        "totalRounds": 5,
        "totalTime": 900
      },
      "shadowBoxing": {
        "roundsCompleted": 0,
        "totalRounds": 5,
        "totalTime": 900
      }
    }
  },
  {
    "_id": "wo06",
    "logId": "log04",
    "question": {
      "timeAvailable": 35,
      "intensityLevel": "mid"
    },
    "activities": {
      "skipping": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      },
      "sandbag": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      },
      "shadowBoxing": {
        "roundsCompleted": 0,
        "totalRounds": 3,
        "totalTime": 540
      }
    }
  },
  {
    "_id": "wo07",
    "logId": "log05",
    "question": {
      "timeAvailable": 55,
      "intensityLevel": "low"
    },
    "activities": {
      "skipping": {
        "roundsCompleted": 0,
        "totalRounds": 2,
        "totalTime": 360
      },
      "sandbag": {
        "roundsCompleted": 0,
        "totalRounds": 2,
        "totalTime": 360
      },
      "shadowBoxing": {
        "roundsCompleted": 0,
        "totalRounds": 2,
        "totalTime": 360
      }
    }
  }
])


print("Completed seeding MongoDB!");
