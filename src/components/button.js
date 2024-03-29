function Button({ text, link, className, index }) {
  return (
    <a href={link} key={index}>
      <button className={className}>{text}</button>
    </a>
  );
}

export default Button;
