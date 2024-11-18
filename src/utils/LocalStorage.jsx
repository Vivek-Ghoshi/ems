const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "john@e.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete Project Report",
                "description": "Prepare and submit the final project report.",
                "category": "Documentation",
                "taskDate": "2024-11-01",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "description": "Discuss project progress with the team.",
                "category": "Meetings",
                "taskDate": "2024-11-03",
                "active": false,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 0,
            "new": 1,
            "failed": 0,
            "total": 2
        }
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "jane@e.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "description": "Review the code changes submitted by the team.",
                "category": "Development",
                "taskDate": "2024-11-02",
                "active": true,
                "newTask": false,
                "completedTask": true,
                "failed": false
            },
            {
                "taskTitle": "Client Presentation",
                "description": "Present the project updates to the client.",
                "category": "Presentation",
                "taskDate": "2024-11-05",
                "active": false,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 1,
            "new": 1,
            "failed": 0,
            "total": 2
        }
    },
    {
        "id": 3,
        "firstName": "Arjun",
        "email": "a@a.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Database Migration",
                "description": "Migrate the database to the new server.",
                "category": "Database",
                "taskDate": "2024-11-04",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failed": true
            },
            {
                "taskTitle": "Security Audit",
                "description": "Conduct a security audit of the system.",
                "category": "Security",
                "taskDate": "2024-11-06",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "completed": 14,
            "new": 0,
            "failed": 3,
            "total": 8
        }
    },
    {
        "id": 4,
        "firstName": "Riya",
        "email": "emily.davis@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "UI Design Update",
                "description": "Update the UI design based on client feedback.",
                "category": "Design",
                "taskDate": "2024-11-02",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failed": false
            },
            {
                "taskTitle": "User Testing",
                "description": "Conduct testing with a group of end users.",
                "category": "Testing",
                "taskDate": "2024-11-07",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 1,
            "new": 1,
            "failed": 0,
            "total": 2
        }
    },
    {
        "id": 5,
        "firstName": "Ishaan",
        "email": "sarah.brown@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Marketing Plan",
                "description": "Develop a marketing plan for the new product.",
                "category": "Marketing",
                "taskDate": "2024-11-03",
                "active": false,
                "newTask": false,
                "completedTask": false,
                "failed": true
            },
            {
                "taskTitle": "Budget Analysis",
                "description": "Analyze the project budget and submit a report.",
                "category": "Finance",
                "taskDate": "2024-11-08",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "completed": 0,
            "new": 1,
            "failed": 1,
            "total": 2
        }
    }
];

const admin = [
    {
        id: "1",
        email: "a@a.com",
        password:'123'
    }
]

export const setlocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees) )
    localStorage.setItem("admin", JSON.stringify(admin) )
}
export const getlocalStorage = () => {
     const employees = JSON.parse(localStorage.getItem("employees"));
     const admin = JSON.parse(localStorage.getItem("admin"));
    
     return {employees,admin}
}