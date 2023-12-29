import React from "react";

const Display = ({queue}) => {
    return (
        <div className="text-light-1 p-4">
            <h2 className="mb-4 font-semibold text-[18px]">Queue Contents:</h2>
            <ul className="">
                {queue.map((item, index) => (
                <li key={index} className="rounded-xl p-2 bg-violet-700 mb-2 w-fit">{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Display;