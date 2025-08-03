"use client"

import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">YOUR ORG</div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">Your Organization Tagline</div>
            </div>

            {/* Top Right Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Alumni
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Giving
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Member Login
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Tools
              </a>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-primary">
                <Search className="h-4 w-4" />
                <span className="ml-1">Search</span>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-8 h-14 overflow-x-auto">
            <a href="#" className="whitespace-nowrap text-white hover:text-gray-200 transition-colors font-medium">
              About
            </a>
            <a href="#" className="whitespace-nowrap text-white hover:text-gray-200 transition-colors font-medium">
              Programs
            </a>
            <a href="#" className="whitespace-nowrap text-white hover:text-gray-200 transition-colors font-medium">
              Research
            </a>
            <a href="#" className="whitespace-nowrap text-white hover:text-gray-200 transition-colors font-medium">
              Community
            </a>
            <a href="#" className="whitespace-nowrap text-white hover:text-gray-200 transition-colors font-medium">
              Events
            </a>
            <a href="#" className="whitespace-nowrap text-white hover:text-gray-200 transition-colors font-medium">
              Contact
            </a>
            <div className="ml-auto flex space-x-4">
              <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-gray-100">
                JOIN US
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                DONATE NOW
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
