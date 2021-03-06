import { NavLink } from "react-router-dom";

export default function NavLinks() {
    return (
        <>
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/search" activeClassName="active">Search</NavLink>
            <NavLink to="/post" activeClassName="active">Post your shop!</NavLink>
        </>
    )
}
