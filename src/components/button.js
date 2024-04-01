function Button({ text, link, className, type, index }) {
  return (
    <a href={link} key={index}>
      <button type={type} className={className}>
        {text}
      </button>
    </a>
  );
}

export default Button;
