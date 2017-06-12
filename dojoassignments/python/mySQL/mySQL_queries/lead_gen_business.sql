-- #1
SELECT SUM(amount) FROM billing
WHERE DATE(charged_datetime) BETWEEN '2012-03-01' AND '2013-03-31'

-- #2
SELECT SUM(amount) FROM billing
WHERE client_id = 2

-- #3
SELECT *
FROM sites
WHERE client_id = 10

-- #4
SELECT client_id, COUNT(domain_name) as number_of_websites, MONTHNAME(created_datetime) as month_created, YEAR(created_datetime) as year_created
FROM sites
WHERE client_id = 1
GROUP BY YEAR(created_datetime), MONTH(created_datetime);

-- Part 2
SELECT client_id, COUNT(domain_name) as number_of_websites, MONTHNAME(created_datetime) as month_created, YEAR(created_datetime) as year_created
FROM sites
WHERE client_id = 20
GROUP BY YEAR(created_datetime), MONTH(created_datetime);

-- #5
SELECT count(leads_id), domain_name, client_id
FROM leads AS t1 
LEFT JOIN sites AS t2 ON t1.site_id = t2.site_id 
WHERE registered_datetime >= '2011-01-01' 
AND registered_datetime <= '2011-02-15' GROUP BY domain_name;

-- #6
SELECT CONCAT(clients.first_name, " ", clients.last_name) as client_name, 
COUNT(leads_id) AS number_of_leads 
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id 
LEFT JOIN leads ON sites.site_id = leads.site_id 
WHERE leads.registered_datetime >= '2011-01-01' AND leads.registered_datetime <= '2011-12-31' 
GROUP BY clients.client_id;


-- #7
SELECT CONCAT(clients.first_name, ' ', clients.last_name) as cilent_name,
		COUNT(leads.leads_id) as number_of_leads,
        MONTHNAME(leads.registered_datetime) as month_generated
FROM clients
LEFT JOIN sites on clients.client_id = sites.client_id
LEFT JOIN leads on sites.site_id = leads.site_id
WHERE leads.registered_datetime >= '2011-01-01' and leads.registered_datetime <= '2011-06-31'
GROUP BY clients.client_id

-- #8
SELECT CONCAT(clients.first_name, " ", clients.last_name) AS client_name, 
sites.domain_name AS website, COUNT(leads.leads_id) AS number_of_leads
FROM clients 
LEFT JOIN sites AS sites ON clients.client_id = sites.client_id 
LEFT JOIN leads ON sites.site_id = leads.site_id 
WHERE leads.registered_datetime >= '2011-01-01' AND leads.registered_datetime <= '2011-12-31' 
GROUP BY client_name, sites.site_id;

-- Part 2 

SELECT CONCAT(clients.first_name, " ", clients.last_name) AS client_name, 
sites.domain_name AS website, COUNT(leads.leads_id) AS number_of_leads
FROM clients 
LEFT JOIN sites AS sites ON clients.client_id = sites.client_id 
LEFT JOIN leads ON sites.site_id = leads.site_id 
GROUP BY client_name, sites.site_id;

-- #9

SELECT CONCAT(clients.first_name, " ", clients.last_name) AS client_name, SUM(billing.amount) AS total_revenue, 
MONTHNAME(billing.charged_datetime) AS month_charged, YEAR(billing.charged_datetime) AS year_charged 
FROM clients
LEFT JOIN billing ON clients.client_id = billing.client_id 
GROUP BY clients.client_id, charged_datetime;

-- #10
SELECT concat(clients.first_name, " ", clients.last_name) AS client_name, 
GROUP_CONCAT(sites.domain_name) AS sites 
FROM clients 
LEFT JOIN sites ON clients.client_id = sites.client_id GROUP BY clients.client_id;