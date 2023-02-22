import { NavLink } from "react-router-dom";

const Tabs = (props) => {
  return (
    <div className="max-w-md bg-cardCol rounded-xl border-thirdCol border-2 overflow-hidden mb-6">
      <NavLink to={props.nextPage}>
        
        <div className="h-64 overflow-hidden"><img
          src={props.image}
          alt="this tabs pic"
          className="max-w-md bg-clip-border"
        ></img></div>
        <p className="mx-3 mt-2 text-2xl">{props.heading}</p>
        <p className="mx-3 mb-3">{props.subHeading}</p>
      </NavLink>
    </div>
  );
};
export default Tabs;
