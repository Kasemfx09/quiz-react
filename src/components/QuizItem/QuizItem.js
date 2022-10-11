import React from 'react';
import { ArrowRightIcon} from '@heroicons/react/24/solid'

const QuizItem = ({quizItem}) => {
    const{name, logo}=quizItem;
    return (
        <div className='bg-gray-800 p-2 rounded-xl'>
            <img className='bg-sky-800 rounded-lg ' src={logo} alt="" />
           <div className=' flex flex-col text-center rounded-b-lg'>
                <div className="text-white font-semibold text-xl p-2">{name}</div>
                <button className='rounded-lg py-2 bg-sky-900 text-slate-100 text-base flex flex-row justify-center items-center gap-2'>Start Quiz <ArrowRightIcon class="h-4 w-4 text-white font-bolder "/> </button>
           </div>
        </div>
    );
};

export default QuizItem;