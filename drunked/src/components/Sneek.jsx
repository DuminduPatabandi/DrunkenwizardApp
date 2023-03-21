import { CakeIcon, HeartIcon } from '@heroicons/react/24/outline'

const Sneek = () => {
  return (
    <div className="relative  isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Sneek a Peek to my Shutterstock.</h2>
            
            <div className="mt-6 flex max-w-md gap-x-4">
              
              <a href='https://www.shutterstock.com/g/DbrosVmaker' 
              target='_blank'                
                className="flex-none rounded-md bg-indigo-500 py-2.5 px-20 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 duration-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                PEEK
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HeartIcon className="h-6 w-6  text-[#ff0054]" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Illustrations</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Show your Love to us, and just ask us any thing you need to illustrate.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CakeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Special Days</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Specially designed special day illustrations.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Sneek