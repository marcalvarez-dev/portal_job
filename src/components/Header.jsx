function Header() {
    return (
        <header>
            <h1>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                DevJobs
            </h1>
            <nav>
                <a href="index.html" target="_self" rel="noopener noreferrer">Inicio</a>
                <a href="#" target="_self" rel="noopener noreferrer">Empleos</a>
                <a href="#" target="_self" rel="noopener noreferrer">Empresas</a>
                <a href="#" target="_self" rel="noopener noreferrer">Salarios</a>
            </nav>
            <div id="profile_img_container">
                <button>Subir CV</button>
            </div>

        </header>
    )
}

export default Header