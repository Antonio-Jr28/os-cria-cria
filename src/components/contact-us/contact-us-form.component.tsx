import React, { useState } from 'react'

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-bombing text-8xl text-white mt-14">Fale conosco!</h1>
      <div className="grid grid-cols-2 gap-4 justify-end mt-14">
        <div className="flex flex-col items-start pl-40">
          <form onSubmit={handleSubmit} className="flex flex-col w-[400px]">
            <label htmlFor="name" className="mt-4 text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            <label htmlFor="email" className="mt-4 text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            <label htmlFor="message" className="mt-4 text-white">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={form.message}
              className="border border-gray-300 p-2 rounded resize-none h-32"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-600 text-white p-2 mt-4 rounded-lg w-36 items-center"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col pl-[119px]">
          <p className="text-white text-2xl">Nós chame!</p>
          <h1 className="text-white text-[50px] leading-none mt-5">
            Transformamos <br /> sonhos em
            <h1 className="text-yellow-600 text-[50px]">REALIDADE</h1>
          </h1>
          <p className="text-white text-2xl mt-8">
            <i className="fas fa-phone mr-4 text-yellow-400"></i>
            11 - 95427-7459
          </p>
          <p className="text-white text-2xl mt-8">
            <i className="fas fa-envelope mr-4 text-yellow-400"></i>
            oscria.cria21@gmail.com
          </p>
          <p className="text-white text-2xl mt-8">
            <i className="fas fa-map-marker-alt mr-4 text-yellow-400"></i>
            Rua: Montanhas, 61 apto 309 Itaquera/SP
          </p>
        </div>
      </div>
    </section>
  )
}
