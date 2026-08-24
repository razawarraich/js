let user = {
    id: 101,
    name: "Raza",
    age: "22",
    city: "Lahore",
    email: "RAZA@EXAMPLE.COM",

    address: {
        country: "Pakistan",
        area: "DHA"
    },

    skills: ["JavaScript", "React", "Node.js"]
};
console.log(typeof user.age);

user.age = Number(user.age);

console.log(typeof user.age);
console.log(user.age);
user.name = user.name.trim().toUpperCase();

user.email = user.email.toLowerCase();

console.log(user.name);
console.log(user.email);
let tasks = [

    {
        id: 1,
        title: "Learn JavaScript",
        description: "Study JavaScript fundamentals",
        priority: "high",
        completed: false,
        dueDate: "2026-08-25",
        assignedTo: "Raza",
        tags: ["javascript", "learning"]
    },

    {
        id: 2,
        title: "Build Portfolio",
        description: "Create personal developer portfolio",
        priority: "medium",
        completed: false,
        dueDate: "2026-08-28",
        assignedTo: "Raza",
        tags: ["portfolio", "web"]
    },

    {
        id: 3,
        title: "Push Code",
        description: "Push JavaScript practice to GitHub",
        priority: "low",
        completed: true,
        dueDate: "2026-08-22",
        assignedTo: "Raza",
        tags: ["github", "javascript"]
    }

];


console.log("Total tasks:", tasks.length);
console.log(tasks[0]);

console.log(tasks[0].title);

tasks.push({
    id: 4,
    title: "Learn Node.js",
    description: "Start learning backend development",
    priority: "high",
    completed: false,
    dueDate: "2026-09-01",
    assignedTo: "Raza",
    tags: ["node", "backend"]
});
tasks[1].priority = "high";
function calculateProgress(tasks) {

    let completedTasks = tasks.filter(function(task) {
        return task.completed === true;
    });

    let percentage =
        (completedTasks.length / tasks.length) * 100;

    return percentage;
}


let progress = calculateProgress(tasks);

console.log("Progress:", progress);


let getTaskTitles = (tasks) => {

    return tasks.map(task => task.title);

};

console.log(getTaskTitles(tasks));

let taskStatus = tasks.map(task => {

    return {
        title: task.title,
        status: task.completed ? "Completed" : "Pending"
    };

});

console.log(taskStatus);

let highPriorityTasks = tasks.filter(task => {

    return task.priority === "high";

});

console.log(highPriorityTasks);
let task = tasks.find(task => {

    return task.id === 2;

});

console.log(task);
let hasCompletedTask = tasks.some(task => {

    return task.completed === true;

});

console.log("Has completed task:", hasCompletedTask);
let everyoneAssignedToRaza = tasks.every(task => {

    return task.assignedTo === "Raza";

});

console.log("All assigned to Raza:", everyoneAssignedToRaza);
let totalTags = tasks.reduce((total, task) => {

    return total + task.tags.length;

}, 0);

console.log("Total tags:", totalTags);
let javascriptTaskExists = tasks.some(task => {

    return task.tags.includes("javascript");

});

console.log("JavaScript task exists:", javascriptTaskExists);
let {
    name,
    age,
    city
} = user;

console.log(name);
console.log(age);
console.log(city);
let {
    address: { country }
} = user;

console.log(country);
let [firstSkill, secondSkill] = user.skills;

console.log(firstSkill);
console.log(secondSkill);

function calculateTotal(...numbers) {

    return numbers.reduce((total, number) => {

        return total + number;

    }, 0);

}

console.log(calculateTotal(10, 20, 30, 40));

function createTask(title, priority = "medium") {

    return {
        title: title,
        priority: priority,
        completed: false
    };

}

console.log(createTask("Study Arrays"));

console.log(createTask("Study Objects", "high"));

let taskManager = {

    name: "Raza's Task Manager",

    showName() {

        console.log(this.name);

    }

};

taskManager.showName();
let now = new Date();

console.log("Current date:", now);

console.log("Year:", now.getFullYear());

console.log("Month:", now.getMonth() + 1);

console.log("Day:", now.getDate());

console.log("Hours:", now.getHours());

console.log("Minutes:", now.getMinutes());

console.log("Seconds:", now.getSeconds());

let dueDate = new Date(tasks[0].dueDate);

console.log("Task due date:", dueDate);

let today = new Date();

let taskDueDate = new Date(tasks[0].dueDate);

if (taskDueDate > today) {

    console.log("Task is still pending.");

} else {

    console.log("Task deadline has passed.");

}
console.log("Current timestamp:", Date.now());

console.log("Task timestamp:", taskDueDate.getTime());
let jsonData = JSON.stringify(tasks);

console.log(jsonData);

console.log(typeof jsonData);
let parsedTasks = JSON.parse(jsonData);

console.log(parsedTasks);

console.log(typeof parsedTasks);


console.log(user.address?.city);

console.log(user.company?.name);


let company = user.company?.name ?? "No company";

console.log(company);

let updatedUser = {

    ...user,

    age: 23

};

console.log(updatedUser);

function searchTasks(keyword) {

    return tasks.filter(task => {

        return task.title
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });
}
console.log(searchTasks("javascript"));
let removedTask = tasks.pop();
console.log("Removed:", removedTask);
let firstTask = tasks.shift();
console.log("Removed first:", firstTask);
tasks.unshift({
    id: 5,
    title: "Practice Functions",
    priority: "high",
    completed: false

});
tasks.splice(1, 1, {
    id: 6,
    title: "Practice Objects",
    priority: "high",
    completed: false
});
let firstTwoTasks = tasks.slice(0, 2);
console.log(firstTwoTasks);
let skillsString = user.skills.join(", ");
console.log(skillsString);
console.log(Array.isArray(tasks));
console.log(Array.isArray(user));
console.log("FINAL TASKS:");
console.log(tasks);