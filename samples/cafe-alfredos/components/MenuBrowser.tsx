"use client";

import { useMemo, useState } from "react";
import type { MenuCategory } from "@/data/menu";
import { FoodCard } from "@/components/FoodCard";
import { OrderLink } from "@/components/OrderLink";

export function MenuBrowser({ categories }: { categories: MenuCategory[] }) {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();

  const visible = useMemo(() => {
    if (!needle) return categories;
    return categories
      .map((category) => ({
        ...category,
        groups: category.groups
          .map((group) => ({
            ...group,
            items: group.items.filter((item) => {
              const haystack = `${category.name} ${group.label ?? ""} ${item.name} ${item.description ?? ""}`.toLowerCase();
              return haystack.includes(needle);
            }),
          }))
          .filter((group) => group.items.length > 0),
      }))
      .filter((category) => category.groups.length > 0);
  }, [categories, needle]);

  const count = visible.reduce(
    (sum, category) =>
      sum + category.groups.reduce((inner, group) => inner + group.items.length, 0),
    0,
  );

  return (
    <div className="menu-browser">
      <div className="menu-tools">
        <div className="wrap">
          <form role="search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="menu-search">Search the menu</label>
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pizza, chicken parm, subs..."
              autoComplete="off"
            />
          </form>
          <p className="menu-count" aria-live="polite">
            {needle ? `${count} matching items` : `${count} items on the published menu`}
          </p>
        </div>
      </div>
      <nav className="category-nav" aria-label="Menu categories">
        <div className="wrap">
          <label className="category-jump">
            Jump to a category
            <select
              defaultValue=""
              onChange={(event) => {
                const id = event.target.value;
                if (!id) return;
                document.getElementById(id)?.scrollIntoView();
                event.target.value = "";
              }}
            >
              <option value="">Choose a category</option>
              {categories.map((category) => {
                const shown = visible.some((item) => item.id === category.id);
                return (
                  <option key={category.id} value={category.id} disabled={!shown}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </label>
          <div className="category-nav-row">
            {categories.map((category) => {
              const shown = visible.some((item) => item.id === category.id);
              return shown ? (
                <a key={category.id} href={`#${category.id}`}>
                  {category.name}
                </a>
              ) : (
                <span key={category.id} className="is-muted">
                  {category.name}
                </span>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="wrap menu-list">
        {visible.length === 0 ? (
          <p className="empty-search">No menu items match that search.</p>
        ) : (
          visible.map((category) => (
            <section key={category.id} id={category.id} className="menu-section">
              <header>
                <h2>{category.name}</h2>
                {category.note ? <p>{category.note}</p> : null}
              </header>
              {category.groups.map((group) => (
                <div key={group.label || category.id} className="menu-group">
                  {group.label ? <h3>{group.label}</h3> : null}
                  {group.note ? <p className="group-note">{group.note}</p> : null}
                  <div className="card-grid">
                    {group.items.map((item) => (
                      <FoodCard
                        key={`${category.id}-${group.label ?? ""}-${item.name}-${item.description ?? ""}`}
                        name={item.name}
                        description={item.description}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))
        )}
        <p className="menu-order-note">
          Category and item links on the ordering site did not resolve to separate
          pages, so every order button opens the menu home.{" "}
          <OrderLink className="text-link">Order online</OrderLink>
        </p>
      </div>
    </div>
  );
}
