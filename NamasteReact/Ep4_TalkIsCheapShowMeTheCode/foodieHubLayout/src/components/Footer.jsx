const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`text-center mt-3 border-t-2 ${
        isDarkMode
          ? "bg-slate-100 border-gray-900 text-gray-800"
          : "bg-gray-600 border-blue-400 text-gray-200"
      }`}
    >
      It is a footer baby
    </footer>
  );
};
export default Footer;
