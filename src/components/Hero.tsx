import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Camera, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-cityvoice.jpg";

const Hero = () => {
  return (
    <main id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-border">
            <div className="w-2 h-2 bg-civic-green rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Connecting Citizens with Government
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Voice,
            <br />
            <span className="bg-gradient-to-r from-civic-blue to-civic-green bg-clip-text text-transparent">
              Your City's Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Report civic issues like potholes, garbage management, streetlight problems, 
            and traffic issues directly to your government. Track progress and make your city better.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6 shadow-glow">
              Report an Issue
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Dashboard
              <BarChart3 className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-civic-blue/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Camera className="w-6 h-6 text-civic-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Photo Evidence</h3>
              <p className="text-muted-foreground text-sm">
                Capture real-time photos of issues for accurate reporting
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-civic-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-civic-green" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">GPS Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Automatic location detection for precise issue mapping
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-civic-orange/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-6 h-6 text-civic-orange" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Monitor issue resolution progress across Indian states
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;