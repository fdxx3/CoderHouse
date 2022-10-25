import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
const googleProvider = new GoogleAuthProvider();

export const singInwithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    const user = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.errorMessage;
    const email = error.customData.email;

    return { ok: false, errorMessage, errorCode };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);
    let errorResult = "";
    switch (error.code) {
      case "auth/wrong-password":
        errorResult = "La clave es incorrecta";
        break;
      case "auth/invalid-email":
        errorResult = "El email es invalido";
        break;
      case "auth/user-not-found":
        errorResult = "El email es invalido";
        break;

      default:
        errorResult = error.code;
        break;
    }

    return { ok: false, errorMessage: errorResult };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    const { uid, photoURL } = resp.user;

    await updateProfile(auth.currentUser, { displayName }); //para identificar el usuario en firebase

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    //aca van las validaciones para errores de firebase
    console.log(error.code);
    let errorResult = "";
    if (error.code == "auth/email-already-in-use")
      errorResult = "El email ya está registrado";
    else {
      errorResult = error.message;
    }
    return { ok: false, errorMessage: errorResult };
  }
};
