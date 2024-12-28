import { getAuth } from "firebase/auth";
import {app} from "./firebaseconfig"  
import { getFirestore,doc, setDoc,getDoc } from "firebase/firestore";
const db = getFirestore(app)




const addtodatabase = async(user,formdata) =>{
  let userid = (user.uid).toString()
  console.log(userid)
   try{
    await setDoc(doc(db, `users/${userid}`),formdata)
    console.log("done")
   }catch(err){
    console.log(err)
   }
   
}
const getfromdatabase = async (user) => {

  if (user){
    try {
      let userid = user.uid.toString();
      const docRef = doc(db, `users/${userid}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const storeddata= (docSnap.data())
        return storeddata
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  }
export {addtodatabase,getfromdatabase}