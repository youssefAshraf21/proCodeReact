import React, {useState, useEffect} from 'react';
import bg from "./assets/background.jpeg";
function DigitalClock() {
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
        });

function formatTime(date: Date): string {
    let hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const seconds: number = date.getSeconds();

    const period: "AM" | "PM" = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${period}`;
}

function padZero(num: number): string {
    return num < 10 ? "0" + num : num.toString();
}

return (
    <div
    className="h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${bg})` }}
    >
    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl px-12 py-6 rounded-3xl">
        <span className="text-7xl md:text-8xl text-white font-bold font-mono tracking-widest">
            {formatTime(time)}
        </span>
    </div>
    </div>
    );
}

export default DigitalClock