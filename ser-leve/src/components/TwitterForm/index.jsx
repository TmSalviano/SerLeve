import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // cSpell:disable-line
import {  faImage,  faSmile, } from '@fortawesome/free-solid-svg-icons' // cSpell:disable-line
import {} from '@fortawesome/free-solid-svg-icons' //cSpell:disable-line

export function  TwitterForm({onTweet}) {
    

    function handleSubmit (){

        onTweet()



    }

    return(
        <div className="border-b border-gray-800 p-4">
          <textarea
          className="w-full bg-transparent text-white text-xl resize-none outline-none"
          placeholder="what's happening?"
          /> 

        <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
            <FontAwesomeIcon icon = {faImage} className='text-orange-400 cursor-pointer' />
            <FontAwesomeIcon icon = {faSmile} className='text-orange-400 cursor-pointer' />
           
             </div>
             <button className="bg-orange-400 text-white font-bold  px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200" onClick={handleSubmit}>tweet</button>  
        </div>
         
        </div>
    )
}