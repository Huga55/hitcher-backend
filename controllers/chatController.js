const Chat = require("./../models/chat.js");
const Ticket = require("./../models/ticket");
const moment = require("moment-timezone");

exports.get = function(request, response) {
    if(!request.params) return response.status(400).send({success: false, error: "Error. Data not found"});

    const chatId = request.params.id;
    const { _id } = request.dataUser;
    
    Chat.findOne( {$or:[{creatorId: _id, chatId}, {answererId: _id, chatId}]}, function(error, result) {
        if(error) return response.status(400).send({success: false, error});

        if(!result) {
            return response.status(400).send({success: false, error: "Error. Chat not found."});
        }
        return response.send({success: true, data: result});
    });
}

exports.getAll = function(request, response) {
    const { _id } = request.dataUser;

    Chat.find({creatorId: _id}, function(error, result) {
        if(error) return response.status(400).send({success: false, error});

        if(!result) {
            return response.status(400).send({success: false, error: "Error. Chat not found."});
        }
        return response.send({success: true, data: result});
    })
}

exports.create = function(request, response) {
    if(!request.body) return response.status(400).send({success: false, error: "Error. Data not found"});

    const { ticketId, creatorId } = request.body;
    const { _id } = request.dataUser;
    const dateCreate = moment.tz("Etc/GMT+3").format();

    Ticket.findOne({_id: ticketId, creatorId}, function(error, result) {
        if(error) return response.status(400).send({success: false, error});
        if(!result) {
            response.status(400).send({success: false, error: "Error. Ticket not found"});
        }

        const chat = new Chat({ticketId, creatorId, answererId: _id, dateCreate});
        chat.save(function(error) {
            if(error) return response.status(400).send({success: false, error});
            return response.send({success: true});
        });
    });
}