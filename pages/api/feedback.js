function handler(req, res) {
    //execute any server side code, will never be in frontend part
    res.status(200).json({
        message: 'This works',
    });
}

export default handler;
