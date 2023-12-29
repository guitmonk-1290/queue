import React, { useState, useEffect } from "react"

import './App.css';

import Header from "./components/header"
import Input from './components/input';
import Display from "./components/display";
import Fetch from "./components/fetch";

function App() {

  const [queue, setQueue] = useState([]);
  const [data, setData] = useState([]);
  const [endClicked, setEndClicked] = useState(false);

  const addToQueue = (input) => {
    setQueue((prevQueue) => [...prevQueue, input]);
  };

  useEffect(() => {
    if (queue.length === 0 && endClicked) {
      alert('Success! Queue is empty.')
    }
  }, [queue])

  const handleEndClick = () => {
    setEndClicked(true);
    if (queue.length === 0) {
      alert('Success! Queue is empty.');
    } else {
      alert('Waiting for the queue to be empty...');
    }
  }

  const handleResetClick = () => {
    setQueue([]);
    setData([]);
  };

  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='w-full'>
        <Header />
      </div>
      <div className='grid grid-rows-2 md:grid-rows-1 w-screen h-screen md:grid-cols-2 bg-dark-4 text-light-1'>
        {/* left section */}
        <div className='w-full h-full flex flex-col gap-2'>
          <div className='flex flex-1 flex-col w-full h-full overflow-auto'>
            <div className='h-3/5 border-2 border-r-[1px] border-b-[1px] border-slate-400'>
              <Input addToQueue={addToQueue}/>
            </div>
            <div className='w-full h-full border-2 border-t-[1px] border-r-[1px] border-slate-400 overflow-auto'>
              <Display queue={queue}/>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className='w-full h-full flex flex-col flex-wrap border-2 border-l-[1px] border-slate-400'>
          <Fetch 
            queue={queue}
            data={data}
            setData={setData} 
            handleEndClick={handleEndClick} 
            handleResetClick={handleResetClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
