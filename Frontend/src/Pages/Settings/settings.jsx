import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    language: "english",
    timezone: "UTC",
  });

  const [preferences, setPreferences] = useState({
    theme: "light",
    notifications: {
      email: true,
      push: true,
      sound: true,
    },
    privacy: {
      profileVisibility: "public",
      showOnlineStatus: true,
      allowMessages: true,
    },
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData((prev) => ({
        ...prev,
        name: storedUser.name || "",
        email: storedUser.email || "",
      }));
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (type) => {
    setPreferences((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  const handlePrivacyChange = (setting) => {
    setPreferences((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]:
          typeof prev.privacy[setting] === "boolean"
            ? !prev.privacy[setting]
            : setting === "profileVisibility"
            ? prev.privacy[setting] === "public"
              ? "private"
              : "public"
            : prev.privacy[setting],
      },
    }));
  };

  const handleSaveProfile = async () => {
    try {
      // Implement API call to save profile
      console.log("Saving profile:", formData);
      setShowEditProfile(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // Implement account deletion logic
      localStorage.removeItem("user");
      navigate("/signin");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 space-y-8 text-gray-800">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-light text-orange-600 tracking-wide">
          Settings
        </h1>
        <button
          onClick={handleSaveProfile}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Save Changes
        </button>
      </div>

      {/* Profile Section */}
      <section className="bg-white/70 backdrop-blur-sm shadow-xl rounded-xl p-8 border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light">Profile</h2>
          <button
            onClick={() => setShowEditProfile(!showEditProfile)}
            className="text-sm px-4 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-all duration-200"
          >
            {showEditProfile ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-orange-200 shadow-lg">
                <img
                  src={
                    profileImage ||
                    `https://ui-avatars.com/api/?name=${formData.name}&background=orange&color=fff`
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {showEditProfile && (
                <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <span className="text-white text-sm">Change Photo</span>
                </label>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                disabled={!showEditProfile}
                className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              disabled={!showEditProfile}
              className="px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              disabled={!showEditProfile}
              className="px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="bg-white/70 backdrop-blur-sm shadow-xl rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-light mb-6">Preferences</h2>

        <div className="space-y-6">
          {/* Theme Selection */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Theme</span>
            <select
              value={preferences.theme}
              onChange={(e) =>
                setPreferences((prev) => ({ ...prev, theme: e.target.value }))
              }
              className="px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

          {/* Notification Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notifications</h3>
            <div className="space-y-3">
              {Object.entries(preferences.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="capitalize text-gray-700">
                    {key} Notifications
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handleNotificationChange(key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Privacy</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Profile Visibility</span>
                <button
                  onClick={() => handlePrivacyChange("profileVisibility")}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    preferences.privacy.profileVisibility === "public"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {preferences.privacy.profileVisibility === "public"
                    ? "Public"
                    : "Private"}
                </button>
              </div>
              {Object.entries(preferences.privacy)
                .filter(([key]) => key !== "profileVisibility")
                .map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="capitalize text-gray-700">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handlePrivacyChange(key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Account Management */}
      <section className="bg-white/70 backdrop-blur-sm shadow-xl rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-light mb-6">Account Management</h2>
        <div className="space-y-4">
          <button
            onClick={() => navigate("/change-password")}
            className="w-full px-4 py-3 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-all duration-200 text-center"
          >
            Change Password
          </button>
          <button
            onClick={handleDeleteAccount}
            className="w-full px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200 text-center"
          >
            Delete Account
          </button>
        </div>
      </section>

      {/* Help & Support */}
      <section className="bg-white/70 backdrop-blur-sm shadow-xl rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-light mb-6">Help & Support</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Need assistance? Contact our support team at{" "}
            <a
              href="mailto:support@mindease.com"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              support@mindease.com
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
