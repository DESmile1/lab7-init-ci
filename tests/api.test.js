const fetchPosts = require('../src/api');

test('Отримання постів зі стороннього API', async () => {
    const posts = await fetchPosts();
    expect(posts).toBeInstanceOf(Array); // Очікуємо масив
    expect(posts.length).toBeGreaterThan(0); // Перевіряємо, що масив не порожній
    expect(posts[0]).toHaveProperty('id'); // Перевіряємо структуру об'єкта
});
