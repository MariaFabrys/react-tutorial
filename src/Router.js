import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Contact from './pages/contact'
import Users from './pages/Users'


const Router = () => {
    return( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default Router