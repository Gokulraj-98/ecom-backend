const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const products = require('./data/products');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error(err);
});

// Import Data into the Database
const importData = async () => {
    try {
        // Clear existing products
        await Product.deleteMany();

        // Insert sample products
        await Product.insertMany(products);

        console.log("Data Imported Successfully");
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Delete Data from the Database (optional for future use)
const deleteData = async () => {
    try {
        await Product.deleteMany();

        console.log("Data Deleted Successfully");
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Call importData when you run the script
if (process.argv[2] === '-d') {
    deleteData();
} else {
    importData();
}
