const errorMiddlware = (err, req, res, next) => {
    console.error(err);

    res.status(500).json({ message : err.message || `Internal server error`});
};

export default errorMiddlware;