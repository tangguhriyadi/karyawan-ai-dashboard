// File: const/db.ts
// This file defines the database table names used throughout the application.
// It is used to ensure consistency and avoid hardcoding table names in multiple places.

export const DB_TABLES = {
    CATEGORIES: "categories",
    MOOTASI_RECEIPT_ITEMS: "receipt_items",
    MOOTASI_RECEIPTS: "receipts",
    MOOTASI_TELEGRAM_BOT: "telegram_bot",
    N8N_CHAT_HISTORIES: "n8n_chat_histories",
    ORGANIZATION: "organization",
    ORGANIZATION_TYPE: "organization_type",
    PAYMENT: "payment",
    PAYMENT_HISTORY: "payment_history",
    PAYMENT_PRODUCT: "payment_product",
    PRODUCT_CATEGORIES: "product_categories",
    PRODUCT_ORGANIZATION: "product_organization",
    PRODUCT_PRICE: "product_price",
    PRODUCT_TESTIMONIES: "product_testimonies",
    PRODUCTS: "products",
    USER_CART: "user_cart",
    USER_REFERRAL: "user_referral",
    USERS: "users",
  };
  
  export default DB_TABLES;