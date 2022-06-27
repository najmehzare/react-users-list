import React from "react";

function ContactManager(){
   
    return (
        <div className="text-start ">

            <div id="alert-additional-content-3" class="p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
            <div class="flex items-center">
                <svg class="mr-2 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <h3 class="text-lg font-medium text-green-700 dark:text-green-800">تماس  با ما</h3>
            </div>
            <div class="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                جهت تماس با مدیریت با شماره های زیر تماس بگیرید.
            </div>
            <div class="flex">
               
                <button type="button" class="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-3" aria-label="Close">
                ۰۲۱ - ۱۱۱۱۱۱۱۱
                </button>
            </div>
            </div>

        </div> 
     
      );

}

export default ContactManager;