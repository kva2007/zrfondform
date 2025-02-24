import axios from 'axios';
const tableIdContact = 'mvyihi8x26nven2';
const NOCODB_API = process.env.NOCODB_API;

export default async function({req, res, log, error}) {
    //CORS
    if (req.method === 'OPTIONS') {
        return res.send('', 200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        })
    }
    const path = req.path || '/';
    const method = req.method;

    switch (path){
        case '/test':
            if (method === 'GET'){
                return res.json({ success: true, message: 'Test OK' },200,{
                    'Access-Control-Allow-Origin': '*',
                });
            }else{
                return res.json({ error: 'Метод не поддерживается' },405,{
                    'Access-Control-Allow-Origin': '*',
                });
            }
            break;
        case '/contact':
            if (method === 'POST'){
                const formData = req.body;
                try {
                    const response = await axios.post('https://app.nocodb.com/api/v2/tables/' + tableIdContact + '/records', formData, {
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
            }else{
                return res.json({ error: 'Метод не поддерживается' },405,{
                    'Access-Control-Allow-Origin': '*',
                });
            }

            default:
                return res.json({ error: 'Путь не найден' }, 404,{
                    'Access-Control-Allow-Origin': '*',
                });
    }

}