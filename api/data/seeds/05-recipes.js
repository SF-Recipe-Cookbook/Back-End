exports.seed = function (knex) {
  return knex('recipes').insert([
    {
      user_id: 1,
      category_id: 1,
      name: 'Easy Pancakes',
      description:
        "This recipe doesn't require much thought early in the morning, and tastes great!",
      ingredients: 'flour, sugar, baking powder, salt',
      instructions:
        'In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.',
      prep_time: 5,
      cook_time: 10,
      image_url: 'https://source.unsplash.com/TkzdkVn1AyA',
    },

    {
      user_id: 1,
      category_id: 3,
      name: 'Greek Chicken Skewers',
      description:
        'Greek-inspired chicken skewers with lots of flavor! Marinade is also wonderful on grilled vegetables.',
      ingredients: 'flour, sugar, baking powder, salt',
      instructions:
        'In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.',
      prep_time: 5,
      cook_time: 10,
      image_url: 'https://source.unsplash.com/WHtVB-RiW2I',
    },

    {
      user_id: 1,
      category_id: 2,
      name: 'spaghetti',
      description: 'spaghetti',
      ingredients: 'flour, sugar, baking powder, salt',
      instructions:
        'In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.',
      prep_time: 5,
      cook_time: 10,
      image_url: 'https://source.unsplash.com/qits91IZv1o',
    },

    {
      user_id: 2,
      category_id: 2,
      name: 'Lasagna',
      description: 'Lasagna',
      ingredients: 'flour, sugar, baking powder, salt',
      instructions:
        'In a large bowl, mix flour, sugar, baking powder and salt. Make a well in the center, and pour in milk, egg and oil. Mix until smooth.',
      prep_time: 5,
      cook_time: 10,
      image_url: 'https://source.unsplash.com/44pKJMz9TeU',
    },
  ]);
};
