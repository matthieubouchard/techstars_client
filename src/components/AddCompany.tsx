import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-date-picker'

import { useApiRequest } from '../hooks/api.hooks'
import { setSuccess, setSelectedDetailItem } from '../state/actions'
import ROUTES from '../router/routes'
import { Company } from '../types/types'

interface AddCompanyProps {
  editing?: boolean
  company?: Company
  closeAction?: any
}
function AddCompany({ editing = false, company, closeAction }: AddCompanyProps) {
  const { register, handleSubmit, errors, setValue } = useForm()
  const [formData, setFormData] = useState({})
  const [submit, setSubmit] = useState(false)
  const [date, setDate] = useState(new Date(Date.now()))
  console.log('EDINGT?', editing)

  const createCompany = useApiRequest(
    {
      method: editing ? "PUT" : "POST",
      endpoint: editing && !!company ? '/companies/' + company!.id : '/companies',
      successAction: editing ? setSelectedDetailItem : setSuccess,
      data: formData,
      successRedirect: editing ? undefined : ROUTES.companies,
    })

  const onSubmit = (data: any) => {
    setFormData({ ...data, dateFounded: date })
    setSubmit(true)
  };

  const onCalendarChange = (date: Date) => {
    setDate(date)
  }

  useEffect(() => {
    if (submit) {
      createCompany()
      setSubmit(false)
      if (closeAction) {
        closeAction()
      }
    }
  }, [submit]) // eslint-disable-line

  useEffect(() => {
    if (editing && !!company) {
      const { name, description, city, state, dateFounded, logoUrl } = company
      setValue([
        { name },
        { description },
        { city },
        { state },
        { logoUrl },
        { dateFounded: new Date(dateFounded) }
      ])
    }

  }, [editing, company, setValue])


  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Comany Name
          </label>
          <input name="name" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Thievery Inc." />
          {errors.name && <div className="required-error text-red-500">Required</div>}
        </div>

        <div className="w-full px-3 my-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            What does your company do?
          </label>
          <textarea name="description" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Description" />
          {errors.description && <div className="required-error text-red-500">Required</div>}
        </div>

        <div className="w-full px-3 my-5">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Logo Image URL
          </label>
          <input type="text" name="logoUrl" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="http://fillmurray.com/200/300" />
          {errors.logoUrl && <div className="required-error text-red-500">Required</div>}
        </div>

      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            City
          </label>
          <input name="city" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Ft. Lupton" />
          {errors.city && <div className="required-error text-red-500">Required</div>}

        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            State
          </label>
          <input name="state" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Colorado" />
          {errors.state && <div className="required-error text-red-500">Required</div>}

        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Date founded
        </label>
          <div>
            <DatePicker
              className="block w-1/2 "
              onChange={onCalendarChange}
              value={date}
            />
          </div>
        </div>
      </div>

      <input
        id="submit-btn"
        className="mt-10 mr-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer" type="submit" />
      {editing &&
        <button
          onClick={closeAction}
          className="mt-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer">
          Cancel
        </button>
      }
    </form>
  )

}

export default AddCompany