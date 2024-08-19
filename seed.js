const { Category, Product, Tag } = require('./models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await Category.bulkCreate([
        {name: 'Toys'},
        {name: 'Food'},
    ]);

    await Product.bulkCreate([
        {name: 'Buzz Lightyear', price: 20.0, categoryId: 1 },
        { name: 'Tomato', price : 5.5, categoryId: 2},
    ]);

    await Tag.bulkCreate([
        {name: 'Tag 1'},
        {name: 'Tag 2'},
    ]);

    console.log('Your database has been seeded!!');
    process.exit(0);
};

seedDatabase();
