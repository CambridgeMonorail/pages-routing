
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@pages-routing-test/shared';

import 'tailwindcss/tailwind.css';

const LandingPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/layout');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-4xl mb-4">Welcome to the Landing Page</h1>
      <Button onClick={handleClick} className="bg-primary text-primary-foreground">
        Go to Main Site
      </Button>
    </div>
  );
};

export default LandingPage;