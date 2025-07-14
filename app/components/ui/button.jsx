import React from "react"

/**
 * @typedef {Object} ButtonProps
 * @property {'primary' | 'secondary' | 'outline' | 'ghost'} [variant]
 * @property {'sm' | 'md' | 'lg'} [size]
 * @property {React.ReactNode} children
 */

/**
 * @param {ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-blue-500",
    secondary:
      "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 focus:ring-gray-500",
    outline:
      "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 focus:ring-blue-500",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 focus:ring-gray-500",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "active:scale-95"

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}