export interface Department {
  id: string;
  name: string;
  description?: string;
  memberCount?: number;
  createdAt?: string;
}

export interface DepartmentsListResponse {
  departments: Department[];
  total: number;
}

export interface CreateDepartmentPayload {
  name: string;
  description?: string;
}

export type PaginationState = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type FilterTag = {
  id: string;
  label: string;
};
