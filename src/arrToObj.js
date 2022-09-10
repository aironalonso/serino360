let initialData = [
    {
        "id": 1,
        "name": "John Doe",
        "status": 1
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "status": 2
    },
    {
        "id": 3,
        "name": "Adam Rocket",
        "status": 2
    },
    {
        "id": 4,
        "name": "Luis Rocket",
        "status": 1
    }
];

let arrayToObject = (initialData) => {
    let resultData = {};
    for (let i = 0; i < initialData.length; i++) {
        let key = "status-" + initialData[i].status;
        resultData[key] = initialData[i];
    };
    return resultData;
};

console.log(arrayToObject(initialData));