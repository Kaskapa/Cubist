import { useEffect, useRef, useState } from "react";
import "../styles/stopwatch.css";

function StopWatch() {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [spaceUp, setSpaceUp] = useState<number>(0);
    const [timeoutBeforeStart, setTimeoutBeforeStart] = useState<number>(0);
    const [color, setColor] = useState<string>("black");

    const intervalId = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number>(0);
    const desiredTime = 1;

    useEffect(() => {
        if (isRunning) {
            intervalId.current = window.setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            }, 0);
        } else {
            if (intervalId.current !== undefined) {
                clearInterval(intervalId.current);
            }
        }

        return () => {
            if (intervalId.current !== undefined) {
                clearInterval(intervalId.current);
            }
        };
    }, [isRunning]);

    useEffect(() => {
        const timeEventHandler = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                setTimeout(() => {
                    console.log(timeoutBeforeStart, desiredTime, spaceUp);
                    if (timeoutBeforeStart < desiredTime && spaceUp === 0) {
                        setColor("orange");
                    }
                    if (timeoutBeforeStart === desiredTime) {
                        document.addEventListener("keyup", startHandler);
                        document.removeEventListener("keydown", timeEventHandler);
                    }
                    setTimeoutBeforeStart((prev) => prev + 1);
                }, 0);
            }
        };

        const keyDownHandler = (e: KeyboardEvent) => {
            if (e.code === "Space" && spaceUp === 0 && timeoutBeforeStart >= desiredTime && color !== "red") {
                setColor("green");
            }
        };

        const keyUpHandler = () => {
            setTimeoutBeforeStart(0);
            setColor("black");
        };

        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);
        document.addEventListener("keydown", timeEventHandler);

        const startHandler = (event: KeyboardEvent) => {
            if (event.code === "Space" && spaceUp < 1) {
                startTimer();
                setSpaceUp(1);
                document.addEventListener("keydown", stopHandler);
                document.removeEventListener("keyup", startHandler);
            } else if (spaceUp === 1) {
                setSpaceUp(0);
                document.addEventListener("keydown", timeEventHandler);
                document.removeEventListener("keyup", startHandler);
            }
            setColor("black");
        };
    
        const stopHandler = () => {
            if (!isRunning) {
                stopTimer();
                setColor("red");
                setSpaceUp(0);
                document.removeEventListener("keydown", keyDownHandler);
                document.removeEventListener("keyup", keyUpHandler);
                document.removeEventListener("keydown", timeEventHandler);
                document.removeEventListener("keydown", startHandler);
                document.removeEventListener("keydown", stopHandler);
            }
        };

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
            document.removeEventListener("keyup", keyUpHandler);
            document.removeEventListener("keydown", timeEventHandler);
            document.removeEventListener("keydown", startHandler);
            document.removeEventListener("keydown", stopHandler);
        }; 
    }, [spaceUp, timeoutBeforeStart]);

    

    const startTimer = () => {
        startTimeRef.current = Date.now();
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const formatTime = () => {
        let timeMS = time % 1000;
        let seconds = Math.floor(time / 1000) % 60;
        let mins = Math.floor(time / 1000 / 60) % 60;

        let timeMSString = String(timeMS).padStart(3, '0');
        let secondsString = String(seconds).padStart(2, '0');
        let minsString = mins > 0 ? `${String(mins).padStart(2, '0')}:` : '';

        return `${minsString}${secondsString}:${timeMSString}`;
    };

    return (
        <>
            <h1 className={color}>{formatTime()}</h1>
        </>
    );
}

export default StopWatch;
