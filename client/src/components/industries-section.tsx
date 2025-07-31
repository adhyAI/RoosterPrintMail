import { Button } from "@/components/ui/button";
import { Users, Store, GraduationCap } from "lucide-react";

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perfect for Every Business
          </h2>
          <p className="text-xl text-gray-600">
            Our kiosks complement businesses looking to provide practical postal
            & shipping services while generating new revenue streams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
              alt="Modern coworking space"
              className="rounded-xl w-full h-48 object-cover mb-6"
            />
            <Users className="text-rooster-red h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Coworking Spaces
            </h3>
            <p className="text-gray-600">
              Provide essential shipping services to freelancers and startups
              while creating additional revenue streams.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
              alt="Retail space with efficient logistics"
              className="rounded-xl w-full h-48 object-cover mb-6"
            />
            <Store className="text-rooster-red h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Retail Spaces
            </h3>
            <p className="text-gray-600">
              Attract more customers with convenient shipping services and boost
              your bottom line with transaction fees.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
              alt="University campus setting"
              className="rounded-xl w-full h-48 object-cover mb-6"
            />
            <GraduationCap className="text-rooster-red h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Higher Education
            </h3>
            <p className="text-gray-600">
              Serve students, faculty, and staff with convenient on-campus
              shipping solutions for packages and documents.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            And many more: Pack & Ship Centers, Hospitality, Multi-Family
            Dwellings, Corporate Offices
          </p>
          {/* <Button className="bg-rooster-red hover:bg-rooster-red-dark">
            Explore Use Cases
          </Button> */}
        </div>
      </div>
    </section>
  );
}
