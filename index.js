<!DOCTYPE html>
<html>
<head>
  <title>On-Demand Equipment</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: Arial; padding: 20px; background:#f5f5f5 }
    h1 { color:#333 }
    button { padding:10px; margin-top:10px }
    pre { background:#000; color:#0f0; padding:10px }
  </style>
</head>
<body>

<h1>🚜 On-Demand Equipment Booking</h1>

<button onclick="load()">Load Equipment</button>
<pre id="out">Click button</pre>

<script>
function load(){
 fetch("https://on-demand-equipment.onrender.com/equipment")
 .then(r=>r.json())
 .then(d=>document.getElementById("out").textContent=
   JSON.stringify(d,null,2)
 )
}
</script>

</body>
</html>
