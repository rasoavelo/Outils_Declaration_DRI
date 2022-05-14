var express = require('express');
const { sequelize, AchatImmobilier } = require('../models');
var router = express.Router();



/* GET home page. */
router.get('/statDC', function(req, res, next) {
    res.render('statistique_declaration_communication');
});

router.get('/statDC/data', async function(req, res, next) {
  try {
    let rapport_annuel = new Map([['Jan', 0], ['Fév', 0], ['Mar', 0], ['Avr', 0], ['Mai', 0], ['Jun', 0], ['Jul', 0], ['Aou', 0], ['Sep', 0], ['Oct', 0], ['Nov', 0], ['Déc', 0]]);

    let mois = [];
    let nombre_par_mois = [];

    const achat_immobilier = await AchatImmobilier.findAll({
      attributes: [
        [sequelize.fn('month', sequelize.col('createdAt')), 'mois'],
        [sequelize.fn('COUNT', sequelize.col('id')), 'total']
      ],
      where:  sequelize.where(sequelize.fn('year', sequelize.col('createdAt')), new Date().getFullYear()),
      group: 'mois'
    });

    let i = 1;
    for (const [key, value] of rapport_annuel) {
      mois.push(key);
      nombre_par_mois.push(value);

      achat_immobilier.map(element => {
        if (element.dataValues.mois === i)
          nombre_par_mois[i - 1] = parseFloat(element.dataValues.total);
      });

      i++;
    }

    res.json({ achat_immobilier: { mois: mois, nombre_par_mois: nombre_par_mois } });
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'quelque choses ne va pas'})
  }
  
});

module.exports = router;
