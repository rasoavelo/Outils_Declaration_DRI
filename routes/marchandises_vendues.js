var express = require('express');
var router = express.Router();
const {MarchadisesVendues } = require('../models');



/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
      const afficherlisteMV = await MarchadisesVendues.findAll()

      res.render('liste_marchandises_vendues', {listes:afficherlisteMV});
  } catch(err){
    console.log(err)
    return res.status(500).json({ error: 'quelque choses ne va pas'})
  }
 
});

router.get('/ajoutMV', async function(req, res, next) {
 res.render('ajout_marchandises_vendues');
});

router.post('/ajoutMV', async function(req, res, next) {
    const { nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisonSocial, adresse, pays, ville, exProv, modePaiem, natureMarch, montantHorsTva, tva } = req.body
     
    try{
        const nouveau_marchandises_vendues = await MarchadisesVendues.create({ nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisonSocial, adresse, pays, ville, exProv, modePaiem, natureMarch, montantHorsTva, tva  })

       res.redirect('/marchandises_vendues/ajoutMV');
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  });

router.get('/supprimerMV/:id' , async function(req, res, next) {
  const id = req.params.id
    try {
      const supprimerMV = await MarchadisesVendues.findOne({ where: { id } })
        
      await supprimerMV.destroy()

      res.redirect('/marchandises_vendues/');
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Quelque chose ne va pas'})
    }

});


router.get('/modifierMV/:id', async function(req, res, next) {
  const id = req.params.id
  try {
         const modifiermv = await MarchadisesVendues.findOne({ where: { id}})
         res.render('modifier_marchandises_vendues', {modifierM:modifiermv});
       } catch (err) {
         console.log(err)
       }

 });

 router.post('/modifierMV', async function(req,res, next) {
  const {id, nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisonSocial, adresse, pays, ville, exProv, modePaiem, natureMarch, montantHorsTva, tva  } = req.body
     try {
       const modifiermv = await MarchadisesVendues.findOne({ where: { id}})
          
       modifiermv.nif = nif
       modifiermv.numStat = numStat
       modifiermv.cin = cin
       modifiermv.dateCin = dateCin
       modifiermv.lieuDeliv = lieuDeliv
       modifiermv.nature = nature
       modifiermv.reference = reference
       modifiermv.raisonSocial = raisonSocial
       modifiermv.adresse = adresse
       modifiermv.pays = pays
       modifiermv.ville = ville
       modifiermv.exProv = exProv
       modifiermv.modePaiem = modePaiem
       modifiermv.montantHorsTva= montantHorsTva
       modifiermv.tva = tva
  
       await modifiermv.save()
      
      res.redirect('/marchandises_vendues/modifierMV/'+id);
     } catch (err) {
       console.log(err)
     }
   
 });

module.exports = router;
