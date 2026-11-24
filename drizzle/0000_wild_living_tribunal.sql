CREATE TABLE `reservations` (
	`gift_id` text PRIMARY KEY NOT NULL,
	`token_hash` text NOT NULL,
	`created_at` integer NOT NULL
);
