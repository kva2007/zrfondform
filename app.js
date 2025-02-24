import axios from 'axios';

export default async function({req, res, log, error}) {
    if (req.method === 'OPTIONS') {
        return res.send('', 200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        })
    }

    log(req.path);

    if (req.path === '/test'){
        return res.json({ success: true, message: 'Test OK' },200,{
            'Access-Control-Allow-Origin': '*',
        });
    }

    const tableId = 'mvyihi8x26nven2';
    const NOCODB_API = process.env.NOCODB_API;
    const formData = req.body;

    try {
        const response = await axios.post('https://app.nocodb.com/api/v2/tables/' + tableId + '/records', formData, {
            headers: {
                'xc-token': NOCODB_API
            }
        });


        return res.json({ success: true, message: 'Данные успешно записаны в NocoDB' },200,{
            'Access-Control-Allow-Origin': '*',
        });
    } catch (err) {
        error('Ошибка:', err.message);
        return res.json({ success: false, message: 'Ошибка при обработке или записи данных: ' + err.message },200,{
            'Access-Control-Allow-Origin': '*',
        });
    }
}