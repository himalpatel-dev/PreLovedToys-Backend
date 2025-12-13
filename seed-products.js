const db = require('./src/models');

// ---------------------------
// Raw Product Data (Human Readable)
// ---------------------------


const rawProducts = [
    {
        title: "Car Set 15 pcs",
        price: "30",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "Black",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1715254160.jpg"
    },
    {
        title: "Flying Disk Small",
        price: "30",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Flying Disk",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1731314801.png"
    },
    {
        title: "Bubble Fun Junior",
        price: "40",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1711128646.png"
    },
    {
        title: "MGR 3 No",
        price: "40",
        condition: "Good",
        category: "Musical Toys",
        subCategory: "Jhoomer",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1700811329.jpeg"
    },
    {
        title: "Mini Grand Prix",
        price: "40",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1700806490.jpeg"
    },
    {
        title: "Hot Pot",
        price: "40",
        condition: "Good",
        category: "Others",
        subCategory: "Kitchen Set",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Other",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1712565388.png"
    },
    {
        title: "Money Bank Smiley",
        price: "40",
        condition: "Good",
        category: "Others",
        subCategory: "Piggy Bank",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "Yellow",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1728562385.png"
    },
    {
        title: "Flying Disc Big",
        price: "40",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1731318352.png"
    },
    {
        title: "1210 Mix Blocks",
        price: "40",
        condition: "Good",
        category: "Block Games",
        subCategory: "Activity Blocks",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1710792388.png"
    },
    {
        title: "Lock Toy Box Popular",
        price: "40",
        condition: "Good",
        category: "Others",
        subCategory: "Piggy Bank",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "Green",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1704800247.jpeg"
    },
    {
        title: "The Bat car ( 2 pcs )",
        price: "40",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753705812.jpg"
    },
    {
        title: "Toy Pressure Cooker",
        price: "40",
        condition: "Good",
        category: "Others",
        subCategory: "Kitchen Set",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Other",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1704868592.jpg"
    },
    {
        title: "J.r Musical Rattle",
        price: "50",
        condition: "Good",
        category: "Musical Toys",
        subCategory: "Rattles",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1747389468.jpg"
    },
    {
        title: "Mini Champ",
        price: "50",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1700756940.jpeg"
    },
    {
        title: "Bliss Kids Construction Set",
        price: "50",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1720785879.png"
    },
    {
        title: "Jungle Safari Toy Box",
        price: "50",
        condition: "Good",
        category: "Others",
        subCategory: "Piggy Bank",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1729145725.png"
    },
    {
        title: "Toy Pressure Cooker Big",
        price: "50",
        condition: "Good",
        category: "Others",
        subCategory: "Kitchen Set",
        ageGroup: "7-10 Years",
        gender: "Girls",
        color: "",
        material: "Other",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1704868512.jpg"
    },
    {
        title: "Fashion Boutique",
        price: "50",
        condition: "Good",
        category: "Soft Toys",
        subCategory: "Dolls",
        ageGroup: "3-7 Years",
        gender: "Girls",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1704814900.jpg"
    },
    {
        title: "Labster winding Key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696218.jpg"
    },
    {
        title: "Dinsoaur Jumping key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696239.jpg"
    },
    {
        title: "Goose jumping Key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696341.jpg"
    },
    {
        title: "Fish winding Key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696362.jpg"
    },
    {
        title: "Ladybur winding Key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696382.jpg"
    },
    {
        title: "Scropion winding Key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696406.jpg"
    },
    {
        title: "Hen jumping Key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696424.jpg"
    },
    {
        title: "Lizard winding Key Toys",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753696443.jpg"
    },
    {
        title: "Squeezy Cup CakeMini",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Other",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1730890187.png"
    },
    {
        title: "Squuezy Donut Mini",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Other",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1730889880.png"
    },
    {
        title: "Water Teether",
        price: "50",
        condition: "Good",
        category: "Others",
        subCategory: "Teether",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1747389898.jpg"
    },
    {
        title: "Jump Rider",
        price: "50",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Bike",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753859954.jpeg"
    },
    {
        title: "Infant Rattles 2 Pcs",
        price: "50",
        condition: "Good",
        category: "Musical Toys",
        subCategory: "Rattles",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1734432318.png"
    },
    {
        title: "CRICKET BALL MINI SET (PACK OF 6)",
        price: "50",
        condition: "Good",
        category: "Sports",
        subCategory: "Cricket Sets",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753350345.jpg"
    },
    {
        title: "Puzzle Vegetable",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Fruit & Vegetable",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733987388.jpg"
    },
    {
        title: "Puzzle Insects & Butterflies",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Animal & Bird",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733987409.jpg"
    },
    {
        title: "Puzzle World of Animals",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Animal & Bird",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733987432.jpg"
    },
    {
        title: "Puzzle Flowers",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Educational",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733987466.jpg"
    },
    {
        title: "Puzzle Fruits",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Fruit & Vegetable",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733987486.jpg"
    },
    {
        title: "Puzzle Bird Beauty",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Animal & Bird",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733987508.jpg"
    },
    {
        title: "Puzzle Sea Animal",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Animal & Bird",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733987530.jpg"
    },
    {
        title: "Airplanes",
        price: "50",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Plane",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "Black",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1715253655.jpg"
    },
    {
        title: "Puzzle Transport Fruit Shape Vegetable Puzzle PR 5",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Fruit & Vegetable",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1712393600.png"
    },
    {
        title: "Mini Loading Vehicle",
        price: "50",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Push & Go Toys",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733828408.png"
    },
    {
        title: "Nissan City Servies",
        price: "50",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753859970.jpeg"
    },
    {
        title: "Mini Jumbo 747",
        price: "50",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Plane",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1704793606.jpeg"
    },
    {
        title: "Pocket Snakes & Ladders",
        price: "50",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Educational",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Cardboard",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1731397020.png"
    },
    {
        title: "Teddy Ring Small",
        price: "50",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Teddy Ring",
        ageGroup: "3-7 Years",
        gender: "Girls",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1712045992.png"
    },
    {
        title: "T.T.RACKET SET/ JR.",
        price: "60",
        condition: "Good",
        category: "Sports",
        subCategory: "Table Tennis",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1753349673.jpg"
    },
    {
        title: "Flash Cards Transport & Traffic",
        price: "60",
        condition: "Good",
        category: "Educational Toys",
        subCategory: "Flash Cards",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1736831487.png"
    },
    {
        title: "Flash Cards Bird Beauty",
        price: "60",
        condition: "Good",
        category: "Educational Toys",
        subCategory: "Flash Cards",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1736831430.png"
    },
    {
        title: "Flash Cards Vegatable & Spices",
        price: "60",
        condition: "Good",
        category: "Educational Toys",
        subCategory: "Flash Cards",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1736831369.png"
    },
    {
        title: "Flash Cards Shapes & Colours",
        price: "60",
        condition: "Good",
        category: "Educational Toys",
        subCategory: "Flash Cards",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1736831280.png"
    },
    {
        title: "Flash Cards Numbers & Activity",
        price: "60",
        condition: "Good",
        category: "Educational Toys",
        subCategory: "Flash Cards",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1736831210.png"
    },
    {
        title: "Flash Cards Alphabets & Activity",
        price: "60",
        condition: "Good",
        category: "Educational Toys",
        subCategory: "Flash Cards",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1736831126.png"
    },
    {
        title: "Fish Key Toy",
        price: "60",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "Black",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1715248744.jpg"
    },
    {
        title: "Lobster Key Toy",
        price: "60",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "Black",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1715249099.jpg"
    },
    {
        title: "Lady Bug Key Toy",
        price: "60",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "Black",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1715249334.jpg"
    },
    {
        title: "Lizard Key Toy",
        price: "60",
        condition: "Good",
        category: "Activity Games",
        subCategory: "Other Activity Game",
        ageGroup: "0-3 Years",
        gender: "Unisex",
        color: "Black",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1715249562.jpg"
    },
    {
        title: "Hockey & Ball",
        price: "60",
        condition: "Good",
        category: "Sports",
        subCategory: "Hockey",
        ageGroup: "3-7 Years",
        gender: "Boys",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1748587381.jpg"
    },
    {
        title: "Musical Rattle",
        price: "60",
        condition: "Good",
        category: "Musical Toys",
        subCategory: "Rattles",
        ageGroup: "3-7 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1747388586.jpg"
    },
    {
        title: "Pocket Puzzle Mix",
        price: "60",
        condition: "Good",
        category: "Puzzles",
        subCategory: "Fun Puzzle Games",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "Grey",
        material: "Woolen",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1704263693.jpg"
    },
    {
        title: "My First Race Car",
        price: "60",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1733828540.png"
    },
    {
        title: "Rattle 4 Pouch",
        price: "60",
        condition: "Good",
        category: "Musical Toys",
        subCategory: "Rattles",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1730889535.png"
    },
    {
        title: "Bliss Kids Train Set",
        price: "60",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1720785825.png"
    },
    {
        title: "Bliss Kids Car",
        price: "60",
        condition: "Good",
        category: "Push & Pull Toys",
        subCategory: "Cars",
        ageGroup: "7-10 Years",
        gender: "Unisex",
        color: "",
        material: "Plastic",
        image: "https://khilionamartprod.s3.ap-south-1.amazonaws.com/product/1720785202.png"
    }
];


// ---------------------------
// Seeder Function
// ---------------------------
async function seedProducts() {
    try {
        console.log('🌱 Seeding Products based on new Master Data...');

        // 1️⃣ Ensure we have a demo ADMIN seller
        let adminSeller = await db.User.findOne({
            where: { role: 'admin' }
        });

        if (!adminSeller) {
            console.log('Creating demo ADMIN seller...');
            adminSeller = await db.User.create({
                mobile: '9999999999',
                name: 'Demo Admin',
                role: 'admin'
            });

            // Create wallet for admin seller
            await db.Wallet.create({
                userId: adminSeller.id,
                balance: '300' // Initial welcome bonus
            });

            // Create initial transaction record
            await db.WalletTransaction.create({
                walletId: adminSeller.id,
                type: 'credit',
                amount: '300',
                balanceAfter: '300',
                description: 'Welcome bonus - Account creation',
                refUserId: null
            });

            console.log('✅ Wallet created for Admin seller with 300 points');
        }

        // 2️⃣ Ensure we have a demo USER seller
        let userSeller = await db.User.findOne({
            where: { mobile: '9727376727' }
        });

        if (!userSeller) {
            console.log('Creating demo USER seller...');
            userSeller = await db.User.create({
                mobile: '9727376727',
                role: 'user'
            });

            // Create wallet for user seller
            await db.Wallet.create({
                userId: userSeller.id,
                balance: '300' // Initial welcome bonus
            });

            // Create initial transaction record
            await db.WalletTransaction.create({
                walletId: userSeller.id,
                type: 'credit',
                amount: '300',
                balanceAfter: '300',
                description: 'Welcome bonus - Account creation',
                refUserId: null
            });

            console.log('✅ Wallet created for User seller with 300 points');
        }

        for (const p of rawProducts) {
            const colorName = (p.color && p.color.toString().trim()) ? p.color.trim() : 'Multi-color';
            // 2. LOOKUP ALL IDs DYNAMICALLY
            const cat = await db.Category.findOne({ where: { name: p.category } });
            const sub = await db.SubCategory.findOne({ where: { name: p.subCategory } });
            const age = await db.AgeGroup.findOne({ where: { name: p.ageGroup } });
            const gen = await db.Gender.findOne({ where: { name: p.gender } });
            const col = await db.Color.findOne({ where: { name: colorName } });
            const mat = await db.Material.findOne({ where: { name: p.material } });

            // 3. Validate Data Found
            if (cat && sub && age && gen && col && mat) {

                // 4. Create Product
                const newProduct = await db.Product.create({
                    title: p.title,
                    description: 'Introducing Our New Product ' + p.title,
                    price: p.price,
                    condition: p.condition,
                    status: 'active',
                    userId: userSeller.id,

                    // Foreign Keys
                    categoryId: cat.id,
                    subCategoryId: sub.id,
                    ageGroupId: age.id,
                    genderId: gen.id,
                    colorId: col.id ? col.id : null,
                    materialId: mat.id ? mat.id : null
                });

                // 5. Add Image
                await db.ProductImage.create({
                    productId: newProduct.id,
                    imageUrl: p.image,
                    isPrimary: true
                });

                console.log(`✅ Added: ${p.title}`);
            } else {
                console.log(`❌ FAILED to add: ${p.title}`);
                if (!cat) console.log(`   Missing Category: ${p.category}`);
                if (!sub) console.log(`   Missing SubCategory: ${p.subCategory}`);
                if (!age) console.log(`   Missing AgeGroup: ${p.ageGroup}`);
                if (!gen) console.log(`   Missing Gender: ${p.gender}`);
                if (!col) console.log(`   Missing Color: ${p.color}`);
                if (!mat) console.log(`   Missing Material: ${p.material}`);
            }
        }

        console.log('🎉 Product Seeding Completed!');

    } catch (error) {
        console.error('❌ Error seeding products:', error);
    } finally {
        // Close connection
        if (db.sequelize && typeof db.sequelize.close === 'function') {
            await db.sequelize.close();
        }
    }
}

// Run
seedProducts();