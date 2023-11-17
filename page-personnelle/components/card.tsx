"use client";

import * as React from 'react';
import Image from 'next/image';


export const Card = () => {
    return(
    <>
        <div className='card'> 
            <div  className='card-link'>

                <div className='card-div1'>

                    <div className='card-div-images'>
                        <img className='card-image' src='/images/logo-cerema.png'></img>
                        <div className='card-div-subimage'>
                            <img className='card-subimage' src='/images/github.png'></img>
                        </div>
                    </div> 

                </div>
                <div className='card-text-block'>
                        <h3><a href="https://github.com/JeremieLetonnelier/estimaction" target='_blank'>Estim'action</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor euismod justo, 
                            id commodo lectus auctor a. Curabitur tortor nunc, mattis in sem id, bibendum dictum massa. 
                            Praesent diam metus, accumsan ut viverra eget, aliquam vel neque. Sed ultricies luctus velit, 
                            sed ultrices quam molestie vel. ;</p>
                    </div>
                <div className='card-text-block'>
                    <img
                        src="/images/external-link.png"
                        alt=""
                        height="20px"
                        width="20px" />
                </div>
            </div>
        </div>
     </>
    )
};


{/* <div class="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full"> OK
  <a href="https://github.com/JeremieLetonnelier/estimaction" target="_blank" class="border border-neutral-
  200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between 
  px-3 py-4 w-full"> OK
    <div class="flex items-center space-x-3"> OK 
      <div class="relative h-16"> OK 
          <Image
            src='/images/github.png'
            width={64}
            height={64}
            alt='@Estimaction'
            style={{  borderRadius: '50%'}}
          />
          <div class="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
            <Image
              src='/images/github.png'
              width={15}
              height={15}
              alt='@Github logo'
              style={{  borderRadius: '50%'}}
            />
          </div>
      </div>
      <div class="flex flex-col">

      </div>
    </div>
    <div class="text-neutral-700 dark:text-neutral-300">
      <ExternalLink />
    </div>
  </a>
</div> */}