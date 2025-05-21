import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we submit your details...");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post(
        "https://CarlsonKadendi.pythonanywhere.com/api/signup",
        data
      );

      setLoading("");
      setSuccess(response.data.Message);

      // Reset fields
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <div className="d-flex justify-content-center align-items-center flex-grow-1 bg-light">
        
        <div
          className="p-5 shadow-lg"
          style={{
            width: "100%",
            maxWidth: "400px",
            background: "#fff",
            borderRadius: "50px",
            border: "1px solid #dee2e6",
          }}
        >
          {/* Gradient Heading */}
          <h3
            className="text-center fw-bold mb-4"
            style={{
              background: "linear-gradient(45deg, #198754, #6f42c1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Create Your Account
          </h3>

          {/* Feedback */}
          {loading && <div className="alert alert-warning">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Form */}
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control mb-3 shadow-sm"
              required
            />

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3 shadow-sm"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3 shadow-sm"
              required
            />

            <input
              type="number"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control mb-4 shadow-sm"
              required
            />

            {/* Fancy Signup Button */}
            <button
              type="submit"
              className="btn w-100 text-white fw-bold"
              style={{
                background: "linear-gradient(90deg, #198754, #6f42c1)",
                border: "none",
                padding: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                borderRadius: "12px",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              {loading ? "Signing you up..." : "Sign Up"}
            </button>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/signin" className="text-info fw-bold">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
