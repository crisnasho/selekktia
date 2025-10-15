import React, { useState } from 'react'
import '../styles/ContactForm.css'
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError(null); setSuccess(null)
    try { await new Promise(r => setTimeout(r, 800)); setSuccess('Mensaje enviado correctamente!'); setForm({ name:'', email:'', message:'' }) }
    catch { setError('Error al enviar') } finally { setLoading(false) }
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input id="name" name="name" className="form-control" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Mensaje</label>
        <textarea id="message" name="message" className="form-control" rows="4" value={form.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
    </form>
  )
}
