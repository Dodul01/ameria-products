"use client"

import { Eye, Ban, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ActionButtonsProps {
  status: "Active" | "Blocked"
}

export default function ActionButtons({ status }: ActionButtonsProps) {
  const handleEdit = () => {
    console.log("Edit user")
  }

  const handleDelete = () => {
    console.log("Delete user")
  }

  const handleBlock = () => {
    console.log("Block/Unblock user")
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleEdit}
        className="h-8 w-8 p-0 text-orange-500 hover:text-orange-600 hover:bg-orange-50"
      >
        <Eye className="h-4 w-4" />
      </Button>
      {status === "Active" ? (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDelete}
          className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <Ban className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBlock}
          className="h-8 w-8 p-0 text-green-500 hover:text-green-600 hover:bg-green-50"
        >
          <Lock className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
