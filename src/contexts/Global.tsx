import { createContext, useContext } from "react"
export type GlobalContent = {
    themeName: string
    setThemeName:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    themeName: 'Hello World', // set a default value
    setThemeName:(_value: string) => { },
})
export const useGlobalContext = () => useContext(MyGlobalContext)