import { PropTypes } from 'prop-types';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <label className={css['filter-label']}>
      <span className={css['filter-label-text']}>Find contacts by name</span>
      <input
        className={css['filter-input']}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ></input>
    </label>
  );
};

Filter.propType = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
