"use client"

import { User } from "@/types/user"
import { useState, useMemo } from "react"


const mockUsers: User[] = [
  { id: "#5089", name: "Jane Cooper", joinDate: "May 10,2025", status: "Active" },
  { id: "#5090", name: "John Doe", joinDate: "May 11,2025", status: "Blocked" },
  { id: "#5091", name: "Alice Smith", joinDate: "May 12,2025", status: "Active" },
  // Add more mock data as needed
]

export function useUsers() {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(12)

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [users, searchTerm])

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage
    return filteredUsers.slice(startIndex, startIndex + usersPerPage)
  }, [filteredUsers, currentPage, usersPerPage])

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  const updateUserStatus = (userId: string, status: "Active" | "Blocked") => {
    setUsers((prev) => prev.map((user) => (user.id === userId ? { ...user, status } : user)))
  }

  const deleteUser = (userId: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId))
  }

  return {
    users: paginatedUsers,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
    updateUserStatus,
    deleteUser,
    totalUsers: filteredUsers.length,
  }
}
