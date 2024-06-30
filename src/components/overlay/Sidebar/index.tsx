import React, { useState, useEffect } from 'react';
import './Sidebar.css';

interface SidebarProps {
  baseZIndex?: number;
  blockScroll?: boolean;
  children?: React.ReactNode;
  closeOnEscape?: boolean;
  dismissable?: boolean;
  fullScreen?: boolean;
  header?: React.ReactNode;
  maskClassName?: string;
  maskStyle?: React.CSSProperties;
  modal?: boolean;
  position?: 'left' | 'top' | 'bottom' | 'right';
  visible: boolean;
  onHide?: () => void;
  onShow?: () => void;
}

const Sidebar = ({
  baseZIndex = 0,
  blockScroll = false,
  children,
  closeOnEscape = true,
  dismissable = true,
  fullScreen = false,
  header,
  maskClassName,
  maskStyle,
  modal = true,
  position = 'left',
  visible,
  onHide,
  onShow
}: SidebarProps) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [currentPosition, setCurrentPosition] = useState(position);

  useEffect(() => {
    if (visible) {
      setCurrentPosition(position);
      setIsVisible(true);
      onShow && onShow();
      if (blockScroll) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      setIsVisible(false);
      onHide && onHide();
      document.body.style.overflow = 'auto';
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        setIsVisible(false);
        onHide && onHide();
      }
    };

    if (closeOnEscape) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [visible, blockScroll, closeOnEscape, onHide, onShow, position]);

  const closeSidebar = () => {
    setIsVisible(false);
    onHide && onHide();
  };

  const sidebarClass = `sidebar ${currentPosition} ${isVisible ? 'visible' : ''} ${fullScreen ? 'full-screen' : ''}`;
  const maskClass = `sidebar-mask ${isVisible ? 'visible' : ''}`;

  return (
    <>
      {modal && (
        <div
          className={`${maskClass} ${maskClassName || ''}`}
          style={maskStyle}
          onClick={dismissable ? closeSidebar : undefined}
        />
      )}
      <div className={sidebarClass} style={{ zIndex: baseZIndex + 1 }}>
        <div className="sidebar-header">
          {header ? header : <div />}
          <button onClick={closeSidebar} className="sidebar-close-btn">
            &times;
          </button>
        </div>
        <div className="sidebar-content">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
