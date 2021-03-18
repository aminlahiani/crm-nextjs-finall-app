const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProduitSchema = new Schema(
  {
    
    nom: {
      type: String,
    },
    prix: {
        type: String,
      },
    pfamille: {type: mongoose.Types.ObjectId, ref: "Pfamille"}
  },
  {
    timestamps: true,
    // toJSON: {
    //     transform(doc,ret) {
    //         delete ret.password
    //     }
    // }
  }
);

const Produit = mongoose.model("Produit", ProduitSchema);

module.exports = Produit;
