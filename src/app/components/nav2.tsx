import React from 'react'
import Link from 'next/link'

import {  Menu, Search, ShoppingCart, User } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const Nav2 = () => {
    return (
        <nav className='w-full p-10 mb-5 flex flex-row items-center justify-between'>
            <div className='flex w-full flex-row items-center max-auto justify-between gap-10'>
                <div className='max-w-7xl flex flex-row items-center justify-between gap-32 '>
                    <div className=''>
                        <h1 className='font-bold text-2xl'>Bandage</h1>
                    </div>

                    <ul className='hidden md:flex flex-row items-center  text-[#737373] opacity-100 gap-4'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='flex flex-row gap-2 '>
                            <Link href="/products">Products
                            </Link>

                        </li>
                        <li>
                            <Link href="/pricing">Pricing</Link>
                        </li>

                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>

                    </ul>

                </div>



                <div className=' text-[#23A6F0] font-bold text-[14px] hidden md:flex flex-row items-center justify-between gap-10 '>
                    <div className='flex gap-1'>
                        <User />
                        <p >Login</p>
                    </div>
                    <div className='flex gap-8 text-white'>
                        <Button className='w-{214px} h-[52px] bg-[#23A6F0] rounded '>Become a Member &nbsp; &rarr;

                        </Button>
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <Sheet >
                    <SheetTrigger>
                        {/* <Button variant={"outline"} size={"icon"} className='rounded-full ' > */}
                        <Menu />
                        {/* </Button> */}
                    </SheetTrigger>

                    <SheetContent className='mt-6 max-w-full'>
                        <SheetHeader className='max-w-7xl flex flex-row  items-center justify-evenly'>
                            <SheetTitle className='font-semibold '>
                                Bandage
                            </SheetTitle>
                            <div className='flex flex-row gap-4'>

                                <Search />
                                <ShoppingCart />
                            </div>
                        </SheetHeader>
                        <div className='flex flex-col gap-6 mt-12 justify-center items-center text-[30px] font-normal text-[#737373] opacity-100' >
                            <Link href="/">Home</Link>
                            <Link href="/products/product">Product</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </SheetContent>

                </Sheet>
            </div>

        </nav>
    )
}

export default Nav2