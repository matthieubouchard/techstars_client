import React from 'react'
import styled from 'styled-components'
import { map } from 'lodash'
import moment from 'moment'

import { Company, Founder } from '../types/types'


const CardContainer = styled.div.attrs({
  className: 'shadow-md px-8 border border-teal-400 bg-white rounded-b rounded-r p-4 flex flex-col justify-between leading-normal transition duration-500 ease-in-out bg-blue-300 hover:bg-purple-500 transform hover:-translate-y-1 hover:scale-103'
})``

interface CompanyCardProps {
  company: Company
}

function CompanyCard({ company }: CompanyCardProps) {
  return (
    <CardContainer>
      <div className="text-gray-900 font-bold text-xl mb-2 bg-teal-300 text-right pr-5">{company.name}</div>
      <p className="text-gray-700 text-right text-base">{company.city}, {company.state}</p>
      <div className="mb-8">
        <p className="text-gray-700 text-base">{company.description}</p>
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="text-gray-600">Founded: {moment(company.dateFounded).format('MMMM DD, YYYY')}</p>
        </div>
        <div>
        </div>
      </div>
      <h3 className="text-lg mt-2" >Founders</h3>
      <ul>
        {map(company.founders, (founder: Founder) => (
          <li id={founder.id}>{founder.firstName} {founder.lastName} Title: {founder.title}</li>
        ))}
      </ul>
    </CardContainer>
  )

}

export default CompanyCard