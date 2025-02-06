import { Header } from "./components/Header"
import { Name } from "./components/Name"



function App() {
  return (
    <div>
      <Header
        label="TS + React"
        description="Aplicando TypeScript no React"
      />
      <Name
        name="G.J"
        age={26}
      />
    </div>
  )
}

export default App
