export default (req,res) => {
    return res.status(200).json({
        success: true,
        message: 'auth'
    })
}