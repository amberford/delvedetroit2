var delveTimeline =[
{name:"Roaring Twenties", 	date:"1920"},
{name:"Motown", date: "1960"},
{name:"Present", date:"2015"}
];
TimeKnots.draw("#timeline1", delveTimeline, {dateFormat: "%Y", color: "#696", showLabels: true, labelFormat: "%Y"});