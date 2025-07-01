export interface User {
  id: string
  name: string
  joinDate: string
  status: "Active" | "Blocked"
  email?: string
  role?: string
}

export interface UserTableProps {
  users: User[]
  onEdit?: (user: User) => void
  onDelete?: (userId: string) => void
  onBlock?: (userId: string) => void
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
}
