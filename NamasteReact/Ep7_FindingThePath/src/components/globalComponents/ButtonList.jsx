import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
// import {isActive}

const ButtonList = ({ buttonList, isDarkMode }) =>
  buttonList.map(({ btnName, btnId, btnLink, btnEvent }) => (
    <li key={btnId}>
      <NavLink to={btnLink} className="block py-2 px-3 text-gray-900 rounded ">
        <Button
          onClickHandler={btnEvent}
          buttonName={btnName}
          buttonClasses={`h-8 p-0 text-sm p-2 pl-3 pr-3 w-full md:w-auto${
            isDarkMode
              ? "bg-gray-300 hover:bg-slate-700 text-gray-950 hover:text-zinc-100 "
              : "bg-slate-700 hover:bg-gray-300 text-zinc-100 hover:text-gray-950"
          } `}
        />
      </NavLink>
    </li>
  ));

export default ButtonList;
