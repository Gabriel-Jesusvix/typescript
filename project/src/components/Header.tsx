
interface HeaderProps {
  label: string;
  description?: string;
}
export function Header({label, description}: HeaderProps){
  return (
    <header>
      <h1>{label}</h1>
      <p>{description}</p>

      <hr />
    </header>
  )
}