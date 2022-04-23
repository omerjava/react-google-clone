import React from 'react'
import Link from '../link/Link';
import './Header.css';


function Header() {
  return (
    <div className='header'>
        <Link linkName='Gmail' url='https://www.google.com/gmail/about/'/>
        <Link linkName='Images' url='https://www.google.be/imghp'/>
        <button className='sign-in'>Sign In</button>
    </div>
  )
}

export default Header