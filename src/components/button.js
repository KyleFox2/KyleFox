function Button({ text, link, className, type, func, index, id }) {
  return (
    <a href={link} key={index}>
      <button type={type} className={className} id={id} onClick={func}>
        {text}
      </button>
    </a>
  );
}

export default Button;
