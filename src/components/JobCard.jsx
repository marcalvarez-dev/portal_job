function JobCard({ data, titulo, empresa, ubicacion, descripcion }) {
    return (
        <article
            className="job-article"
            data-modalidad={data?.modalidad}
            data-nivel={data?.nivel}
            data-tech={data?.technology} >

            <div>
                <h2>{titulo}</h2>
                <h5>{empresa} | {ubicacion}</h5>
                <p>{descripcion}</p>
            </div>
            <div>
                <button className="button-apply" id="important-button"> Aplicar </button>
            </div>
        </article >
    )
}

export default JobCard