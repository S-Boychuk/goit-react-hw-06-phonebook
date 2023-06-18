import css from './ContactItem.module.css';

const ContactItem = () => {
  return (
    <>
      <li className={css['contact-list-item']}>
        <span className={css['contact-name-text']}>: </span>
        <span className={css['contact-number-text']}>:</span>
        <button className={css['delete-contact-btn']} type="button">
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactItem;
