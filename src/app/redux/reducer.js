import { Reducer } from "./store"
import {
  SEARCH,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  RESET_SEARCH
} from "./types"

class SearchReducer {
  initialState = {
    query: '',
    language: '',
    page: null
  }

  reducer = (state = this.initialState, action) => {
    switch (action.type) {
      case SEARCH:
        return {
          ...state,
          query: action.query,
          language: action.language,
          page: null
        }
      case PREVIOUS_PAGE:
        return { ...state, page: `before: "${action.page}"` }
      case NEXT_PAGE:
        return { ...state, page: `after: "${action.page}"` }
      case RESET_SEARCH:
        return this.initialState
      default:
        return state
    }
  }

  getQuery = ({ search }) => search.query

  getLanguage = ({ search }) => search.language

  getPage = ({ search }) => search.page
}

const AddedReducer = Reducer(SearchReducer)

export const { getQuery, getLanguage, getPage } = new AddedReducer()
