import axios from 'axios';

export default async function(req, res) {
    const formData = JSON.parse(req.payload);
    const tableId = 'mvyihi8x26nven2'; // table contact

    const NOCODB_API = process.env.NOCODB_API;

    // Подключение к NocoDB и вставка данных
    try {
        await axios.post('https://app.nocodb.com/api/v2/tables/' + tableId + '/records', formData, {
            headers: {
                'xc-token': NOCODB_API
            }
        });
        res.json({ success: true, message: 'Данные успешно записаны в NocoDB' });
    } catch (error) {
        console.error('Ошибка при записи в NocoDB:', error);
        res.json({ success: false, message: 'Ошибка при записи данных' });
    }
}