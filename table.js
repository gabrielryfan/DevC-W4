//Month Arrays -----------------------------------------------------------
var namaa = ["D'Angelo Russel","Spencer D","Rondae Hollis","Jared Dudley"]
var rotation =["71","60","50","25"]
var orbital = ["30","41","6","10"];
var diameter = ["20", "30", "41","25"];
var climate = ["6","12","10","8"]
//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>#</th><th>Nama Pemain</th><th>Total Poin</th><th>Total Rebound</th><th>Total Asis</th><th>Total Pelanggaran</th></tr>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<4;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + namaa[i] + "</td><td>"+ rotation[i] + "</td><td>"+ orbital[i] + "</td><td>"+ diameter[i] + "</td><td>"+ climate[i] + "</td><td>");
}
//Static content  --------------------------------------------------------
document.write("</table>")