import React, { useEffect, useState } from "react"

const Fetch = ({ 
    queue,
    data, 
    setData, 
    handleEndClick, 
    handleResetClick,  
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [endClicked, setEndClicked] = useState(false);

    const handleEnd = () => {
        setEndClicked(true);
        handleEndClick();
    }

    useEffect(() => {
        let interval;

        const fetchData = () => {
            if (queue.length > 0 && queue[currentIndex]) {
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

    useEffect(() => {
        if (data.length === queue.length && endClicked) {
            alert("Success! Queue is empty.")
        }
    }, [data])

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="text-light-1 p-4 font-semibold text-[18px]">
                    Poll:
                </div>
                <div className="text-light-1 p-4 h-full">
                    <ul>
                        {data.map((item, index) => (
                            <li key={index} className="rounded-xl p-2 bg-green-800 mb-2 w-fit">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full gap-4 flex flex-row p-4">
                    <button className="bg-red-800 font-semibold w-full py-2 px-8 rounded" onClick={handleEnd}>End</button>
                    <button className="bg-sky-800 text-white font-semibold w-full py-2 px-8 rounded" onClick={handleResetClick}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Fetch;