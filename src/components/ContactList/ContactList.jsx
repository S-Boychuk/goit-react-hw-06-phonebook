// import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  // return contacts.length !== 0 ? (
  //   <ul className={css['contact-list']}>
  //     {/* {/* {contacts.map(({ id, name, number }) => {
  //       return (
  //         <ContactItem
  //           id={id}
  //           key={id}
  //           name={name}
  //           number={number}
  //           onDelete={onDelete}
  //         /> */}
  //       );
  //     })} */}
  //   </ul>
  // ) : (
  return (
    <div>
      <p className={css['no-contact-text']}>Sorry, no contact found</p>
    </div>
  );
};

export default ContactList;
