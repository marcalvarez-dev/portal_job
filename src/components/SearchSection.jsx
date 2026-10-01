import JobListings from './JobListings'
import Select from './Select'



function SearchSection() {
    return (
        <section className="results">
            <header className="jobs-hero">
                <h1>Encuentra tu próximo trabajo</h1>
                <p>
                    Explora miles de oportunidades en el sector tecnologico
                </p>
                <form id="serch-job" role="search">
                    <div className="search-box">
                        <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        <input id="searchbar" type="text" placeholder="Busca trabajos, empresas o habilidades" />
                    </div>
                    <div>
                        <Select id="filter-technology" options={["JavaScript", "Python", "Java", "React", "Node.js"]} />
                        <Select id="filter-location" options={["Remoto", "Barcelona", "Madrid"]} />
                    </div>
                </form>
            </header>

            {/* footer de section */}
            <JobListings />



        </section>
    )
}

export default SearchSection