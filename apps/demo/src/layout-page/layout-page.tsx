
import { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const LayoutPage: FC = () => {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <nav className="p-4 bg-secondary">
        <ul className="flex space-x-4">
          <li>
            <Link to="child1" className="text-accent">Child Page 1</Link>
          </li>
          <li>
            <Link to="child2" className="text-accent">Child Page 2</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPage;