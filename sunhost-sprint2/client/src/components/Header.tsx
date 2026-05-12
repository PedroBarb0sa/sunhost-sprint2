import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

/**
 * Header Component - Modern Minimalist Navigation
 * Features: Responsive menu, authentication modals, smooth interactions
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sun className="w-8 h-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Poppins" }}>
              SunHost
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Início
            </Link>
            <Link href="/accommodations" className="text-gray-700 hover:text-orange-600 transition-colors">
              Acomodações
            </Link>
            <Link href="/civic-points" className="text-gray-700 hover:text-orange-600 transition-colors">
              Pontos Cívicos
            </Link>
            <a href="#host" className="text-gray-700 hover:text-orange-600 transition-colors">
              Seja Anfitrião
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setLoginOpen(true)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Entrar
            </Button>
            <Button
              onClick={() => setSignupOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Cadastro
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/accommodations" 
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Acomodações
              </Link>
              <Link 
                href="/civic-points" 
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pontos Cívicos
              </Link>
              <a href="#host" className="text-gray-700 hover:text-orange-600 transition-colors">
                Seja Anfitrião
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => {
                    setLoginOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full border-gray-300 text-gray-700"
                >
                  Entrar
                </Button>
                <Button
                  onClick={() => {
                    setSignupOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Cadastro
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Modals */}
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </>
  );
}
