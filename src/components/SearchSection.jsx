import JobListings from './JobListings'
import Select from './Select'
import { useId } from 'react'

function SearchSection({ jobs, onSearch }) {

    const idInput = useId()
    const idTechnology = useId()
    const idLocation = useId()
    const idExperience = useId()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const filters = {
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experience: formData.get(idExperience)
        }

        const text = formData.get(idInput)

        onSearch(filters, text)
    }



    return (
        <section className="results">
            <header className="jobs-hero">
                <h1>Encuentra tu próximo trabajo</h1>
                <p>
                    Explora miles de oportunidades en el sector tecnologico
                </p>
                <form onSubmit={handleSubmit} id="serch-job" role="search">
                    <div className="search-box">
                        <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        <input id="searchbar" name={idInput} type="text" placeholder="Busca trabajos, empresas o habilidades" />
                        <button type="submit">Buscar</button>
                    </div>
                    <div>
                        <Select id="filter-technology" name={idTechnology} options={[
                            { value: "", label: "Tecnología" },
                            { value: "js", label: "JavaScript" },
                            { value: "python", label: "Python" },
                            { value: "java", label: "Java" },
                            { value: "react", label: "React" },
                            { value: "node", label: "Node.js" }
                        ]} />
                        <Select id="filter-location" name={idLocation} options={[
                            { value: "", label: "Ubicación" },
                            { value: "remoto", label: "Remoto" },
                            { value: "barcelona", label: "Barcelona" },
                            { value: "madrid", label: "Madrid" }
                        ]} />
                        <Select id="filter-experience" name={idExperience} options={[
                            { value: "", label: "Experiencia" },
                            { value: "junior", label: "Junior" },
                            { value: "semi-senior", label: "Semi Senior" },
                            { value: "senior", label: "Senior" }
                        ]} />

                    </div>
                </form>
            </header>

            {/* footer de section */}
            <JobListings jobs={jobs} />



        </section>
    )
}

export default SearchSection