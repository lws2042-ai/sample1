function Body() {
  const numA = 1;
  const numB = 2;

  return (
    <main>
      <h2>본문</h2>
      <h2>
        {numA} + {numB} = {numA + numB}
      </h2>
    </main>
  );
}

export default Body;
