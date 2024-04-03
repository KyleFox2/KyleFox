function Button({ text, link, className, type, func, index }) {
  return (
    <a href={link} key={index}>
      <button type={type} className={className} onClick={func}>
        {text}
      </button>
    </a>
  );
}

export default Button;
