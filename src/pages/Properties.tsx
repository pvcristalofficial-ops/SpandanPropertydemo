import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const Properties = () => {
  const [filter, setFilter] = useState("All");

  const properties = [
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
      title: "Luxury Villa",
      location: "Samata Colony, Akola",
      price: "₹85 Lakhs",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
      beds: 4,
      baths: 3,
      area: "2,500 sq ft",
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
      title: "Office Space",
      location: "Main Market, Akola",
      price: "₹55 Lakhs",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
      area: "1,000 sq ft",
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
    {
      title: "Commercial Plot",
      location: "Highway Road, Akola",
      price: "₹35 Lakhs",
      image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&auto=format&fit=crop",
      area: "2,000 sq ft",
      type: "Plot",
    },
    {
      title: "2BHK Apartment for Rent",
      location: "Madhav Nagar, Akola",
      price: "₹12,000/month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      beds: 2,
      baths: 2,
      area: "900 sq ft",
      type: "Rental",
    },
    {
      title: "Shop for Rent",
      location: "Main Market, Akola",
      price: "₹15,000/month",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
      area: "500 sq ft",
      type: "Rental",
    },
    {
      title: "Modern 3BHK Flat",
      location: "New Colony, Akola",
      price: "₹52 Lakhs",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      beds: 3,
      baths: 2,
      area: "1,350 sq ft",
      type: "Residential",
    },
  ];

  const filters = ["All", "Residential", "Commercial", "Plot", "Rental"];

  const filteredProperties = filter === "All" 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Properties</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Browse through our carefully curated selection of properties in Akola
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((f) => (
              <Button
                key={f}
                onClick={() => setFilter(f)}
                variant={filter === f ? "default" : "outline"}
                className={filter === f ? "bg-primary hover:bg-primary/90" : ""}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProperties.length}</span> properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Didn't Find What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us with your specific requirements and we'll help you find the perfect property
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            <a href="tel:+918830282346">Call Us: +91 88302 82346</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
