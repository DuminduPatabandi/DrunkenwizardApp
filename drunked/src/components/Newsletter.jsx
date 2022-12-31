import React from 'react'
import styles from '../style'

const Contact = () => (
    <section id='newsletter' class="flex flex-col sm:my-16 my-6 max-w-4xl mx-auto overflow-hidden   shadow-lg bg-[#23221F] md:flex-row md:h-48">
    <div class="md:flex md:items-center md:justify-center md:w-1/2 bg-[#23221F]">
        <div class="px-6 py-6 md:px-8 md:py-0">
            <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">You will be notified every beautiful thingd we are doing.</p>
        </div>
    </div>

    <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
            <div class="flex flex-col p-1.5 overflow-hidden border dark:border-gray-600 lg:flex-row dark:focus-within:border-gray-200 focus-within:ring focus-within:ring-opacity-40 focus-within:border-gray-400 focus-within:ring-gray-300">
                <input class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-100 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email"/>

                <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-500  hover:bg-black focus:bg-gray-600 focus:outline-none">subscribe</button>
            </div>
        </form>
    </div>
</section>




)

export default Contact