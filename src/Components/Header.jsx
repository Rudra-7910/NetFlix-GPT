import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearchView);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign out failed:", error);
    });
  };

  return (
    <div className='absolute w-full px-8 py-2 bg-linear-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center z-20'>
         <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg"
         alt="logo" className='w-32 md:w-44 mx-auto md:mx-0'/>
         {user && (
           <div className='flex items-center gap-2'>
             {showGptSearch && (
               <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
                 <option value="en">English</option>
                 <option value="hi">Hindi</option>
                 <option value="es">Spanish</option>
               </select>
             )}
            <button onClick={handleGptSearchClick} className='py-2 px-4 text-white cursor-pointer bg-purple-500 rounded-lg'>{showGptSearch ? "Homepage" : "Search"}</button>
             <button
               onClick={handleSignOut}
               className='bg-red-600 text-white font-medium px-4 py-2 rounded cursor-pointer hover:bg-red-700'
             >
               Sign Out
             </button>
           </div>
         )}
    </div>
  )
}

export default Header
