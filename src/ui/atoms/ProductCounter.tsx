"use client";

import { type ReactNode, useState } from 'react';

type ProductCounterProps = {
    children: ReactNode
}

export const ProductCounter = ({children}: ProductCounterProps) => {
    
    const [counter, setCounter] = useState<number>(0);
    
    return (
        <div>
            <button className='border border-slate-200 px-4' onClick={() => setCounter(counter => counter - 1)}>
                -
            </button>
            <input readOnly value={counter} className='border border-slate-200 px-4' />
            <button className='border border-slate-200 px-4' onClick={() => setCounter(counter => counter + 1)}>
                +
            </button>
            <div>
                {counter % 2 === 0 && children}
            </div>
        </div>
    )
}