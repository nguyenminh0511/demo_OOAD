const SVModel = require("../models/serviceProvider.js");
const path = require("path");

const getAllServiceProvider = async (req, res, next) => {
    try {
        let data = await SVModel.find();
        // res.json(data);
        res.render(path.join(__dirname, "../views/List/index.ejs"), {
            ServiceProviders: data
        });
    } catch(err) {
        console.log(err);
        res.status(500).json("Server error!");
    }
}

const getServiceProviderById = async (req, res, next) => {
    try {
        let id = req.params.id;
        // console.log(id);
        let data = await SVModel.findById(id);
        res.render(path.join(__dirname, "../views/SPInfo/index.ejs"), {
            data: data
        })
    } catch(err) {
        console.log(err);
        res.status(500).json("Server error!");
    }
}

const updateServiceProvider = async (req, res, next) => {
    try {
        let id = req.params.id;
        console.log(req.body);
        let updateData = {
            name: req.body.name,
            location: req.body.location,
            username: req.body.username,
            phone: req.body.phone,
            email: req.body.email
        }
        console.log(updateData);
        let response = await SVModel.findOneAndUpdate({_id: id}, updateData);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.status(500).json("Server error!");
    }
}

const addServiceProvider = async (req, res, next) => {
    try {
        let ServiceProviderInfo = {
            name: req.body.name,
            location: req.body.location,
            username: req.body.username,
            phone: req.body.phone,
            email: req.body.email
        }
        let newSP = await SVModel.create(ServiceProviderInfo);
        res.json(newSP);
    } catch(err) {
        console.log(err);
        res.status(500).json("Server error!");
    }
}

module.exports = {
    getAllServiceProvider,
    getServiceProviderById,
    updateServiceProvider,
    addServiceProvider
}