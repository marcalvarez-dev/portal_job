import Header from './components/Header'
import Footer from './components/Footer'
import SearchSection from './components/SearchSection'
import Pagination from './components/Paginations'
import { useState } from 'react'
import jobsData from './data.json'

const RESULTS_PER_PAGE = 5


function App() {
  const [textToFilter, setTextToFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE)

  const pagedResults = jobsData.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = () => {

  }

  const handleTextFilter = () => {
    setTextToFilter(textToFilter)
    setCurrentPage(1)
  }
  return (
    <>
      <Header />
      <main>
        <SearchSection onTextFilter={handleTextFilter} onSearch={handleSearch} jobs={pagedResults} />
      </main>
      <Pagination currentPage={currentPage} totalPage={totalPages} onPageChange={handlePageChange} />
      <Footer />
    </>
  )
}

export default App
