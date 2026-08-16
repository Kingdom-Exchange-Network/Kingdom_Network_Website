"use client";

/**
 * Select — a reusable, controlled dropdown built on Headless UI's Listbox.
 *
 * Themed to match the site's dark luxury palette (plum / gold / cream) and gives
 * full control over the open option list, fixing the grey/black native <select>
 * rendering across browsers.
 *
 * Usage:
 *   <Select
 *     value={type}
 *     onChange={setType}
 *     options={[{ value: "", label: "All types" }, { value: "ministry", label: "Ministry" }]}
 *     placeholder="Select a type"
 *     id="filter-type"
 *     ariaLabel="Organization type"
 *   />
 */

import { Listbox } from "@headlessui/react";

type Option = { value: string; label: string };

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  id?: string;
  ariaLabel?: string;
  /** Extra classes for the button, appended so callers can override the defaults. */
  className?: string;
};

export default function Select({
  value,
  onChange,
  options,
  placeholder,
  id,
  ariaLabel,
  className,
}: SelectProps) {
  const selected = options.find((o) => o.value === value);

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button
          id={id}
          aria-label={ariaLabel}
          className={`relative w-full bg-plum-light border border-gold/20 px-3 pr-8 py-2.5 font-body text-sm text-cream/70 text-left outline-none focus:border-gold/50 transition-colors ${className ?? ""}`}
        >
          {selected ? selected.label : placeholder ?? ""}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/40"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Listbox.Button>

        {/* !bg-plum-light: globals.css repaints the plain .bg-plum-light class at
            80% alpha for card surfaces, which leaves a floating menu see-through.
            The important modifier restores the token's solid value. */}
        <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto !bg-plum-light border border-gold/20 shadow-lg outline-none">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className={({ active }) =>
                `relative cursor-pointer px-3 py-2 pr-8 font-body text-sm outline-none transition-colors ${
                  active ? "bg-gold/15" : ""
                }`
              }
            >
              {({ active, selected }) => (
                <span
                  className={`flex items-center justify-between ${
                    active ? "text-cream" : selected ? "text-gold" : "text-cream/70"
                  }`}
                >
                  {option.label}
                  {selected && (
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 10.5L8.5 14L15 6.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
