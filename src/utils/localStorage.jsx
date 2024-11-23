const employees = [
  {
    "Id": 1,
    "firstName": "Ravi",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete report",
        "taskDescription": "Prepare the monthly sales report.",
        "taskDate": "2024-11-16",
        "category": "Reporting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team meeting",
        "taskDescription": "Attend the weekly team meeting.",
        "taskDate": "2024-11-17",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit expense claims",
        "taskDescription": "Submit claims for October expenses.",
        "taskDate": "2024-11-15",
        "category": "Finance"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client feedback",
        "taskDescription": "Gather client feedback on the new feature.",
        "taskDate": "2024-11-15",
        "category": "Client Relations"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review code submitted by the development team.",
        "taskDate": "2024-11-16",
        "category": "Development"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 3,
    "firstName": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "System upgrade",
        "taskDescription": "Assist in upgrading the company's servers.",
        "taskDate": "2024-11-18",
        "category": "IT Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update software",
        "taskDescription": "Update software licenses and installations.",
        "taskDate": "2024-11-15",
        "category": "IT Support"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 4,
    "firstName": "Ananya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare presentation",
        "taskDescription": "Create slides for the upcoming project pitch.",
        "taskDate": "2024-11-15",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Email follow-ups",
        "taskDescription": "Send follow-up emails to potential clients.",
        "taskDate": "2024-11-16",
        "category": "Client Relations"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "Id": 5,
    "firstName": "Pooja",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Market analysis",
        "taskDescription": "Analyze market trends for Q4.",
        "taskDate": "2024-11-19",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Organize workshop",
        "taskDescription": "Set up the venue and prepare materials.",
        "taskDate": "2024-11-15",
        "category": "Training"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "Id": 1,
    "firstName": "Arnab",
    "email": "admin@example.com",
    "password": "123"
  }
];

//console.log(admin.firstName)

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees,admin};
}



//3hr-30min