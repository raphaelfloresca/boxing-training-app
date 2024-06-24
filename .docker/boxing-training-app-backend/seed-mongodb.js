print("Seeding the collection 'users' in the 'boxing-db' db");

db.users.insert([
    {
        name: "name01",
        email: "name01@test.com",
    },
    {
        name: "name02",
        email: "name02@test.com",
    },
    {
        name: "name03",
        email: "name03@test.com",
    },
    {
        name: "name04",
        email: "name04@test.com",
    },
    {
        name: "name05",
        email: "name05@test.com",
    },
]);

print("Completed seeding MongoDB!");