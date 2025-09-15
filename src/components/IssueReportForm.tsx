import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin, Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ISSUE_TYPES = [
  { value: "pothole", label: "Road Potholes", icon: "🕳️" },
  { value: "garbage", label: "Garbage Management", icon: "🗑️" },
  { value: "streetlight", label: "Streetlight Issues", icon: "💡" },
  { value: "water", label: "Water Management", icon: "💧" },
  { value: "traffic", label: "Traffic Issues", icon: "🚦" },
];

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const IssueReportForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    issueType: "",
    state: "",
    location: "",
    coordinates: { lat: null, lng: null }
  });
  const [photo, setPhoto] = useState<string | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handlePhotoCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location not supported",
        description: "Your browser doesn't support location services.",
        variant: "destructive",
      });
      return;
    }

    setIsGettingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData(prev => ({
          ...prev,
          coordinates: { lat: latitude, lng: longitude },
          location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
        }));
        toast({
          title: "Location captured",
          description: "Your location has been automatically detected.",
        });
        setIsGettingLocation(false);
      },
      (error) => {
        toast({
          title: "Location error",
          description: "Unable to get your location. Please enter it manually.",
          variant: "destructive",
        });
        setIsGettingLocation(false);
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.issueType || !formData.state) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Mock submission
    toast({
      title: "Issue reported successfully!",
      description: "Your report has been submitted to the relevant authorities.",
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      issueType: "",
      state: "",
      location: "",
      coordinates: { lat: null, lng: null }
    });
    setPhoto(null);
  };

  return (
    <section id="report" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Report a Civic Issue
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help make your city better by reporting issues that need government attention
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Submit Your Report</CardTitle>
            <CardDescription>
              Provide details about the civic issue you want to report
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Issue Title *</Label>
                <Input
                  id="title"
                  placeholder="Brief title of the issue"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="issueType">Issue Type *</Label>
                <Select value={formData.issueType} onValueChange={(value) => setFormData(prev => ({ ...prev, issueType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    {ISSUE_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <span className="flex items-center gap-2">
                          <span>{type.icon}</span>
                          {type.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDIAN_STATES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the issue in detail..."
                  className="min-h-[100px]"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Location details or coordinates"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={getCurrentLocation}
                    disabled={isGettingLocation}
                  >
                    <MapPin className="w-4 h-4" />
                    {isGettingLocation ? "Getting..." : "GPS"}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Photo Evidence</Label>
                <div className="flex flex-col gap-4">
                  {photo && (
                    <div className="relative">
                      <img src={photo} alt="Issue evidence" className="w-full h-48 object-cover rounded-lg border border-border" />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setPhoto(null)}
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    {photo ? "Change Photo" : "Take Photo"}
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handlePhotoCapture}
                    className="hidden"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-primary text-lg py-6">
                <Send className="w-5 h-5 mr-2" />
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IssueReportForm;