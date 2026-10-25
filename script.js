const userProfile = {
    name: "Dinislam",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["Programming", "Gaming", "Volleyball"]
};

const currentYear = new Date().getFullYear();

let age = currentYear - userProfile.birthYear;

let hobbiesCount = userProfile.hobbies.length;

console.log("User Profile:", userProfile);
console.log("Current Year:", currentYear);
console.log("Age:", age);
console.log("Number of Hobbies:", hobbiesCount);

document.getElementById("profileName").textContent = userProfile.name;

document.getElementById("birthYear").textContent = userProfile.birthYear;

document.getElementById("age").textContent = age;

document.getElementById("developerStatus").textContent =
    userProfile.isDeveloper ? "Yes" : "No";

document.getElementById("hobbiesCount").textContent = hobbiesCount;

const hobbiesList = document.getElementById("hobbiesList");

function displayHobbies() {
    hobbiesList.innerHTML = "";

    userProfile.hobbies.forEach(function(hobby) {
        const listItem = document.createElement("li");

        listItem.textContent = hobby;

        hobbiesList.appendChild(listItem);
    });

    hobbiesCount = userProfile.hobbies.length;

    document.getElementById("hobbiesCount").textContent =
        hobbiesCount;
}

displayHobbies();


const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    const birthYearInput =
        Number(document.getElementById("birthYearInput").value);

    userProfile.name = username;

    userProfile.birthYear = birthYearInput;

    age = currentYear - userProfile.birthYear;

    document.getElementById("profileName").textContent =
        userProfile.name;

    document.getElementById("birthYear").textContent =
        userProfile.birthYear;

    document.getElementById("age").textContent = age;

    console.log("Updated User Profile:", userProfile);
});


const hobbyInput = document.getElementById("hobbyInput");

const addHobbyButton =
    document.getElementById("addHobbyButton");

const removeHobbyButton =
    document.getElementById("removeHobbyButton");


addHobbyButton.addEventListener("click", function() {
    const newHobby = hobbyInput.value.trim();

    if (newHobby !== "") {
        userProfile.hobbies.push(newHobby);

        displayHobbies();

        hobbyInput.value = "";

        console.log("Hobby added:", newHobby);
    }
});


removeHobbyButton.addEventListener("click", function() {
    if (userProfile.hobbies.length > 0) {
        const removedHobby = userProfile.hobbies.pop();

        displayHobbies();

        console.log("Hobby removed:", removedHobby);
    }
});