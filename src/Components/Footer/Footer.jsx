import { AiOutlineCopyright, AiOutlineHeart } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <h3>
        Made with <AiOutlineHeart className="heart" /> Julia Coulon 2024{" "}
        <AiOutlineCopyright className="copyright" />
      </h3>
    </footer>
  );
}

export default Footer;
