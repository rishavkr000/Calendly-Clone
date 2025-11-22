import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { PenBox } from 'lucide-react'

const Header = () => {
  return (
    <nav className='mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2'>
        <Link href="/" className='flex items-center'>
            <Image 
                src="/logo.png"
                alt='Calendly Clone'
                width="150"
                height="60"
                className='h-14 w-auto'
            />
        </Link>
        <div className='flex gap-4 items-center'>
            <Link href="/events?create=true">
                <Button><PenBox />Create Event</Button>
            </Link>
            <Button variant="outline">Login</Button>
        </div>
    </nav>
  )
}

export default Header