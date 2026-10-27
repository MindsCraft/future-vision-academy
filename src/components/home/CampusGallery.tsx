'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Sparkles, X, ZoomIn } from 'lucide-react';
import { campusLifeGallery, CampusLifeGalleryItem, GalleryCategory } from '@/data/media';

interface FilterOption {
  id: string;
  label: string;
  category?: GalleryCategory;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'classrooms', label: 'Classrooms', category: 'classrooms' },
  { id: 'stem', label: 'STEM & Labs', category: 'stem' },
  { id: 'sports', label: 'Athletics', category: 'sports' },
  { id: 'arts', label: 'Arts', category: 'arts' },
  { id: 'campus', label: 'Campus', category: 'campus' },
];

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  classrooms: 'Classroom Inquiry',
  stem: 'STEM & Innovation',
  sports: 'Athletics & Sports',
  arts: 'Creative & Performing Arts',
  campus: 'Campus Grounds',
};

export const CampusGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<CampusLifeGalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? campusLifeGallery
    : campusLifeGallery.filter((item) => item.category === activeFilter);

  return (
    <div className="campus-gallery">
      {/* Category Filter Pills */}
      <div className="campus-gallery__filters" role="tablist" aria-label="Campus gallery categories">
        {FILTER_OPTIONS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              role="tab"
              aria-selected={isActive}
              className={`campus-gallery__filter-btn ${isActive ? 'campus-gallery__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.id === 'all' && <Sparkles size={14} className="campus-gallery__filter-icon" />}
              {filter.label}
              <span className="campus-gallery__filter-count">
                {filter.id === 'all'
                  ? campusLifeGallery.length
                  : campusLifeGallery.filter((i) => i.category === filter.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Cards Grid */}
      <div className="campus-gallery__grid">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="campus-gallery__card"
            onClick={() => setActiveItem(item)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItem(item);
              }
            }}
          >
            <div className="campus-gallery__image-wrap">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="campus-gallery__img"
              />
              <div className="campus-gallery__overlay" />
              
              {/* Category Badge */}
              <div className="campus-gallery__badge">
                <span>{CATEGORY_LABELS[item.category] || item.category}</span>
              </div>

              {/* Zoom Trigger Button Icon */}
              <div className="campus-gallery__zoom-badge" aria-hidden="true">
                <ZoomIn size={16} />
              </div>

              {/* Caption Content */}
              <div className="campus-gallery__content">
                <h3 className="campus-gallery__item-title">{item.title}</h3>
                <p className="campus-gallery__item-caption">{item.caption}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="campus-gallery__modal-backdrop"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div
            className="campus-gallery__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="campus-gallery__modal-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            <div className="campus-gallery__modal-image-wrap">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                width={1200}
                height={800}
                className="campus-gallery__modal-img"
              />
            </div>
            <div className="campus-gallery__modal-meta">
              <span className="campus-gallery__modal-category">
                {CATEGORY_LABELS[activeItem.category] || activeItem.category}
              </span>
              <h3 className="campus-gallery__modal-title">{activeItem.title}</h3>
              <p className="campus-gallery__modal-caption">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
