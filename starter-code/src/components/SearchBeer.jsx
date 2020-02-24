import React from 'react'

export default function SearchBeer({
    inputSearch,
    handleSearch
}) {
    return (
        <div>
            <form>
            <input
                className="searchbeer"
                type="text"
                placeholder="Search"
                value={inputSearch}
                onChange={handleSearch}
            />
            </form>
        </div>
    )
}
