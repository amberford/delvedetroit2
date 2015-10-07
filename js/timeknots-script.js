var delveTimeline =[
{name:"Roaring Twenties", 	date:"1920"},
{name:"Motown", date: "1960"},
{name:"Present", date:"2015"}
];

var nonDatedata = [
 {"value": 1920, "name": "Roaring Twenties" },
 {"value": 1960, "name": "Motown" },
 {"value": 2015, "name": "Present" }
];
TimeKnots.draw("#timelineNonDate", nonDatedata, {dateDimension:false, color: "#ccc", width:700, showLabels: true, labelFormat: "%Y"});