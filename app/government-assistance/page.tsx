"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Shield, Ambulance, Heart, FileText, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GovernmentAssistance() {
  const emergencyContacts = [
    { name: "AIIMS Delhi", phone: "011-2658-8500", distance: "2.5 km", specialty: "Multi-specialty" },
    { name: "Safdarjung Hospital", phone: "011-2673-0000", distance: "3.2 km", specialty: "Government Hospital" },
    { name: "Ram Manohar Lohia Hospital", phone: "011-2336-5525", distance: "4.1 km", specialty: "Emergency Care" },
    { name: "Lady Hardinge Medical College", phone: "011-2336-5294", distance: "5.0 km", specialty: "Women & Child" },
  ]

  const schemes = [
    {
      title: "Ayushman Bharat - PMJAY",
      description: "Free healthcare coverage up to ₹5 lakhs per family annually",
      eligibility: "BPL families and identified vulnerable groups",
      benefits: "Cashless treatment at empaneled hospitals nationwide",
      icon: Shield,
    },
    {
      title: "Pradhan Mantri Surakshit Matritva Abhiyan",
      description: "Free antenatal care for pregnant women",
      eligibility: "All pregnant women in their 2nd and 3rd trimester",
      benefits: "Free checkups, medicines, and delivery care",
      icon: Heart,
    },
    {
      title: "National Health Mission",
      description: "Comprehensive healthcare services in rural and urban areas",
      eligibility: "All citizens, especially in underserved areas",
      benefits: "Free medicines, diagnostics, and emergency care",
      icon: Users,
    },
    {
      title: "Janani Suraksha Yojana",
      description: "Cash assistance for institutional delivery",
      eligibility: "Pregnant women from BPL families",
      benefits: "Cash incentives and free delivery care",
      icon: FileText,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-200 sticky top-0 z-50">
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
                AAROGYA SAATHI
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                About
              </Link>
              <Link href="/consultancy" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Doctor Consultancy
              </Link>
              <Link
                href="/government-assistance"
                className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
              >
                Government Assistance
              </Link>
            </div>
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent px-6 py-3 font-semibold"
              >
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Healthcare Assistance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access emergency services, ambulance assistance, and comprehensive government healthcare schemes designed to
            support your medical needs
          </p>
        </div>

        {/* Emergency Ambulance Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Ambulance Services</h2>
            <p className="text-lg text-gray-600">24/7 emergency medical assistance and ambulance services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-white to-red-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-red-700">Emergency Helpline</CardTitle>
                <CardDescription>Immediate medical emergency assistance</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-4">108</div>
                <p className="text-gray-600 mb-6">Free 24/7 emergency ambulance service across India</p>
                <Button
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 px-6 py-4 font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Ambulance className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700">Ambulance Booking</CardTitle>
                <CardDescription>Book ambulance for non-emergency transport</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">102</div>
                <p className="text-gray-600 mb-6">Patient transport service for routine medical visits</p>
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 px-6 py-4 font-semibold"
                >
                  <Ambulance className="h-5 w-5 mr-2" />
                  Book Ambulance
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Nearest Hospitals */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nearest Emergency Hospitals</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {emergencyContacts.map((hospital, index) => (
                <Card key={index} className="border-2 border-emerald-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{hospital.name}</h4>
                        <p className="text-sm text-gray-600">{hospital.specialty}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hospital.distance}
                        </div>
                      </div>
                      <Button
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-600 px-4 py-2 font-semibold"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    </div>
                    <p className="text-lg font-semibold text-emerald-700">{hospital.phone}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Government Schemes Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Government Healthcare Schemes</h2>
            <p className="text-lg text-gray-600">Comprehensive healthcare benefits and financial assistance programs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {schemes.map((scheme, index) => {
              const IconComponent = scheme.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-emerald-200 bg-gradient-to-br from-white to-emerald-50/30 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{scheme.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-600">{scheme.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-2">Eligibility:</h4>
                        <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-2">Benefits:</h4>
                        <p className="text-sm text-gray-600">{scheme.benefits}</p>
                      </div>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-6 py-3 font-semibold bg-transparent"
                      >
                        <FileText className="h-5 w-5 mr-2" />
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Button
              size="lg"
              variant="outline"
              className="h-20 flex-col space-y-2 border-2 border-emerald-300 hover:bg-emerald-50 px-6 py-4 font-semibold bg-transparent"
            >
              <Clock className="h-6 w-6 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">24/7 Helpline</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-20 flex-col space-y-2 border-2 border-emerald-300 hover:bg-emerald-50 px-6 py-4 font-semibold bg-transparent"
            >
              <FileText className="h-6 w-6 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Download Forms</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-20 flex-col space-y-2 border-2 border-emerald-300 hover:bg-emerald-50 px-6 py-4 font-semibold bg-transparent"
            >
              <MapPin className="h-6 w-6 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Find Centers</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
