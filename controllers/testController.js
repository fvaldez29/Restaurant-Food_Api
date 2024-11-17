export const testUserController = (req, res) => {
    try {
        res.status(200).send('<h1>test users data</h1>')
    } catch (error) {
        console.error('Error in Test API', error)
    }
}

