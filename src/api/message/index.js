module.exports = async function (context, req) {
    context.res.json({
        // return msg to front end
        text: "Hello from the API"
    });
};