import "@/App.css";

export function Footer(className=""){
    return(
        <footer className={`{footer-copy ${className}}`}>
            <div className="container-fluid">
                <div className="grid grid-cols-1">
                <div className="md:col-span-1">
                    <p>2025 Banco de La U</p>
                </div>
                </div>
            </div>
        </footer>
    );
}