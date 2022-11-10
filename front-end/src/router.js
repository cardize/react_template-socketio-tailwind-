import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import {
    Header,
    Footer,
} from './components'

const MainRouter = () => {

    return (
        <BrowserRouter>
            <Header />
            <div className=''>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default MainRouter