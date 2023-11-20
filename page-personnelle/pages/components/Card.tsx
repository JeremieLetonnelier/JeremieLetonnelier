"use client";

import * as React from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'nextjs-components/src/icons';


export const Card = ({ ProjectTitle, ProjectDescription }) => {
    return(
    <>
      
        <div className='card'> 
            <div  className='card-link'>
                <div className='card-text-block'>
                  <div className='card-text-title'> 
                    <div className='card-text-title'>
                      <h4><Github size={15}></Github></h4>
                    </div>
                    <div className='card-text-title'>
                      <h4>{ProjectTitle}</h4>
                    </div>
                    <div className='card-text-title'>
                      <a href="https://github.com/JeremieLetonnelier/estimaction" target='_blank'><ExternalLink size={10}></ExternalLink></a>
                    </div>
                  
                  </div>
                  <div className='card-text-block'>
                      <p>{ProjectDescription} </p>
                  </div>
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