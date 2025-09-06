"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, MessageCircle, Users, Shield, Stethoscope, Phone, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Dashboard() {
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
              <Link href="/dashboard" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                About
              </Link>
              <Link href="/consultancy" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Doctor Consultancy
              </Link>
              <Link href="/assistance" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
                Government Assistance
              </Link>
            </div>
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Your Health Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive healthcare companion for medical assistance, doctor consultations, and government support
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Doctors Near Me */}
          <Card className="group relative overflow-hidden transition-all duration-500 border-0 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 backdrop-blur-sm hover:scale-[1.02] transform">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-green-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10 pb-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300">
                <MapPin className="h-10 w-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                Doctors Near Me
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Find qualified healthcare professionals in your area
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10 pt-2">
              <p className="text-gray-600 mb-8 leading-relaxed">
                Locate nearby doctors, specialists, and healthcare facilities with real-time availability and ratings.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover:shadow-xl transition-all duration-300 py-3 rounded-xl font-semibold"
                onClick={() => window.open("https://www.google.com/maps/search/doctors+near+me", "_blank")}
              >
                <MapPin className="h-5 w-5 mr-2" />
                View on Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Government Assistance */}
          <Card className="group relative overflow-hidden transition-all duration-500 border-0 bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/50 backdrop-blur-sm hover:scale-[1.02] transform">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-emerald-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10 pb-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <Shield className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                Government Assistance
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Healthcare support and benefits available to you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-gray-600 mb-8">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Ayushman Bharat:</strong> Free healthcare coverage up to ₹5
                    lakhs per family annually
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">PMJAY Scheme:</strong> Cashless treatment at empaneled
                    hospitals nationwide
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Emergency Services:</strong> 24/7 ambulance services and
                    emergency care
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Medicine Support:</strong> Free essential medicines at
                    government facilities
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Telemedicine:</strong> Remote consultations through eSanjeevani
                    platform
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent hover:border-emerald-300 transition-all duration-300 py-3 rounded-xl font-semibold"
              >
                <FileText className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Your Health Companion */}
          <Card className="group relative overflow-hidden transition-all duration-500 border-0 bg-gradient-to-br from-white via-purple-50/30 to-emerald-50/50 backdrop-blur-sm hover:scale-[1.02] transform md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-emerald-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10 pb-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                <MessageCircle className="h-10 w-10 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                Your Health Companion
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                AI-powered medical assistance and guidance
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10 pt-2">
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get instant medical advice, symptom analysis, and health recommendations from our intelligent chatbot
                assistant.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white hover:shadow-xl transition-all duration-300 py-3 rounded-xl font-semibold"
                onClick={() => {
                  // Placeholder for chatbot integration
                  alert("Chatbot integration coming soon!")
                }}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Chat
              </Button>
              <p className="text-xs text-gray-500 mt-3 italic">*Chatbot integration coming soon</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Button
            variant="outline"
            className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
          >
            <Phone className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium text-emerald-700">Emergency</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
          >
            <Stethoscope className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium text-emerald-700">Book Appointment</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
          >
            <FileText className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium text-emerald-700">Health Records</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col space-y-3 border-2 border-emerald-200 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 rounded-xl hover:shadow-lg group"
          >
            <Users className="h-7 w-7 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium text-emerald-700">Family Health</span>
          </Button>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
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
                Your trusted digital health companion providing comprehensive healthcare assistance, connecting you with
                medical professionals and government health services across India.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-300 text-emerald-100 hover:bg-emerald-600 bg-transparent"
                >
                  Download App
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/consultancy" className="hover:text-white transition-colors">
                    Doctor Consultancy
                  </Link>
                </li>
                <li>
                  <Link href="/assistance" className="hover:text-white transition-colors">
                    Government Assistance
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="hover:text-white transition-colors">
                    Emergency Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-emerald-100">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1800-XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>support@aarogyasaathi.gov.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-200 text-sm">© 2024 Aarogya Saathi. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-emerald-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-emerald-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/help" className="text-emerald-200 hover:text-white text-sm transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
