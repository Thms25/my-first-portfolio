import React from 'react'

function Container({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
      {children}
    </div>
  )
}

export default Container
