export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/yonko-ishan');
    return response.json();
};