var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_1.addFeatures(features_District_1);
var lyr_District_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_1, 
                style: style_District_1,
                interactive: false,
                title: '<img src="styles/legend/District_1.png" /> District'
            });
var format_Forest_2 = new ol.format.GeoJSON();
var features_Forest_2 = format_Forest_2.readFeatures(json_Forest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_2.addFeatures(features_Forest_2);
var lyr_Forest_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Forest_2, 
                style: style_Forest_2,
                interactive: true,
                title: '<img src="styles/legend/Forest_2.png" /> Forest'
            });
var format_Hambanthota_GND_3 = new ol.format.GeoJSON();
var features_Hambanthota_GND_3 = format_Hambanthota_GND_3.readFeatures(json_Hambanthota_GND_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hambanthota_GND_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hambanthota_GND_3.addFeatures(features_Hambanthota_GND_3);
var lyr_Hambanthota_GND_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hambanthota_GND_3, 
                style: style_Hambanthota_GND_3,
                interactive: false,
    title: 'Hambanthota_GND<br />\
    <img src="styles/legend/Hambanthota_GND_3_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Hambanthota_GND_3_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Hambanthota_GND_3_2.png" /> 2 - 2.5<br />\
    <img src="styles/legend/Hambanthota_GND_3_3.png" /> 2.5 - 3<br />\
    <img src="styles/legend/Hambanthota_GND_3_4.png" /> 3 - 4<br />\
    <img src="styles/legend/Hambanthota_GND_3_5.png" /> 4 - 4<br />\
    <img src="styles/legend/Hambanthota_GND_3_6.png" /> 4 - 5<br />\
    <img src="styles/legend/Hambanthota_GND_3_7.png" /> 5 - 6<br />\
    <img src="styles/legend/Hambanthota_GND_3_8.png" /> 6 - 9<br />\
    <img src="styles/legend/Hambanthota_GND_3_9.png" /> 9 - 103<br />'
        });
var format_Hambanthota_Tanks_4 = new ol.format.GeoJSON();
var features_Hambanthota_Tanks_4 = format_Hambanthota_Tanks_4.readFeatures(json_Hambanthota_Tanks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hambanthota_Tanks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hambanthota_Tanks_4.addFeatures(features_Hambanthota_Tanks_4);
var lyr_Hambanthota_Tanks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hambanthota_Tanks_4, 
                style: style_Hambanthota_Tanks_4,
                interactive: false,
                title: '<img src="styles/legend/Hambanthota_Tanks_4.png" /> Hambanthota_Tanks'
            });
var format_Wildlife_hamb_5 = new ol.format.GeoJSON();
var features_Wildlife_hamb_5 = format_Wildlife_hamb_5.readFeatures(json_Wildlife_hamb_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wildlife_hamb_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wildlife_hamb_5.addFeatures(features_Wildlife_hamb_5);
var lyr_Wildlife_hamb_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wildlife_hamb_5, 
                style: style_Wildlife_hamb_5,
                interactive: true,
                title: '<img src="styles/legend/Wildlife_hamb_5.png" /> Wildlife_hamb'
            });
var format_Hambanthota_Town_Villages_6 = new ol.format.GeoJSON();
var features_Hambanthota_Town_Villages_6 = format_Hambanthota_Town_Villages_6.readFeatures(json_Hambanthota_Town_Villages_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hambanthota_Town_Villages_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hambanthota_Town_Villages_6.addFeatures(features_Hambanthota_Town_Villages_6);cluster_Hambanthota_Town_Villages_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hambanthota_Town_Villages_6
});
var lyr_Hambanthota_Town_Villages_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Hambanthota_Town_Villages_6, 
                style: style_Hambanthota_Town_Villages_6,
                interactive: false,
                title: '<img src="styles/legend/Hambanthota_Town_Villages_6.png" /> Hambanthota_Town_Villages'
            });
var format_Forest_Reserves_in_SriLanka_7 = new ol.format.GeoJSON();
var features_Forest_Reserves_in_SriLanka_7 = format_Forest_Reserves_in_SriLanka_7.readFeatures(json_Forest_Reserves_in_SriLanka_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_Reserves_in_SriLanka_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_Reserves_in_SriLanka_7.addFeatures(features_Forest_Reserves_in_SriLanka_7);
var lyr_Forest_Reserves_in_SriLanka_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Forest_Reserves_in_SriLanka_7, 
                style: style_Forest_Reserves_in_SriLanka_7,
                interactive: true,
                title: '<img src="styles/legend/Forest_Reserves_in_SriLanka_7.png" /> Forest_Reserves_in_SriLanka'
            });
var format_EcoSensitive_Locations_Hambanthota_8 = new ol.format.GeoJSON();
var features_EcoSensitive_Locations_Hambanthota_8 = format_EcoSensitive_Locations_Hambanthota_8.readFeatures(json_EcoSensitive_Locations_Hambanthota_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EcoSensitive_Locations_Hambanthota_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcoSensitive_Locations_Hambanthota_8.addFeatures(features_EcoSensitive_Locations_Hambanthota_8);
var lyr_EcoSensitive_Locations_Hambanthota_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EcoSensitive_Locations_Hambanthota_8, 
                style: style_EcoSensitive_Locations_Hambanthota_8,
                interactive: true,
                title: '<img src="styles/legend/EcoSensitive_Locations_Hambanthota_8.png" /> Eco-Sensitive_Locations_Hambanthota'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_District_1.setVisible(true);lyr_Forest_2.setVisible(true);lyr_Hambanthota_GND_3.setVisible(true);lyr_Hambanthota_Tanks_4.setVisible(true);lyr_Wildlife_hamb_5.setVisible(true);lyr_Hambanthota_Town_Villages_6.setVisible(true);lyr_Forest_Reserves_in_SriLanka_7.setVisible(true);lyr_EcoSensitive_Locations_Hambanthota_8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_District_1,lyr_Forest_2,lyr_Hambanthota_GND_3,lyr_Hambanthota_Tanks_4,lyr_Wildlife_hamb_5,lyr_Hambanthota_Town_Villages_6,lyr_Forest_Reserves_in_SriLanka_7,lyr_EcoSensitive_Locations_Hambanthota_8];
lyr_District_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Pop2012': 'Pop2012', });
lyr_Forest_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', });
lyr_Hambanthota_GND_3.set('fieldAliases', {'GND_N': 'GND_N', 'P_DENSITY': 'P_DENSITY', });
lyr_Hambanthota_Tanks_4.set('fieldAliases', {'NAME': 'NAME', });
lyr_Wildlife_hamb_5.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'TYPE': 'TYPE', 'NAME': 'NAME', 'EXTENT__HA': 'EXTENT__HA', });
lyr_Hambanthota_Town_Villages_6.set('fieldAliases', {'NAME': 'NAME', });
lyr_Forest_Reserves_in_SriLanka_7.set('fieldAliases', {'Name': 'Name', 'Lon': 'Lon', 'Lat': 'Lat', 'Path': 'Path', 'RelPath': 'RelPath', 'URL': 'URL', });
lyr_EcoSensitive_Locations_Hambanthota_8.set('fieldAliases', {'Name': 'Name', 'Lon': 'Lon', 'Lat': 'Lat', 'Path': 'Path', 'RelPath': 'RelPath', 'URL': 'URL', });
lyr_District_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Pop2012': 'Range', });
lyr_Forest_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Hambanthota_GND_3.set('fieldImages', {'GND_N': 'TextEdit', 'P_DENSITY': 'Range', });
lyr_Hambanthota_Tanks_4.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Wildlife_hamb_5.set('fieldImages', {'PERIMETER': 'TextEdit', 'TYPE': 'TextEdit', 'NAME': 'TextEdit', 'EXTENT__HA': 'TextEdit', });
lyr_Hambanthota_Town_Villages_6.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Forest_Reserves_in_SriLanka_7.set('fieldImages', {'Name': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'URL': 'TextEdit', });
lyr_EcoSensitive_Locations_Hambanthota_8.set('fieldImages', {'Name': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'URL': 'TextEdit', });
lyr_District_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'Area': 'no label', 'District': 'no label', 'Pop2012': 'no label', });
lyr_Forest_2.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'NAME': 'inline label', });
lyr_Hambanthota_GND_3.set('fieldLabels', {'GND_N': 'no label', 'P_DENSITY': 'no label', });
lyr_Hambanthota_Tanks_4.set('fieldLabels', {'NAME': 'no label', });
lyr_Wildlife_hamb_5.set('fieldLabels', {'PERIMETER': 'inline label', 'TYPE': 'inline label', 'NAME': 'inline label', 'EXTENT__HA': 'inline label', });
lyr_Hambanthota_Town_Villages_6.set('fieldLabels', {'NAME': 'inline label', });
lyr_Forest_Reserves_in_SriLanka_7.set('fieldLabels', {'Name': 'inline label', 'Lon': 'inline label', 'Lat': 'inline label', 'Path': 'inline label', 'RelPath': 'inline label', 'URL': 'inline label', });
lyr_EcoSensitive_Locations_Hambanthota_8.set('fieldLabels', {'Name': 'inline label', 'Lon': 'inline label', 'Lat': 'inline label', 'Path': 'inline label', 'RelPath': 'inline label', 'URL': 'inline label', });
lyr_EcoSensitive_Locations_Hambanthota_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});