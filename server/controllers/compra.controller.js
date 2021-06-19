const { Compra } = require("../models/compra.model");
const { User } = require("../models/user.model");

module.exports.createCompra = async (req, res) => {
  try {
    const { moneda, monto, idUser } = req.body;
    const compra = await Compra.create({ moneda, monto });
    const user = await User.findById(idUser).exec();
    user.compras.push(compra);
    await user.save();
    res.json(compra);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports.getComprasByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("compras").exec();
    res.json(user.compras);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports.deleteCompra= (request, response) => {
    Compra.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}