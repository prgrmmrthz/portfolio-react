import {useState} from 'react';
import CheckList from "./CheckList";

const Certifications = () => {
    const [certs, setCerts]= useState([
        "Certificate of Development of Cagayan Provincial Office Official Website",
        "Certificate of IT Expert"
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