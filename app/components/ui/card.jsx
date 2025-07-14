import React from "react"

/**
 * @typedef {Object} CardProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */
export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }) {
  return <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = "" }) {
  return <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 ${className}`}>{children}</p>
}