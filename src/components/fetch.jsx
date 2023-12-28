import React, { useEffect, useState } from "react"

const Fetch = ({ queue, data, setData, handleEndClick, handleResetClick }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let interval;

        const fetchData = () => {
            if (queue.length > 0) {
                setData(data => [...data, queue[currentIndex]]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }

        interval = setInterval(fetchData, 3000);

        //fetchData();

        return () => {
            clearInterval(interval);
        }
    }, [currentIndex, queue])

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="text-light-1 p-4 font-semibold text-[18px]">
                    Poll:
                </div>
                <div className="text-light-1 p-4 h-full">
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full gap-4 flex flex-row p-4">
                    <button className="bg-red-800 font-semibold w-full py-2 px-8 rounded" onClick={handleEndClick}>End</button>
                    <button className="bg-sky-800 text-white font-semibold w-full py-2 px-8 rounded" onClick={handleResetClick}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Fetch;