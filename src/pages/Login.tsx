import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "@/reducers/UserSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "@/store/Store"
import { useEffect, useState } from "react"

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = { username: username, password: password };
    try {
      await dispatch(loginUser(user)).unwrap(); // Unwrap the asyncThunk result
      console.log("Stored Token:", localStorage.getItem("jwt_token")); // Verify token is stored
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

    return (
      <div className="mt-20 mb-20">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to continue
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
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don’t have an account?
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}