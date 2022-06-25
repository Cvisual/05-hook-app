import { UserContext } from "./UserContext"

const User = {
    id: 123,
    name: 'Carlos Rodriguez',
    email: 'carlos.rodriguez@gmail.com',
}


export const UserProvider = ({ children }) => {
  
    return (
        <UserContext.Provider value={{ hola: 'mundo', user: User }}>
            { children }
        </UserContext.Provider>
  )
}
