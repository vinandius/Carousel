"use client"

export default function Footer() {
    return(
        <footer className="bg-dark text-light py-4">
            <div className="container text-center" id="footer">
                <p className="mb-0">Follow us on social media:</p>
                <div className="d-flex justify-content-center mt-2">
                    <a href="#" className="text-light mx-2 sizing"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-light mx-2 sizing"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-light mx-2 sizing"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-light mx-2 sizing"><i className="bi bi-linkedin"></i></a>
                </div>
                <hr className="my-3" />
                <p className="mb-0">Contact us: <a href="mailto:info@porsche.com" className="text-light">info@porsche.com</a></p>
                <p className="mb-0">&copy; 2026 Porsche. All rights reserved.</p>
            </div>
        </footer>
    )
}