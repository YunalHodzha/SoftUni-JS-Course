import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { UserList } from './components/UserList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="main">
      <UserList />

      </main>
      <Footer />
    </>
  )
}

export default App
