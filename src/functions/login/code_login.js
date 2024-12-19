async function codeLogin(phone, code) {
    const url = 'http://115.25.46.212/user/code_login';
    const requestBody = {
        phone: phone,
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
            return data;
        } else if (response.status === 422) {
            const errorData = await response.json();
            console.error('Validation Error:', errorData);
            throw new Error('Validation Error');
        } else {
            console.error('Unexpected Error:', response.status, response.statusText);
            throw new Error('Unexpected Error');
        }
    } catch (error) {
        console.error('Network Error:', error);
        throw error;
    }
}

export default codeLogin;

// 示例调用
// codeLogin('18743967836', '178961');