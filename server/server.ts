import express from 'express';
import storageRoutes from './routes/azure/azure-storage-route';

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Use routes
app.use('/api/azure-storage', storageRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});