"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function ForgotPasswordPage() {

    return (
        <div className="flex h-screen">
            {/* Left side - Military image */}
            <div className="hidden lg:flex lg:w-1/2">
                <Image
                    src="/log-in.jpg"
                    alt="Military helicopter and personnel"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                />
            </div>

            {/* Right side - Login form */}
            <div className="flex w-full items-center justify-center bg-gray-50 lg:w-1/2">
                <div className="w-full max-w-md space-y-8 px-8">
                    <div className="flex flex-col items-start space-y-4">
                        <div className="h-16 w-24">
                            <Image
                                src="/logo.png"
                                alt="Redline Track Logo"
                                width={96}
                                height={64}
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="text-start">
                            <h1 className="text-2xl font-semibold text-gray-900">Forgot Password</h1>
                            <p className="mt-2 text-sm text-gray-600">We will send the OTP code to your email for security in forgetting your password</p>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                className="h-12 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                        </div>


                        <Button
                            type="submit"
                            className="h-12 w-full rounded-full bg-gradient-to-b from-[#4F9F4F] to-[#08692C]  text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Send Verification Code
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
