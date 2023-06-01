import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: nanoid(),
        ...action.payload,
      };
      state.items = [...state.items, newContact];
    },
    removeContact: (state, action) => {
      const contactId = action.payload;
      state.items = state.items.filter(contact => contact.id !== contactId);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  serializeConfig: {
    options: {
      ignoredActions: ['register'],
    },
  },
  deserializeConfig: {
    options: {
      ignoredActions: ['register'],
    },
  },
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;
