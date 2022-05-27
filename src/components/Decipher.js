
import './main.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import SwitchComponents from './SwitchComponents';
import Lock from '../assets/lock.png'
import UnlockSound from '../assets/unlock.mp3'
import WinSound from '../assets/win.mp3'
import FillSound from '../assets/fill.mp3'

const Decipher = () => {

    const [unlock] = useSound(UnlockSound, {interrupt: true})
    const [win] = useSound(WinSound, { interrupt: true })
    const [fill] = useSound(FillSound, {interrupt: true})

    const history = useHistory();
    const [hint, setHint] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const [input, setInput] = useState({
        appeal: "",
        help: "",
        foremost: "",
        bring: "",
        two: "",
        symbols: "",
        hole: "",
        wall: "",
        then: "",
        light: "",
    })

    const [disabled, setDisabled] = useState({
        appeal: false,
        help: false,
        foremost: false,
        bring: false,
        two: false,
        symbols: false,
        hole: false,
        wall: false,
        then: false,
        light: false,
    })

    const handleChange = (event) => {

        const value = event.target.value.toLowerCase().trim()
        setInput({
            ...input,
            [event.target.name]: value
        })

        if (event.target.name == "appeal") {
            if (value == "appeal") {
                setDisabled({ ...disabled, appeal: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, appeal: value }
                    })
                } else {
                    fill()
                }
            }
        }

        if (event.target.name == "help") {
            if (value == "help") {
                setDisabled({ ...disabled, help: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, help: value }
                    })
                } else {
                    fill()
                }
            }
        }

        if (event.target.name == "foremost") {
            if (value == "foremost" || value == "first") {
                setDisabled({ ...disabled, foremost: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, foremost: value }
                    })
                } else {
                    fill()
                }
            }
        }

        if (event.target.name == "bring") {
            if (value == "bring" || value == "give") {
                setDisabled({ ...disabled, bring: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, bring: value }
                    })
                } else {
                    fill()
                }
            }
        }

        if (event.target.name == "two") {
            if (value == "two" || value == "2") {
                setDisabled({ ...disabled, two: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, two: value }
                    })
                } else {
                    fill()
                }
            }
        }

        if (event.target.name == "symbols") {
            if (value == "symbols") {
                setDisabled({ ...disabled, symbols: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, symbols: value }
                    })
                } else {
                    fill()
                }
            }
        }

        if (event.target.name == "hole") {
            if (value == "hole") {
                setDisabled({ ...disabled, hole: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, hole: value }
                    })
                } else {
                    fill()
                }
            }
        }


        if (event.target.name == "wall") {
            if (value == "wall") {
                setDisabled({ ...disabled, wall: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, wall: value }
                    })
                } else {
                    fill()
                }
            }
        }


        if (event.target.name == "then") {
            if (value == "then") {
                setDisabled({ ...disabled, then: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, then: value }
                    })
                } else {
                    fill()
                }
                
            }
        }

        if (event.target.name == "light") {
            if (value == "light" || value == "rays" || value == "ray" || value == "shine" || value == "beam") {
                setDisabled({ ...disabled, light: true})
                const arr = Object.values(disabled).filter(x => !x)
                if (arr.length == 1){
                    win();
                    history.push({
                        pathname: "/inner/second",
                        state: {...input, light: value }
                    })
                } else {
                    fill()
                }
            }
            
        }
    }

    const [activeComponent, setActiveComponent] = useState("main");

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
        <div className='welcome' style={{
            justifyContent: "space-around"
         }}>
            <div style={{ flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <SwitchComponents active={activeComponent}>
                    <Hint4 name="hint4" />
                    <Hint3 name="hint3" />
                    <Hint2 name="hint2" />
                    <Hint1 name="hint1" />
                    <Main name="main" />
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
            <div style={{ flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p><input type="text" name="appeal" value={input.appeal} onChange={handleChange} disabled={disabled.appeal} autocomplete="off"/> for <input autocomplete="off" type="text" name="help" value={input.help} onChange={handleChange} disabled={disabled.help}/> through this:</p>
                    
                    <p><input autocomplete="off" name="foremost" value={input.foremost} onChange={handleChange} disabled={disabled.foremost} type="text"/>, <input autocomplete="off" type="text" name="bring" value={input.bring} onChange={handleChange} disabled={disabled.bring}/> <input autocomplete="off" type="text" name="two" value={input.two} onChange={handleChange} disabled={disabled.two}/> <input autocomplete="off" type="text" name="symbols" value={input.symbols} onChange={handleChange} disabled={disabled.symbols}/> to the <input autocomplete="off" type="text" name="hole" value={input.hole} onChange={handleChange} disabled={disabled.hole}/> in the <input autocomplete="off" type="text" name="wall" value={input.wall} onChange={handleChange} disabled={disabled.wall}/>.</p>
                
                    <p><input autocomplete="off" type="text" name="then" value={input.then} onChange={handleChange} disabled={disabled.then}/>, <input autocomplete="off" type="text" name="bring" value={input.bring} onChange={handleChange} disabled={disabled.bring}/> the <input autocomplete="off" type="text" name="light" value={input.light} onChange={handleChange} disabled={disabled.light}/> to it.</p>
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
            <div style={{ display: "flex", flexDirection: "horizontal", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "30px"}}>
            <p style={{ textAlign: "left" }}>The word order is subject, verb, object. </p>
            <p> Some particles are: </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <p><text style={{ fontFamily: "toki-pona", textAlign: "left" }}>e</text> (object marker)</p>
                <p><text style={{ fontFamily: "toki-pona" }}>li</text> (verb marker)</p>
                <p><text style={{ fontFamily: "toki-pona" }}>lon</text> (in / at / on)</p>
                <p><text style={{ fontFamily: "toki-pona" }}>tawa</text> (to)</p>
            </div>

            </div>
            
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