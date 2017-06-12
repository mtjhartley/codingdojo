-- 1. What query would you run to get all the customers inside city_id = 312? 
-- Your query should return customer first name, last name, email, and address.

SELECT customer.first_name, customer.last_name, customer.email, address.address, address.city_id
FROM customer
JOIN address ON customer.address_id = address.address_id
WHERE address.city_id = 312

-- 2. What query would you run to get all comedy films? 
-- Your query should return film title, description, release year, rating, special features, and genre (category).

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Comedy'


-- 3. What query would you run to get all the films joined by actor_id=5?
-- Your query should return the actor id, actor name, film title, description, and release year.
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS name, film.title, film.description, film.release_year
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = '5'

-- 4. What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)? 
-- Your query should return customer first name, last name, email, and address.

SELECT store.store_id, city.city_id, customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN store on customer.store_id = store.store_id
JOIN address on customer.address_id = address.address_id
JOIN city on address.city_id = city.city_id
WHERE store.store_id = '1' and city.city_id in (1, 42, 312, 459)

-- 5. What query would you run to get all the films with a "rating = G" and "special feature = behind the scenes", 
-- joined by actor_id = 15? Your query should return the film title, description, release year, rating,
-- and special feature. Hint: You may use LIKE function in getting the 'behind the scenes' part.

SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
WHERE film.special_features LIKE '%Behind the Scenes%'
AND film.rating = 'G' AND film_actor.actor_id = 15

-- 6. What query would you run to get all the actors that joined in the film_id = 369? 
-- Your query should return the film_id, title, actor_id, and actor_name.
SELECT film_actor.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) as full_name FROM actor
JOIN film_actor on actor.actor_id = film_actor.actor_id
JOIN film on film_actor.film_id = film.film_id
WHERE film_actor.film_id = 369

--7. What query would you run to get all drama films with a rental rate of 2.99? 
-- Your query should return film title, description, release year, rating, special features, and genre (category).
 
select film.film_id, film.title, film.description, film.release_year, film.special_features, category.name, film.rental_rate from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
WHERE category.name = 'Drama' and film.rental_rate = 2.99

-- 8. What query would you run to get all the action films which are joined by SANDRA KILMER? 
-- Your query should return film title, description, release year, rating, special features, genre (category), and actor's first name and last name.
SELECT actor.actor_id, actor.first_name, actor.last_name, film.film_id, category.name AS genre, film.title, film.description,
film.release_year, film.rating, film.special_features
FROM actor
JOIN film_actor on actor.actor_id = film_actor.actor_id
JOIN film on film_actor.film_id = film.film_id
JOIN film_category on film.film_id = film_category.film_id
JOIN category on film_category.category_id = category.category_id
WHERE actor.first_name = 'SANDRA' and actor.last_name = 'KILMER' AND category.name = 'Action'

/*
Selecting from actor first makes more sense, and then filtering down from there!
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre, actor.first_name, actor.last_name
FROM film
JOIN film_category on film.film_id = film_category.film_id
JOIN category on film_category.category_id = category.category_id
JOIN film_actor on film.film_id = film_actor.actor_id
JOIN actor on film_actor.actor_id = actor.actor_id
WHERE category.name = 'Action' AND actor.first_name = 'SANDRA' AND actor.last_name = 'KILMER'
*/
