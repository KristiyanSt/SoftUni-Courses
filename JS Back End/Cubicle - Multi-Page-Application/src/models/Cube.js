const { Schema, model, Types } = require('mongoose');

const cubeSchema = new Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    difficultyLevel: { type: Number, required: true },
    description: { type: String, required: true },
    accessories: { type: [Types.ObjectId], default: [], ref: 'Accessory' },
    owner: { type: Types.ObjectId, ref: 'User', required: true }
});

const Cube = model('Cube', cubeSchema);

// cubeSchema.index({ name: 1 }, { difficultyLevel: 1 }, {
//     unique: true,
//     collation: {
//         locale: 'en',
//         strength: 2
//     }
// })
module.exports = Cube; 