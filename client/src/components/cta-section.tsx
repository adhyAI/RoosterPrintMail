import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { AlignCenter, Mail, Phone } from "lucide-react";

export default function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const demoMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/demo-request", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted",
        description: "We'll contact you within 24 hours to schedule your demo!",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
      setIsOpen(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    demoMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="demo" className="py-20 bg-rooster-red text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Transform Your Shipping Process?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses worldwide who have streamlined their
          shipping operations with Rooster Print & Mail kiosks.
        </p>

        <div
          className="grid md:grid-cols-2 gap-8 mb-12"
          align-items:AlignCenter
        >
          <Card className="bg-white bg-opacity-10 border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="text-white">Schedule a Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-90 mb-6">
                See the kiosk in action and learn how it can work for your
                business
              </p>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white text-rooster-red hover:bg-gray-100 w-full">
                    Book Demo Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Request a Demo</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your shipping needs..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={demoMutation.isPending}
                      className="w-full bg-rooster-red hover:bg-rooster-red-dark"
                    >
                      {demoMutation.isPending
                        ? "Submitting..."
                        : "Submit Request"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* <Card className="bg-white bg-opacity-10 border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="text-white">Get a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-90 mb-6">
                Receive custom pricing based on your specific business needs
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-rooster-red hover:bg-gray-100 w-full">
                    Request Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Request a Quote</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="quote-name">Name *</Label>
                      <Input
                        id="quote-name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="quote-email">Email *</Label>
                      <Input
                        id="quote-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="quote-company">Company</Label>
                      <Input
                        id="quote-company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="quote-message">Requirements</Label>
                      <Textarea
                        id="quote-message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Describe your business requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={demoMutation.isPending}
                      className="w-full bg-rooster-red hover:bg-rooster-red-dark"
                    >
                      {demoMutation.isPending ? "Submitting..." : "Request Quote"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card> */}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm opacity-90">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>Andrew@roosterprintmail.com</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>Schedule a call today</span>
          </div>
        </div>
      </div>
    </section>
  );
}
