"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    abhaId: "",
    phoneNumber: "",
    role: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Handle login logic here
    // For now, redirect to dashboard after successful form submission
    router.push("/dashboard")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10 flex flex-col items-center justify-center">
          <div className="mb-6">
            <Image
              src="/images/aarogya-saathi-logo.png"
              alt="Aarogya Saathi Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 className="text-6xl font-black mb-4 tracking-wide whitespace-nowrap text-center">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-600 bg-clip-text text-transparent drop-shadow-lg">
              AAROGYA SAATHI
            </span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium tracking-wider">Your Health Companion</p>
        </div>

        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-2 pb-8 pt-8">
            <h2 className="text-3xl font-bold text-center text-primary">Welcome Back</h2>
            <p className="text-center text-muted-foreground text-base">Sign in to access your health dashboard</p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="abhaId" className="text-foreground font-semibold text-base">
                  ABHA ID
                </Label>
                <Input
                  id="abhaId"
                  type="text"
                  placeholder="Enter your ABHA ID"
                  value={formData.abhaId}
                  onChange={(e) => handleInputChange("abhaId", e.target.value)}
                  className="h-12 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-input text-base"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phoneNumber" className="text-foreground font-semibold text-base">
                  PHONE NUMBER
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="h-12 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-input text-base"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="role" className="text-foreground font-semibold text-base">
                  ROLE
                </Label>
                <Select onValueChange={(value) => handleInputChange("role", value)} required>
                  <SelectTrigger className="h-12 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-input text-base">
                    <SelectValue placeholder="What brings you here" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="patient" className="text-base">
                      Patient
                    </SelectItem>
                    <SelectItem value="doctor" className="text-base">
                      Doctor
                    </SelectItem>
                    <SelectItem value="admin" className="text-base">
                      Admin
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground font-bold py-4 px-6 text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] mt-8 h-14"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-medium">© 2024 Aarogya Saathi. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
