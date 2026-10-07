import { Link } from "../components/Link"

function Header() {
    return (
        <header>
            <h1>
                <Link style={{ textDecoration: 'none', color: 'white' }} href="/" target="_self" rel="noopener noreferrer">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    DevJobs
                </Link>
            </h1>
            <nav>
                <Link href="/" target="_self" rel="noopener noreferrer">Inicio</Link>
                <Link href="/search" target="_self" rel="noopener noreferrer">Empleos</Link>
                <Link href="#" target="_self" rel="noopener noreferrer">Empresas</Link>
                <Link href="#" target="_self" rel="noopener noreferrer">Salarios</Link>
            </nav>
            <div id="profile_img_container">
                <button>Subir CV</button>
            </div>

        </header>
    )
}

export default Header