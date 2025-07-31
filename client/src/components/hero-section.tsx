import { Button } from "@/components/ui/button";
import { Truck, DollarSign } from "lucide-react";

export default function HeroSection() {
  const scrollToDemo = () => {
    const element = document.querySelector("#demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToROI = () => {
    const element = document.querySelector("#pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              End the <span className="text-rooster-red">Shipping Chaos</span>
              <br />
              Start Smart Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business from shipping headaches to streamlined
              operations with our all-in-one shipping kiosks. No more ancient
              postage meters, no more designated "shipping person," no more chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToDemo}
                size="lg"
                className="bg-rooster-red hover:bg-rooster-red-dark text-lg px-8 py-4 shadow-lg"
              >
                Schedule a Demo
              </Button>
              <Button
                onClick={scrollToROI}
                variant="outline"
                size="lg"
                className="border-2 border-rooster-red text-rooster-red hover:bg-rooster-red hover:text-white text-lg px-8 py-4"
              >
                View ROI Calculator
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern office with shipping solutions"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <Truck className="h-8 w-8 text-rooster-red mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">5x Faster</p>
                  <p className="text-sm text-gray-600">Shipping Process</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">$1000+</p>
                  <p className="text-sm text-gray-600">Monthly Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
