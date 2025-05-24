
const ProfileScreen = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-semibold text-[#6B7280]">Profile</h1>
      </div>

      {/* User Info */}
      <div className="space-y-4 mt-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-[#6B7280]"><span className="font-medium">Name:</span> John Doe</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-[#6B7280]"><span className="font-medium">Email:</span> john@example.com</p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-8">
        <button className="border-2 border-[#E57373] text-[#E57373] px-8 py-3 rounded-lg font-medium">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
