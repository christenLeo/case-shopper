const { emitKeypressEvents } = require("readline");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE IF NOT EXISTS shopper_orders (
            id VARCHAR(255) PRIMARY KEY,
            client_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            product_qty INT NOT NULL,
            total_value FLOAT NOT NULL,
            deliver_date DATE NOT NULL,
            FOREIGN KEY (client_id) REFERENCES shopper_clients (id),
            FOREIGN KEY (product_id) REFERENCES shopper_products (id)
        );
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('shopper_orders');
};
