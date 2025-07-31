import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface AdminAuthProps {
  onAuthenticated: () => void;
}

export default function AdminAuth({ onAuthenticated }: AdminAuthProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check - in production, this should be more secure
    const adminPassword = "rooster2025"; // You can change this password
    
    if (password === adminPassword) {
      localStorage.setItem("admin_authenticated", "true");
      onAuthenticated();
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto bg-rooster-red rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <p className="text-gray-600">Enter password to access the admin dashboard</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="mt-1"
                required
              />
            </div>
            
            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</p>
            )}
            
            <Button type="submit" className="w-full bg-rooster-red hover:bg-rooster-red-dark">
              Access Dashboard
            </Button>
          </form>
          
          {/* <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Default password: <code className="bg-gray-100 px-1 rounded">rooster2025</code>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              (Change this in the code for production use)
            </p>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}