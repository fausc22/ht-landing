"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export type PageSelectOption = { value: string; label: string };

type Props = {
  name: string;
  label: string;
  value: string;
  options: PageSelectOption[];
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
};

export function PageSelect({ name, label, value, options, onChange, required, disabled }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonId = useId();
  const listId = useId();
  const selected = options.find((option) => option.value === value) ?? options[0];
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === selected?.value));

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    listRef.current?.querySelectorAll<HTMLElement>('[role="option"]')[selectedIndex]?.focus();
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, selectedIndex]);

  function choose(next: string) {
    onChange(next);
    setOpen(false);
  }

  function onButtonKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  }

  function onOptionKeyDown(event: React.KeyboardEvent<HTMLElement>, index: number) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = Math.min(options.length - 1, index + 1);
      listRef.current?.querySelectorAll<HTMLElement>('[role="option"]')[next]?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = Math.max(0, index - 1);
      listRef.current?.querySelectorAll<HTMLElement>('[role="option"]')[prev]?.focus();
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      choose(options[index].value);
    }
    if (event.key === "Home") {
      event.preventDefault();
      listRef.current?.querySelectorAll<HTMLElement>('[role="option"]')[0]?.focus();
    }
    if (event.key === "End") {
      event.preventDefault();
      listRef.current?.querySelectorAll<HTMLElement>('[role="option"]')[options.length - 1]?.focus();
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <span className="text-sm font-bold" id={buttonId}>
        {label}
      </span>
      <input type="hidden" name={name} value={selected?.value ?? ""} required={required} />
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={buttonId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        className="field flex items-center justify-between gap-3 text-left disabled:cursor-not-allowed disabled:opacity-65"
      >
        <span>{selected?.label}</span>
        <ChevronDown className={`size-4 shrink-0 text-forest transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open ? (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={buttonId}
          className="absolute z-30 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-line bg-white py-2 shadow-xl"
        >
          {options.map((option, index) => {
            const isSelected = option.value === selected?.value;
            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  className={`flex w-full px-4 py-3 text-left text-sm font-semibold transition hover:bg-cream focus:bg-cream focus:outline-none ${
                    isSelected ? "bg-forest/8 text-forest" : "text-ink"
                  }`}
                  onClick={() => choose(option.value)}
                  onKeyDown={(event) => onOptionKeyDown(event, index)}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
