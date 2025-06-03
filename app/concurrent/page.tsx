"use client"

import { useState, useTransition } from "react"

function SlowComponent() {
    // Simulate blocking render
    let now = performance.now()
    while (performance.now() - now < 3000) {} // 3 seconds blocking
    return <h1>Delay Component Rendered</h1>
}

export default function Home(){
    const [show, setShow] = useState(false)
    const [isPending, startTransition] = useTransition()

    const handleClick = () => {
        console.log('handleClick')
        startTransition(() => {
            setShow(prev => !prev)
        })
    }

    return (
        <>
            <button
                className="bg-primary px-2 py-4 cursor-pointer border"
                onClick={handleClick}
            >
                {isPending ? 'Loading...' : 'Click Me'}
            </button>

            <div className="my-4 mt-4">
                {show && <SlowComponent />}
            </div>

            <button
                onClick={() => console.log('hello second')}
                className="bg-blue px-2 py-3 cursor-pointer border"
            >
                Click Second Button
            </button>
        </>
    )
}
