import { Ruler, Weight, Wifi, Zap } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple setup, powerful functionality, endless possibilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-rooster-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Set It Up</h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>• Integrate carriers with our onboarding team</li>
              <li>• Configure for customer-facing or internal use</li>
              <li>• Establish payment processes</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-rooster-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Use the Kiosk
            </h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>• Enter details on web app or touch screen</li>
              <li>• Weigh items using inbuilt scale</li>
              <li>• Select carrier from customizable marketplace</li>
              <li>• Print compliant label and ship</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-rooster-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Generate Revenue
            </h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>• Customers pay via card or phone wallet</li>
              <li>• Set custom margins per transaction</li>
              <li>• Customize all customer-facing fees</li>
            </ul>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Ruler className="text-rooster-red h-8 w-8 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
              <p className="text-gray-600">
                28" x 15" x 12"
                <br />
                (70cm x 37cm x 30cm)
              </p>
            </div>
            <div>
              <Weight className="text-rooster-red h-8 w-8 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                Weight Capacity
              </h4>
              <p className="text-gray-600">
                Up to 70 lbs
                <br />
                (31 kg)
              </p>
            </div>
            <div>
              <Wifi className="text-rooster-red h-8 w-8 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Connectivity</h4>
              <p className="text-gray-600">
                Wi-Fi, LAN,
                <br />
                Cellular Signal
              </p>
            </div>
            <div>
              <Zap className="text-rooster-red h-8 w-8 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Power</h4>
              <p className="text-gray-600">
                220v or 120v
                <br />
                Compatible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
