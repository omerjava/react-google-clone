import React from 'react'
import Link from '../link/Link';
import './Header.css';


function Header() {
  return (
    <div className='header'>
        <Link linkName='Gmail' url='https://www.google.com/gmail/about/'/>
        <Link linkName='Images' url='https://www.google.be/imghp'/>
        <a href="https://accounts.google.com/signin/v2/identifier" className='sign-in'>Sign In</a>
    </div>
  )
}

export default Header