import React from 'react'

function FirstLook() {
  return (
    <div>
        <div className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">First Look</h1>
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">NIKE AIR MAX PULSE</h2>
            <p className="text-lg mb-1 text-gray-700 dark:text-gray-300">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            </p>
            <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
              —designed to push you past your limits and help you go to the max.
            </p>
            <div className="flex justify-center items-center gap-3">
              <button className="bg-black text-white px-6 py-3 rounded-full">Notify Me</button>
              <button className="bg-black text-white px-6 py-3 rounded-full">Shop Air Max</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FirstLook
