import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Company } from '../types/types'
import CompanyCard from './CompanyCard'
import { useApiRequest } from '../hooks/api.hooks';
import { setSelectedDetailItem, setSuccess } from '../state/actions';
import { useAppContext } from '../hooks/app.hooks';
import { useParams } from 'react-router-dom';
import AddCompany from './AddCompany';
import ROUTES from '../router/routes'

interface CompanyListProps {
  companies: Company[]
}

function CompanyDetail() {
  const { state: { companies, selectedDetailItem: company }, dispatch } = useAppContext()
  console.log('IN COMPNAY DEATAIL', company)
  const params: { id?: string } = useParams()
  const [edit, setEdit] = useState(false)
  const getCompany = useApiRequest({ endpoint: `/companies/${params.id!}`, successAction: setSelectedDetailItem })
  const deleteCompany = useApiRequest({ method: "DELETE", endpoint: `/companies/${params.id!}`, successAction: setSuccess, successRedirect: ROUTES.companies })

  useEffect(() => {
    const companyFromState = companies.find((c: Company) => (c.id.toString() == params.id))
    if (companyFromState) {
      dispatch(setSelectedDetailItem(companyFromState))
    } else {
      getCompany()
    }
  }, [])


  if (!company || !company.name) {
    return <div> LOADING </div>
  }

  const shouldFormOpen = (isOpen: boolean) => () => {
    setEdit(isOpen)
  }

  const handleDelete = () => {
    const confirm: boolean = window.confirm("are you sure you want to delete his company?")
    if(confirm) {
      deleteCompany()
    }
  }

  return (
    <>
      <button
        onClick={shouldFormOpen(true)}
        className="text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block mb-10 sm:w-3/12 w-2/12">
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block mb-10 sm:w-3/12 w-2/12">
        Delete
      </button>
      <CompanyCard company={company} />
      {edit && (

        <div className="mt-5">
          <AddCompany editing company={company} closeAction={shouldFormOpen(false)} />
        </div>

      )}
    </>
  )

}

export default CompanyDetail