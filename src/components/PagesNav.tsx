import { NavLink } from 'react-router-dom';

export default function PagesNav() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
    </ul>
  );
}
