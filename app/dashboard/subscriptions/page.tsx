import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Plus, Trash } from "lucide-react"

const page = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold my-8">Subscription Earning</h1>
                <div className="flex items-center space-x-2">
                    <div className="relative">

                        <Button
                            className="bg-[#08692C] hover:bg-green-700 h-[40px] cursor-pointer"
                        >
                            <Plus className="h-4 w-4" />
                            Create Subscription Plan
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <Card>
                    <CardContent>
                        <h1 className="font-semibold text-2xl mb-4">Subscription Plan</h1>
                        <div>
                            <h1 className="text-muted-foreground"><span className="text-4xl text-black font-bold">$35.00</span>/month</h1>
                        </div>
                        <div className="flex items-center justify-between my-2">
                            <Button className="bg-green-200 hover:bg-green-300 cursor-pointer"><Edit /> Edit Price</Button>
                            <Button><Trash /> Remove Plan</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default page