async function registerUser(username, phone, password, code) {
    const url = 'http://115.25.46.212/user/register';
    const requestBody = {
        username: username,
        phone: phone,
        password: password,
        code: code
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
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
registerUser('Fridemn', '18743967836', 'cyl123', '667886');