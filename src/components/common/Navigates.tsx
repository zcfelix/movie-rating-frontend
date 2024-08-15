import { useNavigate } from 'react-router-dom';
import { paths } from '../../router';

const Navigates = ({ currentNav }: { currentNav: string }) => {
  const navigate = useNavigate();
  const navs = [
    { name: 'Home', path: paths.home },
    { name: 'Movies', path: paths.movies },
  ];

  const handleNavClick = (path: string) => {
    if (currentNav !== path) {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-wrap gap-6 items-center mb-3 text-blue-500">
      {navs.map((nav) => (
        <div
          className={
            currentNav === nav.path
              ? 'text-xl font-bold'
              : 'text-xl cursor-pointer underline'
          }
          key={nav.name}
          onClick={() => handleNavClick(nav.path)}
        >
          {nav.name}
        </div>
      ))}
    </div>
  );
};

export default Navigates;
