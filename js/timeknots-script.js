var delveTimeline =[
{name:"Roaring Twenties", 	date:"1920"},
{name:"Motown", date: "1960"},
{name:"Present", date:"2015"}
];
TimeKnots.draw("#timeline1", delveTimeline, {dateFormat: "%Y", color: "#696", showLabels: true, labelFormat: "%Y"});

var nonDatedata = [
 {"value": 1920, "name": "Roaring Twenties" },
 {"value": 1960, "name": "Motown" },
 {"value": 2015, "name": "Present" }
];
TimeKnots.draw("#timelineNonDate", nonDatedata, {dateDimension:false, color: "teal", width:500, showLabels: true, labelFormat: "%Y"});