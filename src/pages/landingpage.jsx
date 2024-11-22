import React, { useState } from "react"

export const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="bg-gray-300 min-h-screen grid place-items-center relative">
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={toggleDrawer}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <ul className="mt-4 space-y-2">
            <li className="p-2 hover:bg-gray-100 rounded">Home</li>
            <li className="p-2 hover:bg-gray-100 rounded">Profile</li>
            <li className="p-2 hover:bg-gray-100 rounded">Settings</li>
            <li className="p-2 hover:bg-gray-100 rounded">Logout</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white h-signup-box w-signup-box rounded-lg mt-16 mb-16 pb-6">
        <button
          onClick={toggleDrawer}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Drawer
        </button>
        <div className="p-6 text-center">
          <h1 className="text-lg font-bold">Main Content</h1>
        </div>
      </div>
    </div>
  )
}
        