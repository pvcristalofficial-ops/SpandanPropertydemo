import { Award, Users, Target, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Spandan Property</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Your trusted partner in real estate since inception, serving Akola with integrity and expertise
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Spandan Property was founded with a vision to revolutionize the real estate experience in Akola, Maharashtra. 
                  Under the leadership of <span className="font-semibold text-foreground">Spandan Property</span>, we have grown 
                  into one of the most trusted names in the region.
                </p>
                <p>
                  Our journey began with a simple belief: that every person deserves honest, professional guidance when making 
                  one of life's biggest decisions - buying or selling property. Today, we continue to uphold this commitment 
                  with unwavering dedication.
                </p>
                <p>
                  We specialize in residential and commercial properties, plot transactions, rental services, and comprehensive 
                  property documentation support. Our team's deep understanding of the local market ensures that our clients 
                  always get the best deals and investment opportunities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                 src="/public/logo.png"   //ADD ONWER PHOTO IN URL
                alt="About Spandan Property"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">Principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparent dealings and honest communication. Your trust is our most valuable asset.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Customer First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your needs and satisfaction are at the heart of everything we do. We're here to serve you.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in every transaction, ensuring quality service and successful outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-lg border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src="/public/logo.png"
                  alt="Spandan Property"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-2">Spandan Property</h2>
                <p className="text-xl text-accent mb-6">Founder & Managing Director</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 15 years of experience in the real estate industry, Spandan Property has established 
                    Spandan Property as a beacon of trust and professionalism in Akola.
                  </p>
                  <p>
                    His deep understanding of the local market, combined with a client-first approach, has helped 
                    hundreds of families find their dream homes and make smart property investments.
                  </p>
                  <p>
                    Spandan Property's vision is to make real estate transactions transparent, hassle-free, and rewarding 
                    for every client, regardless of their budget or requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Spandan Property?</h2>
            <p className="text-xl text-muted-foreground">Your success is our commitment</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "15+ years of trusted real estate expertise in Akola",
              "Comprehensive property documentation support",
              "Home loan assistance with competitive interest rates",
              "Free site visits and property verification services",
              "Expert investment guidance tailored to your goals",
              "Transparent pricing with no hidden charges",
              "Strong network of verified properties",
              "Post-transaction support and assistance",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-card p-4 rounded-lg border border-border">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
