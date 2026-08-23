// ==========================================
// 1. USER DATA
// ==========================================

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



// ==========================================
// 2. TYPE CONVERSION
// ==========================================

// age came from somewhere as a STRING
console.log(typeof user.age);

user.age = Number(user.age);

console.log(typeof user.age);
console.log(user.age);



// ==========================================
// 3. STRING METHODS
// ==========================================

user.name = user.name.trim().toUpperCase();

user.email = user.email.toLowerCase();

console.log(user.name);
console.log(user.email);



// ==========================================
// 4. ARRAY
// ==========================================

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



// ==========================================
// 5. ARRAY LENGTH
// ==========================================

console.log("Total tasks:", tasks.length);



// ==========================================
// 6. ACCESSING ARRAY ELEMENT
// ==========================================

console.log(tasks[0]);

console.log(tasks[0].title);



// ==========================================
// 7. ADDING A TASK WITH PUSH()
// ==========================================

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



// ==========================================
// 8. MODIFYING ARRAY ELEMENT
// ==========================================

tasks[1].priority = "high";



// ==========================================
// 9. FUNCTIONS + PARAMETERS + RETURN
// ==========================================

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



// ==========================================
// 10. ARROW FUNCTION
// ==========================================

let getTaskTitles = (tasks) => {

    return tasks.map(task => task.title);

};

console.log(getTaskTitles(tasks));



// ==========================================
// 11. MAP()
// ==========================================

// Add a status property to every task

let taskStatus = tasks.map(task => {

    return {
        title: task.title,
        status: task.completed ? "Completed" : "Pending"
    };

});

console.log(taskStatus);



// ==========================================
// 12. FILTER()
// ==========================================

// Get only high priority tasks

let highPriorityTasks = tasks.filter(task => {

    return task.priority === "high";

});

console.log(highPriorityTasks);



// ==========================================
// 13. FIND()
// ==========================================

// Find a specific task

let task = tasks.find(task => {

    return task.id === 2;

});

console.log(task);



// ==========================================
// 14. SOME()
// ==========================================

let hasCompletedTask = tasks.some(task => {

    return task.completed === true;

});

console.log("Has completed task:", hasCompletedTask);



// ==========================================
// 15. EVERY()
// ==========================================

let everyoneAssignedToRaza = tasks.every(task => {

    return task.assignedTo === "Raza";

});

console.log("All assigned to Raza:", everyoneAssignedToRaza);



// ==========================================
// 16. REDUCE()
// ==========================================

// Count total number of tags

let totalTags = tasks.reduce((total, task) => {

    return total + task.tags.length;

}, 0);

console.log("Total tags:", totalTags);



// ==========================================
// 17. INCLUDES()
// ==========================================

let javascriptTaskExists = tasks.some(task => {

    return task.tags.includes("javascript");

});

console.log("JavaScript task exists:", javascriptTaskExists);



// ==========================================
// 18. OBJECT DESTRUCTURING
// ==========================================

let {
    name,
    age,
    city
} = user;

console.log(name);
console.log(age);
console.log(city);



// ==========================================
// 19. NESTED OBJECT DESTRUCTURING
// ==========================================

let {
    address: { country }
} = user;

console.log(country);



// ==========================================
// 20. ARRAY DESTRUCTURING
// ==========================================

let [firstSkill, secondSkill] = user.skills;

console.log(firstSkill);
console.log(secondSkill);



// ==========================================
// 21. REST PARAMETER
// ==========================================

function calculateTotal(...numbers) {

    return numbers.reduce((total, number) => {

        return total + number;

    }, 0);

}

console.log(calculateTotal(10, 20, 30, 40));



// ==========================================
// 22. DEFAULT PARAMETER
// ==========================================

function createTask(title, priority = "medium") {

    return {
        title: title,
        priority: priority,
        completed: false
    };

}

console.log(createTask("Study Arrays"));

console.log(createTask("Study Objects", "high"));



// ==========================================
// 23. OBJECT METHOD + THIS
// ==========================================

let taskManager = {

    name: "Raza's Task Manager",

    showName() {

        console.log(this.name);

    }

};

taskManager.showName();



// ==========================================
// 24. DATE AND TIME
// ==========================================

let now = new Date();

console.log("Current date:", now);

console.log("Year:", now.getFullYear());

console.log("Month:", now.getMonth() + 1);

console.log("Day:", now.getDate());

console.log("Hours:", now.getHours());

console.log("Minutes:", now.getMinutes());

console.log("Seconds:", now.getSeconds());



// ==========================================
// 25. DATE OBJECT FOR TASK
// ==========================================

let dueDate = new Date(tasks[0].dueDate);

console.log("Task due date:", dueDate);



// ==========================================
// 26. DATE COMPARISON
// ==========================================

let today = new Date();

let taskDueDate = new Date(tasks[0].dueDate);

if (taskDueDate > today) {

    console.log("Task is still pending.");

} else {

    console.log("Task deadline has passed.");

}



// ==========================================
// 27. TIMESTAMP
// ==========================================

console.log("Current timestamp:", Date.now());

console.log("Task timestamp:", taskDueDate.getTime());



// ==========================================
// 28. JSON.stringify()
// ==========================================

// Convert JavaScript object/array into JSON

let jsonData = JSON.stringify(tasks);

console.log(jsonData);

console.log(typeof jsonData);



// ==========================================
// 29. JSON.parse()
// ==========================================

// Convert JSON back into JavaScript data

let parsedTasks = JSON.parse(jsonData);

console.log(parsedTasks);

console.log(typeof parsedTasks);



// ==========================================
// 30. OPTIONAL CHAINING
// ==========================================

console.log(user.address?.city);

console.log(user.company?.name);



// ==========================================
// 31. NULLISH COALESCING
// ==========================================

let company = user.company?.name ?? "No company";

console.log(company);



// ==========================================
// 32. SPREAD OPERATOR
// ==========================================

let updatedUser = {

    ...user,

    age: 23

};

console.log(updatedUser);



// ==========================================
// 33. STRING SEARCH
// ==========================================

function searchTasks(keyword) {

    return tasks.filter(task => {

        return task.title
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

}

console.log(searchTasks("javascript"));



// ==========================================
// 34. REMOVE LAST TASK
// ==========================================

let removedTask = tasks.pop();

console.log("Removed:", removedTask);



// ==========================================
// 35. REMOVE FIRST TASK
// ==========================================

let firstTask = tasks.shift();

console.log("Removed first:", firstTask);



// ==========================================
// 36. ADD TASK TO BEGINNING
// ==========================================

tasks.unshift({

    id: 5,
    title: "Practice Functions",
    priority: "high",
    completed: false

});



// ==========================================
// 37. SPLICE()
// ==========================================

// Replace one task

tasks.splice(1, 1, {

    id: 6,
    title: "Practice Objects",
    priority: "high",
    completed: false

});



// ==========================================
// 38. SLICE()
// ==========================================

let firstTwoTasks = tasks.slice(0, 2);

console.log(firstTwoTasks);



// ==========================================
// 39. JOIN()
// ==========================================

let skillsString = user.skills.join(", ");

console.log(skillsString);



// ==========================================
// 40. ARRAY CHECK
// ==========================================

console.log(Array.isArray(tasks));

console.log(Array.isArray(user));



// ==========================================
// FINAL RESULT
// ==========================================

console.log("FINAL TASKS:");

console.log(tasks);