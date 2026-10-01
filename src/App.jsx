import Header from './components/Header'
import Footer from './components/Footer'
import SearchSection from './components/SearchSection'
import Pagination from './components/Paginations'

function App() {

  const handlePageChange = (page) => {
    console.log("cambio a ", page)
  }
  return (
    <>
      <Header />
      <main>
        <SearchSection />
      </main>
      <Pagination currentPage={1} totalPage={10} onPageChange={handlePageChange} />
      <Footer />
    </>
  )
}

export default App
