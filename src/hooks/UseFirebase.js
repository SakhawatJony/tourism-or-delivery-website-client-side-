
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import initializeAuthentication from "../components/firebase/firebase.init";


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


 const useFirebase = () => {
 const [name, setName] = useState('');
  const [user,setUser] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  

    const auth = getAuth();
   useEffect(()  =>   {
   const unsubscribe =  onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)

        }
    else{
        setUser({})
    }

    setLoading(false);
        });
        return () => unsubscribe;
       
       },[])

  const handleGoogleSignIn = () => {
  return  signInWithPopup(auth, googleProvider)
      
  }

  
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }

  
       

    const logOut = () =>{
     signOut(auth)
     .then(() =>{

     })


    }

return{
    user,
    setUser,
    name,
    error,
    setError,
    handleGoogleSignIn,
    verifyEmail,
    logOut,
    loading
}



  }



export default useFirebase;