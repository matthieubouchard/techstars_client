import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useApiRequest } from '../hooks/api.hooks'
import { setSelectedDetailItem } from '../state/actions'

interface AddFounderProps {
  companyId: string
  closeAction?: any
}

function AddFounder({ closeAction, companyId }: AddFounderProps) {
  const { register, handleSubmit, errors } = useForm()
  const [formData, setFormData] = useState({})
  const [submit, setSubmit] = useState(false)

  const addFounder = useApiRequest(
    {
      method: "POST",
      endpoint: `/companies/${companyId}/add-founder`,
      successAction: setSelectedDetailItem,
      data: formData,
    })

  const onSubmit = (data: any) => {
    setFormData(data)
    setSubmit(true)
  };


  useEffect(() => {
    if (submit) {
      addFounder()
      setSubmit(false)
      if (closeAction) {
        closeAction()
      }
    }
  }, [submit]) // eslint-disable-line


  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            FirstName
          </label>
          <input name="firstName" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="John" />
          {errors.firstName && <div className="required-error text-red-500">Required</div>}

        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input name="lastName" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Wick" />
          {errors.lastName && <div className="required-error text-red-500">Required</div>}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title
          </label>
          <input name="title" ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Chief People Inspector" />
          {errors.title && <div className="required-error text-red-500">Required</div>}
        </div>
      </div>
      <input
        id="submit-btn"
        className="mt-10 mr-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer" type="submit" />

      <button
        onClick={closeAction}
        className="mt-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer">
        Cancel
      </button>
    </form>
  )

}

export default AddFounder