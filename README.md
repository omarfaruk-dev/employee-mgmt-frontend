# Employee Management Frontend

Next.js 16 application with TypeScript and Tailwind CSS for managing employees.

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Responsive dashboard design
- ✅ Real-time employee statistics
- ✅ Modal forms for adding/editing employees
- ✅ Confirmation dialogs for delete operations
- ✅ Success/Error notifications
- ✅ Loading states
- ✅ Beautiful UI with Tailwind CSS

## Prerequisites

- Node.js (v18 or higher)
- Backend server running on `http://localhost:5000`

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

The `.env.local` file is already configured with:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Update if your backend runs on a different port.

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
frontend/
├── app/
│   ├── page.tsx              # Main dashboard page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── EmployeeForm.tsx      # Add/Edit employee form modal
│   └── EmployeeTable.tsx     # Employee list table
├── lib/
│   └── api.ts                # API service for backend calls
├── types/
│   └── employee.ts           # TypeScript interfaces
└── .env.local                # Environment variables
```

## Dashboard Features

### Statistics Cards
- **Total Employees**: Shows total number of employees
- **Departments**: Shows number of unique departments
- **Positions**: Shows number of unique positions

### Employee Table
Displays all employees with:
- ID, Name, Email, Phone
- Department (with badge)
- Position
- Salary (formatted as currency)
- Hire Date (formatted)
- Actions (Edit/Delete buttons)

### Add Employee
Click the "Add Employee" button to open a modal form with fields:
- First Name *
- Last Name *
- Email *
- Phone
- Department
- Position
- Salary
- Hire Date

### Edit Employee
Click "Edit" on any employee row to update their information.

### Delete Employee
Click "Delete" on any employee row. A confirmation dialog will appear before deletion.

## API Integration

The app connects to the backend API at `http://localhost:5000/api/employees`

All API calls are handled through `lib/api.ts`:
- `employeeApi.getAll()` - Fetch all employees
- `employeeApi.getById(id)` - Fetch single employee
- `employeeApi.create(data)` - Create new employee
- `employeeApi.update(id, data)` - Update employee
- `employeeApi.delete(id)` - Delete employee

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Fetch API** - HTTP requests

## Development

The application uses:
- Client-side rendering with `'use client'` directive
- React hooks (useState, useEffect) for state management
- Responsive design (mobile-first approach)
- Loading states and error handling
- Form validation

## Troubleshooting

**Backend connection error:**
- Ensure backend server is running on `http://localhost:5000`
- Check CORS is enabled on backend
- Verify `.env.local` has correct API URL

**Port 3000 already in use:**
- Next.js will automatically use the next available port (3001, 3002, etc.)
- Or stop the existing process and restart

## Production Build

```bash
npm run build
npm start
```

The optimized production build will be created in the `.next` folder.
