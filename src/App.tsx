import React, { useState } from 'react';
import { Shield, CheckCircle, Clock, FlaskRound as Flask, Lock } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8">
            <Shield className="w-12 h-12 text-blue-600" />
            <span className="text-3xl font-bold text-blue-600">ShieldWell</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="flex-1 text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                ShieldWell Is Coming Soon—<br />
                <span className="text-blue-600">Reserve Your Protection Today!</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Join our waitlist now and be among the <span className="font-semibold">FIRST</span> to pre-order ShieldWell, 
                the revolutionary solution for STD & STI prevention and treatment.
              </p>
            </div>
            
            <div className="flex-1 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://lh3.googleusercontent.com/fife/ALs6j_FFf_rd_DgPKpa49gLvzzOgjMB0b4PAuBHLPvabuVi6dAcmqvh3Kz_ajxgkwxM9FVzfUh4izh2guCHZhMgVOBsqeDrZwDw15rgw2HROUW0_BbwcX6kC5BQwfHqFh_0jux9P_gCW8H7FMk61SDp-fUtjV5WmvX26-oxX1iRRdN4O4GG2cF_R-vzbe0P74Dw8oiF-TimiJmZOSIpbtxUs5yQr0zWm5-eKJcRizv1URmlDE5oL2JQ7Nh8Rb0V0ET34DfCdZVIQaS8KpuFuGonQmG55ICNf9K3PiGDMv6V1HClZ0GaLkhZJ4Hxi8NeiVBQu6R2AvvLYPuCgb5SZZc6z0tz3guENJCZ4scDDqXacPohHq0cFObti3SA8fCFvXI5VE7A35DDeikNbO__8__CuCIgR1U-xPDzeC340XEdBhUTwvlUTHpElT1auSNjMzcSzT1a83K1RztaOxQQsP5rFoGLXjb935aMAhL7HgUJzwNcZuW9fhiyR0U7NXynudW7hIjMObEAxYZ8rTXRQc_Vj_GAxYWiSN35S2YIbBL067219jXu9pSHwr55IEQzsKKBij1G7v48alYyBkQZIhzFNIylEU97IR-r54Gf9aTsCsuFVnZjFMgmiwAhI8msy66sEOQnSUyHzRal4EfLDK6HvvavA-HMBr6gIznZFT08MOZxeCSRIfm3GxBkek30LF_KXBpppdQldBoK6RbOatQiWrwFxK-D7zlRWn6bNdUxWGwqKftqpeoY8QE_1BHmMctMYeLan5YhKSy1V8gcdfpWerTTiQDdbqbieakW9RFGY8og7s_-yiF4WXLA1ryzN-g-2_ZA9-2UwcdpcFnS1N7Q8v3bOmAHBGEq3Izt7KFVG3etkRlKQ33Qx5F1Mjknx07XYclUTD4MtCqAL3rjYouI13ZZI3rbd-ww074T3-E4vLyCbJBBfIxhWPPpDYLel_AWyXNjcpzmLSmiEs0joP2zxnd3BbJ6xjQ2AU-tuF2xkLNRtCAfNIvvCznMS9IFKmUXT_ajDw33TaZWRD7ftrx_18gY-mzrMyAL2ObiVcmUsqOVCQsY7rHqT18rSKkkr_dtvVPIYIRYrwc8rBbIB9sJicJ0B0yKlkBcH6Q-SgN1VIRU6H3D7xrJW-r9xiGXEr8eHuqZQcxiRkuxtmaWjmHw9Jb1pIG8pvd7iUlr1WUXdB2d11O5qH49O0l5oNUk8xlOdqpbYn1Nj8GpC510SW2TU49j3VH8-ZGj2HFKaf7KOIKVLDnT1Z9NUA8wenBVx_kCDJg41BaCTuYWgw_XEYIMod_AGqZPIYUUzp8SdrE5cQM0D5YP4hDZxckzjmpD6y2fpumAj3L44xpS_Bq-3-9p0cIEMZ7dhqK4VKQh6tJcR_NgLIpk7xR32f7Gqy7eDSNBPuz-pZme8ggOlrrJnpgO0L7rFXzzjVGoIUIJBDYqiQiQ5G0u7xm-IkpCrqKMkeqbS-JNSqcdik3ycwXslZ_p5u1nmnQ=s512" 
                alt="ShieldWell Product" 
                className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <CheckCircle className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Comprehensive Protection</h3>
              <p className="text-gray-600">Complete prevention and treatment in one revolutionary solution</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Flask className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Scientifically Proven</h3>
              <p className="text-gray-600">Backed by extensive research and clinical trials</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Quick-acting protection you can trust</p>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                Preorder and join the waitlist
              </button>
            </form>
          </div>

          {/* Urgency Statement */}
          <p className="mt-12 text-lg text-gray-800 font-medium">
            Don't miss out—sign up today and secure your peace of mind!
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 ShieldWell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;