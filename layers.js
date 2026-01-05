ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3031").setExtent([-117233.785910, -2271710.250434, 2723283.190731, -634280.978378]);
var wms_layers = [];

var lyr_bm3_bed_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bm3_bed<br />\
    <img src="styles/legend/bm3_bed_0_0.png" /> -7409<br />\
    <img src="styles/legend/bm3_bed_0_1.png" /> 4704<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bm3_bed_0.png",
            attributions: ' ',
            projection: 'EPSG:3031',
            alwaysInRange: true,
            imageExtent: [-3333500.000000, -3333500.000000, 3333500.000000, 3333500.000000]
        })
    });
var lyr_bm3_thickness_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bm3_thickness<br />\
    <img src="styles/legend/bm3_thickness_1_0.png" /> 0<br />\
    <img src="styles/legend/bm3_thickness_1_1.png" /> 4682<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bm3_thickness_1.png",
            attributions: ' ',
            projection: 'EPSG:3031',
            alwaysInRange: true,
            imageExtent: [-3333500.000000, -3333500.000000, 3333500.000000, 3333500.000000]
        })
    });
var lyr_bm3_surface_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bm3_surface<br />\
    <img src="styles/legend/bm3_surface_2_0.png" /> 1<br />\
    <img src="styles/legend/bm3_surface_2_1.png" /> 3087<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bm3_surface_2.png",
            attributions: ' ',
            projection: 'EPSG:3031',
            alwaysInRange: true,
            imageExtent: [-3333500.000000, -3333500.000000, 3333500.000000, 3333500.000000]
        })
    });
var format_IceBoundaries_Antarctica_v2_3 = new ol.format.GeoJSON();
var features_IceBoundaries_Antarctica_v2_3 = format_IceBoundaries_Antarctica_v2_3.readFeatures(json_IceBoundaries_Antarctica_v2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3031'});
var jsonSource_IceBoundaries_Antarctica_v2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IceBoundaries_Antarctica_v2_3.addFeatures(features_IceBoundaries_Antarctica_v2_3);
var lyr_IceBoundaries_Antarctica_v2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IceBoundaries_Antarctica_v2_3, 
                style: style_IceBoundaries_Antarctica_v2_3,
                popuplayertitle: 'IceBoundaries_Antarctica_v2',
                interactive: true,
                title: '<img src="styles/legend/IceBoundaries_Antarctica_v2_3.png" /> IceBoundaries_Antarctica_v2'
            });

lyr_bm3_bed_0.setVisible(true);lyr_bm3_thickness_1.setVisible(false);lyr_bm3_surface_2.setVisible(false);lyr_IceBoundaries_Antarctica_v2_3.setVisible(true);
var layersList = [lyr_bm3_bed_0,lyr_bm3_thickness_1,lyr_bm3_surface_2,lyr_IceBoundaries_Antarctica_v2_3];
lyr_IceBoundaries_Antarctica_v2_3.set('fieldAliases', {'NAME': 'NAME', 'Regions': 'Regions', 'Subregions': 'Subregions', 'TYPE': 'TYPE', 'Asso_Shelf': 'Asso_Shelf', });
lyr_IceBoundaries_Antarctica_v2_3.set('fieldImages', {'NAME': 'TextEdit', 'Regions': 'TextEdit', 'Subregions': 'TextEdit', 'TYPE': 'TextEdit', 'Asso_Shelf': 'TextEdit', });
lyr_IceBoundaries_Antarctica_v2_3.set('fieldLabels', {'NAME': 'no label', 'Regions': 'no label', 'Subregions': 'no label', 'TYPE': 'no label', 'Asso_Shelf': 'no label', });
lyr_IceBoundaries_Antarctica_v2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});