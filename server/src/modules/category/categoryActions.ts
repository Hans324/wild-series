// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

/* Here you code */
interface category {
  name: string;
}

import type { RequestHandler } from "express";
const browse: RequestHandler = (req, res) => {
  const search = req.query.q as string | undefined;
  if (search) {
    const filteredCategories = categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

// Export them to import them somewhere else
const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default {
  /* Here you export */
  browse,
  read,
};
