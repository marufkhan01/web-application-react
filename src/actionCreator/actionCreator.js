import {GET_DATA}  from "../actionType/actionType.js";
import {normalize,schema} from 'normalizr';
import axios from "axios";
const entrySchema = new schema.Entity('entries', {},{
  idAttribute: '_id'
});
const getData = () =>{
 const request = axios.all([
    axios.get("//content.k-mit.se/api/collections/get/sections?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/Kunder?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/OmOss?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/Filosofi?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/Karriar?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/KvalitetOchMiljo?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/posts?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/Kontakt?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/GDPR?token=5b94656b7c63ee6e3e8ffc3d7b7892"),
    axios.get("//content.k-mit.se/api/collections/get/hosting?token=5b94656b7c63ee6e3e8ffc3d7b7892")
  ]).then(axios.spread(function (teknisk, kunder, omOss, filosofi, karriar, kvalitetOchMiljo, posts, kontakt,gdpr,hosting) {
    var KmitTeknisk = teknisk.data.entries || [];
    var KmitKunder = kunder.data.entries || [];
    var KmitOmOss = omOss.data.entries || [];
    var KmitFilosofi = filosofi.data.entries || [];
    var KmitKarriar = karriar.data.entries || [];
    var KmitKvalitetOchMiljo= kvalitetOchMiljo.data.entries || [];
    var KmitPosts = posts.data.entries || [];
    var KmitKontakt = kontakt.data.entries || [];
    var KmitGdpr = gdpr.data.entries || [];
    var KmitHosting = hosting.data.entries || [];
        KmitPosts.reverse()
    const KmitPost = {
            title: "Aktuellt",
            title_slug: "Aktuellt",
            _id: "5a3303b9cf624doc1642427523hardcoded",
            content : KmitPosts
    }
    var fullDetails = KmitTeknisk.concat(KmitKunder, KmitGdpr,KmitOmOss, KmitFilosofi, KmitKarriar, KmitKvalitetOchMiljo,KmitHosting, KmitPost,KmitKontakt);
    if(fullDetails.status === 200) {
      return normalize(fullDetails, {entries:[entrySchema]});
    }
    return fullDetails;
  })).catch(error => console.log(error));
  console.log(request);
  return {
    type:GET_DATA,
    payload:request
  };
};
export {getData};
