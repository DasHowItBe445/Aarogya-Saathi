"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  MessageCircle,
  Users,
  Shield,
  Stethoscope,
  Phone,
  FileText,
  Droplets,
  Syringe,
  Calendar,
  Clock,
  MapPinIcon,
} from "lucide-react"
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
              <Link
                href="/government-assistance"
                className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Government Assistance
              </Link>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent px-6 py-3 font-semibold"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Doctors Near Me */}
          <Card className="group relative overflow-hidden transition-all duration-500 border-2 border-emerald-200 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 backdrop-blur-sm hover:scale-[1.02] hover:border-emerald-300 hover:shadow-xl transform">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-green-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10 pb-4 border-b border-emerald-100">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300 border border-emerald-200">
                <MapPin className="h-10 w-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                Doctors Near Me
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Find qualified healthcare professionals in your area
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10 pt-6">
              <p className="text-gray-600 mb-8 leading-relaxed">
                Locate nearby doctors, specialists, and healthcare facilities with real-time availability and ratings.
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover:shadow-xl transition-all duration-300 py-4 rounded-xl font-semibold border-2 border-emerald-600 px-6"
                onClick={() => window.open("https://www.google.com/maps/search/doctors+near+me", "_blank")}
              >
                <MapPin className="h-5 w-5 mr-2" />
                View on Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Government Assistance */}
          <Card className="group relative overflow-hidden transition-all duration-500 border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/50 backdrop-blur-sm hover:scale-[1.02] hover:border-blue-300 hover:shadow-xl transform">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-emerald-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10 pb-4 border-b border-blue-100">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 border border-blue-200">
                <Shield className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                Government Assistance
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Healthcare support and benefits available to you
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm text-gray-600 mb-8">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200 border border-emerald-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Ayushman Bharat:</strong> Free healthcare coverage up to ₹5
                    lakhs per family annually
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200 border border-emerald-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">PMJAY Scheme:</strong> Cashless treatment at empaneled
                    hospitals nationwide
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200 border border-emerald-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Emergency Services:</strong> 24/7 ambulance services and
                    emergency care
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200 border border-emerald-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Medicine Support:</strong> Free essential medicines at
                    government facilities
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors duration-200 border border-emerald-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <strong className="text-emerald-700">Telemedicine:</strong> Remote consultations through eSanjeevani
                    platform
                  </p>
                </div>
              </div>
              <Link href="/government-assistance">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent hover:border-blue-400 transition-all duration-300 py-4 rounded-xl font-semibold px-6"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Your Health Companion */}
          <Card className="group relative overflow-hidden transition-all duration-500 border-2 border-purple-200 bg-gradient-to-br from-white via-purple-50/30 to-emerald-50/50 backdrop-blur-sm hover:scale-[1.02] hover:border-purple-300 hover:shadow-xl transform md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-emerald-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10 pb-4 border-b border-purple-100">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 border border-purple-200">
                <MessageCircle className="h-10 w-10 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-2">
                Your Health Companion
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                AI-powered medical assistance and guidance
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10 pt-6">
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get instant medical advice, symptom analysis, and health recommendations from our intelligent chatbot
                assistant.
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white hover:shadow-xl transition-all duration-300 py-4 rounded-xl font-semibold border-2 border-purple-600 px-6"
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

        {/* Ongoing Health Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ongoing Health Events</h2>
          <div className="space-y-6">
            {/* Blood Donation Drive */}
            <Card className="border-2 border-red-200 bg-gradient-to-r from-white via-red-50/30 to-red-50/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Droplets className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-red-700 mb-2">Blood Donation Drive</h3>
                      <p className="text-gray-600 mb-3">
                        Join our community blood donation drive and help save lives. Every donation can save up to 3
                        lives.
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>March 15-17, 2024</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPinIcon className="h-4 w-4" />
                          <span>Community Health Center, Sector 15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="border-2 border-red-300 bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold flex-shrink-0"
                  >
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vaccination Camp */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-white via-blue-50/30 to-blue-50/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Syringe className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">Free Vaccination Camp</h3>
                      <p className="text-gray-600 mb-3">
                        Get vaccinated against seasonal flu, hepatitis, and other preventable diseases. All age groups
                        welcome.
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>March 20-22, 2024</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPinIcon className="h-4 w-4" />
                          <span>District Hospital, Main Road</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="border-2 border-blue-300 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold flex-shrink-0"
                  >
                    Book Slot
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Free Health Checkup */}
            <Card className="border-2 border-green-200 bg-gradient-to-r from-white via-green-50/30 to-green-50/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-700 mb-2">Comprehensive Health Checkup</h3>
                      <p className="text-gray-600 mb-3">
                        Complete health screening including blood tests, ECG, and consultation with specialists. Early
                        detection saves lives.
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>March 25-27, 2024</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>7:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPinIcon className="h-4 w-4" />
                          <span>Primary Health Center, Block A</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="border-2 border-green-300 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold flex-shrink-0"
                  >
                    Schedule Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Button
              variant="outline"
              className="h-28 flex-col space-y-3 border-2 border-emerald-300 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 rounded-xl hover:shadow-lg group font-semibold"
            >
              <Phone className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-semibold text-emerald-700">Emergency</span>
            </Button>
            <Button
              variant="outline"
              className="h-28 flex-col space-y-3 border-2 border-emerald-300 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 rounded-xl hover:shadow-lg group font-semibold"
            >
              <Stethoscope className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-semibold text-emerald-700">Book Appointment</span>
            </Button>
            <Button
              variant="outline"
              className="h-28 flex-col space-y-3 border-2 border-emerald-300 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 rounded-xl hover:shadow-lg group font-semibold"
            >
              <FileText className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-semibold text-emerald-700">Health Records</span>
            </Button>
            <Button
              variant="outline"
              className="h-28 flex-col space-y-3 border-2 border-emerald-300 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 rounded-xl hover:shadow-lg group font-semibold"
            >
              <Users className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-semibold text-emerald-700">Family Health</span>
            </Button>
          </div>
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
                  <Link href="/government-assistance" className="hover:text-white transition-colors">
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
