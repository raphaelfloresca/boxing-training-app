print("Seeding the collection 'users' in the 'boxing-db' db");

db.users.insert([
    {
        name: "name01",
        logEntities:[
            "log01","log02"
        ]
    },
    {
        name: "name02",
        logEntities:[
            "log01","log02"
        ]
    },
    {
        name: "name03",
        logEntities:[
            "log01","log02"
        ]
    },
    {
        name: "name04",
        logEntities:[
            "log01","log02"
        ]
    },
    {
        name: "name05",
        logEntities:[
            "log01","log02"
        ]
    },
]);

db.logs.insert([
    {
        logId:"log01",
        dateTime: "20240625",
        workouts:[
            "wo01","wo02"
        ]
    },
    {
        logId:"log02",
        dateTime: "20240626",
        workouts:[
            "wo01","wo02"
        ]
    },
])

db.workouts.insert([
    {
        workoutId:"wo01",
        activitiesId: "a01",
        questionId:"q01"
    },
    {
        workoutId:"wo02",
        activitiesId: "a02",
        questionId:"q02"
    },
])

db.activities.insert([
    {
        activitiesId: "a01",
        skippingId:"s01",
        sandbagId: "sb01",
        shadowBoxingId: "sw01"
    },
    {
        activitiesId: "a02",
        skippingId:"s02",
        sandbagId: "sb02",
        shadowBoxingId: "sw02"
    },
])

db.questions.insert([
    {
        questionId: "q01",
        timeAvail: 30,
        intensityLv: "mid"
    },
    {
        questionId: "q02",
        timeAvail: 60,
        intensityLv: "low"
    },
])

db.skippings.insert([
    {
        skippingId: "s01",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        skippingId: "s02",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        skippingId: "s03",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        skippingId: "s04",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        skippingId: "s05",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
]);

db.sandbags.insert([
    {
        sandbagId: "sb01",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        sandbagId: "sb02",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        sandbagId: "sb03",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        sandbagId: "sb04",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        sandbagId: "sb05",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
]);

db.shadowBoxings.insert([
    {
        shadowBoxingId: "sb01",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        shadowBoxingId: "sb02",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        shadowBoxingId: "sb03",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        shadowBoxingId: "sb04",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
    {
        shadowBoxingId: "sb05",
        roundComp: 0,
        totalRound:3,
        totalTime:540
    },
]);
print("Completed seeding MongoDB!");