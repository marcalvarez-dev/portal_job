import JobCard from './JobCard'
import data from '../data.json'

function JobListings() {
    return (
        <footer className="jobs-results">
            <h3>Resultados de busqueda</h3>
            {/* <JobCard data={{ modalidad: "remoto", nivel: "junior", tech: "Java" }} titulo="Desarrollador Java" empresa="Tech Corp" ubicacion="Madrid" descripcion="Buscamos un desarrollador Java con experiencia en Spring Framework." /> */}
            {data.map(job => {
                return <JobCard key={job.id} data={job.data} titulo={job.titulo} empresa={job.empresa} ubicacion={job.ubicacion} descripcion={job.descripcion} />
            })}
        </footer>
    )
}

export default JobListings