"use client"

export default function AboutSection() {
    return (
        <section className="about-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="mb-4" style={{ color: "black" }}>Tentang Kami</h2>
                        <p style={{ color: "black" , textAlign: "left" }}>
                            Kami adalah perusahaan di bidang otomotif yang berfokus pada performa mesin dengan design timeless. Uji keberanianmu dengan mesin terkencang dalam mobil sport kami untuk pengalaman yang tak akan terlupakan. 
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="./images/porsche.png" alt="About Us" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>
    )
}