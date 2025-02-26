import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/Store";
import { useState } from "react";
import { registerUser } from "@/reducers/UserSlice";

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleRegister() {
    const user = {
      username: username,
      password: password,
    };
    dispatch(registerUser(user));
  }

  return (
    <>
      <div className="mt-20 mb-20">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter username, email and password to register
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="roshen"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2 pb-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button onClick={handleRegister} className="w-full">
                Sign Up
              </Button>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <div
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                    className="text-blue-600 hover:underline"
                  >
                    Sign In
                  </div>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
