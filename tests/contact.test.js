'use strict';
const { handleForm } = require('../scripts/contact.js');

describe('handleForm', () => {
  let form;
  let event;

  beforeEach(() => {
    window.alert = jest.fn();
    form = document.createElement('form');
    form.reset = jest.fn();
    event = { preventDefault: jest.fn(), target: form };
  });

  test('prevents default form submission', () => {
    handleForm(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  test('shows confirmation alert', () => {
    handleForm(event);
    expect(window.alert).toHaveBeenCalledWith(
      'Thank you for your message. A BBBC representative will be in touch within 2 business days.'
    );
  });

  test('resets the form after submission', () => {
    handleForm(event);
    expect(form.reset).toHaveBeenCalledTimes(1);
  });
});
