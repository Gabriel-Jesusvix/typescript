
interface NameProps {
  name: string
  age: number
}

export function Name({name, age}:NameProps){
  return (
    <div>
      <h1>Bem Vindo: {name}</h1>
      <h3>idade: {age}</h3>
    </div>
  )
}