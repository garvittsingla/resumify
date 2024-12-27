import { app } from "./firebaseconfig";
import { getDatabase, set, ref } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getDatabase(app);
const storage = getStorage(app);

async function Savedata(formdata, userID) {
  // Handle image upload for profile image
  if (formdata.detailfrom0.image) {
    const imageFile = formdata.detailfrom0.image;
    const storageReference = storageRef(storage, `images/${userID}/${imageFile.name}`);
    await uploadBytes(storageReference, imageFile);
    const downloadURL = await getDownloadURL(storageReference);
    formdata.detailfrom0.imageURL = downloadURL;
    delete formdata.detailfrom0.image; // Remove the file object from formdata
  }

  // Handle image upload for project images
  for (let i = 1; i <= 3; i++) {
    const projectImage = formdata.detailfrom2[`project${i}`]?.image;
    if (projectImage) {
      const storageReference = storageRef(storage, `images/${userID}/${projectImage.name}`);
      await uploadBytes(storageReference, projectImage);
      const downloadURL = await getDownloadURL(storageReference);
      formdata.detailfrom2[`project${i}`].imageURL = downloadURL;
      delete formdata.detailfrom2[`project${i}`].image; // Remove the file object from formdata
    }
  }

  await set(ref(db, `users/${userID}`), formdata);
}

export { db, Savedata };