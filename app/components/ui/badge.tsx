import type React from "react"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "error" | "info"
  className?: string
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}