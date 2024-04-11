import '../App.css';
import Logo from '../img/Logo.png';
import Npc from '../components/Npc';

export default function NpcGenerator() {
    return (
        <>
            <div className='main-container'>
                <div className='container-menu'>
                    <img src={Logo} alt="Javascript logo" className='logo' />
                    <div className='container-options'>
                        <h1>NPC GENERATOR</h1>
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
                                    <option value="">Any</option>
                                    <option value="">Inoffensive</option>
                                    <option value="">Regular</option>
                                    <option value="">Problematic</option>
                                    <option value="">Threatening</option>
                                </select>
                            </div>
                            <div>
                                <h2>Role</h2>
                                <select name="" id="">
                                    <option value="">Any</option>
                                    <option value="">Rocker</option>
                                    <option value="">Mercenary</option>
                                    <option value="">Netrunner</option>
                                    <option value="">Technician</option>
                                    <option value="">Journalis</option>
                                    <option value="">Cop</option>
                                    <option value="">Executive</option>
                                    <option value="">Fixer</option>
                                    <option value="">Nomad</option>
                                </select>
                            </div>
                        </div>
                        <button>Generate</button>
                    </div>
                </div>
                <hr />
                <div className='container-result'>
                    <Npc></Npc>
                    <Npc></Npc>
                    

                    
                </div>
            </div>
        </ >
    )
}