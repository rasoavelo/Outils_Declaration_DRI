var express = require('express');
var router = express.Router();
const {AchatImmobilier } = require('../models');



/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
      const afficherlisteAI = await AchatImmobilier.findAll()

      //return res.json(afficherlisteAI)
      res.render('liste_achat_immobilier', {listes:afficherlisteAI});
  } catch(err){
    console.log(err)
    return res.status(500).json({ error: 'quelque choses ne va pas'})
  }
 
});

router.get('/ajout', async function(req, res, next) {
 res.render('ajout_achat_immobilier');
});

router.post('/ajout', async function(req, res, next) {
    const { nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisonSocial, adresse, ville, exProvince, pays, natureAchatImm, comptabilisees, versees } = req.body
     
    try{
        const nouveau_achat_immobilier = await AchatImmobilier.create({ nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisonSocial, adresse, ville, exProvince, pays, natureAchatImm, comptabilisees, versees })

       // return res.json(nouveau_achat_immobilier)
       res.redirect('/achat_immobilier/ajout');
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  });
// router.delete('/supprimer/:id' , async function(req, res, next) {
//     const id = req.params.id
//     try {
//       const supprimerAI = await AchatImmobilier.findOne({ where: { id } })
        
//       await supprimerAI.destroy()

//       return res.json({ message: 'Achat Immmobilier'})
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Quelque chose ne va pas'})
//     }
// });
router.get('/supprimer/:id' , async function(req, res, next) {
  const id = req.params.id
    try {
      const supprimerAI = await AchatImmobilier.findOne({ where: { id } })
        
      await supprimerAI.destroy()

      //return res.json({ message: 'Achat Immmobilier'})
      res.redirect('/achat_immobilier/');
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Quelque chose ne va pas'})
    }

});

// router.put('/modifier/:id', async function(req,res){
//   const id = req.params.id
//   const { nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisonSocial, adresse, ville, exProvince, pays, natureAchatImm, comptabilisees, versees } = req.body
//    try {
//      const modifierAI = await AchatImmobilier.findOne({ where: { id}})
        
//      modifierAI.nif = nif
//      modifierAI.numStat = numStat
//      modifierAI.dateCin = dateCin
//      modifierAI.lieuDeliv = lieuDeliv
//      modifierAI.nature = nature
//      modifierAI.reference = reference
//      modifierAI.raisonSocial = raisonSocial
//      modifierAI.adresse = adresse
//      modifierAI.ville = ville
//      modifierAI.exProvince = exProvince
//      modifierAI.pays = pays
//      modifierAI. natureAchatImm = natureAchatImm
//      modifierAI.comptabilisees = comptabilisees
//      modifierAI.versees = versees

//      await modifierAI.save()

//      return res.json(modifierAI)
//    } catch (err) {
//      console.log(err)
//    }
// });
router.get('/modifier/:id', async function(req, res, next) {
  const id = req.params.id
  try {
         const modifierAI = await AchatImmobilier.findOne({ where: { id}})
         res.render('modifier_achat_immobilier', {modifierA:modifierAI});
       } catch (err) {
         console.log(err)
       }

 });

 router.post('/modifier', async function(req,res, next) {
  const {id, nif, numStat, cin, dateCin, lieuDeliv, nature, reference, raisonSocial, adresse, ville, exProvince, pays, natureAchatImm, comptabilisees, versees } = req.body
     try {
       const modifierAI = await AchatImmobilier.findOne({ where: { id}})
          
       modifierAI.nif = nif
       modifierAI.numStat = numStat
       modifierAI.dateCin = dateCin
       modifierAI.lieuDeliv = lieuDeliv
       modifierAI.nature = nature
       modifierAI.reference = reference
       modifierAI.raisonSocial = raisonSocial
       modifierAI.adresse = adresse
       modifierAI.ville = ville
       modifierAI.exProvince = exProvince
       modifierAI.pays = pays
       modifierAI. natureAchatImm = natureAchatImm
       modifierAI.comptabilisees = comptabilisees
       modifierAI.versees = versees
  
       await modifierAI.save()
      
      //  return res.json(modifierAI)
      res.redirect('/achat_immobilier/modifier/'+id);
     } catch (err) {
       console.log(err)
     }
   
 });

module.exports = router;
