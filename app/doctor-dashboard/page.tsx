"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Users,
  FileText,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Stethoscope,
  Phone,
  MessageCircle,
  Search,
  AlertTriangle,
  AlertCircle,
  Info,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function DoctorDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const patientRequests = [
    {
      id: 1,
      name: "Rajesh Kumar",
      age: 45,
      condition: "Diabetes Management",
      date: "2024-01-15",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 32,
      condition: "Hypertension",
      date: "2024-01-14",
      status: "pending",
      priority: "moderate",
    },
    {
      id: 3,
      name: "Amit Singh",
      age: 28,
      condition: "Regular Checkup",
      date: "2024-01-13",
      status: "pending",
      priority: "low",
    },
    {
      id: 4,
      name: "Sunita Devi",
      age: 55,
      condition: "Chest Pain",
      date: "2024-01-16",
      status: "pending",
      priority: "critical",
    },
  ]

  const patientHistory = [
    {
      id: 1,
      name: "Sunita Devi",
      age: 55,
      lastVisit: "2024-01-10",
      condition: "Heart Disease",
      status: "stable",
      priority: "high",
    },
    {
      id: 2,
      name: "Ravi Patel",
      age: 38,
      lastVisit: "2024-01-08",
      condition: "Asthma",
      status: "improving",
      priority: "moderate",
    },
    {
      id: 3,
      name: "Meera Joshi",
      age: 42,
      lastVisit: "2024-01-05",
      condition: "Arthritis",
      status: "monitoring",
      priority: "low",
    },
  ]

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "critical":
        return <AlertTriangle className="h-3 w-3 inline mr-1" />
      case "high":
        return <AlertCircle className="h-3 w-3 inline mr-1" />
      case "moderate":
        return <Clock className="h-3 w-3 inline mr-1" />
      case "low":
        return <Info className="h-3 w-3 inline mr-1" />
      default:
        return <Clock className="h-3 w-3 inline mr-1" />
    }
  }

  const filteredRequests = patientRequests.filter(
    (request) =>
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.condition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredHistory = patientHistory.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b-2 border-emerald-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/aarogya-saathi-logo.png"
                alt="Aarogya Saathi Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                AAROGYA SAATHI - DOCTOR PORTAL
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/doctor-dashboard"
                className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link href="/patients" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Patients
              </Link>
              <Link href="/appointments" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Appointments
              </Link>
              <Link href="/reports" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Reports
              </Link>
            </div>
            <Button
              variant="outline"
              className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              Profile
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Doctor Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage patient requests, view medical histories, and provide quality healthcare services
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search patients by name or condition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-2 border-emerald-200 focus:border-emerald-400 rounded-xl"
            />
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Patient Authorization Requests */}
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            <CardHeader className="border-b-2 border-blue-100 pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center border border-blue-200">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
                    Patient Consultation Requests
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Review and approve patient consultation requests
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {filteredRequests.map((request) => (
                  <div
                    key={request.id}
                    className="p-4 border-2 border-blue-100 rounded-xl bg-blue-50/30 hover:bg-blue-50/50 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{request.name}</h4>
                        <p className="text-sm text-gray-600">
                          Age: {request.age} • {request.condition}
                        </p>
                        <p className="text-xs text-gray-500">Requested: {request.date}</p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityStyle(request.priority)}`}>
                          {getPriorityIcon(request.priority)}
                          {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority
                        </span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-200">
                          <Clock className="h-3 w-3 inline mr-1" />
                          Pending
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white border border-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve Consultation
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Decline Consultation
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Patient Medical History */}
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
            <CardHeader className="border-b-2 border-emerald-100 pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center border border-emerald-200">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
                    Patient Medical History
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    View and manage your patients' medical records
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {filteredHistory.map((patient) => (
                  <div
                    key={patient.id}
                    className="p-4 border-2 border-emerald-100 rounded-xl bg-emerald-50/30 hover:bg-emerald-50/50 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                        <p className="text-sm text-gray-600">
                          Age: {patient.age} • {patient.condition}
                        </p>
                        <p className="text-xs text-gray-500">Last Visit: {patient.lastVisit}</p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityStyle(patient.priority)}`}>
                          {getPriorityIcon(patient.priority)}
                          {patient.priority.charAt(0).toUpperCase() + patient.priority.slice(1)} Priority
                        </span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full border ${
                            patient.status === "stable"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : patient.status === "improving"
                                ? "bg-blue-100 text-blue-800 border-blue-200"
                                : "bg-yellow-100 text-yellow-800 border-yellow-200"
                          }`}
                        >
                          {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      View Full History
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions for Doctors */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Button
              variant="outline"
              className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
            >
              <Calendar className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-emerald-700">Schedule</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
            >
              <Stethoscope className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-emerald-700">Consultations</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
            >
              <FileText className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-emerald-700">Prescriptions</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
            >
              <Phone className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium text-emerald-700">Emergency</span>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 text-white mt-20 border-t-4 border-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/aarogya-saathi-logo.png"
                  alt="Aarogya Saathi Logo"
                  width={40}
                  height={40}
                  className="object-contain filter brightness-0 invert"
                />
                <span className="text-2xl font-bold">AAROGYA SAATHI</span>
              </div>
              <p className="text-emerald-100 leading-relaxed mb-4">
                Empowering healthcare professionals with digital tools to provide better patient care and streamlined
                medical services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Doctor Portal</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>
                  <Link href="/patients" className="hover:text-white transition-colors">
                    Patient Management
                  </Link>
                </li>
                <li>
                  <Link href="/appointments" className="hover:text-white transition-colors">
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="hover:text-white transition-colors">
                    Medical Reports
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-emerald-100">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1800-DOC-HELP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>doctor-support@aarogyasaathi.gov.in</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-emerald-600 mt-8 pt-8 text-center">
            <p className="text-emerald-200 text-sm">© 2024 Aarogya Saathi Doctor Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
