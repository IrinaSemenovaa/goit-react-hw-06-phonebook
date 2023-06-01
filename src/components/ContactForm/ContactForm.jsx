import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, useFormik } from 'formik';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/reduxSlices';

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { name, number } = values;
      dispatch(addContact({ name, number }));
      resetForm();
    },
  });

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={formik.handleSubmit}
      >
        <Form>
          <label htmlFor={nameInputId}>
            Name
            <Field
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </label>
          <label htmlFor={numberInputId}>
            Number
            <Field
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
