
import './main.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import SwitchComponents from './SwitchComponents';
import Lock from '../assets/lock.png'
import UnlockSound from '../assets/unlock.mp3'

const Decipher = () => {

    const [unlock] = useSound(UnlockSound)

    const history = useHistory();
    const [hint1, setHint1] = useState(false);
    const [hint2, setHint2] = useState(false);
    const [hint3, setHint3] = useState(false);
    const [hint4, setHint4] = useState(false);
    const [activeComponent, setActiveComponent] = useState("main");


    useEffect(() => {
        const timer1 = setTimeout(() => {
            setHint1(true);
            unlock();
        }, 10000);
        const timer2 = setTimeout(() => {
            setHint2(true);
            unlock();
        }, 20000);
        const timer3 = setTimeout(() => {
            setHint3(true);
            unlock();
        }, 30000);
        const timer4 = setTimeout(() => {
            setHint4(true);
            unlock();
        }, 40000);
    }, []);

    return (
        <div className='welcome'>
            <div style={{ height: "50vh", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <SwitchComponents active={activeComponent}>
                    <Hint4 name="hint4" />
                    <Hint3 name="hint3" />
                    <Hint2 name="hint2" />
                    <Hint1 name="hint1" />
                    <Main name="main" />
                </SwitchComponents>
            </div>
            <div style={{ display: "flex", flexDirection: "row", width: "80%" }} >
                <button onClick={() => {
                    if (hint1) {
                        setActiveComponent("hint1")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }
                }> <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        Hint 1
                        {!hint1 && <img style={{ height: "80px", width: "80px", transitionDuration: "0.5s" }} src={Lock} />}
                    </div>
                </button>
                <button onClick={() => {
                    if (hint2) {
                        setActiveComponent("hint2")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }
                }><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                Hint 2
                {!hint2 && <img style={{ height: "80px", width: "80px" }} src={Lock} />}
            </div></button>
                <button onClick={() => {
                    if (hint3) {
                        setActiveComponent("hint3")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }
                }><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                Hint 3
                {!hint3 && <img style={{ height: "80px", width: "80px" }} src={Lock} />}
            </div></button>
                <button onClick={() => {
                    if (hint4) {
                        setActiveComponent("hint4")
                    } else {
                        alert("This hint is not available yet. Keep trying to solve the puzzle!")
                    }
                }}><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                Hint 4
                {!hint4 && <img style={{ height: "80px", width: "80px" }} src={Lock} />}
            </div></button>
            </div>
        </div>
    );
}

const Main = () => {

    return (
        <>
            <p>You discover an alien script on the wall with English translations.</p>
            <p>There's also a message that has been left undeciphered. Maybe it is helpful?</p>
        </>
    );
}

const Hint1 = () => {

    return (
        <>
            <p>This alien language does not match English words one-to-one. </p>
            <p>Seek meaning over direct translation.</p>
        </>
    );
}

const Hint2 = () => {

    return (
        <>
            <p>The word order is subject, verb, object. Some particles are: </p>
            <p><text style={{ fontFamily: "toki-pona" }}>e</text> (object marker)</p>
            <p><text style={{ fontFamily: "toki-pona" }}>li</text> (verb marker)</p>
            <p><text style={{ fontFamily: "toki-pona" }}>lon</text> (in / at / on)</p>
            <p><text style={{ fontFamily: "toki-pona" }}>tawa</text> (to)</p>
        </>
    );
}

const Hint3 = () => {

    return (
        <>
            <p>Combine simple words to make compound words: </p>
            <p><text style={{ fontFamily: "toki-pona" }}>toki</text> + <text style={{ fontFamily: "toki-pona" }}>alasa</text> = talk + search = appeal </p>
            <p><text style={{ fontFamily: "toki-pona" }}>kon</text> + <text style={{ fontFamily: "toki-pona" }}>tawa</text> = air + move = wind </p>
            <p><text style={{ fontFamily: "toki-pona" }}>jo</text> + <text style={{ fontFamily: "toki-pona" }}>ale</text> = possession + all = worth </p>
        </>
    );
}

const Hint4 = () => {

    return (
        <>
            <p>More compound words: </p>
            <p><text style={{ fontFamily: "toki-pona" }}>selo</text> + <text style={{ fontFamily: "toki-pona" }}>tomo</text> = shell + room = wall</p>
            <p><text style={{ fontFamily: "toki-pona" }}>pana</text> + <text style={{ fontFamily: "toki-pona" }}>pona</text> = gift + good = help</p>
            <p><text style={{ fontFamily: "toki-pona" }}>sitelen</text> + <text style={{ fontFamily: "toki-pona" }}>tu</text> = symbol + two = two symbols</p>
        </>

    );
}

export default Decipher;