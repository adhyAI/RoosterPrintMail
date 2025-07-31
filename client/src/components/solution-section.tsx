import { Monitor, Scale, Printer, Truck } from "lucide-react";

import RoosterMachine from "@assets/RoosterMachine.png";

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The All-in-One Shipping Kiosk Solution
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Rooster Print & Mail's shipping kiosk takes the best of postage
            meters and online shipping software, wrapped in simple, easy-to-use
            functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={RoosterMachine}
              alt="Modern self-service kiosk technology"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4 flex-shrink-0">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    All-in-One Display & Software
                  </h3>
                  <p className="opacity-90">
                    Enter shipping details remotely or via touch screen.
                    Finalize everything at the kiosk with intuitive interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4 flex-shrink-0">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Integrated Certified Scale
                  </h3>
                  <p className="opacity-90">
                    Accurate weight measurements up to 31kg/70lbs ensure precise
                    shipping charges every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4 flex-shrink-0">
                  <Printer className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Thermal Label Printer</h3>
                  <p className="opacity-90">
                    Perfect-quality shipping labels every time. No ink required,
                    no maintenance headaches.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4 flex-shrink-0">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Multi-Carrier Integration
                  </h3>
                  <p className="opacity-90">
                    Set up key carrier accounts right out of the box. Compare
                    rates and choose the best option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
