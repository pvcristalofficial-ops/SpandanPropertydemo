import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  image: string;
  beds?: number;
  baths?: number;
  area: string;
  type: string;
}

const PropertyCard = ({ title, location, price, image, beds, baths, area, type }: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          {beds && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Bed className="w-4 h-4 mr-1" />
              <span>{beds} Beds</span>
            </div>
          )}
          {baths && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Bath className="w-4 h-4 mr-1" />
              <span>{baths} Baths</span>
            </div>
          )}
          <div className="flex items-center text-sm text-muted-foreground">
            <Square className="w-4 h-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
