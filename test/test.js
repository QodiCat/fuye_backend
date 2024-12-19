async function sendRegisterCode(phone) {
    const url = `http://115.25.46.212/user/register_code?phone=${encodeURIComponent(phone)}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Successful Response:', data);
        } else if (response.status === 422) {
            const errorData = await response.json();
            console.error('Validation Error:', errorData);
        } else {
            console.error('Unexpected Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}

// 示例调用
sendRegisterCode('18743967836');