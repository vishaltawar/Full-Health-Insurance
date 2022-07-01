import React from 'react'
import AdminPage from './AdminPage';
import Footer from './Footer';
import Header from './Header';

function Administrator() {
    return (
        <div className='container-fluid'>
            <Header />
            <AdminPage />
            <Footer />
            
        </div>
    )
}
export default Administrator;