'use client';

import React, { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import '@/styles/components/accordion.css';

export interface AccordionItemData {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  badge?: string;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string | string[];
  variant?: 'default' | 'separated' | 'card';
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  variant = 'separated',
  className = '',
}) => {
  const baseId = useId();

  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (defaultOpenId) {
      if (Array.isArray(defaultOpenId)) {
        defaultOpenId.forEach((id) => initial.add(id));
      } else {
        initial.add(defaultOpenId);
      }
    } else {
      items.forEach((item) => {
        if (item.defaultOpen) {
          initial.add(item.id);
        }
      });
    }
    return initial;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(id);

      if (allowMultiple) {
        if (isOpen) {
          next.delete(id);
        } else {
          next.add(id);
        }
      } else {
        next.clear();
        if (!isOpen) {
          next.add(id);
        }
      }

      return next;
    });
  };

  const containerClasses = ['accordion', `accordion--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const triggerId = `${baseId}-trigger-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}
          >
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="accordion__trigger"
                onClick={() => toggleItem(item.id)}
              >
                <span className="accordion__title-group">
                  <span className="accordion__title">{item.title}</span>
                  {item.badge && (
                    <span className="accordion__badge">{item.badge}</span>
                  )}
                </span>
                <span className="accordion__icon" aria-hidden="true">
                  <ChevronDown size={16} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="accordion__panel"
            >
              <div className="accordion__content-inner">
                <div className="accordion__content">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
