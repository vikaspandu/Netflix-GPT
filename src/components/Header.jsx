import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchBar } from '../utils/gptSlice';

const Header = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/Browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    return () => unSubscribe();
  }, []);

  const handleToggleButton = () =>{
    dispatch(toggleGptSearchBar())
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />

      {user && (
        <div className='flex p-2'>
          <button className={`py-2 px-4 my-2 mx-4 rounded-lg text-white 
              ${showGptSearch ? "bg-green-600" : "bg-purple-800"}`} onClick={handleToggleButton}> {showGptSearch ? "Home" : "GPT Search"}</button>
          <img className='w-12 h-12 ' src="https://i.pinimg.com/1200x/d7/19/6a/d7196adc7c4f353d52235c5e6ed12e65.jpg" alt="Logo" />
          <button className='font-bold p-2 text-white' onClick={handleSignOut}>(Sign Out)</button>
        </div>
      )}
    </div>
  )
}

export default Header