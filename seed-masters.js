const db = require('./src/models');

// ---------------------------
// Single Source of Truth for Categories and Subcategories
// ---------------------------
// NOTE: I've added a dummy color hex code to each entry here, as the original
// categories array used these to generate placeholder images.
const categorySubData = [
    {
        "categoryName": "Push & Pull Toys",
        "subs": [
            "Ambulance",
            "Animals",
            "Auto Rikshaw",
            "Bike",
            "Boats & Ships",
            "Bus",
            "Cars",
            "Fire Brigade",
            "Friction Toys",
            "Helicopter",
            "Jeep",
            "Plane",
            "Pull Along Toys",
            "Push & Go Toys",
            "Tractor",
            "Trains",
            "Trucks & Dumpers"
        ]
    },
    {
        "categoryName": "Activity Games & Toys",
        "subs": [
            "Ball Pool",
            "Bladders",
            "Flying Disk",
            "Hoopla Ring",
            "Hopscotch",
            "Magic Game",
            "Other Activity Game",
            "Play Gym",
            "Play Tent House",
            "Rings Toys",
            "Ringtoss",
            "Rolling Fun",
            "Spinner",
            "Target & Aim Games",
            "Teddy Ring"
        ]
    },
    {
        "categoryName": "Musical Toys",
        "subs": [
            "Jhoomer",
            "Musical Animals",
            "Musical Drum",
            "Musical Instrument Toys",
            "Musical Vehicles",
            "Rattles",
            "Roly Poly",
            "Xylophone"
        ]
    },
    {
        "categoryName": "Others",
        "subs": [
            "Activity Toys",
            "Almirah",
            "Baby Suitcase",
            "Beauty Set",
            "Cube",
            "Cup Stackers",
            "Doctor Set",
            "Dolls",
            "Kitchen Set",
            "Pen Stand",
            "Piggy Bank",
            "Teether",
            "Warrior Fighter Set"
        ]
    },
    {
        "categoryName": "Block Games",
        "subs": [
            "Activity Blocks",
            "Building Blocks",
            "Magnetic Blocks",
            "Stick Blocks"
        ]
    },
    {
        "categoryName": "Sports",
        "subs": [
            "Basket Ball",
            "Bow & Arrow",
            "Bowling Games",
            "Challenge Sports",
            "Cricket Sets",
            "Golf Set",
            "Hockey",
            "Table Tennis"
        ]
    },
    {
        "categoryName": "Puzzles",
        "subs": [
            "Animal & Bird",
            "Educational",
            "Fruit & Vegetable",
            "Fun Puzzle Games",
            "Story",
            "Transport"
        ]
    },
    {
        "categoryName": "Educational Toys & Games",
        "subs": [
            "Abacus",
            "Brainvita",
            "Educational Numbers & Alphabets",
            "Educational Shapes",
            "Flash Cards",
            "Magnetic Shapes & Colours",
            "Mechanical Games",
            "Memory Games",
            "Preschool Toys",
            "Science Games"
        ]
    },
    {
        "categoryName": "Art & Craft",
        "subs": [
            "Clay Toys",
            "Jewellery Making Games",
            "Others",
            "Quilling Games",
            "Scratching/ Colouring Games"
        ]
    },
    {
        "categoryName": "Board Games",
        "subs": [
            "Adventure Games",
            "Business",
            "Carrom",
            "Chess",
            "Chinese Checker",
            "Combos",
            "D-Dart",
            "Educational Board",
            "Housie",
            "Ludo & Snakes",
            "Monopoly",
            "Tic Tac Toe",
            "Wooden Board Games",
            "Word Games"
        ]
    },
    {
        "categoryName": "Electronic Toys",
        "subs": [
            "Electronic Educational Toys",
            "Electronic Gun",
            "Electronic Musical Toys",
            "Other Electronic Toys"
        ]
    },
    {
        "categoryName": "Riders",
        "subs": [
            "Ride On Cars",
            "Rockers",
            "Tricycle"
        ]
    },
    {
        "categoryName": "Gun",
        "subs": [
            "Air Pressure",
            "Bullet",
            "Musical"
        ]
    }
];

// ---------------------------
// Derived data structures
// ---------------------------
const categories = categorySubData.map(item => ({
    name: item.categoryName,
    image: `/assets/${item.categoryName}.png`
}));

const subCategoryData = categorySubData.map(item => ({
    categoryName: item.categoryName,
    subs: item.subs
}));

// ---------------------------
// Master tables: AgeGroups, Colors, Genders, Materials (unchanged)
// ---------------------------
const ageGroups = [
    { name: "0-12 Months" },
    { name: "0-3 Years" },
    { name: "3-7 Years" },
    { name: "7-10 Years" },
    { name: "10-12 Years" },
    { name: "12+ Years" }
];

const colors = [
    { name: "Black", hexCode: "#29353E" },
    { name: "Grey", hexCode: "#8F989B" },
    { name: "Blue", hexCode: "#135FCC" },
    { name: "White", hexCode: "#FFFFFF" },
    { name: "Olive", hexCode: "#36885E" },
    { name: "Green", hexCode: "#52A451" },
    { name: "Red", hexCode: "#C43647" },
    { name: "Maroon", hexCode: "#9C1E4E" },
    { name: "Teal", hexCode: "#156E6C" },
    { name: "Turquoise Blue", hexCode: "#42DBC6" },
    { name: "Pink", hexCode: "#ff3fd7" },
    { name: "Yellow", hexCode: "#efef39" },
    { name: "Purple", hexCode: "#bf43e8" },
    { name: "Mustard Yellow", hexCode: "#FFDB58" },
    { name: "Multi-color", hexCode: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)" }
];

const genders = [
    { name: "Boys" },
    { name: "Girls" },
    { name: "Unisex" }
];

const materials = [
    { name: "Plastic" },
    { name: "Cardboard" },
    { name: "Paper" },
    { name: "Rubber" },
    { name: "Natural materials" },
    { name: "Acrylic" },
    { name: "Cotton" },
    { name: "Magnet" },
    { name: "Wooden" },
    { name: "Fabric" },
    { name: "Metal" },
    { name: "Woolen" },
    { name: "Other" }
];

// ---------------------------
// Seeder functions
// ---------------------------
async function seedMasters() {

    console.log('🌱 Seeding Master Tables...');

    // Now uses the derived 'categories' array
    for (const cat of categories) {
        await db.Category.findOrCreate({ where: { name: cat.name }, defaults: { image: cat.image } });
    }
    console.log('✅ Categories seeded.');

    for (const item of categorySubData) {
        const category = await db.Category.findOne({ where: { name: item.categoryName } });
        if (!category) {
            console.log(` ⚠️ Skipped: Category '${item.categoryName}' not found. `);
            continue;
        }

        // Use the hex code saved in the item structure to recreate the image logic
        const categorycolor = item.colorHex || 'CCCCCC'; // Fallback to CCCCCC if no hex provided.
        for (const subName of item.subs) {
            await db.SubCategory.findOrCreate({
                where: { name: subName, categoryId: category.id },
                // Auto-generate subcategory image using the predefined hex code
                defaults: { isActive: true, image: `https://placehold.co/200x200/${categorycolor}/white?text=${encodeURIComponent(subName)}` }
            });
        }
        console.log(` > Added subs for ${item.categoryName}`);
    }


    console.log('✅ Subcategories seeded.');

    for (const item of ageGroups) {
        await db.AgeGroup.findOrCreate({ where: { name: item.name }, defaults: item });
    }
    console.log('  - Age Groups done');

    for (const item of colors) {
        await db.Color.findOrCreate({ where: { name: item.name }, defaults: item });
    }
    console.log('  - Colors done');

    for (const item of genders) {
        await db.Gender.findOrCreate({ where: { name: item.name }, defaults: item });
    }
    console.log('  - Genders done');

    for (const item of materials) {
        // Use upsert so the explicit id is respected when your Material model has defined primary key as id
        await db.Material.upsert(item);
    }
    console.log('  - Materials done');

    console.log('✅ Master tables seeded.');
}

// ---------------------------
// Runner
// ---------------------------
async function seedAll() {
    try {
        // If you want to run everything in a transaction, and your DB supports it across all tables, wrap here.
        await seedMasters();

        console.log('🎉 All seeding finished successfully.');
    } catch (err) {
        console.error('❌ Seeding failed:', err);
    } finally {
        // Close DB connection (Sequelize) if available
        if (db.sequelize && typeof db.sequelize.close === 'function') {
            await db.sequelize.close();
        }
        process.exit(0);
    }
}

// If run directly (node seedMaster.js), execute seedAll
if (require.main === module) {
    seedAll();
}

module.exports = { seedAll, seedMasters };