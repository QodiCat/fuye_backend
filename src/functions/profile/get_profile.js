
async function getProfile() {
    const url = 'http://115.25.46.212/user/profile';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Successful Response:', data);
        } else {
            console.error('Unexpected Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}

// async function passwordLogin(account, password) {
//     const url = 'http://115.25.46.212/user/password_login';
//     const requestBody = {
//         account: account,
//         password: password
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(requestBody)
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log('Successful Response:', data);
//             authToken = data.token; // 确保返回的数据中包含 token
//         } else if (response.status === 422) {
//             const errorData = await response.json();
//             console.error('Validation Error:', errorData);
//         } else {
//             console.error('Unexpected Error:', response.status, response.statusText);
//         }
//     } catch (error) {
//         console.error('Network Error:', error);
//     }
// }

// // 示例调用
// // 用手机号
// passwordLogin('18743967836', 'cyl123').then(() => {
//     // 延迟2秒后调用 getProfile
//     setTimeout(() => {
//         getProfile();
//     }, 2000);
// });