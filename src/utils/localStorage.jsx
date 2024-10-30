


const employees = [
  {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "name": "Aarav",
      "taskNumbers": { active: 1, newTask: 1, complete: 1, failed: 1 },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "complete": false,
              "failed": false,
              "title": "Implement Authentication",
              "description": "Develop and integrate user authentication module.",
              "date": "2024-10-28",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "complete": true,
              "failed": false,
              "title": "Database Backup",
              "description": "Automate daily database backups.",
              "date": "2024-10-22",
              "category": "Maintenance"
          },
          {
              "active": false,
              "newTask": false,
              "complete": false,
              "failed": true,
              "title": "Optimize API Performance",
              "description": "Improve response times for the API endpoints.",
              "date": "2024-10-20",
              "category": "Optimization"
          }
      ]
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "name": "Vivaan",
      "taskNumbers": { active: 1, newTask: 2, complete: 1, failed: 1 },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "complete": false,
              "failed": false,
              "title": "Revamp Landing Page",
              "description": "Update the landing page with a new design layout.",
              "date": "2024-10-29",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "complete": true,
              "failed": false,
              "title": "Code Review",
              "description": "Conduct code reviews for recent pull requests.",
              "date": "2024-10-15",
              "category": "Quality Assurance"
          },
          {
              "active": false,
              "newTask": true,
              "complete": false,
              "failed": true,
              "title": "Social Media API Integration",
              "description": "Integrate social media APIs for user login.",
              "date": "2024-10-12",
              "category": "Development"
          }
      ]
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "name": "Reyansh",
      "taskNumbers": { active: 1, newTask: 1, complete: 1, failed: 0 },
      "tasks": [
          {
              "active": false,
              "newTask": true,
              "complete": false,
              "failed": false,
              "title": "Improve Database Indexing",
              "description": "Enhance database indexing to reduce query time.",
              "date": "2024-10-30",
              "category": "Database"
          },
          {
              "active": true,
              "newTask": false,
              "complete": false,
              "failed": false,
              "title": "Unit Testing for Components",
              "description": "Write unit tests for the main components.",
              "date": "2024-10-25",
              "category": "Testing"
          },
          {
              "active": false,
              "newTask": false,
              "complete": true,
              "failed": false,
              "title": "Deployment Pipeline",
              "description": "Set up CI/CD pipeline for automated deployment.",
              "date": "2024-10-15",
              "category": "DevOps"
          }
      ]
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "name": "Aadhya",
      "taskNumbers": { active: 1, newTask: 1, complete: 1, failed: 0 },
      "tasks": [
          {
              "active": false,
              "newTask": true,
              "complete": false,
              "failed": false,
              "title": "Content Update",
              "description": "Refresh content for the website homepage.",
              "date": "2024-10-18",
              "category": "Content"
          },
          {
              "active": false,
              "newTask": false,
              "complete": true,
              "failed": false,
              "title": "Server Migration",
              "description": "Migrate servers to the latest infrastructure.",
              "date": "2024-10-11",
              "category": "Infrastructure"
          },
          {
              "active": true,
              "newTask": false,
              "complete": false,
              "failed": false,
              "title": "Customer Feedback Analysis",
              "description": "Analyze customer feedback for feature requests.",
              "date": "2024-10-24",
              "category": "Research"
          }
      ]
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "name": "Ishaan",
      "taskNumbers": { active: 1, newTask: 1, complete: 1, failed: 0 },
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "complete": false,
              "failed": false,
              "title": "Data Migration",
              "description": "Transfer old data to the new database system.",
              "date": "2024-10-26",
              "category": "Database"
          },
          {
              "active": false,
              "newTask": true,
              "complete": false,
              "failed": false,
              "title": "Update Analytics Dashboard",
              "description": "Add new KPIs to the analytics dashboard.",
              "date": "2024-10-29",
              "category": "Analytics"
          },
          {
              "active": false,
              "newTask": false,
              "complete": true,
              "failed": false,
              "title": "UI Testing",
              "description": "Run UI tests to check for any display issues.",
              "date": "2024-10-20",
              "category": "Testing"
          }
      ]
  }
];



  
const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
  ];
 
  export const setLocalStorage = () => {
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
  } 