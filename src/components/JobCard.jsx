import { useState } from 'react'

function JobCard({ job }) {
    const [isApplied, setIsApplied] = useState(false)

    const handleApplyChange = () => {
        setIsApplied(true)
    }

    const buttonClasses = isApplied ? "button-apply applied" : "button-apply"
    const buttonText = isApplied ? "Aplicado" : "Aplicar"
    return (
        <article
            className="job-article"
            data-modalidad={job?.modalidad}
            data-nivel={job?.nivel}
            data-tech={job?.technology} >

            <div>
                <h2>{job.titulo}</h2>
                <h5>{job.empresa} | {job.ubicacion}</h5>
                <p>{job.descripcion}</p>
            </div>
            <div>
                <button className={buttonClasses}
                    onClick={handleApplyChange}
                    id="important-button">
                    {buttonText}
                </button>
            </div>
        </article >
    )
}

export default JobCard