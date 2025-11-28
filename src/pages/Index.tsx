import { Link } from "react-router-dom";
import { Building2, Home, FileText, Banknote, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-real-estate.jpg";

const Index = () => {
  const services = [
    {
      icon: MapPin,
      title: "Plot Buying & Selling",
      description: "Find the perfect plot for your dream home or investment. Expert guidance on location, pricing, and documentation.",
    },
    {
      icon: Home,
      title: "Residential Properties",
      description: "Wide range of apartments, villas, and independent houses to match your lifestyle and budget.",
    },
    {
      icon: Building2,
      title: "Commercial Properties",
      description: "Prime commercial spaces for your business growth including offices, shops, and showrooms.",
    },
    {
      icon: Banknote,
      title: "Home Loan Assistance",
      description: "Hassle-free home loan processing with best interest rates from leading banks and financial institutions.",
    },
  ];

  const featuredProperties = [
    {
      title: "Spacious 3BHK Apartment",
      location: "Madhav Nagar, Akola",
      price: "₹45 Lakhs",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      beds: 3,
      baths: 2,
      area: "1,200 sq ft",
      type: "Residential",
    },
    {
      title: "Commercial Shop",
      location: "Gorakshan Road, Akola",
      price: "₹25 Lakhs",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
      area: "600 sq ft",
      type: "Commercial",
    },
    {
      title: "Residential Plot",
      location: "Samata Colony, Akola",
      price: "₹18 Lakhs",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop",
      area: "1,500 sq ft",
      type: "Plot",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Patil",
      role: "Property Buyer",
      content: "Spandan Property helped me find my dream home in Akola. Prashant sir's guidance throughout the process was exceptional. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sneha Deshmukh",
      role: "Plot Investor",
      content: "Professional service and transparent dealings. They helped me invest in a great plot with excellent future prospects.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      role: "Commercial Property Owner",
      content: "Found the perfect commercial space for my business. The team was very supportive with documentation and loan assistance.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Real Estate Partner in Akola
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Expert guidance for plots, residential & commercial properties, rentals, and investment opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                <Link to="/contact">Book Free Site Visit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                <Link to="/properties">View Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Spandan Property?</h2>
              <div className="space-y-4">
                {[
                  "15+ years of trusted real estate expertise",
                  "Transparent and professional service",
                  "Complete documentation support",
                  "Home loan assistance with best rates",
                  "Free site visits and property verification",
                  "Expert investment guidance",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
                alt="Modern Property"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Properties</h2>
            <p className="text-xl text-muted-foreground">Handpicked properties for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/properties">
                View All Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by hundreds of satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our experts guide you through every step of your real estate journey in Akola
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <a href="tel:+918830282346">Call Now: +91 88302 82346</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
