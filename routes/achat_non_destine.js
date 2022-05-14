var express = require('express');
var router = express.Router();
const {AchatNonDestine } = require('../models');



/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        const afficherlisteAND = await AchatNonDestine .findAll()
        const NombreAND = await AchatNonDestine.count()
  
        res.render('liste_achat_non_destine', {listes:afficherlisteAND,nbAND:NombreAND});
    } catch(err){
      console.log(err)
      return res.status(500).json({ error: 'quelque choses ne va pas'})
    }
});

router.get('/ajoutAND', async function(req, res, next) {
  res.render('ajout_achat_non_destine');
 });


router.post('/ajoutAND', async function(req, res, next) {
    const { nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisoSocial, adresse, ville, exProv, pays, naturAchatConsommes, comptabilisees, versees } = req.body
     
    try{
        const nouveau_achat_non_destines = await AchatNonDestine.create({nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisoSocial, adresse, ville, exProv, pays, naturAchatConsommes, comptabilisees, versees })

       res.redirect('/achat_non_destine/ajoutAND');
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  });

  router.get('/supprimerAND/:id' , async function(req, res, next) {
    const id = req.params.id
      try {
        const supprimerAND = await AchatNonDestine .findOne({ where: { id } })
          
        await supprimerAND.destroy()
  
        res.redirect('/achat_non_destine/');
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Quelque chose ne va pas'})
      }
  
  });

  router.get('/modifierAND/:id', async function(req, res, next) {
    const id = req.params.id
    try {
           const modifierANDestine = await AchatNonDestine .findOne({ where: { id}})
           res.render('modifier_achat_non_destine', {modifierA:modifierANDestine});
         } catch (err) {
           console.log(err)
         }
  
   });

   router.post('/modifierAND', async function(req,res, next) {
    const {id, nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisoSocial, adresse, ville, exProv, pays, naturAchatConsommes, comptabilisees, versees } = req.body
       try {
         const modifierANDestine = await AchatNonDestine .findOne({ where: { id}})
            
         modifierANDestine.nif = nif
         modifierANDestine.numStat = numStat
         modifierANDestine.dateCin = dateCin
         modifierANDestine.lieuDeliv = lieuDeliv
         modifierANDestine.nature = nature
         modifierANDestine.reference = reference
         modifierANDestine.raisoSocial = raisoSocial
         modifierANDestine.adresse = adresse
         modifierANDestine.ville = ville
         modifierANDestine.exProv = exProv
         modifierANDestine.pays = pays
         modifierANDestine.natureAchatConsommes= naturAchatConsommes
         modifierANDestine.comptabilisees = comptabilisees
         modifierANDestine.versees = versees
    
         await modifierANDestine.save()
        
        //  return res.json(modifierAI)
        res.redirect('/achat_non_destine/modifierAND/'+id);
       } catch (err) {
         console.log(err)
       }
     
   });

module.exports = router;
