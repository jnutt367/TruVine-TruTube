"use client";

export default function Header({
  user,
  setUser,
}: {
  user: string;
  setUser: (value: string | null) => void;
}) {
  const initial = user ? user.charAt(0).toUpperCase() : "?";

  function logout() {
    localStorage.removeItem("truvine_user");
    setUser(null); // 🔥 instant logout
  }

  return (
    <header className="bg-emerald-800 text-white p-4">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="font-black text-3xl">TruVINE</h1>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">
            {initial}
          </div>

          <span className="text-xs">{user}</span>

          <button
            onClick={logout}
            className="text-xs bg-red-500 px-2 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}