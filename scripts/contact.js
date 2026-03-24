function handleForm(e) {
  e.preventDefault();
  alert('Thank you for your message. A BBBC representative will be in touch within 2 business days.');
  e.target.reset();
}

if (typeof module !== 'undefined') module.exports = { handleForm };
