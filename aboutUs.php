<?php include('server.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title>About Us</title>
<link href="../CSS/Stylesheet.css" rel="stylesheet" type="text/css">
</head>

<body>

<div class = "name">
<h1><a href="index.html">COVID-19 Info</a></h1>
</div>


<div class = "navbar">
<div class="navbar-centered">
  <a href="index.html">Home</a>
  <a href="covid19.html">COVID-19</a>
  <a href="ukCases.html">UK Cases</a>
  <a href="worldCases.html">World Cases</a>
  <a class = "active" href="aboutUs.html">About Us</a>
</div>
</div>

<div class="parallax"></div>

<div class="aboutUsContent">
  <h2>What we do</h2>
  <p>We are here to provide you visual representations of the extent COVID-19 has affected everyone. We want
  everyone to easily access any type of information they would like and understand it well. Our aim is to 
  help you understand and therefore help make a difference and reduce this virus that is taking over our lives.
  </p>
</div>
    


<div class = "aboutUsContent">
  <h2>Who we are</h2>
  <p>We are 6 BSc Honour Computing students from Glasgow Caledonian University who have been working on a 
  project demonstrating data visualisation through API's in the form of a COVID informatic website.
  <br>
  </p>
</div>

<table>
  <th colspan="2">Meet the team</th>
  <tr>
    <td><img src="../Images/mb.jpg" alt="Matthew Blacker"></td>
    <td class="bio">Matthew Blacker. Matthew helped design wireframes and sample screens for the website.</td>
  </tr>
  <tr>
    <td class="bio">Iain Lang. Iain helped research and implement APIs to allow us to display live data.</td>
    <td><img src="../Images/il.jpg" alt="Iain Lang"></td>
  <tr>
    <td><img src="../Images/kl.jpg" alt="Karolina Lelito"></td>
    <td class="bio">Karolina Lelito. Karolinas' main focus was to create the HTML and CSS for the website adhereing to the design set out in the wireframes and sample screens.</td>
  </tr>
  <tr>
    <td class="bio">Jack Weir. Jack also researched and helped implement API functionality to the website.</td>
    <td><img src="../Images/jw.jpg" alt="Jack Weir"></td>
  </tr>
  <tr>
    <td><img src="../Images/bn.jpg" alt="Blair Nimmo"></td>
    <td class="bio">Blair Nimmo. Blair designed the original diagrams for the website, as well as project management aspects such as Gantt charts.</td>
  </tr>
  <tr>
    <td class="bio">Svend Kristensen. Svend was the man behind researching and implementing the map API found on the website.</td>
    <td><img src="../Images/sk.jpg" alt="svendkristnsen"></td>
  </tr>
</table>
  
  <h2 align="center">Get in touch</h2>
  <form method="post" action="aboutUs.php">
    <?php include('errors.php'); ?>
    <div class="inputs">
      <label>Name</label>
      <input type="text" name="name">

      <label>Email address</label>
      <input type="text" name="email">

      <label>Query</label>
      <textarea class="querybox" type="text" name="query"></textarea> 

      <button type="submit" name="sendQuery" class="qbtn"><i class="fa fa-fw fa-paper-plane"></i>Submit Query</button>
    </div>
  </form>





</body>
</html>