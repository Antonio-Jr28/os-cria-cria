import React, { useState } from 'react'
import { contactUsStrings } from './contact-us-form.string'

interface IForm {
  name: string
  email: string
  message: string
}

export const ContactUs: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const clearForm = () => {
    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
    clearForm()
  }

  return (
    <section>
      <div className="flex items-center h-[100px]" />
      <h1 className="text-bombing text-center md:text-left text-6xl md:text-8xl text-white md:pl-32">
        {contactUsStrings.title}
      </h1>

      <div className="flex flex-col items-center md:flex-row md:justify-evenly mt-8 pb-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:pl-10 border-2 border-white rounded-2xl bg-opacity-100 p-5"
        >
          <p className="text-white text-lg md:text-2xl">Nós chame!</p>
          <label htmlFor="name" className="mt-4 text-white">
            {contactUsStrings.form.name}
          </label>
          <input
            value={form.name}
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg w-[250px] md:w-[300px]"
          />
          <label htmlFor="email" className="mt-4 text-white">
            {contactUsStrings.form.email}
          </label>
          <input
            value={form.email}
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg w-[250px] md:w-[300px]"
          />
          <label htmlFor="message" className="mt-4 text-white">
            {contactUsStrings.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={form.message}
            className="border border-gray-300 rounded-lg resize-none h-32 w-[250px] md:w-[300px]"
          ></textarea>
          <div className="flex justify-center">
            <button
              className="bg-yellow-600 mt-3 rounded-2xl w-[80px]"
              type="submit"
            >
              {contactUsStrings.form.buttonSend}
            </button>
          </div>
        </form>

        <div>
          <h1 className="text-white text-center text-2xl md:text-[50px] leading-none mt-5">
            {contactUsStrings.contactUs.suffix}
            <h1 className="text-yellow-600 text-center text-2xl md:mt-4 md:text-[50px]">
              {contactUsStrings.contactUs.prefix}
            </h1>
          </h1>
          <p className="text-white text-sm md:text-2xl mt-8">
            <i className="fas fa-phone mr-4 text-yellow-400"></i>
            {contactUsStrings.contactUs.phone}
          </p>
          <p className="text-white text-sm md:text-2xl mt-8">
            <i className="fas fa-envelope mr-4 text-yellow-400"></i>
            {contactUsStrings.contactUs.email}
          </p>
          <p className="text-white text-sm md:text-2xl mt-8">
            <i className="fas fa-map-marker-alt mr-4 text-yellow-400"></i>
            {contactUsStrings.contactUs.andress}
          </p>
        </div>
      </div>
    </section>
  )
}
