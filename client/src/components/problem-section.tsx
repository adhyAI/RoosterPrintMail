import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import Chaos from "@assets/Chaos.png";

import PstageMeter from "@assets/PstageMeter.png";

export default function ProblemSection() {
  const scrollToSolution = () => {
    const element = document.querySelector("#solution");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Is This Your <span className="text-rooster-red">Shipping Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most businesses struggle with outdated, chaotic shipping processes
            that waste time and money
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <img
              src={PstageMeter}
              alt="Old postage meter equipment"
              className="rounded-xl w-full h-48 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Postage Meter Problem
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                <span>
                  $1000s spent to rent a letter machine when you mostly send
                  parcels
                </span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                <span>No one remembers pins and codes for the number pad</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                <span>Limited to single carrier options</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <img
              src={Chaos}
              alt="Disorganized office shipping process"
              className="rounded-xl w-full h-48 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Chaos Problem
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                <span>
                  Disjointed process led by one person's online merchant login
                </span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                <span>
                  Various peripheral devices scattered around the office
                </span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0 h-4 w-4" />
                <span>
                  Someone designated as "shipping person" (not their actual job)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Sound familiar? There's a better way.
          </p>
          <Button
            onClick={scrollToSolution}
            size="lg"
            className="bg-rooster-red hover:bg-rooster-red-dark"
          >
            Show Me the Solution
          </Button>
        </div>
      </div>
    </section>
  );
}
