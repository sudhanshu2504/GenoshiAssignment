import React, { useState } from 'react'

function Pricing() {
  const [plan, setPlan] = useState(0);
  return (
    <div className='h-full w-full'>
      <section class="text-gray-400 bg-black body-font justify-items-center overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Select the best plan as per your need and get started with Genoshi.io </p>
          </div>
            
          <div class="flex flex-wrap justify-center -m-4">
            <div class={`p-4 xl:w-1/4 md:w-1/2 w-full rounded-lg border-2 ${(plan===1)?"border-gray-100":"border-gray-700"} mx-3`}onClick={()=>setPlan(1)}>
            <input type="radio" value="p1" checked={(plan === 1)} style={{accentColor:"black",height:"1rem", width:"1rem"}} onClick={()=>setPlan(1)}/>
              <div class="h-full p-6 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">BASIC PLAN</h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$4</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">/month</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">/user</span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Up to 10 graphs
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Up to 500 chatbot queries
                </p>
                <button class={`flex items-center mt-auto ${(plan===1)?"bg-gray-100 text-black":"bg-gray-800 text-gray-600"} border-0 py-2 px-4 w-full focus:outline-none rounded`}>Continue
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-400 mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class={`p-4 xl:w-1/4 md:w-1/2 w-full rounded-lg border-2 ${(plan===2)?"border-gray-100":"border-gray-700"} mx-3`}onClick={()=>setPlan(2)}>
            <input type="radio" value="p2" checked={(plan === 2)} style={{accentColor:"black",height:"1rem", width:"1rem"}} onClick={()=>setPlan(2)}/>
              <div class="h-full p-6 flex flex-col relative overflow-hidden">
                <span class="border-2 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BEST SELLING</span>
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">PRO PLAN</h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$8</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">/month</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">/user</span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Up to 50 Graphs
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Up to 1000 chatbot queries
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Email + live chat support
                </p>
                <button class={`flex items-center mt-auto ${(plan===2)?"bg-gray-100 text-black":"bg-gray-800 text-gray-600"} border-0 py-2 px-4 w-full focus:outline-none rounded`}>Continue
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-400 mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class={`p-4 xl:w-1/4 md:w-1/2 w-full rounded-lg border-2 ${(plan===3)?"border-gray-100":"border-gray-700"} mx-3`}onClick={()=>setPlan(3)}>
              <input type="radio" value="p3" checked={(plan === 3)} style={{accentColor:"black",height:"1rem", width:"1rem"}} onClick={()=>setPlan(3)}/>
              <div class="h-full p-6  flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">ENTERPRISE PLAN</h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$15+</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">/month/user</span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Contact for prices
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Unlimited Graphs
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Ability to upload custom PDFs
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-gray-100 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>24/7 phone + email support
                </p>
                <button class={`flex items-center mt-auto ${(plan===3)?"bg-gray-100 text-black":"bg-gray-800 text-gray-600"} border-0 py-2 px-4 w-full focus:outline-none rounded`}>Continue
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
