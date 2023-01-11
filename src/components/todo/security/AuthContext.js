import { createContext , useState ,useContext} from "react";


//1:create a context


export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2:share the created context othe components
export default function AuthProvider({ children}) {

    //put some state in the context
    //const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    // setInterval( () => setNumber(number +1) ,10000)

    // const valueToBeshared = {number , isAuthenticated ,setAuthenticated }

    function login(username , password) {
        if(username==='in28minutes' && password==='dummy'){
            setAuthenticated(true)
            setUsername(username)
            return true 
        }
        else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logOut() {
        setAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={ { isAuthenticated ,setAuthenticated ,login ,logOut ,username} }>
            {children}
        </AuthContext.Provider>
    )
}
