import { MapPin, Home, Building2, Key, FileText, Banknote, Search, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Plot Buying & Selling",
      description: "Expert assistance in finding and purchasing residential or commercial plots. We help you identify prime locations with excellent growth potential, complete legal verification, and negotiate the best prices for your investment.",
    },
    {
      icon: Home,
      title: "Residential Property Sales",
      description: "Wide selection of apartments, villas, independent houses, and luxury homes. Our team helps you find properties that match your lifestyle, budget, and location preferences with complete transparency and documentation support.",
    },
    {
      icon: Building2,
      title: "Commercial Property Sales",
      description: "Prime commercial spaces including offices, shops, showrooms, and warehouses. We understand business requirements and help you find strategic locations that drive growth and maximize your investment returns.",
    },
    {
      icon: Key,
      title: "Rental Services",
      description: "Comprehensive rental solutions for houses, apartments, shops, and office spaces. We match tenants with suitable properties, handle documentation, and ensure smooth rental agreements for both landlords and tenants.",
    },
    {
      icon: FileText,
      title: "Property Documents Support",
      description: "Complete assistance with property documentation including title verification, registration, stamp duty, and legal clearances. We ensure all paperwork is accurate and compliant with government regulations.",
    },
    {
      icon: Banknote,
      title: "Home Loan Assistance",
      description: "Hassle-free home loan processing with competitive interest rates from leading banks and NBFCs. We guide you through the application process, documentation, and help secure the best loan terms for your property purchase.",
    },
    {
      icon: Search,
      title: "Site Visits & Property Verification",
      description: "Free site visits to help you inspect properties before making a decision. We conduct thorough property verification including legal status, ownership details, and physical condition to ensure you make an informed choice.",
    },
    {
      icon: TrendingUp,
      title: "Investment Guidance",
      description: "Expert advice on real estate investments in Akola. We analyze market trends, growth potential, and ROI to help you make smart property investments that align with your financial goals and risk appetite.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Comprehensive real estate solutions designed to make your property journey smooth and successful
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">Simple steps to your dream property</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                Share your requirements and budget with our experts
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Property Selection</h3>
              <p className="text-muted-foreground">
                Get curated property options matching your needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Site Visit</h3>
              <p className="text-muted-foreground">
                Free guided tours of shortlisted properties
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Documentation</h3>
              <p className="text-muted-foreground">
                Complete paperwork and loan assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our team is ready to help you with all your real estate needs in Akola
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                <a href="tel:+918830282346">Call: +91 88302 82346</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
