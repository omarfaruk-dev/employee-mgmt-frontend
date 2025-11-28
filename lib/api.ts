import { Employee, EmployeeFormData, ApiResponse } from '@/types/employee';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const employeeApi = {
  // Get all employees
  getAll: async (): Promise<Employee[]> => {
    const response = await fetch(`${API_BASE_URL}/employees`);
    if (!response.ok) throw new Error('Failed to fetch employees');
    const data: ApiResponse<Employee[]> = await response.json();
    return data.data || [];
  },

  // Get single employee by ID
  getById: async (id: number): Promise<Employee> => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`);
    if (!response.ok) throw new Error('Failed to fetch employee');
    const data: ApiResponse<Employee> = await response.json();
    if (!data.data) throw new Error('Employee not found');
    return data.data;
  },

  // Create new employee
  create: async (employeeData: EmployeeFormData): Promise<Employee> => {
    const response = await fetch(`${API_BASE_URL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create employee');
    }
    const data: ApiResponse<Employee> = await response.json();
    if (!data.data) throw new Error('Failed to create employee');
    return data.data;
  },

  // Update employee
  update: async (id: number, employeeData: EmployeeFormData): Promise<Employee> => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update employee');
    }
    const data: ApiResponse<Employee> = await response.json();
    if (!data.data) throw new Error('Failed to update employee');
    return data.data;
  },

  // Delete employee
  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete employee');
    }
  },
};
