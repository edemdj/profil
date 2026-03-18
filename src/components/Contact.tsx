import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setSent(false); setLoading(true);
    emailjs.send('service_fpl9247', 'template_bt51amh',
      { name: form.name, email: form.email, message: form.message },
      '-vAzUbe2sxdNEyCcj'
    ).then(
      () => { setSent(true); setForm({ name: '', email: '', message: '' }); setLoading(false); },
      () => { setError("Erreur lors de l'envoi. Réessaie plus tard."); setLoading(false); }
    );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 reveal">Contact</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 reveal reveal-d1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contactez-moi</h3>
              <p className="text-gray-600 mb-6">N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.</p>
              <div className="space-y-3">
                <a href="mailto:edemdjossou1997@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
                  <Mail className="w-5 h-5 text-blue-500" /> edemdjossou1997@gmail.com
                </a>
                <a href="https://github.com/edemdj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
                  <Github className="w-5 h-5 text-blue-500" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/edem-djossou" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50">
                  <Linkedin className="w-5 h-5 text-blue-500" /> LinkedIn
                </a>
                <div className="flex items-center gap-3 text-gray-600 p-2">
                  <MapPin className="w-5 h-5 text-blue-500" /> Bordeaux, France
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" id="name" value={form.name} onChange={handleChange} required
                  className="contact-input-animated w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" value={form.email} onChange={handleChange} required
                  className="contact-input-animated w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} value={form.message} onChange={handleChange} required
                  className="contact-input-animated w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium">
                {loading ? 'Envoi en cours…' : 'Envoyer'}
              </button>
              {sent  && <p className="text-green-600 font-semibold">✓ Merci ! Je vous répondrai bientôt.</p>}
              {error && <p className="text-red-600 font-semibold">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
