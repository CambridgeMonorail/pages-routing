
import { FC } from 'react';
import 'tailwindcss/tailwind.css';

const ChildPage2: FC = () => {
  return (
    <div className="p-4 bg-muted text-foreground">
      <h2 className="text-2xl">Child Page 2</h2>
      <p>This is the content of Child Page 2.</p>
    </div>
  );
};

export default ChildPage2;