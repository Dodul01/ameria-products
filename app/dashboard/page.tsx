"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CrownIcon, LineChartIcon, EyeIcon, BanIcon, UserRound, UsersRoundIcon } from "lucide-react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts"
import Charts from "./_components/charts/Charts"
import { CrownIcon, LineChartIcon, EyeIcon, BanIcon, UsersRoundIcon } from "lucide-react"
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts"

const earningsData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 95 },
    { month: "May", value: 60 },
    { month: "Jun", value: 40 },
    { month: "Jul", value: 35 },
    { month: "Aug", value: 70 },
    { month: "Sep", value: 55 },
    { month: "Oct", value: 50 },
    { month: "Nov", value: 50 },
    { month: "Dec", value: 58 },
]

const users = [
    { id: "#5089", name: "Jane Cooper", date: "May 10,2025", status: "Active" },
    { id: "#5089", name: "Jane Cooper", date: "May 10,2025", status: "Blocked" },
    { id: "#5089", name: "Jane Cooper", date: "May 10,2025", status: "Active" },
    { id: "#5089", name: "Jane Cooper", date: "May 10,2025", status: "Blocked" },
];

export default function DashboardPage() {
    return (
        <main className="p-4 md:p-6 space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="flex items-start justify-between  space-y-2">
                        <div>
                            <p className="text-md text-muted-foreground font-medium">Total User</p>
                            <h2 className="text-[28px] font-bold">68</h2>
                        </div>

                        <div className="flex items-center justify-center bg-[#8280ff65] p-2 rounded-3xl h-[60px] w-[60px]">
                            <UsersRoundIcon className="text-[#8280FF]" />
                        </div>
                    </CardContent>

                </Card>
                <Card>
                    <CardContent className="flex items-start justify-between  space-y-2">
                        <div>
                            <p className="text-md text-muted-foreground font-medium">Total Earning</p>
                            <h2 className="text-[28px] font-bold">40,685</h2>
                        </div>

                        <div className="flex items-center justify-center bg-[#4ad99259] p-2 rounded-3xl h-[60px] w-[60px]">
                            <LineChartIcon className="text-[#4AD991]" />
                        </div>
                    </CardContent>
                </Card>
                <Card>

                    <CardContent className="flex items-start justify-between  space-y-2">
                        <div>
                            <p className="text-md text-muted-foreground font-medium">Active Subscription</p>
                            <h2 className="text-[28px] font-bold">40</h2>
                        </div>

                        <div className=" flex items-center justify-center bg-[#ffeed8f3] p-2 rounded-3xl h-[60px] w-[60px]">
                            <CrownIcon className="text-orange-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Chart */}
            <Charts />
 
            {/* User Table */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">User List</h3>
                        <Select defaultValue="active">
                            <SelectTrigger className="w-[100px] h-8">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="blocked">Blocked</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-green-900 text-white">
                                <TableRow>
                                    <TableHead className="text-white">User ID</TableHead>
                                    <TableHead className="text-white">User Name</TableHead>
                                    <TableHead className="text-white">Join Date</TableHead>
                                    <TableHead className="text-white">Status</TableHead>
                                    <TableHead className="text-white text-center">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>{user.date}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant="outline"
                                                className={`px-2 ${user.status === "Active" ? "text-green-600 border-green-600" : "text-red-600 border-red-600"}`}
                                            >
                                                {user.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-center space-x-2">
                                            <Button size="icon" variant="ghost"><EyeIcon className="w-4 h-4 text-green-600" /></Button>
                                            <Button size="icon" variant="ghost"><BanIcon className="w-4 h-4 text-red-600" /></Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}