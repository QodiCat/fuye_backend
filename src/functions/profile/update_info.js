async function updateUser(id, username, phone, password, gender, email) {
    const url = 'http://115.25.46.212/user/update';
    const requestBody = {
        id: id,
        username: username,
        phone: phone,
        password: password,
        gender: gender,
        email: email
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${authToken}` // 确保包含授权信息
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
updateUser('5782dd75-0869-4e3f-bcbb-589feec44b99', 'newusername', '18743967836', 'newpassword', 0, 'newemail@example.com');