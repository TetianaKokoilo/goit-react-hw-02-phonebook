
export const ContactList = ({ contacts}) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};