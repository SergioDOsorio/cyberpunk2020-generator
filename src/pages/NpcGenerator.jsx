import '../App.css';
import Logo from '../img/Logo.png';

export default function NpcGenerator() {
    return (
        <>
            <div className='main-container'>
                <div className='container-menu'>
                    <img src={Logo} alt="Javascript logo" className='logo' />
                    <div className='container-options'>
                        <h1>NPC Generator</h1>
                        <div className='config'>
                            <div >
                                <h2>Number of NPCs</h2>
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>
                            </div>
                            <div>
                                <h2>Threat level</h2>
                                <select name="" id="">
                                    <option value="">Inoffensive</option>
                                    <option value="">Regular</option>
                                    <option value="">Problematic</option>
                                    <option value="">Threatening</option>
                                </select>
                            </div>
                        </div>
                        <button>Generate</button>
                    </div>


                </div>
                <div className='container-result'>
                    <div>
                        Hola
                    </div>
                </div>
            </div>
        </ >
    )
}