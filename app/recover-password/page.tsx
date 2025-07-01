"use client"

import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import militaryImage from '@/public/otpimg.jpg'
import logo from '@/public/logo.png'

export default function NewPasswordPage() {
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    return (
        <div className="flex min-h-screen">
            {/* Left Side Image */}
            <div className="hidden md:block w-1/2 relative">
                <Image
                    src={militaryImage}
                    alt="Military Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                />
            </div>

            {/* Right Side Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                <div className="w-full max-w-md space-y-6">
                    {/* Logo */}
                    <div>
                        <Image src={logo} alt="Logo" width={128} height={85} />
                    </div>

                    {/* Heading */}
                    <div>
                        <h2 className="text-2xl font-semibold">Set New Password</h2>
                        <p className="text-sm text-muted-foreground mt-2">
                            Enter your new password and make sure you remember it
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        <h3 className="text-sm mb-2 text-muted-foreground font-semibold">New Password</h3>
                        <div className="relative">
                            <Input
                                type={showPassword1 ? "text" : "password"}
                                placeholder="Password"
                                className="px-3 py-2 h-12 w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword1((prev) => !prev)}
                                className="absolute right-3 top-2.5 text-muted-foreground"
                            >
                                {showPassword1 ? (
                                    <EyeOffIcon className="w-5 h-5" />
                                ) : (
                                    <EyeIcon className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        <h3 className="text-sm mb-2 text-muted-foreground font-semibold">Confirm Password</h3>
                        <div className="relative">
                            <Input
                                type={showPassword2 ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="px-3 py-2 h-12 w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword2((prev) => !prev)}
                                className="absolute right-3 top-2.5 text-muted-foreground"
                            >
                                {showPassword2 ? (
                                    <EyeOffIcon className="w-5 h-5" />
                                ) : (
                                    <EyeIcon className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="h-12 w-full rounded-full bg-gradient-to-b from-[#4F9F4F] to-[#08692C]  text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    )
}
