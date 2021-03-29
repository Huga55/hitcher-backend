const Chat = require("./../models/chat.js");

exports.get = function(request, response) {
    if(!request.params) return response.status(400).send({success: false, error: "Error. Data not found"});

    const chatId = request.params.id;
    const { _id } = request.dataUser;
    
    Chat.findOne({_id, chatId}, function(error, result) {
        if(error) return response.status(400).send({success: false, error});
    });
}