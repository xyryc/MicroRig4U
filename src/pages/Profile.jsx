import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DefaultAvatar from "../assets/avatar-default.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      {/* Header Section */}
      <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
        <img
          className="w-24 h-24 rounded-full border-4 border-white mb-4 md:mb-0 object-cover"
          src={user?.photoURL || DefaultAvatar}
          alt="User Profile"
        />
        <div className="md:ml-4 text-center md:text-left">
          <h2 className="text-2xl font-bold">
            {user?.displayName || "Jane Doe"}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
          <button className="mt-2 bg-blue-500 text-white rounded-none btn-sm btn">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-around border-b mt-4 text-sm sm:text-base ">
        {["orders", "wishlist", "settings", "address", "payment"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 transition duration-500 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="mt-4">
        {activeTab === "orders" && "work in progress"}
        {/* {activeTab === "wishlist" && <Cart />} */}
        {activeTab === "wishlist" && "work in progress"}
        {activeTab === "settings" && "work in progress"}
        {activeTab === "address" && "work in progress"}
        {activeTab === "payment" && "work in progress"}
      </div>
    </div>
  );
};

export default Profile;
