import { useRef, useState } from "react"
import { Header } from "./components/Header"



function App() {
  const nameRef = useRef<HTMLInputElement>(null)
  const [users, setUsers] = useState<string[]>([''])


  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if(!nameRef.current?.value) {
      alert('Digite seu nome')
      return;
    }

    const name = nameRef.current?.value

    setUsers(values => [...values, name])
  }


  return (
    <div>
      <Header
        label="TS + React"
        description="Aplicando TypeScript no React"
      />

      <form action="" onSubmit={handleRegister}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          ref={nameRef}
        />
        <button type="submit">Cadastrar</button>
      </form>

      {
        users.map((user, index) => (
          <div>
            <span key={index}>{user}</span>
            <br />
          </div>
        ))
      }


    </div>
  )
}

export default App
