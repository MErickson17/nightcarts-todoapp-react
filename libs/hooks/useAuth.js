import {useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'

import {auth} from 'libs/firebase'

function useAuth() {

    const [user, setUser] = useState(null)

    useEffect(()=>{ //component mounts
        const authChange = onAuthStateChanged(auth, (clientCredential)=>{
            if(clientCredential){
                setUser(clientCredential)
            }else{
                setUser(null)
            }
        })

        // component unmount
        return ()=> authChange()
    }, []) // the empty array means there is no state for 
           // react to watch and it will just run useEffect once- rather than looping

    return user
}


export {useAuth}