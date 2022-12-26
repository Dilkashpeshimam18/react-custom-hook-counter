import { useState, useEffect } from "react";

const useCounter = (type) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (type == 'forward') {
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);

            return () => clearInterval(interval);
        }

    }, []);

    return counter;

}

export default useCounter