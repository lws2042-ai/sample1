function Footer() {
  const strA = "안녕";
  const strB = "리액트";
  const boolA = true;
  const boolB = false;
  return (
    <footer>
      <h1>꼬리말</h1>
      <p>
        {strA} {strB}
      </p>
      <h2>{boolA || boolB ? "참" : "거짓"}</h2>
    </footer>
  );
}

export default Footer;
