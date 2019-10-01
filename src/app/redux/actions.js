import {
  SEARCH,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  RESET_SEARCH
} from './types'

export const search = (query, language) => ({
  type: SEARCH,
  query,
  language
})

export const previousPage = page => ({
  type: PREVIOUS_PAGE,
  page
})

export const nextPage = page => ({
  type: NEXT_PAGE,
  page
})

export const resetSearch = () => ({
  type: RESET_SEARCH
})
