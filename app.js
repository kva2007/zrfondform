import axios from 'axios';

export default async function({req, res, log, error}) {
   // console.log('Received request:', req);
    console.log('Request headers:', req.headers);
    console.log('Request body:', req.body);
    console.log('Request payload:', req.payload);

    let formData;
    res.json({ success: true, message: 'finish' });
/*
    try {
        if (req.body) {
            formData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } else if (req.payload) {
            formData = typeof req.payload === 'string' ? JSON.parse(req.payload) : req.payload;
        } else if (req.headers['content-type'] === 'application/json') {
            formData = JSON.parse(await new Promise(resolve => {
                let body = '';
                req.on('data', chunk => body += chunk.toString());
                req.on('end', () => resolve(body));
            }));
        } else {
            throw new Error('No data received or unsupported content type');
        }

        console.log('Parsed formData:', formData);

        const tableId = 'mvyihi8x26nven2';
        const NOCODB_API = process.env.NOCODB_API;

        const response = await axios.post('https://app.nocodb.com/api/v2/tables/' + tableId + '/records', formData, {
            headers: {
                'xc-token': NOCODB_API
            }
        });

        console.log('NocoDB response:', response.data);

        res.json({ success: true, message: 'Данные успешно записаны в NocoDB' });
    } catch (error) {
        console.error('Ошибка:', error.message);
        res.json({ success: false, message: 'Ошибка при обработке или записи данных: ' + error.message });
    }

 */
}