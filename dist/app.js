"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const router_1 = __importDefault(require("./router"));
const swaggerUi = require('swagger-ui-express');
const swagger_1 = __importDefault(require("./config/swagger"));
const corsOptions = {
    origin: [
        'https://ryanyou.com',
        'http://localhost:3000',
    ],
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};
const app = (0, express_1.default)();
app.use(cors(corsOptions));
app.use(express_1.default.json());
app.use('/uploads', express_1.default.static('uploads'));
app.use('/todos', router_1.default.todoRouter);
app.use('/user', router_1.default.userRouter);
app.use('/file', router_1.default.uploadRouter);
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swagger_1.default));
app.listen(3001, () => {
    console.log(`server is running on 3001 port and already to service`);
});
