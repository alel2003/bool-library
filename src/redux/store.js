import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'
import FilterREducer from './slices/FilterSlice'

const store = configureStore({
    reducer: {
        books:booksReducer,
        filter:FilterREducer
    }
})


export default store 