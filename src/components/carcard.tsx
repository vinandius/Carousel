"use client"

export default function CarCard() {
    return (
        <div style={{ backgroundColor: "#FBFAF5" , paddingBottom: "35px" , paddingTop: "20px"}} id="car-card">
            <h2 className="mb-4" style={{ color: "black" , marginLeft: "90px" }}>Produk Lain Dari Porsche</h2>
            <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-6 col-lg-2">
                    <div className="card" style={{width:180}}>
                        <img className="card-img" src="./images/Taycan.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Taycan</h5>
                            <p className="card-text">Mobil sedan listrik sebagai kendaraan sehari-hari yang halus khas listrik.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-2">
                    <div className="card" style={{width:180}}>
                        <img className="card-img" src="./images/Cayman.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">718 Cayman</h5>
                            <p className="card-text">Mobil sport kecil untuk harian dengan mesin khas Porsche.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-2">
                    <div className="card" style={{width:180}}>
                        <img className="card-img" src="./images/Panamera.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Panamera</h5>
                            <p className="card-text">Sedan nyaman untuk kendaraan keseharian dan lebih lega.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-2">
                    <div className="card" style={{width:180}}>
                        <img className="card-img" src="./images/Macan.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Macan</h5>
                            <p className="card-text">SUV compact untuk keseharian dengan kepraktisan.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}