
import './NavBarIzquierdo.css'
import CustomButton from './CustomButton';

function NavbarIzquierdo() {
  const botones = [
    { iconClass: 'fa-solid fa-table-cells', label: ' Dashboard' },
    { iconClass: 'fa-solid fa-calendar-days', label: ' Calendar' },
    { iconClass: 'fa-solid fa-diagram-project', label: ' Projects' },
    { iconClass: 'fa-solid fa-folder', label: ' Documents' },
    { iconClass: 'fa-solid fa-people-group', label: ' Teams' },
    { iconClass: 'fa-solid fa-code-compare', label: ' Integration' },
  ];
  const botones2 = [
    { iconClass: 'fa-solid fa-clipboard-check', label: ' Task' },
    { iconClass: 'fa-solid fa-user', label: ' User' },
    { iconClass: 'fa-solid fa-flag', label: ' Reporting' },
    { iconClass: 'fa-solid fa-gear', label: ' Settings' },
  ]

  return (

    <div className="container">
      <nav className="navbar-izquierdo">
      <h2><i class="fa-solid fa-microchip"></i>Prodless</h2>
      <h4>GENERAL</h4>
      {botones.map((btn, index) => (
        <CustomButton key={index} iconClass={btn.iconClass} label={btn.label} />
      ))}
      <h4>OTHER</h4>
      {botones2.map((btn, index) => (
        <CustomButton key={index} iconClass={btn.iconClass} label={btn.label} />
      ))}
    </nav>
    </div>
    
    
  );
}

export default NavbarIzquierdo;
