const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`text-center border-t-2 ${
        isDarkMode
          ? "bg-slate-100 border-gray-900 text-gray-800"
          : "bg-gray-600 border-blue-400 text-gray-200"
      } absolute bottom-0 w-full min-h-[8vh]`}
    >
      It is a footer baby
    </footer>
  );
};

export default Footer;
