'use client';

import React, { useState, useId, useRef } from 'react';
import '@/styles/components/tabs.css';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'pills' | 'underline' | 'boxed';
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  activeTab: controlledActiveTab,
  onChange,
  variant = 'pills',
  fullWidth = false,
  className = '',
  ariaLabel = 'Content tabs',
}) => {
  const baseId = useId();
  const tabListRef = useRef<HTMLDivElement>(null);

  const initialTab =
    defaultTab ||
    (tabs.find((t) => !t.disabled)?.id ?? tabs[0]?.id ?? '');

  const [uncontrolledTab, setUncontrolledTab] = useState<string>(initialTab);

  const isControlled = controlledActiveTab !== undefined;
  const currentTab = isControlled ? controlledActiveTab : uncontrolledTab;

  const handleTabClick = (tabId: string) => {
    if (!isControlled) {
      setUncontrolledTab(tabId);
    }
    onChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const enabledTabs = tabs.filter((t) => !t.disabled);
    const enabledIndex = enabledTabs.findIndex((t) => t.id === tabs[currentIndex]?.id);

    let nextIndex = -1;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (enabledIndex + 1) % enabledTabs.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (enabledIndex - 1 + enabledTabs.length) % enabledTabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = enabledTabs.length - 1;
    }

    if (nextIndex >= 0) {
      const nextTab = enabledTabs[nextIndex];
      if (nextTab) {
        handleTabClick(nextTab.id);
        const button = tabListRef.current?.querySelector<HTMLButtonElement>(
          `#${baseId}-tab-${nextTab.id}`
        );
        button?.focus();
      }
    }
  };

  const currentTabItem = tabs.find((t) => t.id === currentTab) || tabs[0];

  const rootClasses = [
    'tabs',
    `tabs--${variant}`,
    fullWidth ? 'tabs--full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div className="tabs__list-wrapper">
        <div
          ref={tabListRef}
          role="tablist"
          aria-label={ariaLabel}
          className="tabs__list"
        >
          {tabs.map((tab, idx) => {
            const isSelected = tab.id === currentTab;
            const tabId = `${baseId}-tab-${tab.id}`;
            const panelId = `${baseId}-panel-${tab.id}`;

            return (
              <button
                key={tab.id}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={panelId}
                aria-disabled={tab.disabled}
                tabIndex={isSelected ? 0 : -1}
                disabled={tab.disabled}
                onClick={() => !tab.disabled && handleTabClick(tab.id)}
                onKeyDown={(e) => !tab.disabled && handleKeyDown(e, idx)}
                className={`tabs__tab ${isSelected ? 'tabs__tab--active' : ''}`}
              >
                {tab.icon && <span className="tabs__tab-icon">{tab.icon}</span>}
                <span className="tabs__tab-label">{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className="tabs__tab-badge">{tab.badge}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {currentTabItem && (
        <div
          id={`${baseId}-panel-${currentTabItem.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${currentTabItem.id}`}
          tabIndex={0}
          className="tabs__panel"
        >
          {currentTabItem.content}
        </div>
      )}
    </div>
  );
};
