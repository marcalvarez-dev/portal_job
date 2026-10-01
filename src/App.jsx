import { useState } from 'react'
import data from './data.json'
import Header from './components/Header'
import JobCard from './components/JobCard'
import Footer from './components/Footer'
import Select from './components/Select'

console.log(data)



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <main>
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
                {/* <select id="filter-technology" name="select">
                  <option value="value1">Tecnología</option>
                  <option value="js">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="react">React</option>
                  <option value="node">Node.js</option>
                </select>
                <select id="filter-location" name="select">
                  <option value="value1">Ubicación</option>
                  <option value="remote">Remoto</option>
                  <option value="barcelona">Barcelona</option>
                  <option value="madrid">Madird</option>
                </select> */}


                <Select id="filter-technology" options={["JavaScript", "Python", "Java", "React", "Node.js"]} />
                <Select id="filter-location" options={["Remoto", "Barcelona", "Madrid"]} />

              </div>
            </form>
          </header>
          <footer className="jobs-results">
            <h3>Resultados de busqueda</h3>
            {/* <JobCard data={{ modalidad: "remoto", nivel: "junior", tech: "Java" }} titulo="Desarrollador Java" empresa="Tech Corp" ubicacion="Madrid" descripcion="Buscamos un desarrollador Java con experiencia en Spring Framework." /> */}
            {data.map(job => {
              return <JobCard key={job.id} data={job.data} titulo={job.titulo} empresa={job.empresa} ubicacion={job.ubicacion} descripcion={job.descripcion} />
            })}
          </footer>
        </section>

      </main>

      <Footer />

    </>
  )
}

export default App
