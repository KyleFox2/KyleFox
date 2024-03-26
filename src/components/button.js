function Button({ text, link, className }) {
  return (
    <a href={link}>
      <button className={className}>{text}</button>
    </a>
  );
}

export default Button;
