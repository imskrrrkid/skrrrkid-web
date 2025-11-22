import Scrambler from "scrambling-text";

function Footer() {
  const scrambler2 = new Scrambler();
  const handleScrambleC = (text) => {
    document.getElementById("copyKid").textContent = text;
  };
  scrambler2.scramble("(C) SKRRRKID 2025", handleScrambleC);
  return (
    <>
      <footer>
        <p id="copyKid"></p>
      </footer>
    </>
  );
}

export default Footer;
