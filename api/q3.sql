SELECT authors.name, SUM(sale_items.item_price * sale_items.quantity) AS sum
FROM sale_items
JOIN books ON sale_items.book_id = books.id
JOIN authors ON books.author_id = authors.id
GROUP BY authors.name
ORDER BY sum DESC
LIMIT 10;