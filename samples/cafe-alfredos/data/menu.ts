/**
 * Menu names transcribed from https://cafealfredos.com/page_menus.aspx
 * (category refs 1–21) on 25 November 2026.
 * Prices are omitted. The ordering site was not publishing a priced menu
 * (online ordering was temporarily closed), so older prices are not shown.
 */

export type MenuItem = {
  name: string;
  description?: string;
};

export type MenuGroup = {
  label?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  name: string;
  note?: string;
  groups: MenuGroup[];
};

export const menu: MenuCategory[] = [
  {
    id: "pizza",
    name: "Pizza",
    groups: [
      {
        label: "Hand-tossed",
        items: [
          { name: "Personal 12\u201d Pizza" },
          { name: "Medium 14\u201d Pizza" },
          { name: "Large 16\u201d Pizza" },
          { name: "Extra Large 18\" Pizza" },
          { name: "Pan Pizza" },
          { name: "Sicilian Pizza" },
          { name: "Gluten-Free Pizza", description: "(Personal 12\")" },
          { name: "Brooklyn Pizza" },
        ],
      },
      {
        label: "Gourmet",
        note: "Medium and large sizes are listed on the restaurant menu.",
        items: [
          { name: "Grandma Margarita Pizza", description: "w/ Fresh Mozzarella, Plum Tomatoes & Basil" },
          { name: "Spinach or Broccoli Pizza", description: "w/ Garlic & Olive Oil" },
          { name: "White Ricotta & Mozzarella Pizza" },
          { name: "Spinach Artichoke Dip Pizza" },
          { name: "Zucchini & Fresh Tomatoes Pizza" },
          { name: "Baked Ziti Pizza" },
          { name: "Puttanesca Pizza", description: "w/ Capers, Olives & Anchovies" },
          { name: "Eggplant & Tomatoes Pizza" },
          { name: "Roasted Peppers Pizza", description: "w/ Artichoke & Provolone" },
          { name: "Veggie Lovers Pizza" },
          { name: "Macaroni & Cheese Pizza" },
          { name: "Vodka Sauce Pizza" },
          { name: "Eggplant Parmigiana Pizza" },
          { name: "Hawaiian Ham & Pineapple Pizza" },
          { name: "Stuffed Pizza" },
          { name: "Works Pizza" },
          { name: "Mexican Pizza" },
          { name: "Bacon & Cheddar Pizza" },
          { name: "Meat Lovers Pizza" },
          { name: "Chicken Parmigiana Pizza" },
          { name: "Chicken Scampi Pizza" },
          { name: "Chicken Marsala Pizza" },
          { name: "Chicken Alfredo Pizza" },
          { name: "Grilled Chicken & Broccoli Pizza" },
          { name: "BBQ Or Buffalo Chicken Pizza" },
          { name: "Grilled Chicken Caesar Salad Pizza" },
          { name: "Shrimp Parmigiana Pizza" },
          { name: "Cheese Steak Pizza", description: "w/ Peppers & Onions" },
          { name: "Broccoli Rabe w/ Sausage Pizza" },
          { name: "Margarita Pizza" },
          { name: "Bruschetta Pizza", description: "Diced Tomatoes, Basil & Garlic" },
          { name: "Grandma Vodka Fresh Mozzarella" },
          { name: "Bacon Chicken Ranch" },
          { name: "Margarita", description: "w/ Fresh Mozzarella, Plum Tomatoes & Basil" },
        ],
      },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    groups: [
      {
        items: [
          { name: "Crab Cakes", description: "(2) served w/ coleslaw" },
          { name: "Buffalo or BBQ Chicken Wings [10-Piece]", description: "Served with celery and blue cheese" },
          { name: "Buffalo or BBQ Chicken Wings [20-Piece]", description: "Served with celery and blue cheese" },
          { name: "Garlic Bread w/ Cheese" },
          { name: "Fried Zucchini" },
          { name: "Mozzarella Sticks" },
          { name: "Jalapeno Cheddar Poppers" },
          { name: "Garlic Knots [6-Piece]", description: "w/ side of sauce" },
          { name: "Garlic Knots [12-Piece]", description: "w/ side of sauce" },
          { name: "Zealand Green Shell Mussels" },
          { name: "Popcorn Shrimp" },
          { name: "Broccoli Bites" },
          { name: "Fried Mushrooms" },
          { name: "Fried Calamari", description: "w/ side of marinara & lemon" },
          { name: "Sampler" },
          { name: "Grilled Vegetables" },
          { name: "Shrimp Cocktail" },
          { name: "Chicken Fingers" },
          { name: "BBQ or Buffalo Chicken Fingers" },
          { name: "Garlic Bread" },
          { name: "Macaroni Cheese Bites" },
        ],
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    note: "Salads Include: Cucumbers, Olives, Tomatoes, Pepperocini and Red Onions.",
    groups: [
      {
        items: [
          { name: "Classic Tossed Salad" },
          { name: "Caesar Salad" },
          { name: "Greek Salad" },
          { name: "Cheese Salad", description: "Provolone, Mozzarella, American & Swiss" },
          { name: "Fresh Mozzarella Salad", description: "Tomato & Basil over Greens" },
          { name: "Turkey Club Salad", description: "Turkey, Swiss, and Bacon" },
          { name: "Chef Salad", description: "Roast Beef, Turkey & Provolone" },
          { name: "Antipasto Salad", description: "Ham, Salami, Capicola, and Provolone" },
          { name: "Julianna Salad", description: "Turkey, Roast Beef, Ham and Swiss" },
          { name: "Grilled Chicken Caesar Salad" },
          { name: "BBQ or Buffalo Grilled Chicken Salad" },
          { name: "Crispy Chicken Salad" },
          { name: "Teriyaki Grilled Chicken Salad" },
          { name: "Tuna Salad" },
          { name: "Calamari Salad" },
          { name: "Grilled Shrimp Caesar Salad" },
          { name: "Crab Cake Salad" },
          { name: "Herb Grilled Salmon Salad" },
          { name: "Alfredo Salad", description: "Romaine Lettuce, Craisins, Mandarin Oranges, Tomatoes" },
          { name: "Grilled Chicken Salad" },
        ],
      },
    ],
  },
  {
    id: "hot-subs",
    name: "Hot Subs",
    note: "Served with a complimentary bag of chips. Half and whole portions are listed on the restaurant menu.",
    groups: [
      {
        items: [
          { name: "Meatball Parm Sub" },
          { name: "Chicken Cutlet Sub", description: "Lettuce, Tomato & Mayo" },
          { name: "Chicken Cutlet Parm Sub" },
          { name: "Grilled Chicken Sub", description: "w/ Lettuce, Tomato & Mayo" },
          { name: "BBQ or Buffalo Chicken Sub", description: "Lettuce, Tomato, w/ Ranch or Blue Cheese" },
          { name: "Bacon Chicken Delight Sub", description: "w/ Lettuce, Tomato & Mayo" },
          { name: "Veal Cutlet Sub", description: "w/ Lettuce, Tomato & Mayo" },
          { name: "Veal Parmigiana Sub" },
          { name: "Veal & Peppers Sub" },
          { name: "Hot Roast Beef Sub", description: "w/ Gravy and Melted Mozzarella" },
          { name: "Sausage, Peppers & Onions Sub" },
          { name: "Sausage & Eggs Sub" },
          { name: "Sausage Parmigiana Sub" },
          { name: "Fried Flounder Filet Sub", description: "w/ Lettuce, Tomato & Tartar Sauce" },
          { name: "Shrimp Parmigiana Sub" },
          { name: "Peppers & Eggs Sub" },
          { name: "Grilled Veggie Sub" },
          { name: "Eggplant Parm" },
        ],
      },
    ],
  },
  {
    id: "cold-subs",
    name: "Cold Subs",
    note: "Garnished with lettuce, tomato, onion, salt, pepper, oregano, oil, and vinegar. Half and whole portions are listed on the restaurant menu.",
    groups: [
      {
        items: [
          { name: "Ham & Cheese Sub" },
          { name: "Salami & Cheese Sub" },
          { name: "Capicola & Cheese Sub" },
          { name: "Italian Sub" },
          { name: "Turkey Sub" },
          { name: "Roast Beef Sub" },
          { name: "Tuna Salad Sub" },
          { name: "Chicken Salad Sub" },
        ],
      },
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    note: "Served with a complimentary bag of chips and pickles.",
    groups: [
      {
        items: [
          { name: "Chicken Caesar Wrap" },
          { name: "Stir Fry Grilled Chicken Wrap", description: "w/ Peppers, Onions, Broccoli, and Mushrooms" },
          { name: "Turkey Club Wrap", description: "w/ Bacon, Swiss, Lettuce, Tomato & Mayo" },
          { name: "BBQ Or Buffalo Chicken Wrap", description: "w/ Lettuce, Tomato, Ranch or Blue Cheese" },
          { name: "Bacon Chicken Delight Wrap", description: "w/ Lettuce, Tomato & Mayo" },
          { name: "Smothered Chicken Wrap", description: "w/ Grilled Onion, Mushrooms & Mozzarella" },
          { name: "Crispy Chicken Wrap", description: "w/ Lettuce, Tomato & Mayo" },
          { name: "Cheese Steak Wrap", description: "w/ Peppers & Onions" },
          { name: "Grilled Veggie Wrap" },
        ],
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    note: "Served with a side salad, bread, and butter. The first sauce rows are published without a pasta shape.",
    groups: [
      {
        items: [
          { name: "w/ Tomato Sauce" },
          { name: "w/ Meatballs" },
          { name: "w/ Meat Sauce" },
          { name: "w/ Marinara Sauce" },
          { name: "w/ Oil & Garlic" },
          { name: "w/ Pesto Sauce" },
          { name: "w/ Mushroom Sauce" },
          { name: "Ravioli", description: "w/ Tomato Sauce" },
          { name: "Ziti Arrabiata" },
          { name: "Penne alla Vodka" },
          { name: "Fettuccini Alfredo" },
          { name: "Cavatelli & Broccoli", description: "w/ Oil & Garlic" },
          { name: "Tortellini Alfredo" },
          { name: "Gnocchi meat sauce", description: "w/ Meat Sauce" },
        ],
      },
    ],
  },
  {
    id: "baked-pasta",
    name: "Baked Pasta",
    note: "Served with a side salad, bread, and butter. These baked dishes are listed in the restaurant's pasta section.",
    groups: [
      {
        items: [
          { name: "Baked Ravioli", description: "w/ Melted Mozzarella" },
          { name: "Baked Ziti" },
          { name: "Baked Ziti Sicilian", description: "w/ Fried Eggplant" },
          { name: "Baked Stuffed Shells" },
          { name: "Baked Manicotti" },
          { name: "Meat Lasagna" },
          { name: "Veggie Lasagna" },
        ],
      },
    ],
  },
  {
    id: "chicken",
    name: "Chicken",
    note: "Served with a side salad, choice of pasta, bread, and butter.",
    groups: [
      {
        items: [
          { name: "Chicken Milanese", description: "Pan Fried Breaded Chicken" },
          { name: "Chicken Parmigiana" },
          { name: "Chicken Cacciatore", description: "Saut\u00e9ed Chicken w/ Peppers, Onions & Capers in a Marinara Sauce" },
          { name: "Chicken Marsala", description: "Saut\u00e9ed Chicken w/ Mushrooms in a Marsala Wine Sauce" },
          { name: "Chicken Francese", description: "Egg Battered Chicken Breast Saut\u00e9ed in White Wine & Lemon" },
          { name: "Chicken Saltimbocca", description: "Saut\u00e9ed Spinach & Mushrooms Topped W/ Prosciutto Mozzarella in a White Wine Sauce" },
          { name: "Chicken Piccata", description: "Chicken Saut\u00e9ed w/ Capers in a White Wine Lemon Sauce" },
          { name: "Chicken Cordon Blue", description: "Chicken Stuffed W/ Ham & Mozzarella in A Lemon White Wine Garlic Sauce" },
          { name: "Chicken Florentine", description: "Chicken Breast Saut\u00e9ed w/ Fresh Spinach Topped w/ Mozzarella in a Marinara Sauce" },
          { name: "Chicken Scampi", description: "Chicken Saut\u00e9ed w/ Fresh Garlic in Lemon White Wine Sauce" },
          { name: "Chicken Daniella", description: "Breaded Chicken in a Vodka Sauce w/ Melted Mozzarella" },
          { name: "Chicken Isabella", description: "Breaded Chicken Cutlet w/ Saut\u00e9ed Spinach, Mushrooms & Prosciutto Melted Mozzarella in a Marinara Sauce" },
          { name: "Chicken alla Erica", description: "Saut\u00e9ed Chicken w/ Onions, Black & Green Olives in a White Wine Marinara Sauce" },
        ],
      },
    ],
  },
  {
    id: "veal",
    name: "Veal",
    note: "Served with a side salad, choice of pasta, bread, and butter.",
    groups: [
      {
        items: [
          { name: "Veal Milanese", description: "Breaded Veal & Pan Fried" },
          { name: "Veal Cacciatore", description: "Saut\u00e9ed Veal w/ Peppers, Onions & Capers in a Marinara Sauce" },
          { name: "Veal Scaloppini w/ Mushrooms", description: "Saut\u00e9ed Veal & Mushroom w/ Fresh Garlic in a Lemon White Wine Sauce" },
          { name: "Veal Parmigiana" },
          { name: "Veal Marsala", description: "Saut\u00e9ed Veal w/ Mushrooms in Marsala Wine Sauce" },
          { name: "Veal Francese", description: "Egg Battered Veal Saut\u00e9ed in White Wine & Lemon Sauce" },
          { name: "Veal Saltimbocca", description: "Saut\u00e9ed Spinach & Mushrooms Topped w/ Prosciutto Mozzarella in a White Wine Sauce" },
        ],
      },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    note: "Served with a side salad, choice of pasta, bread, and butter.",
    groups: [
      {
        items: [
          { name: "Calamari Marinara" },
          { name: "Fried Calamari" },
          { name: "Fettuccini Alfredo w/ Shrimp" },
          { name: "Fried Shrimp" },
          { name: "Shrimp Marinara" },
          { name: "Shrimp Fra Diavolo", description: "Saut\u00e9ed Shrimp, Fresh Garlic & Hot Peppers in a Marinara Sauce" },
          { name: "Shrimp Parmigiana" },
          { name: "Shrimp Scampi", description: "Over Linguini" },
          { name: "Penne Vodka Sauce w/ Shrimp" },
          { name: "Mussels Marinara" },
          { name: "Seafood Combo", description: "Shrimp, Calamari, Clams and Mussels" },
          { name: "Linguini w/ Red Clam Sauce" },
          { name: "Linguini w/ White Clam Sauce" },
          { name: "Shrimp Francese", description: "Egg Battered Shrimp in a White Wine Lemon Sauce" },
          { name: "Fried Flounder" },
          { name: "Grilled Salmon", description: "w/ Grilled Vegetables" },
          { name: "Flounder Francese" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    groups: [
      {
        items: [
          { name: "Tiramisu" },
          { name: "Cannoli" },
          { name: "Cheese Cake" },
        ],
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    groups: [
      {
        items: [
          { name: "Soda - 20 oz." },
          { name: "Soda - 2 Liter" },
          { name: "Soda - Can" },
          { name: "Bottled Water" },
          { name: "Snapple" },
          { name: "Hot Tea" },
          { name: "Espresso" },
          { name: "Cappuccino" },
        ],
      },
    ],
  },
  {
    id: "calzones",
    name: "Calzones & Stromboli",
    note: "Served with a side of sauce.",
    groups: [
      {
        items: [
          { name: "Cheese Calzone - Medium" },
          { name: "Cheese Calzone - Large" },
          { name: "Chicken Parmigiana Stromboli" },
          { name: "Sausage or Pepperoni Stomboli" },
          { name: "Broccoli or Spinach Stromboli" },
          { name: "Vegetable Stromboli" },
        ],
      },
    ],
  },
  {
    id: "house-specialties",
    name: "House Specialties",
    note: "Served with a side salad, choice of pasta, bread, and butter.",
    groups: [
      {
        items: [
          { name: "Eggplant Parmigiana" },
          { name: "Sausage Parmigiana" },
          { name: "Meatball Parmigiana" },
          { name: "Sausage, Peppers & Onions" },
          { name: "Penne w/ Sausage & Broccoli", description: "in Marinara Sauce" },
          { name: "Eggplant Rollatini", description: "Stuffed w/ Ricotta & Mozzarella" },
        ],
      },
    ],
  },
  {
    id: "dinners",
    name: "Alfredo's Dinners",
    note: "Served with a side salad, bread, and butter.",
    groups: [
      {
        items: [
          { name: "Chicken & Broccoli Fettuccini oil garlic", description: "w/ White Wine, Oil, Garlic" },
          { name: "Fettuccini Alfredo chicken", description: "w/ Chicken" },
          { name: "Fettuccini Alfredo chicken & broccoli", description: "w/ Chicken & Broccoli" },
          { name: "Fettuccini w/ Sun Dried Tomatoes & Broccoli in Pink Sauce" },
          { name: "Penne Primavera", description: "Saut\u00e9ed Vegetables in a Pink Sauce" },
          { name: "Penne alla Vodka w/ chicken" },
          { name: "Combo: Sausage & Meatballs Parmigiana", description: "w/ Pasta" },
          { name: "Combo: Chicken Parmigiana", description: "w/ Baked Ziti" },
          { name: "Combo: Ravioli & Meatballs" },
          { name: "Spaghetti Carbonara", description: "Bacon, Eggs Tossed w/ Parmesan Cheese w/ a Touch of Cream" },
          { name: "Combo: Chicken Fingers", description: "w/ French Fries" },
          { name: "Baked Ravioli in Vodka Sauce" },
        ],
      },
    ],
  },
  {
    id: "baskets",
    name: "In a Basket",
    groups: [
      {
        items: [
          { name: "Chicken Fingers", description: "w/ French Fries" },
          { name: "Popcorn Shrimp", description: "w/ French Fries" },
          { name: "Clam Strips", description: "w/ French Fries" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Specialty Sandwiches",
    note: "Served with a complimentary bag of chips. Half and whole portions are listed on the restaurant menu.",
    groups: [
      {
        items: [
          { name: "French Dip Roast Beef Sandwich", description: "w/ Provolone Cheese w/ Side of Horseradish Sauce & Au Jus Sauce" },
          { name: "Homemade Meatloaf Sandwich", description: "Grilled Onions, Melted Mozzarella and Brown Gravy" },
          { name: "Grilled Chicken Sandwich", description: "Saut\u00e9ed Spinach, Prosciutto, Tomatoes, Parmesan Cheese & Olive Oil" },
          { name: "Grilled Chicken Sandwich", description: "Broccoli Rabe w/ Melted Mozzarella" },
          { name: "Grilled Chicken Sandwich", description: "On Garlic Bread w/ Roasted Red Peppers and Mozzarella" },
          { name: "Fried Eggplant Sandwich", description: "Roasted Peppers, Melted Mozzarella, w/ Basil and Mayo" },
          { name: "Crab Cake Sandwich", description: "w/ Lettuce, Tomato & Tartar Sauce" },
          { name: "Breakfast Burrito", description: "Egg, Bacon, Sausage, Peppers, Onions & Potato" },
          { name: "Italian Sausage & Broccoli Rabe Sandwich", description: "w/ Melted Provolone Cheese, Oil & Garlic" },
          { name: "Hot Pastrami Reuben On Rye Sandwich", description: "Pastrami, Swiss Cheese, Russian Dressing & Sauerkraut w/ French Fries" },
          { name: "Chicken Cutlet", description: "W/ Vodka Sauce & Melted Mozzarella" },
          { name: "Chicken Caprese", description: "Homemade Pesto, Tomato & Fresh Mozzarella" },
        ],
      },
    ],
  },
  {
    id: "steaks",
    name: "Cheese Steaks & Burgers",
    note: "Served with a complimentary bag of chips. Half and whole portions are listed for the steaks on the restaurant menu.",
    groups: [
      {
        items: [
          { name: "Cheese Steak" },
          { name: "Cheese Steak", description: "w/ Peppers & Onions" },
          { name: "Cheese Steak", description: "w/ Peppers, Onions & Mushrooms" },
          { name: "Pizza Cheese Steak" },
          { name: "California Cheese Steak", description: "w/ Lettuce, Tomato & Mayo" },
          { name: "Italian Hot Dog or Italian Sausage" },
          { name: "Cheese Burger", description: "w/ French Fries" },
          { name: "California Cheese Burger", description: "w/ French Fries, Lettuce, Tomato, Onion & Mayo" },
          { name: "Pizza Burger", description: "w/ French Fries" },
          { name: "Alfredos Fat Cat", description: "Cheese Burger Stuffed w/ French Fries, Lettuce, Tomato, Bacon, Mayo & Cheese" },
          { name: "Gyro", description: "Grilled Chicken or Lamb" },
          { name: "Chicken Cheese Steak" },
        ],
      },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    note: "Served with bread and butter.",
    groups: [
      {
        items: [
          { name: "Minestrone", description: "Italian Vegetable Soup, 16 oz." },
          { name: "Pasta Fagioli", description: "Beans & Macaroni, 16 oz." },
          { name: "Chicken Noodle", description: "16 oz." },
          { name: "French Onion", description: "16 oz." },
        ],
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    groups: [
      {
        items: [
          { name: "Meatballs" },
          { name: "French Fries" },
          { name: "Seasoned Curly Fries" },
          { name: "Onion Rings" },
          { name: "French Fries w/ Gravy" },
          { name: "Grilled Italian Sausage" },
          { name: "Saut\u00e9ed Broccoli Rabe", description: "w/ Garlic & Olive Oil" },
          { name: "Saut\u00e9ed Spinach", description: "w/ Garlic & Olive Oil" },
          { name: "Saut\u00e9ed Broccoli", description: "w/ Garlic & Olive Oil" },
          { name: "Grilled Zucchini", description: "w/ Marinara Sauce" },
        ],
      },
    ],
  },
];
