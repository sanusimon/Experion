import React from 'react'
import Header from '../Components/Header/Header';
import FilterBox from '../Components/Product/FilterBox';
import ProductList from '../Components/Product/ProductList';
import ProductSort from '../Components/Product/ProductSort';
import Sidebar from '../Components/Sidebar/Sidebar';
import './style.scss'; 

function Dashboard() {
  return (
    <main className='wrapper'>
        <Sidebar />
        <div className='content_page'>
            <Header />
          <div className='main_content'>
            <FilterBox />
            <ProductSort /> 
            <ProductList />
            
          </div>
        </div>
    </main>
  )
}

export default Dashboard
