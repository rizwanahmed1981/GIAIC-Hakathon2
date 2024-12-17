import React from 'react'
import Link from 'next/link'
import { ChevronDown, Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const Navbar = () => {
  return (
    <nav>
      <div className='sm:flex hidden sm:p-8 sm: w-full sm-h[60px] sm:flex-row sm:items-center sm:max-auto sm:justify-between sm:gap-10'>
        <div className='max-w-7xl flex flex-row items-center justify-between gap-32 '>
          <div className=''>
            <h1 className='font-bold text-2xl'>Bandage</h1>
          </div>

          <ul className=' md:flex flex-row items-center  text-[#737373] opacity-100 gap-4'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className='flex flex-row gap-2 '>
              <Link href="/products">Products
              </Link>
              <ChevronDown />
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
            <li>
              <Link href="#">Pages</Link>
            </li>
          </ul>

        </div>



        <div className=' text-[#23A6F0] font-bold text-[14px] hidden md:flex flex-row items-center justify-between gap-10 '>
          <div className='flex gap-1'>
            <User />
            <p >Login / Register</p>
          </div>
          <div className='flex gap-8'>
            <Search />
            <p className='flex'><ShoppingCart />1</p>
            <p className='flex'><Heart />1</p>
          </div>
        </div>
      </div>






      <div className='sm:hidden flex flex-row place-items-center  justify-between px-6 w-full h-[100px]'>
        <div className=''>
          <h1 className='font-bold text-2xl'>Bandage</h1>
        </div>
        <div className='flex flex-row items-center justify-between gap-6'>
        <Search />
                <ShoppingCart />

        <Sheet >
          <SheetTrigger>
            {/* <Button variant={"outline"} size={"icon"} className='rounded-full ' > */}
            <Menu />
            {/* </Button> */}
          </SheetTrigger>

          <SheetContent className='mt-6 max-w-7xl'>
            <SheetHeader className='max-w-7xl flex flex-row  items-center justify-evenly'>
              <SheetTitle className='font-semibold '>
                Bandage
              </SheetTitle>
              <div className='flex flex-row gap-4'>

                <Search />
                <ShoppingCart />
              </div>
            </SheetHeader>
            <div className='flex flex-col gap-6 mt-6 justify-center items-center text-[30px] font-normal text-[#737373] opacity-100' >
              <Link href="/">Home</Link>
              <Link href="/products">Product</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </SheetContent>

        </Sheet>
        </div>
        
      </div>

    </nav>
  )
}

export default Navbar 