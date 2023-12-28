import { useRef, useState } from "react";

const Input = ({addToQueue}) => {
    const [input, setInput] = useState("");
    const formRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        if (input.trim() !== '') {
            addToQueue(input);
            setInput('');
        }
        formRef.current.reset();
    }

    const onChange = (event) => {
        setInput(event.target.value);
        console.log("input: ", input);
    }

    return (
        <div className="m-auto p-4 flex flex-col w-full h-full">
            <form onSubmit={onSubmit} ref={formRef}>
                <div className='mb-3'>
                    <input 
                        type="text" 
                        placeholder='Enter message...' className='w-full border rounded-md bg-transparent border-gray-400 p-2 h-[48px]'
                        onChange={onChange}     
                    />
                    <button 
                        className="mt-4 block bg-violet-800 text-white w-full py-2 px-8 rounded"
                        onClick={onSubmit}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Input;