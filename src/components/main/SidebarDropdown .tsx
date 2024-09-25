import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SidebarDropdown.module.scss';

interface DropdownItem {
  label: string;
  path: string;
  children?: DropdownItem[];
}

interface SidebarDropdownProps {
  title: string;
  items: DropdownItem[];
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (label: string) => {
    setOpenItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className={styles.sidebarDropdown}>
      <button className={styles.dropdownBtn} onClick={toggleDropdown}>
        <i className={`${styles.icon} ${isOpen ? styles.open : ''}`}></i>
        {title}
      </button>
      <div className={`${styles.dropdownContainer} ${isOpen ? styles.show : ''}`}>
        {items.map((item) => (
          <div key={item.label}>
            <div className={styles.dropdownItem} onClick={() => toggleItem(item.label)}>
              <i className={`${styles.icon} ${openItems[item.label] ? styles.open : ''}`}></i>
              {item.label}
            </div>
            {openItems[item.label] && item.children && (
              <div className={styles.nestedItems}>
                {item.children.map((child) => (
                  <Link key={child.path} to={child.path} className={styles.dropdownLink}>
                    <i className={styles.icon}></i>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDropdown;
