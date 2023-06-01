import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, useFormik } from 'formik';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/reduxSlices';
import css from './ContactForm.module.css';

export default function ContactForm({ form_container, input, btn_add }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { name, number } = values;

      const isDuplicate = contacts.some(
        contact => contact.name === name || contact.number === number
      );

      if (isDuplicate) {
        alert('Dublicate contact');
      } else {
        dispatch(addContact({ name, number }));
        resetForm();
      }
    },
  });

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={formik.handleSubmit}
      >
        <Form className={css.form_container}>
          <label htmlFor={nameInputId}>
            <Field
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Name"
              className={css.input}
            />
          </label>
          <label htmlFor={numberInputId}>
            <Field
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={formik.handleChange}
              value={formik.values.number}
              placeholder="Number"
              className={css.input}
            />
          </label>
          <button type="submit" className={css.btn_add}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
