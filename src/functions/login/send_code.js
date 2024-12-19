async function sendLoginCode(phone) {
    const url = `http://115.25.46.212/user/login_code?phone=${encodeURIComponent(phone)}`;

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

export default sendLoginCode;

// 示例调用
// sendLoginCode('18743967836');