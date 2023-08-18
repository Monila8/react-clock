import React, { useEffect, useState } from "react"

function App() {
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {clock.toLocaleTimeString()} is the current time.
      </header>
    </div>
  )
}

export default App

// useEffect to handle side effects in the component. The code block within this effect will run after the component is mounted due to the empty dependency array [].
// An interval is set up to run every second.
// Within each interval, the 'clock' state is updated with the current time.
// The cleanup function is executed when the component is unmounted or when the dependency of the useEffect changes.
// In this case, it clears the created interval to prevent memory leaks.
// The empty dependency array indicates that useEffect will execute only once, after mounting.