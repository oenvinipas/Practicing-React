import React from 'react'
import {
    SearchContainer,
    SearchWrapper,
    SearchH1,
    SearchInput,
    ArrowRight
} from './SearchElements'

const Search = () => {

  return (
    <SearchContainer>
        <SearchWrapper>
            <SearchH1>How can we help?</SearchH1>
            <SearchInput
                placeholder="Search"
                type="search"
            ></SearchInput>
            <ArrowRight />
        </SearchWrapper>
    </SearchContainer>
  )
}

export default Search