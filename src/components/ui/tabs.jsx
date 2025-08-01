import React, { createContext, useContext, useState } from 'react'

const TabsContext = createContext()

const Tabs = ({ defaultValue, value, onValueChange, className = '', children, ...props }) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const currentValue = value !== undefined ? value : internalValue
  
  const handleValueChange = (newValue) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={`${className}`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = React.forwardRef(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}
    {...props}
  />
))
TabsList.displayName = 'TabsList'

const TabsTrigger = React.forwardRef(({ className = '', value, children, ...props }, ref) => {
  const context = useContext(TabsContext)
  const isActive = context?.value === value
  
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive 
          ? 'bg-white text-gray-900 shadow-sm' 
          : 'text-gray-600 hover:text-gray-900'
      } ${className}`}
      onClick={() => context?.onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  )
})
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef(({ className = '', value, children, ...props }, ref) => {
  const context = useContext(TabsContext)
  const isActive = context?.value === value
  
  if (!isActive) return null
  
  return (
    <div
      ref={ref}
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }

