import React from 'react'
import heroImage from '../assets/hero.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="px-2 py-20 bg-gradient-to-r from-[#9B021EDE] via-[#800028] to-[#3B0113F7] text-white">
          <div className="md:flex items-center justify-around ">
            <div className=" md:w-3/5 px-4">
              <h2 className="font-syne font-bold text-4xl text-skin-base my-4 leading-tight lg:text-7xl ">
                Tickets to FiFa <br /> World Cup 2022
              </h2>
              <p className="text-base text-skin-muted dark:text-skin-darkMuted lg:text-2xl sm:mb-14 mb-10">
                Get access to tickets as NFTs.
                Retain the value of your purchased Ticket NFT legally and re-sell if you
                want with the same price
              </p>
              <div>
                <button className='border-full py-2 px-6 rounded-full border-2  hover:bg-[#800028]'>
                    How it works
                </button>
              </div>
            </div>
            <div className="w-10/12 md:w-1/3 mx-auto md:mx-0 my-8 order-2 ">
              <Image src={heroImage} />
            </div>
          </div>
        </section>
      );
}

export default Hero