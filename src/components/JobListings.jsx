import JobCard from './JobCard'

function JobListings({ jobs }) {
    return (
        <footer className="jobs-results">
            <h3>Resultados de busqueda</h3>
            {/* <JobCard data={{ modalidad: "remoto", nivel: "junior", tech: "Java" }} titulo="Desarrollador Java" empresa="Tech Corp" ubicacion="Madrid" descripcion="Buscamos un desarrollador Java con experiencia en Spring Framework." /> */}
            {jobs.map(job => {
                return <JobCard key={job.id} job={job} />
            })}
        </footer>
    )
}

export default JobListings