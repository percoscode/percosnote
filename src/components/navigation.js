import React from 'react';

// const Navigation = ({ onRouteChange, isSignedIn }) => {
//         if(isSignedIn) {
//             return (
//                 <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
//                     <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
//                 </nav>
//             )
//         } else {
//             return (
//                 <div>
//                     <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
//                         <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
//                         <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
//                     </nav>
//                 </div>
//             )
//         }
// }

const Navigation = () => {
    return (
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p>sign in</p>
                <p>register</p>
            </nav>
        </div>
    )
}

export default Navigation 