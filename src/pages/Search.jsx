import { useEffect, useState } from 'react'

import SearchSection from '../components/SearchSection'
import Pagination from '../components/Paginations'
import jobsData from '../data.json'

const RESULTS_PER_PAGE = 5


export function SearchPage() {
    const [filters, setFilters] = useState({
        technology: "",
        location: "",
        experience: ""
    })

    const [textToFilter, setTextToFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const jobsFilteredByFilters = jobsData.filter(job => {
        return (
            (filters.technology === "" || job.data.technology === filters.technology) &&
            (filters.location === "" || job.data.modalidad === filters.location) &&
            (filters.experience === "" || job.data.nivel === filters.experience)
        )
    })

    const jobsWithTextFilter = textToFilter === ""
        ? jobsFilteredByFilters
        : jobsFilteredByFilters.filter(job => {
            return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
        })

    const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)


    const pagedResults = jobsWithTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleSearch = (filters, text) => {
        setFilters(filters)
        setCurrentPage(1)

    }

    const handleTextFilter = (newTextToFilter) => {
        setTextToFilter(newTextToFilter)
        setCurrentPage(1)
    }

    useEffect(() => {
        console.log("effect -> currentPage changed, currentPage:", currentPage)
    }, [currentPage])


    return (
        <main>
            <SearchSection onSearch={handleSearch} onTextFilter={handleTextFilter} jobs={pagedResults} />
            <Pagination currentPage={currentPage} totalPage={totalPages} onPageChange={handlePageChange} />
        </main>
    )
}