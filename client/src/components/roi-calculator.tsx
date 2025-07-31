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
  const [monthlyVolume, setMonthlyVolume] = useState(100);
  const [averageValue, setAverageValue] = useState(15);
  const [currentRental, setCurrentRental] = useState(200);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
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
          <p className="text-xl text-gray-600">
            See how much you could save and earn with our shipping kiosk
          </p>
        </div>

        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">ROI Calculator</CardTitle>
          </CardHeader>
          <CardContent className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <Label htmlFor="volume" className="text-sm font-semibold text-gray-700 mb-2">
                  Current Monthly Shipping Volume
                </Label>
                <Input
                  id="volume"
                  type="number"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="value" className="text-sm font-semibold text-gray-700 mb-2">
                  Average Package Value ($)
                </Label>
                <Input
                  id="value"
                  type="number"
                  value={averageValue}
                  onChange={(e) => setAverageValue(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="rental" className="text-sm font-semibold text-gray-700 mb-2">
                  Current Postage Meter Rental ($)
                </Label>
                <Input
                  id="rental"
                  type="number"
                  value={currentRental}
                  onChange={(e) => setCurrentRental(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="hours" className="text-sm font-semibold text-gray-700 mb-2">
                  Hours Spent on Shipping/Week
                </Label>
                <Input
                  id="hours"
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="mt-2"
                />
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
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.potentialSavings}
                    </p>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.revenueGenerated}
                    </p>
                    <p className="text-sm text-gray-600">Revenue Generated</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      {results.timeSaved} hrs
                    </p>
                    <p className="text-sm text-gray-600">Time Saved</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
