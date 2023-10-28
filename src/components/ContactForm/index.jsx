import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './styles.css'

const ContactForm = () => {

  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('ND_contact', 'contact', formRef.current, 'hesIfng0YOyoZM2dr')
      .then((msg_body) => {
        console.log(msg_body)
        formRef.current.reset()
      }
    )  
      .catch((err) => console.log(err))
  }

  return (
        <form className='contactForm__container' ref={formRef} onSubmit={sendEmail}>  
          <h2 className='contactForm__title'>Necesitás ascesoramiento?</h2>
          <h3 className='contactForm__title'>Dejanos tu consulta y te responderemos a la brevedad !</h3>
          <label className='contactForm__label'>Nombre</label>
          <input className='contactForm__input' type="text" name="user_name" required/>

          <label className='contactForm__label'>Email</label>
          <input className='contactForm__input' type="email" name="user_email" required/>

          <label className='contactForm__label'>Mensaje</label>
          <textarea className='contactForm__msg' name="message" minLength="20" maxLength="100" cols="40" rows="6" placeholder='Tus comentarios me ayudan a mejorar el proyecto ! con gusto los recibiré y responderé a la brevedad posible !' required/>
          <input className='contactForm__submit' type="submit" value="Enviar" />
        </form> 
  )
}

export default ContactForm