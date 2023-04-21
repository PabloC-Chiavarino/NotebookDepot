
import { Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer, ItemListContainer } from '../components';
import { Cart, NotFound404  } from '../pages'

const Router = () => {
    return (
        <Routes>
            <Route path='/home' element={<ItemListContainer />} />
            <Route path='/categories/:categoryId' element={<ItemListContainer />} />
            <Route path='/product/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/404' element={<NotFound404 />} />
            
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='*' element={<Navigate to={'/404'} />} />

        </Routes>
    )
}


export default Router;