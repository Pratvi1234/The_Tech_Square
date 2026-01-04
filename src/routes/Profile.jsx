import { useState } from "react";
import "../componentes/Profile.css";

const Profile = () => {
  const [step, setStep] = useState(1);
  const [loginData, setLoginData] = useState({ email: "", phone: "" });
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email && !loginData.phone) {
      alert("Enter email or phone number!");
      return;
    }
    setStep(2);
    alert("For demo, use OTP: 1234");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      setUser({
        name: "John Doe",
        email: loginData.email || "example@mail.com",
        phone: loginData.phone || "1234567890",
        gender: "", // optional
        birthdate: "", // optional
        location: "", // optional
      });
      setStep(3);
    } else {
      alert("Incorrect OTP! Use 1234 for demo.");
    }
  };

  return (
    <div className="profile_container">
      {step === 1 && (
        <form onSubmit={handleLoginSubmit} className="profile_form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={loginData.phone}
            onChange={(e) =>
              setLoginData({ ...loginData, phone: e.target.value })
            }
          />
          <button type="submit">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit} className="profile_form">
          <h2>Enter OTP</h2>
          <p>We have sent a 4-digit OTP. (Use 1234 for demo)</p>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}

      {step === 3 && user && (
        <div className="profile_view">
          <h1>Hi {user.name}!</h1>

          <div className="profile_info">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            {/* Optional fields */}
            {user.gender && (
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
            )}
            {user.birthdate && (
              <p>
                <strong>Birthdate:</strong> {user.birthdate}
              </p>
            )}
            {user.location && (
              <p>
                <strong>Location:</strong> {user.location}
              </p>
            )}
          </div>

          <div className="previous_orders">
            <h2>Previous Orders</h2>
            <div className="orders_placeholder">
              <span>No previous orders yet.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
