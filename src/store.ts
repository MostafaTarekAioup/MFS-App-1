import { atom, useAtom } from 'jotai'

const countAtom = atom(55)

const useCount = () => useAtom(countAtom)

export { useCount }
