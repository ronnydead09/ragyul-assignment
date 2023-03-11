import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  const signedInLinks = (
    <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>
      Sign Out
    </p>
  );

  const signedOutLinks = (
    <>
      <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>
        Sign In
      </p>
      <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>
        Register
      </p>
    </>
  );

  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      {isSignedIn ? signedInLinks : signedOutLinks}
    </nav>
  );
};

export default Navigation;
