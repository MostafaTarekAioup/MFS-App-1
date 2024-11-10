import { useCount } from '../../store.ts'

const Hello = () => {
  const [count, setCount] = useCount()
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h3>{`count : ${count}`}</h3>
    </>
  )
}

export default Hello
