import React, { forwardRef, ReactNode, CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--scrollbar-color'?: string;
  '--scrollbar-bgcolor'?: string;
  '--scrollbar-width'?: string;
  '--scrollbar-thumb-border'?: string;
}

export interface ScrollPanelProps {
  style?: CustomCSSProperties;
  className?: string;
  children: ReactNode;
  hidden?: boolean;
  thin?: boolean;
  color?: string;
  bgColor?: string;
}

const ScrollPanel = forwardRef<HTMLDivElement, ScrollPanelProps>(
  ({ style, className = '', children, hidden = false, thin = false, color = '#555', bgColor = '#F5F5F5' }, ref) => {
    if (hidden) return null;

    const combinedClassName = ['scrollpanel', className].filter(Boolean).join(' ');

    const customStyle: CustomCSSProperties = {
      '--scrollbar-color': color,
      '--scrollbar-bgcolor': bgColor,
      '--scrollbar-width': thin ? '8px' : '12px',
      ...style
    };

    return (
      <div className={combinedClassName} style={customStyle} ref={ref}>
        <div className="scrollpanel-content">{children}</div>
      </div>
    );
  }
);

ScrollPanel.displayName = 'ScrollPanel';

export default ScrollPanel;
