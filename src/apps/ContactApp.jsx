import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';

const ContactApp = () => {
  const [formData, setFormData] = useState({
    from_email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('TRANSMITTING...');

    const result = await sendEmail(formData);
    
    if (result.success) {
      setStatus('✓ MESSAGE TRANSMITTED SUCCESSFULLY');
      setFormData({ from_email: '', subject: '', message: '' });
    } else {
      setStatus('✗ TRANSMISSION FAILED - RETRY REQUIRED');
    }
    
    setSending(false);
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="h-full bg-gray-900 font-mono flex flex-col">
      <div className="bg-black px-4 py-2 border-b border-cyan-400/30">
        <div className="text-cyan-400">
          <span className="text-cyan-400">user@secure-mail</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~/compose</span>
          <span className="text-white">$ cat contact.sh</span>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <div className="text-yellow-400 text-lg mb-2">SECURE COMMUNICATION PORTAL</div>
            <div className="text-cyan-400">Encryption: AES-256 | Status: ACTIVE</div>
            <div className="text-gray-400 text-sm">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>
          <div className="flex space-x-3">
            <button 
              type="submit"
              form="contact-form"
              disabled={sending}
              className="bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-black px-4 py-2 rounded font-bold transition-colors text-sm"
            >
              {sending ? '[TRANSMITTING...]' : '[TRANSMIT]'}
            </button>
            <button 
              type="button"
              onClick={() => setFormData({ from_email: '', subject: '', message: '' })}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded font-bold transition-colors text-sm"
            >
              [CLEAR]
            </button>
          </div>
        </div>
        
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-400 mb-1">FROM:</label>
            <input 
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full bg-black border border-green-400/50 px-3 py-2 text-green-400 rounded focus:border-green-400 focus:outline-none" 
              placeholder="your.email@domain.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-green-400 mb-1">SUBJECT:</label>
            <input 
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-black border border-green-400/50 px-3 py-2 text-green-400 rounded focus:border-green-400 focus:outline-none" 
              placeholder="Subject line..."
              required
            />
          </div>
          
          <div>
            <label className="block text-green-400 mb-1">MESSAGE:</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6" 
              className="w-full bg-black border border-green-400/50 px-3 py-2 text-green-400 rounded resize-none focus:border-green-400 focus:outline-none min-h-[6rem] max-h-64 overflow-y-auto"
              placeholder="Your encrypted message..."
              required
              style={{
                height: 'auto',
                minHeight: '6rem'
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 256) + 'px';
              }}
            ></textarea>
          </div>
          
          {status && (
            <div className={`text-center font-bold ${
              status.includes('✓') ? 'text-green-400' : 
              status.includes('✗') ? 'text-red-400' : 'text-yellow-400'
            }`}>
              {status}
            </div>
          )}
        </form>
        
        <div className="mt-4 text-center">
          <div className="text-green-400">🔒 END-TO-END ENCRYPTED</div>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;