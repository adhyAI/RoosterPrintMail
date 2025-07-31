import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { RoiCalculation } from "@shared/schema";

export default function RoiCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(150);
  const [averageValue, setAverageValue] = useState(25);
  const [currentRental, setCurrentRental] = useState(150);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [results, setResults] = useState<RoiCalculation | null>(null);
  const { toast } = useToast();

  const calculateMutation = useMutation({
    mutationFn: async (data: {
      monthlyVolume: number;
      averageValue: number;
      currentRental: number;
      hoursPerWeek: number;
    }) => {
      const res = await apiRequest("POST", "/api/roi-calculation", data);
      return res.json();
    },
    onSuccess: (data: RoiCalculation) => {
      setResults(data);
      toast({
        title: "ROI Calculated",
        description: "Your potential savings have been calculated!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to calculate ROI. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCalculate = () => {
    calculateMutation.mutate({
      monthlyVolume,
      averageValue,
      currentRental,
      hoursPerWeek,
    });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            See how much you could save and earn with our shipping kiosk
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3">Our calculation includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p>• Equipment cost savings vs. postage meters</p>
                <p>• Labor efficiency gains (65% time reduction)</p>
                <p>• Reduced operational errors and waste</p>
              </div>
              <div>
                <p>• Customer transaction revenue potential</p>
                <p>• Staff productivity improvements</p>
                <p>• Industry-standard wage and cost data</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">ROI Calculator</CardTitle>
          </CardHeader>
          <CardContent className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <Label htmlFor="volume" className="text-sm font-semibold text-gray-700 mb-2">
                  Monthly Packages & Letters Shipped
                </Label>
                <Input
                  id="volume"
                  type="number"  
                  min="1"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="mt-2"
                  placeholder="e.g., 150"
                />
                <p className="text-xs text-gray-500 mt-1">Include all parcels, letters, and documents</p>
              </div>
              <div>
                <Label htmlFor="value" className="text-sm font-semibold text-gray-700 mb-2">
                  Average Shipping Cost per Item ($)
                </Label>
                <Input
                  id="value"
                  type="number"
                  min="1"
                  value={averageValue}
                  onChange={(e) => setAverageValue(Number(e.target.value))}
                  className="mt-2"
                  placeholder="e.g., 25"
                />
                <p className="text-xs text-gray-500 mt-1">Your current average shipping cost</p>
              </div>
              <div>
                <Label htmlFor="rental" className="text-sm font-semibold text-gray-700 mb-2">
                  Current Equipment Costs per Month ($)
                </Label>
                <Input
                  id="rental"
                  type="number"
                  min="0"
                  value={currentRental}
                  onChange={(e) => setCurrentRental(Number(e.target.value))}
                  className="mt-2"
                  placeholder="e.g., 150"
                />
                <p className="text-xs text-gray-500 mt-1">Postage meter rental, maintenance, supplies</p>
              </div>
              <div>
                <Label htmlFor="hours" className="text-sm font-semibold text-gray-700 mb-2">
                  Staff Hours on Shipping per Week
                </Label>
                <Input
                  id="hours"
                  type="number"
                  min="0"
                  step="0.5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="mt-2"
                  placeholder="e.g., 8"
                />
                <p className="text-xs text-gray-500 mt-1">Time spent processing, weighing, labeling</p>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              disabled={calculateMutation.isPending}
              className="w-full bg-rooster-red hover:bg-rooster-red-dark mb-8"
              size="lg"
            >
              {calculateMutation.isPending ? "Calculating..." : "Calculate My ROI"}
            </Button>

            {results && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Your Potential Monthly Benefits:
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.potentialSavings}
                    </p>
                    <p className="text-sm text-gray-600">Monthly Cost Savings</p>
                    <p className="text-xs text-gray-500 mt-1">Equipment + Labor + Efficiency</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">
                      ${results.revenueGenerated}
                    </p>
                    <p className="text-sm text-gray-600">Potential Revenue</p>
                    <p className="text-xs text-gray-500 mt-1">Customer transactions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">
                      {results.timeSaved} hrs
                    </p>
                    <p className="text-sm text-gray-600">Time Saved</p>
                    <p className="text-xs text-gray-500 mt-1">Staff productivity gain</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Annual ROI Projection:</strong> ${(results.potentialSavings + results.revenueGenerated) * 12}
                  </p>
                  <p className="text-xs text-gray-600">
                    *Calculations based on industry averages for shipping kiosk implementations. 
                    Actual results may vary based on business model and usage patterns.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
