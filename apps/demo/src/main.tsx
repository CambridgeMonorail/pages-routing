import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './app/app';
import LandingPage from './landing-page/landing-page';
import LayoutPage from './layout-page/layout-page';
import ChildPage1 from './child-pages/child-page1';
import ChildPage2 from './child-pages/child-page2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/layout" element={<LayoutPage />}>
          <Route path="child1" element={<ChildPage1 />} />
          <Route path="child2" element={<ChildPage2 />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
