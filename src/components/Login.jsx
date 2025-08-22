import React, { use } from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { createValidation } from '../utils/createValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null)


  const handleValidation = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = createValidation(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/92224680?v=4"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  }

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="relative w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="Netflix background"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={(e) => e.preventDefault()} className="w-[400px] p-10 bg-black bg-opacity-50 text-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 mb-4 w-full bg-gray-700 rounded"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 mb-4 w-full bg-gray-700 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-6 w-full bg-gray-700 rounded"
          />

          <p className='text-red-500 font-bold text-l py-2'>{errorMessage}</p>

          <button className="bg-red-600 p-3 w-full rounded hover:bg-red-700 transition" onClick={handleValidation}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already User? Sign In now"}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
