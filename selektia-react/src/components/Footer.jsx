import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-4">
      <div className="container">
        <small>© {new Date().getFullYear()} Selektia</small>
      </div>
    </footer>
  )
}
