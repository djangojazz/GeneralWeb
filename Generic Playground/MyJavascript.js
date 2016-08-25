var stepNumber = 1;
var thing = "ants";

function DoStuff() {
    console.time("Steps time")
    console.group("Steps");
    FirstStep();
    stepNumber++;
    SecondStep();
    stepNumber++;
    ThirdStep();
    console.groupEnd();
    console.timeEnd("Steps time");

    console.group("%cFinishing part", "font-size: x-large");
    LoadBanners();
    SoundTrumpets();
    console.groupEnd();

    document.getElementById("chromeImage").className = "smallImage";
}

function LoadResourcesData() {
    //CreateWebSQLData();
    CreateIndexedDbData();
    CreateLocalAndSessionStorageData();
    CreateCookieData();
}

// Looks like this is no longer used
// function CreateWebSQLData() {
//     var db = openDatabase('testdb', '1.0', 'test database', 2 * 1024 * 1024);
//     db.transaction(function (tx) {
//             tx.executeSQL('CREATE TABLE test (id unique, data)');
//             tx.executeSQL('INSERT INTO test (id, data) VALUES (1, "test")' );
//     });
// }

function CreateIndexedDbData() {
    console.group("IndexDB");

    var db;
    var request = indexedDB.open("IndexDB Test DB", 7);
    request.onerror = function(event) {
        console.log("Couldn't use IndexDB");
    };
    request.onsuccess = function(event) {
        db = request.result;
        console.log("Opened database!");
    }

    var customerData = [
        { id: 1, name: "Joe"},
        { id: 2, name: "Bob"}
    ];

    request.onerror = function(event) {
    };

    request.onupgradeneeded = function(event) {
        console.log("Upgrading database");
        var db = event.target.result;

        if(db.objectStoreNames.contains("customers")) {
            db.deleteObjectStore("customers");
        }

        var objectStore = db.createObjectStore("customers", { keyPath: "id"});
        objectStore.createIndex("name", "name", { unique: false});

        for (var i in customerData) {
            console.log("Adding customer: %s", i.name);
            objectStore.add(customerData[i]);
        }
    };
    console.groupEnd();
}

function CreateLocalAndSessionStorageData() {
    localStorage.setItem("test key", "test value");
    sessionStorage.setItem("test session key", "test session value");
}

function CreateCookieData() {
    document.cookie - "cookiekey = cookievalue";
}

function FirstStep() {
    console.group("Step %i", stepNumber)
    console.log("Finding %s", thing);
    console.log("Building %s farms", thing);
    console.log("Feeding %s", thing);
    console.groupEnd();
}

function SecondStep() {
    console.log("Step %i", stepNumber)
}

function ThirdStep() {
    console.log("Step %i", stepNumber)
}

function LoadBanners() {
    console.log("Loading Banners");
}

function SoundTrumpets() {
    console.log("Sound Trumpets");
}