import Characteristic from "../subcomponents/Characteristic";
import TextField from "../subcomponents/TextField";

export default function Npc() {
    return (
        <div className='container-npc'>
            <div className="section-name">
                <div className="label-name">Name</div>
                <div id="name">Lorem ipsum dolor</div>
            </div>
            <div className="section-char">
                <div className="label-char">Characteristics</div>
                <div>
                    <Characteristic item="INT" />
                    <Characteristic item="REF" />
                    <Characteristic item="TEC" />
                    <Characteristic item="COL" />
                    <Characteristic item="ATR" />
                    <Characteristic item="LUC" />
                    <Characteristic item="MOV" />
                    <Characteristic item="BODY" />
                    <Characteristic item="EMP" />
                    <Characteristic item="Run" />
                    <Characteristic item="Jump" />
                    <Characteristic item="Lift" />
                </div>
            </div>
            <div className="section-armor">
                <div className="label-armor">
                    <div>Localization</div>
                    <div>Body armor</div>
                </div>
                <div className="armor">
                    <div className="label-body">
                        <div>Head</div>
                        <div>Torso</div>
                        <div>L.hand</div>
                        <div>R.hand</div>
                        <div>L. leg</div>
                        <div>R. leg</div>
                    </div>
                    <div className="value">
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                    </div>
                </div>
            </div>
            <div className="section-health">
                <div className="salvation">
                    <div className="white-label">Save</div>
                    <div className="value">1</div>
                </div>
                <div className="BTM">
                    <div className="white-label">BTM</div>
                    <div className="value">1</div>
                </div>
                <div className="health">
                    <div className="white-label">Health</div>
                    <div className="value">1</div>
                </div>
                <div className="plot-hook">
                    <div className="white-label">Plot hook</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
            <div className="text-field">
                <div className="section-cybernetic-equipment">
                    <TextField title={"Cybernetic equipment"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />

                </div>
                <div className="section-special-capacity">
                    <TextField title={"Special capacity"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                </div>
                <div className="section-skills">
                    <TextField title={"Skills"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                </div>
                <div className="section-items">
                    <TextField title={"Items"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                </div>
            </div>
        </div>
    )
}