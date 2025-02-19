import { create } from 'zustand'

interface countStore {
  count: number
  inc: () => void
}

const useStore = create<countStore>(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}))

function Tracker() {
  const inc = useStore(state => state.inc)
  return (
    <>
      <Count />
      <button onClick={inc}>one up</button>
    </>
  )
}

function Count() {
  const count = useStore(state => state.count)
  return <p>{count}</p>
}

export default Tracker
