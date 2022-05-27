import './main.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SwitchComponents from './SwitchComponents';
import Lock from '../assets/lock.png'
import UnlockSound from '../assets/unlock.mp3'
import useSound from 'use-sound';

const Symbols = () => {


    const [activeComponent, setActiveComponent] = useState("");
    const location = useLocation();
    const input = location.state;
    const [hint, setHint] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });
    const [unlock] = useSound(UnlockSound, {interrupt: true})

    useEffect(() => {

        const timer1 = setTimeout(() => {
            setHint({1: true})
            unlock()
            console.log("timer 1 done")
        }, 180000) // 180000 = 3 minutes

        const timer2 = setTimeout(() => {
            setHint({1: true, 2: true})
            unlock()
            console.log("timer 2 done")
        }, 480000); // 480000 = 8 minutes
    
        const timer3 = setTimeout(() => {
            setHint({1: true, 2: true, 3: true})
            unlock()
            console.log("timer 3 done")
        }, 780000); // 780000 = 13 minutes
    
        const timer4 = setTimeout(() => {
            setHint({1: true, 2: true, 3: true, 4: true})
            unlock();
            console.log("timer 4 done")
        }, 960000); // 960000 = 16 minutes

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
            clearTimeout(timer4)
          }

    }, [unlock])


    return (
        <div className='welcome' style={{ justifyContent: 'space-around'}}>
            <div >
                <p>Appeal for help through this:</p>
                <p>{input.foremost}, {input.bring} {input.two} symbols to the hole in the wall.</p>
                <p>{input.then}, {input.bring} the {input.light} to it.</p>
            </div>
            <div style={{ flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <SwitchComponents active={activeComponent}>
                    <Hint4 name="hint4" />
                    <Hint3 name="hint3" />
                    <Hint2 name="hint2" />
                    <Hint1 name="hint1" />
                </SwitchComponents>
            </div>
            <div style={{ display: "flex", flexDirection: "row", width: "80%"}} >
                <button onClick={() => {
                    if (hint[1]) {
                        setActiveComponent("hint1")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }
                }> <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        Hint 1
                        {!hint[1] && <img style={{ height: "80px", width: "80px", transitionDuration: "0.5s" }} src={Lock} />}
                    </div>
                </button>
                <button onClick={() => {
                    if (hint[2]) {
                        setActiveComponent("hint2")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }
                }><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        Hint 2
                        {!hint[2] && <img style={{ height: "80px", width: "80px" }} src={Lock} />}
                    </div></button>
                <button onClick={() => {
                    if (hint[3]) {
                        setActiveComponent("hint3")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }
                }><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        Hint 3
                        {!hint[3] && <img style={{ height: "80px", width: "80px" }} src={Lock} />}
                    </div></button>
                <button onClick={() => {
                    if (hint[4]) {
                        setActiveComponent("hint4")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }}><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        Hint 4
                        {!hint[4] && <img style={{ height: "80px", width: "80px" }} src={Lock} />}
                    </div></button>
            </div>



        </div>


    );
}

const Hint1 = () => {

    return (
            <p>The wall panels and paper patterns reveal which disks to use.</p>
        
    );
}

const Hint2 = () => {

    return (
        <p>Imagine covering the panels with the patterns.</p>
    );
}

const Hint3 = () => {

    return (
        <p>Note the folds on the papers.</p>
    );
}

const Hint4 = () => {

    return (
        <p>The ordering of the papers depends on the number of partitions the folds make.</p>

    );
}

export default Symbols;