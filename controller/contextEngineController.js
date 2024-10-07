const ContextEngineModel = require('./../model/contextEngineModel')

const getAllContextEngine = async (req, res) => {
    try {
        const successfulResult = await ContextEngineModel.find({}).exec();
        res.status(200).send({ message: "Success", statusCode: 200, data: successfulResult })
    } catch (error) {
        res.status(400).send({ message: "Error accured", statusCode: 400., error: error });
    }
}

const getContextEngine = async (req, res) => {
    const id = req.params.id
    try {
        if (!id) {
            res.status(400).send({ message: "Error: ID is required", statusCode: 400 });
        }
        const successfulResult = await ContextEngineModel.find({ _id: id }).exec();
        res.status(200).send({ message: "Successfully created", statusCode: 200, data: successfulResult })
    } catch (error) {
        res.status(400).send({ message: "Error accured", statusCode: 400., error: error });
    }
}


const addContextEngine = async (req, res) => {
    const { name, autoSync, goal, nextSync } = req.body || {}
    try {
        const contextEngine = new ContextEngineModel({ name, autoSync: !!autoSync, goal, nextSync });
        const successfulResult = await contextEngine.save();
        res.status(201).send({ message: "Successfully created.", statusCode: 201, data: successfulResult })
    } catch (error) {
        res.status(400).send({ message: "Error accured", statusCode: 400., error: error });
    }
}

const editContextEngine = async (req, res) => {
    const id = req?.params?.id

    try {
        if (!id) {
            res.status(400).send({ message: "Error: ID is required", statusCode: 400 });
        }
        const updatedRecord = await ContextEngineModel.findByIdAndUpdate(
            id,
            req.body || {},
            { new: true, runValidators: true }
        );
        res.status(200).send({ message: "Successfully updated", statusCode: 200, data: updatedRecord })
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "Error accured", statusCode: 400., error: error });
    }
}
module.exports = {
    getAllContextEngine,
    getContextEngine,
    addContextEngine,
    editContextEngine
}