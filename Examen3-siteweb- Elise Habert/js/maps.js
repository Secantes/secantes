function ()
{
    var setting = {"height":531,"width":1139,"zoom":13,"queryString":"McGill University, Rue Sherbrooke Ouest, Montréal, QC, Canada","place_id":"ChIJNZYPUUYayUwRdK6kAJLa5N0","satellite":false,"centerCoord":[45.5013427932781,-73.57247394068665],"cid":"0xdde4da9200a4ae74","lang":"fr","cityUrl":"/canada/montreal","cityAnchorText":"Carte de Montréal, Québec, Canada","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"303780"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=303780';
    s.async = true;
    s.onload = function (e) {
    window.OneMap.initMap(setting)
};
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
}
