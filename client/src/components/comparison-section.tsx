import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const features = [
    {
      name: "All-in-One Solution",
      rooster: true,
      meter: false,
      online: false,
    },
    {
      name: "Multiple Carriers",
      rooster: true,
      meter: false,
      online: true,
    },
    {
      name: "Customer-Facing Revenue",
      rooster: true,
      meter: false,
      online: false,
    },
    {
      name: "Integrated Scale & Printer",
      rooster: true,
      meter: true,
      online: false,
    },
    {
      name: "Remote Management",
      rooster: true,
      meter: false,
      online: true,
    },
    {
      name: "No Monthly Rental Fees",
      rooster: true,
      meter: false,
      online: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Compare
          </h2>
          <p className="text-xl text-gray-600">
            See why businesses choose Rooster Kiosk over traditional solutions
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-rooster-red">
                    Rooster Kiosk
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Postage Meter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Online Software
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={index % 2 === 1 ? "bg-gray-25" : ""}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.rooster ? (
                        <Check className="text-green-500 h-5 w-5 mx-auto" />
                      ) : (
                        <X className="text-red-500 h-5 w-5 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.meter ? (
                        <Check className="text-green-500 h-5 w-5 mx-auto" />
                      ) : (
                        <X className="text-red-500 h-5 w-5 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.online ? (
                        <Check className="text-green-500 h-5 w-5 mx-auto" />
                      ) : (
                        <X className="text-red-500 h-5 w-5 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
