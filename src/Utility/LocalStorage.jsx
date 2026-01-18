export const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Login Page",
        description: "Design and implement login UI",
        date: "2026-01-10",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate payment API",
        date: "2026-01-03",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Schema",
        description: "Design MongoDB schema",
        date: "2026-01-12",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "CRUD APIs",
        description: "Create employee CRUD APIs",
        date: "2026-01-07",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deployment",
        description: "Deploy app on server",
        date: "2026-01-02",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Dashboard UI",
        description: "Build admin dashboard",
        date: "2026-01-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Form Validation",
        description: "Add validation to forms",
        date: "2026-01-06",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Testing",
        description: "Write unit tests",
        date: "2026-01-04",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Authentication",
        description: "Implement JWT authentication",
        date: "2026-01-13",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Password Reset",
        description: "Add forgot password feature",
        date: "2026-01-08",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Role Management",
        description: "Implement role-based access",
        date: "2026-01-01",
        category: "Authorization"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Improvements",
        description: "Improve overall UI/UX",
        date: "2026-01-15",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Refactor",
        description: "Refactor old code",
        date: "2026-01-09",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Performance Optimization",
        description: "Optimize app performance",
        date: "2026-01-02",
        category: "Optimization"
      }
    ]
  }
];


export const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]


export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}

}