// import ParentComponent from "./Parent";
import Role from "./role/Role";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PhasesBtns from "./phasesBtns/PhasesBtns";
// import PhasesBtns from "./phasesBtns/PhasesBtns";

// import Phases from "./phases/Phases";

function EduPhases() {
    const [selectedPhaseId, setSelectedPhaseId] = useState(null);

    useEffect(() => {
        AOS.init({duration:2000});
    }, []);
    return (
        <section className="eduPhases">
            <div>
                    <PhasesBtns  onButtonClick={(phaseId) => setSelectedPhaseId(phaseId)}/>
                <div data-aos="zoom-in">
                    <Role />
                </div>
            </div>
            {/* <PhasesBtns />
            <Phases /> */}
        </section >
    );
}
export default EduPhases;
