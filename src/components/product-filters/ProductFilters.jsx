import { useState } from "react"
import { FilterButton } from "../filter-button/FilterButton";
import styled from "styled-components";

const ProductFilters = ({ selectedFilter, setSelectedFilter }) => {
    return (
        <ButtonContainer>
            <FilterButton
                selected={selectedFilter === "all"}
                onClick={() => setSelectedFilter("all")}>
                All Products
            </FilterButton>
            <FilterButton
                selected={selectedFilter === "available"}
                onClick={() => setSelectedFilter("available")}>
                Available Now
            </FilterButton>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    font-size: .875rem;
    text-align: center;
`

export { ProductFilters };