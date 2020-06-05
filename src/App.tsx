import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

import Header from './Header'
import CompanyCard from './CompanyCard'

const apitest = async () => {
  const res = await axios.get('http://localhost:4000/founders')
  console.log('res!', res)
}

const Layout = styled.div.attrs({ className: "flex w-full justify-center py-10 bg-gray-100" })`
  padding-left: 5rem;
  padding-right: 5rem;
  height: 100vh;
  padding-top: 8rem;
`

function App() {
  apitest()
  return (
    <>
      <Header />
      <Layout>
        <div className="w-8/12 h-">
          <CompanyCard />
        </div>
      </Layout>
    </>
  );
}

export default App;
