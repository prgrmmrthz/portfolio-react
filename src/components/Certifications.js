import {useState} from 'react';
import CheckList from "./CheckList";

const Certifications = () => {
    const [certs, setCerts]= useState([
        "Certificate for developing the CPPO Official website from CPPO, 2015",
        "Certificate of Commendation as an IT Expert from Cagayan State University, 2014",
        "National Certificate II in Computer Hardware Servicing and Networking from TESDA Region 2, 2015",
        "Certificate as a Facilitator during a seminar from CSU, 2014",
        "Certificate of Appreciation for services rendered in BCECS from CPPO, 2015",
        "Cyber Summit Networking  from St. Paul University, 2014"
    ]);

    return (
        <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards & Certifications</h2>
                    <CheckList dataList={certs} icon="fas fa-file-alt" />
                </div>
            </section>
     );
}

export default Certifications;