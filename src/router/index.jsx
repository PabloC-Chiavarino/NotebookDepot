
import { Routes, Route, Navigate } from 'react-router-dom';
import { Cart, NotFound404, Default, Detail } from '../pages'

const Router = () => {
    return (
        <Routes>
            <Route path='/home' element={<Default />} />
            <Route path='/categories/:categoryId' element={<Default />} />
            <Route path='/categories/:categoryId/product/detail/:productId' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/404' element={<NotFound404 />} />
            
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='*' element={<Navigate to={'/404'} />} />
        </Routes>
    )
}


export default Router;