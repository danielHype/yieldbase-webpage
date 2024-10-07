import React from 'react'

interface NumberPillProps {
    number: string;
}

export default function NumberPill({ number }: NumberPillProps) {
    return (
        <div
            variant="outline"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium  border border bg-transparent  h-12 w-12 px-4 py-2 mb-6"
        >
            <span className='font-medium text-xl md:text-2xl mb-4 items-center align-middle pt-3'>{number}</span>
        </div>
    )
}
