const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require("path");
const cloudinary = require("cloudinary").v2;

// Routes
const UserRoutes = require('./Routes/UserRoutes');
const ProductRoutes = require("./Routes/ProductRoutes");


// Load .env variables
dotenv.config();

// Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware


app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((error) => console.error("❌ MongoDB Connection Error:", error));

// ✅ Configure Cloudinary once
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dqfi8tfql',
  api_key: process.env.CLOUDINARY_API_KEY || '291623691834957',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'jgxQyRn8LrWk9aX2n5eWvmPX7pA',
});

// ✅ OPTIONAL: Upload one system image at server start
// (async function uploadImageOnce() {
//   try {
//     for (const mobile of mobiles) {
//       const imagePath = path.resolve(__dirname, `images/${mobile}`);
      
//       const uploadResult = await cloudinary.uploader.upload(imagePath, {
//         public_id: `product-${Date.now()}`,
//         folder: "products",
//       });

//       console.log(`📦 Uploaded ${mobile} → 🔗 ${uploadResult.secure_url}`);
//     }

//     console.log("✅ All images uploaded to Cloudinary.");
//   } catch (err) {
//     console.error("❌ Cloudinary Upload Failed:", err.message);
//   }
// })();

// Routes
app.use(express.json());
app.use("/api/user", UserRoutes);
app.use("/api/productscategories", ProductRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
