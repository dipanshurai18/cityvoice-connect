import { MapPin, Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">CityVoice</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting citizens with government to build better, smarter cities across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Home
              </a>
              <a href="#report" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Report Issue
              </a>
              <a href="#dashboard" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Dashboard
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                About Us
              </a>
            </div>
          </div>

          {/* Issue Types */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Issue Categories</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground text-sm">🕳️ Road Potholes</div>
              <div className="text-muted-foreground text-sm">🗑️ Garbage Management</div>
              <div className="text-muted-foreground text-sm">💡 Streetlight Issues</div>
              <div className="text-muted-foreground text-sm">💧 Water Management</div>
              <div className="text-muted-foreground text-sm">🚦 Traffic Issues</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <span>support@cityvoice.gov.in</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>1800-CITYVOICE</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CityVoice. Built for a better India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;